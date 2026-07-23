import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";
import { HeartPulse, Sparkles, KeyRound, Sprout, Flower2, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: HeartPulse,
    num: "01",
    title: "Giải Phóng Cơ Thể Vật Lý (Body Reset)",
    desc: "Dùng các bài tập rung lắc, hơi thở và định vị thực tế ở trạng thái tỉnh táo (Beta) để xả bỏ cortisol, dập chuông báo động đỏ.",
  },
  {
    icon: Sparkles,
    num: "02",
    title: "Cho Phép Cảm Xúc Thoát Ra",
    desc: "Giải tỏa những khối dồn nén (buồn, giận, sợ) mà không cần tiếp tục gồng mình.",
  },
  {
    icon: KeyRound,
    num: "03",
    title: "Tái Thiết Niềm Tin Tiềm Thức",
    desc: "Chuyển hóa niềm tin \"Tôi không đủ\" thành \"Tôi an toàn và đủ đầy\".",
  },
  {
    icon: Sprout,
    num: "04",
    title: "Trở Về Với Bản Thể Gốc",
    desc: "Nhớ lại con người vững vàng của bạn trước khi biến cố xảy ra.",
  },
  {
    icon: Flower2,
    num: "05",
    title: "Tích Hợp Vào Đời Sống",
    desc: "Biến cảm giác an toàn thành trạng thái tự nhiên trong mọi quyết định hàng ngày.",
  },
];

const results = [
  "Bình tĩnh lại chỉ sau vài phút khi cơn lo âu xuất hiện",
  "Ngủ ngon hơn mà không phải cố ép mình",
  "Bớt sợ chuyện tiền bạc dù hoàn cảnh chưa thay đổi ngay",
  "Biết nói \"không\" mà không còn cảm thấy có lỗi",
  "Tin vào giá trị của bản thân mà không cần người khác công nhận",
];

export function BenefitsSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#12201a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-emerald-900/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9A24C]/10 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <span className="cta-label uppercase text-xs md:text-sm tracking-[0.25em] text-[#C9A24C]">Inner Safety Method™</span>
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F2E6C4] mt-3 mb-4">
            Cách để tắt cái chuông báo động đó
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Tin tốt là… cái chuông đó không bị kẹt mãi mãi. Nó có thể tắt — không phải bằng cách cố lờ
            nó đi hay ép mình mạnh mẽ hơn, mà bằng cách đi đúng từng bước nhỏ, để cơ thể bạn tự nó tin
            rằng: bây giờ đã an toàn rồi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-center mb-3 mt-10"
        >
          <span className="font-serif font-bold text-[#F2E6C4] text-sm md:text-base">Cơ Thể Vật Lý & Hệ Thần Kinh</span>
          <ArrowRight className="w-4 h-4 text-[#C9A24C]" />
          <span className="font-serif font-bold text-[#F2E6C4] text-sm md:text-base">Cảm Xúc</span>
          <ArrowRight className="w-4 h-4 text-[#C9A24C]" />
          <span className="font-serif font-bold text-[#F2E6C4] text-sm md:text-base">Niềm Tin</span>
          <ArrowRight className="w-4 h-4 text-[#C9A24C]" />
          <span className="font-serif font-bold text-[#F2E6C4] text-sm md:text-base">Danh Tính</span>
        </motion.div>
        <p className="text-center text-gray-400 text-xs md:text-sm mb-10">(Thực hành Beta/3D) — (Cài đặt Tiềm thức Theta/Alpha)</p>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#C9A24C]/50 hover:-translate-y-1 transition-all group overflow-hidden"
            >
              <div className="absolute top-4 right-5 text-5xl font-bold opacity-10 font-serif text-[#C9A24C]">
                {s.num}
              </div>
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-full bg-[#C9A24C]/15 border border-[#C9A24C]/40 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-[#C9A24C]" />
                </div>
                <h3 className="font-bold font-serif text-lg md:text-xl text-white mb-2.5 group-hover:text-[#F2E6C4] transition-colors">
                  Bước {s.num.replace(/^0/, "")}: {s.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#C9A24C]/10 to-transparent border border-[#C9A24C]/25 rounded-2xl p-7 md:p-9 mb-12"
        >
          <p className="font-semibold text-white mb-5 text-center">Nhờ vậy, bạn sẽ:</p>
          <ul className="space-y-2.5 max-w-xl mx-auto">
            {results.map((r, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3 text-gray-200">
                <span className="text-[#C9A24C] mt-1">✓</span>
                <span>{r}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A24C] text-[#12201a] hover:bg-[#E4C77E] rounded-sm px-10 py-5" data-testid="button-cta-benefits">
            Tôi Muốn Lấy Lại Sự Bình Yên Của Mình
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
