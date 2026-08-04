import { Router } from 'express';
import { eq, and } from 'drizzle-orm';
import { db, checkoutOrders } from '@workspace/db';
import { generateOrderId, getQRUrl, checkPayment } from '../lib/sepay';
import { appendRegistration, markAsPaid } from '../lib/sheets';

const router = Router();

/**
 * POST /api/checkout/create
 * Body: { name, phone, email }
 * Returns: { orderId, qrUrl, amount }
 *
 * Writes a "Chưa thanh toán" row to Google Sheets and a pending row to the DB.
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

  await db.insert(checkoutOrders).values({
    orderId,
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    registrationUrl,
    amount: 111000,
  });

  // Write registration row to Google Sheets immediately (non-blocking)
  appendRegistration({
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
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

  const [order] = await db
    .select()
    .from(checkoutOrders)
    .where(eq(checkoutOrders.orderId, orderId))
    .limit(1);

  if (!order) {
    res.status(404).json({ status: 'not_found' });
    return;
  }

  if (order.status === 'paid') {
    res.json({ status: 'paid' });
    return;
  }

  try {
    const paid = await checkPayment(orderId);

    if (paid) {
      // Only update (and only write to Sheets) if still 'pending' — guards
      // against double-writes when multiple polls land at the same time.
      const updated = await db
        .update(checkoutOrders)
        .set({ status: 'paid' })
        .where(and(eq(checkoutOrders.orderId, orderId), eq(checkoutOrders.status, 'pending')))
        .returning();

      if (updated.length > 0) {
        const confirmedAt = new Date().toISOString();

        markAsPaid(orderId, confirmedAt).catch((err) => {
          req.log.error({ err, orderId }, 'Failed to update payment status in Google Sheets');
        });

        req.log.info({ orderId }, 'Payment confirmed — marking row as Đã thanh toán');
      }

      res.json({ status: 'paid' });
      return;
    }

    res.json({ status: 'pending' });
  } catch (err) {
    req.log.error({ err, orderId }, 'SePay status check failed');
    res.status(500).json({ error: 'Could not verify payment status' });
  }
});

export default router;
