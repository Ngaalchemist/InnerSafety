import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { CtaButton, TrustBar } from "./CtaButton";

const bonuses = [
  {
    num: "01",
    title: "Emergency Reset 5 Phút",
    sub: "(Audio Bình Ổn Tức Thì)",
    desc: "Bộ audio giúp bạn bình ổn ngay khi hoảng loạn hoặc mất ngủ giữa đêm — dùng được ngay cả khi bạn chưa học hết khóa.",
  },
  {
    num: "02",
    title: "Money Healing Workbook",
    sub: "(Chữa Lành Nỗi Sợ Tài Chính)",
    desc: "Bài tập viết và nghi thức chữa lành nỗi sợ thiếu thốn tài chính, giúp bạn ngừng vòng lặp \"cứ nghĩ đến tiền là hoảng\".",
  },
  {
    num: "03",
    title: "Trigger Tracker",
    sub: "(Mini-Tracker Nhận Diện Cảm Xúc)",
    desc: "Công cụ giúp bạn nhận diện chính xác điều gì đang kích hoạt cảm xúc bùng nổ của mình, thay vì chỉ biết mình đang tức giận mà không hiểu vì sao.",
  },
  {
    num: "04",
    title: "Boundary Workbook",
    sub: "(Kịch Bản Đặt Ranh Giới)",
    desc: "Mẫu câu và bài tập thực hành nói \"không\" mà không cắn rứt lương tâm, dành riêng cho người quen \"gồng gánh\" cho người khác.",
  },
  {
    num: "05",
    title: "Sleep Healing Audio",
    sub: "(Audio Hỗ Trợ Ngủ Sâu)",
    desc: "Audio dùng mỗi tối để hệ thần kinh dần quen với cảm giác an toàn trong lúc ngủ, hỗ trợ bạn ngủ sâu và trọn giấc hơn.",
  },
];

export function WhatsInsideSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-4">
            ĐÂY LÀ TẤT CẢ NHỮNG GÌ BẠN NHẬN ĐƯỢC TRONG INNER SECURITY KIT™
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
            Khóa học toàn diện: Module 0 + 7 Chương, đi từ điều hòa hệ thần kinh, chữa lành nỗi sợ
            tài chính, phục hồi giá trị bản thân, làm chủ cảm xúc, kích hoạt nội lực, đến bảo vệ
            năng lượng và tái sinh phiên bản mới — giúp bạn tái thiết nền tảng an toàn nội tâm chỉ
            trong 7 ngày.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 justify-center mb-8">
          <Gift className="w-7 h-7 text-[#C9A84C]" />
          <span className="font-serif font-bold text-white text-xl md:text-2xl">Kèm theo 5 bonus dùng được ngay</span>
        </motion.div>

        <div className="space-y-5">
          {bonuses.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-5 bg-white/5 border border-[#C9A84C]/20 rounded-2xl p-6 hover:border-[#C9A84C]/50 transition-colors"
            >
              <span className="font-serif font-bold text-3xl text-[#C9A84C]/50 leading-none flex-shrink-0">{it.num}</span>
              <div>
                <h3 className="font-serif font-bold text-white text-lg md:text-xl">
                  {it.title} {it.sub && <span className="text-gray-400 font-normal text-sm md:text-base">{it.sub}</span>}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-1.5">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-[#C9A84C]/15 to-[#C9A84C]/5 border-2 border-[#C9A84C]/40 rounded-2xl p-8 text-center"
        >
          <p className="text-gray-300 text-base md:text-lg mb-2">Giá trị thực</p>
          <div className="text-gray-500/70 line-through text-2xl md:text-3xl mb-3">4.444.000đ</div>
          <p className="text-gray-300 text-base md:text-lg mb-2">Giá hôm nay</p>
          <div className="text-6xl md:text-7xl font-bold text-[#C9A84C] font-serif leading-none">444.000đ</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A84C] text-[#140728] hover:bg-[#E8C96A] rounded-none px-10 py-5" data-testid="button-cta-whatsinside">
            NHẬN TRỌN BỘ NGAY HÔM NAY
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
