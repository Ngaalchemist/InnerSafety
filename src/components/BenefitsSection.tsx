import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

const abilities = [
  {
    num: "01",
    title: "Điều hòa hệ thần kinh trước, tư duy sau",
    desc: "Cơ thể cần được đưa về trạng thái an toàn trước khi bất kỳ thay đổi tư duy nào có thể \"dính\". Thiếu điều này, bạn sẽ mãi loay hoay giữa biết nhưng không làm được.",
    accent: "#A78BFA",
  },
  {
    num: "02",
    title: "Chữa lành gốc rễ cảm xúc, không chỉ quản lý triệu chứng",
    desc: "Kỹ thuật \"hít thở khi stress\" chỉ là sơ cứu tạm thời. Thiếu bước chữa lành gốc rễ (shame, sang chấn, niềm tin cũ), nỗi bất an sẽ luôn quay lại dưới một vỏ bọc khác.",
    accent: "#818CF8",
  },
  {
    num: "03",
    title: "Tái lập trình niềm tin tiềm thức",
    desc: "Ý chí không đủ để thay đổi một niềm tin đã ăn sâu 30-40 năm. Thiếu bước này, bạn sẽ mãi phải \"cố gắng\" thay vì thực sự tin vào chính mình.",
    accent: "#C4B5FD",
  },
  {
    num: "04",
    title: "Một lộ trình rõ ràng, không phải thông tin rời rạc",
    desc: "Đọc bài viết lẻ tẻ trên mạng khiến bạn biết nhiều nhưng không biết bắt đầu từ đâu. Thiếu lộ trình, sự thay đổi sẽ mãi nằm trên lý thuyết.",
    accent: "#F0ABFC",
  },
];

export function BenefitsSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#1a0a2e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-violet-900/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-4">
            4 ĐIỀU BẮT BUỘC PHẢI CÓ ĐỂ THẬT SỰ THOÁT KHỎI KHỦNG HOẢNG TUỔI TRUNG NIÊN
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            4 điều mà những ai thật sự vượt qua khủng hoảng tuổi trung niên đều có — mà việc "chỉ đọc thêm sách" không bao giờ cho bạn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mt-10 mb-12">
          {abilities.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-white/25 hover:-translate-y-1 transition-all group overflow-hidden"
            >
              <div className="absolute top-4 right-5 text-5xl font-bold opacity-10 font-serif" style={{ color: b.accent }}>
                {b.num}
              </div>
              <div className="relative z-10">
                <div className="w-10 h-1 rounded-full mb-4" style={{ backgroundColor: b.accent }} />
                <h3 className="font-bold font-serif text-lg md:text-xl text-white mb-2.5 group-hover:text-[#F5D78E] transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A84C] text-[#1a0a2e] hover:bg-[#E8C96A] rounded-xl px-10 py-5" data-testid="button-cta-benefits">
            TÔI MUỐN CÓ ĐỦ 4 NĂNG LỰC NÀY — CHỈ 444.000Đ
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
