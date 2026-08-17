export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0420] border-t border-white/10 py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
        {/* Branding */}
        <p className="font-serif font-bold text-[#F5D78E] text-xl md:text-2xl tracking-wide mb-3">
          BEYOND FEAR
        </p>
        <p className="text-gray-300 text-sm md:text-base mb-8">
          7 Ngày Từ Sợ Hãi Đến Bình An · Nga Alchemist
        </p>

        {/* Link pháp lý */}
        <div className="flex items-center justify-center gap-4 text-sm md:text-base mb-8">
          <a href="/chinh-sach-bao-mat" className="text-gray-300 hover:text-[#F5D78E] transition-colors underline underline-offset-4 decoration-white/20">
            Chính sách bảo mật
          </a>
          <span className="text-gray-600">•</span>
          <a href="/dieu-khoan" className="text-gray-300 hover:text-[#F5D78E] transition-colors underline underline-offset-4 decoration-white/20">
            Điều khoản
          </a>
        </div>

        <div className="h-px w-16 bg-white/10 mx-auto mb-8" />

        {/* Copyright */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Bản quyền © {year} Nga Alchemist. Tất cả các quyền được bảo lưu.
        </p>

        {/* Disclaimer kết quả */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 text-left md:text-center">
          <span className="text-gray-200 font-semibold">Miễn trừ trách nhiệm: </span>
          Kết quả chia sẻ trong trang này không đại diện cho kết quả điển hình. Kết quả của bạn sẽ
          khác nhau tùy thuộc vào hoàn cảnh cá nhân, mức độ cam kết thực hành và nhiều yếu tố khác.
          Khóa học mang tính chất giáo dục và hỗ trợ phát triển bản thân, không thay thế cho tham
          vấn hoặc điều trị tâm lý/y tế chuyên sâu khi cần thiết.
        </p>

        {/* Disclaimer y tế / tâm lý / pháp lý */}
        <p className="text-gray-400 text-sm leading-relaxed text-left md:text-center">
          Nội dung trên trang này, cũng như trong chương trình học, không phải là lời khuyên y tế,
          tâm lý lâm sàng hay pháp lý. Nếu bạn đang gặp khủng hoảng tâm lý nghiêm trọng, vui lòng
          tìm đến chuyên gia tâm lý hoặc cơ sở y tế phù hợp để được hỗ trợ trực tiếp. Bạn là người
          chịu trách nhiệm cho các quyết định và hành động của mình sau khi tham gia chương trình.
        </p>
      </div>
    </footer>
  );
}
