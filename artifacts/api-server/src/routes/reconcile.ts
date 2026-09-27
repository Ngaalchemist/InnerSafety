import { Router } from 'express';
import { isNull, eq } from 'drizzle-orm';
import { db, pendingOrdersTable } from '@workspace/db';
import { checkPayment } from '../lib/sepay.js';
import { markAsPaid } from '../lib/sheets.js';

const router = Router();

/**
 * GET /api/checkout/reconcile
 * Được gọi định kỳ (GitHub Actions) để bắt các đơn khách đã thanh toán
 * nhưng đã đóng trình duyệt trước khi client-side polling kịp xác nhận.
 * Bảo vệ bằng header Authorization: Bearer <RECONCILE_SECRET>.
 */
router.get('/checkout/reconcile', async (req, res) => {
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${process.env.RECONCILE_SECRET}`) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }

  const pending = await db
    .select()
    .from(pendingOrdersTable)
    .where(eq(pendingOrdersTable.sheetsWritten, false));

  let updated = 0;

  for (const order of pending) {
    try {
      const paid = await checkPayment(order.orderId);
      if (!paid) continue;

      await db
        .update(pendingOrdersTable)
        .set({ sheetsWritten: true })
        .where(eq(pendingOrdersTable.orderId, order.orderId));

      await markAsPaid(order.orderId, order.amount, new Date().toISOString());
      updated++;
      req.log.info({ orderId: order.orderId }, 'Reconcile: marked as paid');
    } catch (err) {
      req.log.error({ err, orderId: order.orderId }, 'Reconcile: failed for order');
    }
  }

  res.json({ checked: pending.length, updated });
});

export default router;
