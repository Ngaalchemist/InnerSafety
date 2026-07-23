// Gửi email xác nhận tự động sau khi thanh toán thành công.
// Dùng Resend (https://resend.com) — chỉ cần 1 API key, không cần cài SDK.
// Nếu chưa cấu hình RESEND_API_KEY, hàm sẽ tự bỏ qua (không làm hỏng luồng thanh toán chính).

const ZALO_GROUP_LINK = process.env.ZALO_GROUP_LINK || "https://zalo.me/g/ngaalchemist";
const SKOOL_LINK = process.env.SKOOL_LINK || "https://www.skool.com/inner-safety-experience";

export async function sendConfirmationEmail({ name, email, orderCode, amount }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !email) return;

  const fromEmail = process.env.RESEND_FROM_EMAIL || "Nga Alchemist <hello@ngaalchemist.com>";

  const html = `
    <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color:#16241c;">
      <h2 style="color:#8a6a24;">Chào ${name || "bạn"},</h2>
      <p>Cảm ơn bạn đã đăng ký <strong>Inner Safety Experience™</strong>. Chúng tôi đã nhận được
      thanh toán <strong>${Number(amount).toLocaleString("vi-VN")}đ</strong> (mã đơn hàng
      <strong>${orderCode}</strong>).</p>
      <p>Hãy tham gia ngay 2 kênh dưới đây để nhận link khóa học và đồng hành cùng cộng đồng học viên:</p>
      <p>
        <a href="${ZALO_GROUP_LINK}" style="display:inline-block;background:#0068FF;color:#fff;padding:12px 20px;border-radius:4px;text-decoration:none;margin-bottom:10px;">Vào nhóm Zalo học viên</a>
      </p>
      <p>
        <a href="${SKOOL_LINK}" style="display:inline-block;background:#C9A24C;color:#0e1712;padding:12px 20px;border-radius:4px;text-decoration:none;">Vào cộng đồng Skool</a>
      </p>
      <p style="margin-top:24px;">Đồng hành cùng bạn,<br/>Nga Alchemist</p>
    </div>
  `;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email],
        subject: "Xác nhận đăng ký Inner Safety Experience™ — link tham gia bên trong",
        html,
      }),
    });
  } catch (err) {
    console.error("sendConfirmationEmail error:", err);
  }
}
