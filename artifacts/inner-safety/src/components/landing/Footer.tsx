export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 overflow-hidden">
      {/* Cùng lớp gradient tím mờ mà FAQSection và các section khác đang dùng */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 text-center">
        {/* Wordmark */}
        <p
          className="font-serif font-black text-primary text-4xl sm:text-5xl lg:text-6xl tracking-wide mb-4"
          style={{ textShadow: '0 0 40px hsl(var(--primary) / 0.35)' }}
        >
          BEYOND FEAR
        </p>
        <p className="font-serif italic font-medium text-foreground text-lg sm:text-xl mb-10">
          7 Ngày Từ Sợ Hãi Đến Bình An · Nga Alchemist
        </p>

        {/* Divider */}
        <div className="h-px w-24 mx-auto mb-10 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        {/* Link pháp lý */}
        <div className="flex items-center justify-center gap-5 text-sm mb-10">
          <a
            href="/chinh-sach-bao-mat"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Chính sách bảo mật
          </a>
          <span className="text-primary/40">·</span>
          <a
            href="/dieu-khoan"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Điều khoản
          </a>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground/70 text-sm mb-10">
          © {year} Nga Alchemist. Tất cả các quyền được bảo lưu.
        </p>

        {/* Khối disclaimer — giới hạn chiều rộng để dễ đọc, nhưng nằm trong container full-width như các section khác */}
        <div className="max-w-3xl mx-auto border-t border-border/40 pt-10 space-y-5">
          <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">
            Lưu ý quan trọng
          </p>

          <p className="text-muted-foreground text-sm leading-loose text-left sm:text-center">
            Kết quả chia sẻ trong trang này không đại diện cho kết quả điển hình. Kết quả của bạn
            sẽ khác nhau tùy thuộc vào hoàn cảnh cá nhân, mức độ cam kết thực hành và nhiều yếu tố
            khác. Khóa học mang tính chất giáo dục và hỗ trợ phát triển bản thân, không thay thế
            cho tham vấn hoặc điều trị tâm lý/y tế chuyên sâu khi cần thiết.
          </p>

          <p className="text-muted-foreground text-sm leading-loose text-left sm:text-center">
            Nội dung trên trang này, cũng như trong chương trình học, không phải là lời khuyên y
            tế, tâm lý lâm sàng hay pháp lý. Nếu bạn đang gặp khủng hoảng tâm lý nghiêm trọng, vui
            lòng tìm đến chuyên gia tâm lý hoặc cơ sở y tế phù hợp để được hỗ trợ trực tiếp. Bạn là
            người chịu trách nhiệm cho các quyết định và hành động của mình sau khi tham gia
            chương trình.
          </p>
        </div>
      </div>
    </footer>
  );
}
