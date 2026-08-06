import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db, pendingOrdersTable } from '@workspace/db';
import { generateOrderId, getQRUrl, checkPayment } from '../lib/sepay.js';
import { appendRegistration, markAsPaid } from '../lib/sheets.js';

const router = Router();

const COURSE_AMOUNT = 111000;

/**
 * Zalo does not allow proactively messaging or adding a phone number that
 * hasn't interacted with your Official Account first, so there is no
 * automated "send invite" step here. Instead we surface a static join link
 * (a normal Zalo group invite link / Skool community link) once payment is
 * confirmed. Configure these in Vercel env vars — leave unset to hide the
 * corresponding button.
 */
function getInviteUrls(): { zaloInviteUrl: string | null; skoolInviteUrl: string | null } {
  return {
    zaloInviteUrl: process.env.ZALO_GROUP_INVITE_URL?.trim() || null,
    skoolInviteUrl: process.env.SKOOL_GROUP_INVITE_URL?.trim() || null,
  };
}

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

  const origin =
    req.headers.origin ??
    req.headers.referer?.replace(/\/$/, '') ??
    `https://${req.headers.host ?? 'innersafety.vn'}`;
  const registrationUrl = `${origin}/#final-cta`;

  await db.insert(pendingOrdersTable).values({
    orderId,
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    registrationUrl,
    amount: COURSE_AMOUNT,
  });

  appendRegistration({
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    orderId,
    registrationUrl,
    amount: COURSE_AMOUNT,
    registeredAt: new Date().toISOString(),
  }).catch((err) => {
    req.log.error({ err, orderId }, 'Failed to write registration row to Google Sheets');
  });

  req.log.info({ orderId }, 'Checkout order created');

  res.json({ orderId, qrUrl, amount: COURSE_AMOUNT });
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
    .from(pendingOrdersTable)
    .where(eq(pendingOrdersTable.orderId, orderId))
    .limit(1);

  if (!order) {
    res.status(404).json({ status: 'not_found' });
    return;
  }

  try {
    const paid = await checkPayment(orderId);

    if (paid && !order.sheetsWritten) {
      await db
        .update(pendingOrdersTable)
        .set({ sheetsWritten: true })
        .where(eq(pendingOrdersTable.orderId, orderId));

      const confirmedAt = new Date().toISOString();

      markAsPaid(orderId, confirmedAt).catch((err) => {
        req.log.error({ err, orderId }, 'Failed to update payment status in Google Sheets');
      });

      req.log.info({ orderId }, 'Payment confirmed — marking row as Đã thanh toán');

      res.json({ status: 'paid', ...getInviteUrls() });
      return;
    }

    res.json(paid ? { status: 'paid', ...getInviteUrls() } : { status: 'pending' });
  } catch (err) {
    req.log.error({ err, orderId }, 'SePay status check failed');
    res.status(500).json({ error: 'Could not verify payment status' });
  }
});

export default router;
