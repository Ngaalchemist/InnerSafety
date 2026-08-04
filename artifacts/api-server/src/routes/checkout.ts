import { Router } from 'express';
import { generateOrderId, getQRUrl, checkPayment } from '../lib/sepay';
import { appendRegistration, markAsPaid } from '../lib/sheets';

const router = Router();

interface PendingOrder {
  name: string;
  phone: string;
  email: string;
  registrationUrl: string;
  createdAt: number;
  sheetsWritten?: boolean;
}

// In-memory order store (persists for the life of the server process)
const pendingOrders = new Map<string, PendingOrder>();

// Purge orders older than 2 hours every 10 minutes
setInterval(() => {
  const cutoff = Date.now() - 2 * 60 * 60 * 1000;
  for (const [id, order] of pendingOrders.entries()) {
    if (order.createdAt < cutoff) pendingOrders.delete(id);
  }
}, 10 * 60 * 1000);

/**
 * POST /api/checkout/create
 * Body: { name, phone, email }
 * Returns: { orderId, qrUrl, amount }
 *
 * Also immediately writes a "Chưa thanh toán" row to Google Sheets.
 */
router.post('/checkout/create', async (req, res) => {
  const { name, phone, email } = req.body as Record<string, string>;

  if (!name?.trim() || !phone?.trim() || !email?.trim()) {
    res.status(400).json({ error: 'name, phone, and email are required' });
    return;
  }

  const orderId = generateOrderId();
  const qrUrl = getQRUrl(orderId);

  // Build the registration URL from the incoming request
  const origin =
    req.headers.origin ??
    req.headers.referer?.replace(/\/$/, '') ??
    `https://${req.headers.host ?? 'innersafety.vn'}`;
  const registrationUrl = `${origin}/#final-cta`;

  const order: PendingOrder = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    registrationUrl,
    createdAt: Date.now(),
  };

  pendingOrders.set(orderId, order);

  // Write registration row to Google Sheets immediately (non-blocking)
  appendRegistration({
    name: order.name,
    phone: order.phone,
    email: order.email,
    orderId,
    registrationUrl,
    amount: 111000,
    registeredAt: new Date().toISOString(),
  }).catch((err) => {
    req.log.error({ err, orderId }, 'Failed to write registration row to Google Sheets');
  });

  req.log.info({ orderId }, 'Checkout order created');

  res.json({ orderId, qrUrl, amount: 111000 });
});

/**
 * GET /api/checkout/status/:orderId
 * Returns: { status: 'pending' | 'paid' | 'not_found' }
 *
 * When payment is confirmed, updates the Google Sheets row to "Đã thanh toán".
 */
router.get('/checkout/status/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const order = pendingOrders.get(orderId);

  if (!order) {
    res.status(404).json({ status: 'not_found' });
    return;
  }

  try {
    const paid = await checkPayment(orderId);

    if (paid && !order.sheetsWritten) {
      // Mark before async ops to prevent double-writes on concurrent polls
      order.sheetsWritten = true;

      const confirmedAt = new Date().toISOString();

      markAsPaid(orderId, confirmedAt).catch((err) => {
        req.log.error({ err, orderId }, 'Failed to update payment status in Google Sheets');
      });

      req.log.info({ orderId }, 'Payment confirmed — marking row as Đã thanh toán');

      // Keep order a few minutes so repeated status polls still return 'paid'
      setTimeout(() => pendingOrders.delete(orderId), 5 * 60 * 1000);

      res.json({ status: 'paid' });
      return;
    }

    res.json({ status: paid ? 'paid' : 'pending' });
  } catch (err) {
    req.log.error({ err, orderId }, 'SePay status check failed');
    res.status(500).json({ error: 'Could not verify payment status' });
  }
});

export default router;
