import { google } from 'googleapis';
import { logger } from './logger';

const SPREADSHEET_ID = '1_1J-ei7a0bPeqZNG6IynJZuGOj1LkGIwtAyBEBqVkuc';
const SHEET = 'Sheet1';

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error('Google Sheets credentials not configured');
  }

  // Secrets storage may escape newlines as \\n — normalise them
  const key = rawKey.replace(/\\n/g, '\n');

  return new google.auth.JWT({
    email,
    key,
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
