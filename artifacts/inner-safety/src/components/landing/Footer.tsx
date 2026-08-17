export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0c0420] border-t border-white/10 py-20 overflow-hidden">
      {/* Ánh sáng nhẹ phía sau wordmark để tạo chiều sâu, không lấn nội dung */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[260px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #F5D78E, transparent)" }}
      />

      <div className="relative container mx-auto px-6 lg:px-8 max-w-2xl text-center">
        {/* Wordmark */}
        <p className="font-serif font-bold text-[#F5D78E] text-2xl md:text-3xl tracking-[0.08em] mb-3">
          BEYOND FEAR
        </p>
        <p className="font-serif italic text-gray-300 text-base md:text-lg mb-10">
          7 Ngày Từ Sợ Hãi Đến Bình An · Nga Alchemist
        </p>

        {/* Divider vàng mảnh, tinh tế */}
        <div
          className="h-px w-20 mx-auto mb-10"
          style={{ background: "linear-gradient(to right, transparent, #F5D78E80, transparent)" }}
        />

        {/* Link pháp lý */}
        <div className="flex items-center justify-center gap-5 text-sm tracking-wide mb-10">
          <a
            href="/chinh-sach-bao-mat"
            className="text-gray-300 hover:text-[#F5D78E] transition-colors"
          >
            Chính sách bảo mật
          </a>
          <span className="text-[#F5D78E]/40">·</span>
          <a
            href="/dieu-khoan"
            className="text-gray-300 hover:text-[#F5D78E] transition-colors"
          >
            Điều khoản
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mb-10">
          © {year} Nga Alchemist. Tất cả các quyền được bảo lưu.
        </p>

        {/* Khối disclaimer — tách riêng, nhãn nhỏ để không lấn át phần branding */}
        <div className="border-t border-white/10 pt-10 space-y-5">
          <p className="text-[#F5D78E]/70 text-xs font-semibold tracking-[0.15em] uppercase">
            Lưu ý quan trọng
          </p>

          <p className="text-gray-400 text-sm leading-loose text-left md:text-center max-w-xl mx-auto">
            Kết quả chia sẻ trong trang này không đại diện cho kết quả điển hình. Kết quả của bạn
            sẽ khác nhau tùy thuộc vào hoàn cảnh cá nhân, mức độ cam kết thực hành và nhiều yếu tố
            khác. Khóa học mang tính chất giáo dục và hỗ trợ phát triển bản thân, không thay thế
            cho tham vấn hoặc điều trị tâm lý/y tế chuyên sâu khi cần thiết.
          </p>

          <p className="text-gray-400 text-sm leading-loose text-left md:text-center max-w-xl mx-auto">
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
