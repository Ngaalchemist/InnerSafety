import { motion } from "framer-motion";
import { Gift, Infinity } from "lucide-react";
import { CtaButton, TrustBar } from "./CtaButton";

const bonuses = [
  {
    num: "01",
    title: "Emergency Reset 5 Phút",
    sub: "(Audio sơ cứu tức thì)",
    desc: "Audio giúp bạn lấy lại bình tĩnh trong 5 phút khi cơn hoảng loạn hoặc lo âu ập đến giữa đêm hoặc giữa cuộc họp — dùng ngay, không cần chờ đến buổi học tiếp theo.",
  },
  {
    num: "02",
    title: "Money Healing Workbook",
    sub: "",
    desc: "Bộ câu hỏi và bài tập giúp bạn nhận diện niềm tin gia đình về tiền bạc đang âm thầm điều khiển nỗi sợ thiếu thốn của mình, và viết lại \"hợp đồng mới\" với tiền.",
  },
  {
    num: "03",
    title: "Worthy Affirmation Sleep Hypnosis™",
    sub: "",
    desc: "Thôi miên thư giãn sâu trước khi ngủ, cài đặt lại giá trị bản thân.",
  },
  {
    num: "04",
    title: "Trigger Tracker",
    sub: "(Mẫu theo dõi cảm xúc)",
    desc: "Mẫu theo dõi giúp bạn nhận diện chính xác điều gì đang kích hoạt cảm xúc bùng nổ hoặc overthinking của mình, để xử lý đúng gốc rễ thay vì đoán mò.",
  },
  {
    num: "05",
    title: "Boundary Workbook",
    sub: "",
    desc: "Hướng dẫn từng bước để học nói \"không\" mà không thấy tội lỗi — dành cho người luôn cạn năng lượng vì ôm đồm trách nhiệm của người khác.",
  },
];

export function WhatsInsideSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#0e1712] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-[#C9A24C]/8 blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F2E6C4] mb-4">
            Đây là tất cả những gì bạn nhận được trong Inner Safety Experience™
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
            7 Chương Bài Học Chuyên Sâu (28 Audio/Video): lộ trình thực hành bài bản từ xả nén cơ thể
            vật lý đến tái thiết tiềm thức.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 text-[#C9A24C] text-sm md:text-base cta-label">
            <Infinity className="w-4 h-4" /> Truy cập trọn đời — học theo tốc độ cá nhân, học lại bất cứ lúc nào
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 justify-center mb-8">
          <Gift className="w-7 h-7 text-[#C9A24C]" />
          <span className="font-serif font-bold text-white text-xl md:text-2xl">Kèm theo 5 bonus thực chiến</span>
        </motion.div>

        <div className="space-y-5">
          {bonuses.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-5 bg-white/5 border border-[#C9A24C]/20 rounded-2xl p-6 hover:border-[#C9A24C]/50 transition-colors"
            >
              <span className="font-serif font-bold text-3xl text-[#C9A24C]/50 leading-none flex-shrink-0">{it.num}</span>
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
          className="mt-12 bg-gradient-to-br from-[#C9A24C]/15 to-[#C9A24C]/5 border-2 border-[#C9A24C]/40 rounded-2xl p-8 text-center"
        >
          <p className="text-gray-300 text-base md:text-lg mb-2">Giá trị thông thường</p>
          <div className="text-gray-500/70 line-through text-2xl md:text-3xl mb-3">4.444.444đ</div>
          <p className="text-gray-300 text-base md:text-lg mb-2">Giá hôm nay</p>
          <div className="text-5xl md:text-7xl font-bold text-[#C9A24C] font-serif leading-none">1.111.111đ</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A24C] text-[#0e1712] hover:bg-[#E4C77E] rounded-sm px-10 py-5" data-testid="button-cta-whatsinside">
            Nhận Trọn Bộ Ngay Hôm Nay
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
