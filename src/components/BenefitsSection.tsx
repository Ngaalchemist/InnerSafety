import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

const abilities = [
  {
    num: "01",
    title: "Nhận diện chính xác điều gì đang kích hoạt cơn hoảng loạn của mình",
    desc: "Biết rõ đâu là khoảnh khắc, đâu là nguyên nhân khiến tim đập nhanh hay đầu óc quay cuồng — thay vì chỉ thấy \"tự nhiên thấy lo lo\". Thiếu năng lực này, bạn sẽ mãi phản ứng theo bản năng và tự trách sau khi mọi chuyện đã xảy ra.",
    accent: "#A78BFA",
  },
  {
    num: "02",
    title: "Điều hòa hệ thần kinh trong vài phút, bất cứ khi nào cần",
    desc: "Có công cụ cụ thể (hơi thở, grounding, somatic) để đưa cơ thể ra khỏi trạng thái báo động, thay vì để cảm xúc cuốn đi cả buổi tối. Thiếu kỹ năng này, mọi kiến thức chữa lành chỉ nằm trên giấy — không giúp được gì lúc 11 giờ đêm khi đầu óc không chịu tắt.",
    accent: "#818CF8",
  },
  {
    num: "03",
    title: "Phân biệt niềm tin lõi \"tôi không đủ\" và sự thật",
    desc: "Nhận ra khi nào mình đang phản ứng với một câu chuyện nội tâm cũ, thay vì với thực tế trước mắt. Thiếu khả năng này, bạn sẽ tiếp tục đánh giá thấp giá trị bản thân mỗi khi có chuyện không như ý.",
    accent: "#C4B5FD",
  },
  {
    num: "04",
    title: "Đặt ranh giới và bảo vệ năng lượng mà không thấy tội lỗi",
    desc: "Biết rõ điều gì mình không còn ôm đồm, và có thể nói \"không\" mà không cảm thấy mình ích kỷ. Thiếu điều này, bạn sẽ tiếp tục kiệt sức vì gồng gánh trách nhiệm và cảm xúc của người khác.",
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
            4 NĂNG LỰC QUYẾT ĐỊNH BẠN CÓ TÌM LẠI ĐƯỢC SỰ AN TOÀN BÊN TRONG HAY KHÔNG
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            4 điều mà người đã vượt qua khủng hoảng tuổi trung niên đều có — mà việc "chỉ đọc thêm sách" không bao giờ cho bạn.
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
            TÔI MUỐN CÓ ĐỦ 4 NĂNG LỰC NÀY — CHỈ 1.990.000Đ
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
