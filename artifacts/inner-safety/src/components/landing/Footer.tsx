export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-14 text-center">
        {/* Wordmark */}
        <p
          className="font-serif font-black text-primary text-3xl sm:text-4xl tracking-wide mb-2"
          style={{ textShadow: '0 0 40px hsl(var(--primary) / 0.35)' }}
        >
          BEYOND FEAR
        </p>
        <p className="font-serif italic font-medium text-foreground text-base sm:text-lg mb-5">
          7 Ngày Từ Sợ Hãi Đến Bình An · Nga Alchemist
        </p>

        {/* Divider */}
        <div className="h-px w-16 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        {/* Copyright */}
        <p className="text-muted-foreground/70 text-sm mb-6">
          © {year} Nga Alchemist. Tất cả các quyền được bảo lưu.
        </p>

        {/* Disclaimer — gọn trong cùng 1 khối, không tách section riêng */}
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">
            Lưu ý quan trọng
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Kết quả chia sẻ trong trang này không đại diện cho kết quả điển hình. Kết quả của bạn
            sẽ khác nhau tùy thuộc vào hoàn cảnh cá nhân, mức độ cam kết thực hành và nhiều yếu tố
            khác. Khóa học mang tính chất giáo dục và hỗ trợ phát triển bản thân, không thay thế
            cho tham vấn hoặc điều trị tâm lý/y tế chuyên sâu khi cần thiết.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
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
