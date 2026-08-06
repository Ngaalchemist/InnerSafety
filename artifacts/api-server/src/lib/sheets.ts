import { google } from 'googleapis';
import { logger } from './logger';

const SPREADSHEET_ID = '1_1J-ei7a0bPeqZNG6IynJZuGOj1LkGIwtAyBEBqVkuc';
const SHEET = 'Sheet1';

/**
 * The secret may contain:
 *   (a) just the raw PEM key (ideal)
 *   (b) the PEM key with JSON-escaped \\n sequences
 *   (c) the entire service-account JSON blob (user pasted the whole file)
 *
 * This function handles all three and returns a clean PEM string with real newlines.
 */
function extractCredentials(rawKeyEnv: string, rawEmailEnv: string): { private_key: string; client_email: string } {
  let raw = rawKeyEnv.trim();

  // ── Try to parse as JSON first (case c) ──────────────────────────────────
  // The value might start mid-JSON if it was truncated; try a regex extraction.
  const jsonKeyMatch = raw.match(/"private_key"\s*:\s*"((?:[^"\\]|\\.)*)"/);
  const jsonEmailMatch = raw.match(/"client_email"\s*:\s*"([^"]+)"/);

  let keyStr: string;
  if (jsonKeyMatch) {
    // Extracted from embedded JSON — the JSON uses \n as escape, so unescape it
    keyStr = jsonKeyMatch[1].replace(/\\n/g, '\n');
    logger.info('Google Sheets: extracted private_key from JSON blob in secret');
  } else {
    // ── Case (a) or (b): treat the whole value as the PEM key ────────────
    keyStr = raw.replace(/^["']|["']$/g, ''); // strip surrounding quotes
    keyStr = keyStr.replace(/\\n/g, '\n');      // convert escaped newlines
  }

  // Ensure the PEM is well-formed
  keyStr = keyStr.trim();

  const client_email = (jsonEmailMatch ? jsonEmailMatch[1] : rawEmailEnv).trim();

  return { private_key: keyStr, client_email };
}

function getAuth() {
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY ?? '';
  const rawEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? '';

  if (!rawKey) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY is not set');
  }

  const { private_key, client_email } = extractCredentials(rawKey, rawEmail);

  if (!client_email) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL is not set and could not be extracted from the key JSON');
  }

  logger.info({ client_email }, 'Google Sheets auth initialised');

  return new google.auth.GoogleAuth({
    credentials: { client_email, private_key },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

/**
 * Column layout (A–I):
 * A  Thời gian đăng ký
 * B  Họ tên
 * C  Số điện thoại
 * D  Email
 * E  Mã đơn hàng
 * F  Đường link đăng ký
 * G  Số tiền
 * H  Trạng thái
 * I  Thời gian thanh toán
 */

export interface RegistrationRow {
  name: string;
  phone: string;
  email: string;
  orderId: string;
  registrationUrl: string;
  amount: number;
  registeredAt: string;
}

/** Write a row immediately when the customer submits the form. */
export async function appendRegistration(data: RegistrationRow): Promise<void> {
  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET}!A:I`,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[
        data.registeredAt,       // A
        data.name,               // B
        data.phone,              // C
        data.email,              // D
        data.orderId,            // E
        data.registrationUrl,    // F
        data.amount,             // G
        'Chưa thanh toán',       // H
        '',                      // I (blank until paid)
      ]],
    },
  });

  logger.info({ orderId: data.orderId }, 'Registration row written to Google Sheets');
}

/** Find the row by orderId (column E) and mark it as paid. */
export async function markAsPaid(orderId: string, confirmedAt: string): Promise<void> {
  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  // Read column E to locate the matching row
  const readRes = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET}!E:E`,
  });

  const col = readRes.data.values ?? [];
  // Row index in sheet is 1-based; col is 0-based array
  const rowIdx = col.findIndex((cell) => cell[0] === orderId);

  if (rowIdx === -1) {
    logger.warn({ orderId }, 'markAsPaid: order ID not found in sheet — cannot update');
    return;
  }

  const sheetRow = rowIdx + 1; // convert to 1-based

  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET}!H${sheetRow}:I${sheetRow}`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [['Đã thanh toán', confirmedAt]],
    },
  });

  logger.info({ orderId, sheetRow }, 'Row updated to Đã thanh toán in Google Sheets');
}
