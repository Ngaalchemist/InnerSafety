import { logger } from './logger.js';

const SEPAY_API_BASE = 'https://my.sepay.vn/userapi';
const COURSE_AMOUNT = 111000;

/** Generate a unique, short order reference that fits in a bank transfer description. */
export function generateOrderId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // bỏ ký tự dễ nhầm: 0/O, 1/I/L
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

/**
 * VietQR URL — MUST use the SePay Virtual Account (VA), not the main account.
 *
 * SePay support confirmed (07/08/2026): with MSB, SePay only detects inbound
 * transactions that land on the VA number. Transfers to the main account
 * number (e.g. 03101010918637) are invisible to SePay's API/dashboard even
 * though the money genuinely arrives in the bank account. So VA config is
 * not optional here — silently falling back to the main account produces a
 * QR that looks valid but can NEVER be detected as paid.
 */
export function getQRUrl(orderId: string): string {
  const bankCode = process.env.SEPAY_VA_BANK_CODE?.trim();
  const accountNumber = process.env.SEPAY_VA_NUMBER?.trim();
  const accountName = encodeURIComponent(process.env.SEPAY_ACCOUNT_NAME ?? '');
  const description = encodeURIComponent(orderId);

  if (!bankCode || !accountNumber) {
    logger.error(
      'SEPAY_VA_BANK_CODE / SEPAY_VA_NUMBER not set — refusing to generate a QR against the main account, which SePay cannot track for MSB.',
    );
    throw new Error(
      'Thiếu cấu hình tài khoản ảo (VA) SePay. Vui lòng set SEPAY_VA_BANK_CODE và SEPAY_VA_NUMBER trên Vercel trước khi nhận thanh toán.',
    );
  }

  logger.info({ bankCode, accountNumber: accountNumber.slice(-4) }, 'Generating QR URL (VA)');

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

  // NOTE: SePay's /transactions/list endpoint does NOT support filtering by
  // our own order code (there is no "reference" param — "reference_number"
  // is the *bank's* transaction reference, not the transfer content we set).
  // So we must fetch recent transactions and match transaction_content
  // ourselves. limit=20 can miss the payment if other transactions land on
  // the account in between polls, so we pull a larger recent window.
  const url = `${SEPAY_API_BASE}/transactions/list?limit=50`;

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

  // Normalize: SePay/banks often uppercase, strip diacritics/punctuation,
  // or add prefixes ("SEVQR", "CT DEN", etc.) around the content the payer
  // typed/scanned. Compare using a normalized, case-insensitive match.
  const normalize = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const normalizedOrderId = normalize(orderId);

  const matched = txns.some((t) => {
    const amountIn = parseInt(t.amount_in ?? '0', 10);
    const contentMatch = normalize(t.transaction_content ?? '').includes(normalizedOrderId);
    return amountIn >= COURSE_AMOUNT && contentMatch;
  });

  if (!matched) {
    logger.info({ orderId, sampleCount: txns.length }, 'checkPayment: no matching transaction yet');
  }

  return matched;
}
