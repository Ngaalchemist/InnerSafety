import { logger } from './logger.js';

const SEPAY_API_BASE = 'https://my.sepay.vn/userapi';
const COURSE_AMOUNT = 111000;

/** Generate a unique, short order reference that fits in a bank transfer description. */
export function generateOrderId(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
  return `ISE${ts}${rand}`;
}

/** VietQR URL that shows a pre-filled bank QR inside SePay's network. */
export function getQRUrl(orderId: string): string {
  const bankCode = process.env.SEPAY_BANK_CODE ?? '';
  const accountNumber = process.env.SEPAY_ACCOUNT_NUMBER ?? '';
  const accountName = encodeURIComponent(process.env.SEPAY_ACCOUNT_NAME ?? '');
  const description = encodeURIComponent(orderId);

  return (
    `https://img.vietqr.io/image/${bankCode}-${accountNumber}-compact2.png` +
    `?amount=${COURSE_AMOUNT}&addInfo=${description}&accountName=${accountName}`
  );
}

interface SepayTransaction {
  id: string;
  amount_in: string;
  amount_out: string;
  transaction_content: string;
  transaction_date: string;
}

interface SepayResponse {
  status: number;
  transactions: SepayTransaction[];
}

/**
 * Poll SePay transaction list for a payment matching orderId and the course amount.
 * Returns true when a qualifying inbound transaction is found.
 */
export async function checkPayment(orderId: string): Promise<boolean> {
  const token = process.env.SEPAY_API_TOKEN;
  if (!token) throw new Error('SEPAY_API_TOKEN not set');

  const url = `${SEPAY_API_BASE}/transactions/list?limit=20&reference=${encodeURIComponent(orderId)}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    logger.warn({ status: res.status, orderId }, 'SePay API returned non-OK status');
    return false;
  }

  const data = (await res.json()) as SepayResponse;
  const txns = data.transactions ?? [];

  return txns.some((t) => {
    const amountIn = parseInt(t.amount_in ?? '0', 10);
    const contentMatch = t.transaction_content?.includes(orderId);
    return amountIn >= COURSE_AMOUNT && contentMatch;
  });
}
