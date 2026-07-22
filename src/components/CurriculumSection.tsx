import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CtaButton, TrustBar } from "./CtaButton";
import day1 from "@/assets/images/day-1.png";
import day2 from "@/assets/images/day-2.png";
import day3 from "@/assets/images/day-3.png";
import day4 from "@/assets/images/day-4.png";
import day5 from "@/assets/images/day-5.png";
import day6 from "@/assets/images/day-6.png";
import day7 from "@/assets/images/day-7.png";

const days = [
  {
    img: day1,
    title: "Tôi An Toàn — Điều Hòa Hệ Thần Kinh",
    lead: "Bạn sẽ hiểu vì sao cơ thể luôn trong trạng thái báo động, và học cách đưa hệ thần kinh trở về bình an — bước nền tảng trước khi làm bất cứ điều gì khác.",
    points: [
      "Fight – Flight – Freeze – Fawn: vì sao cơ thể phản ứng như vậy khi mất an toàn",
      "Somatic Reset & Grounding để giải phóng cortisol, làm dịu hệ thần kinh",
      "Thực hành nhận diện 3 nỗi sợ lớn nhất và bắt đầu gỡ niềm tin \"thế giới nguy hiểm\"",
    ],
  },
  {
    img: day2,
    title: "Tôi Không Còn Sợ — Chữa Lành Nỗi Sợ Về Tiền",
    lead: "Bạn sẽ nhìn thấy gốc rễ của nỗi sợ thiếu thốn, và bắt đầu viết lại mối quan hệ của mình với tiền bạc.",
    points: [
      "Nhận diện Scarcity Mindset và niềm tin gia đình về tiền",
      "Thực hành Money Ritual — đối thoại và viết \"hợp đồng mới\" với tiền",
      "Thiền chuyển dịch sang cảm giác đủ đầy, thay vì luôn thấy thiếu",
    ],
  },
  {
    img: day3,
    title: "Tôi Xứng Đáng — Giải Phóng Shame, Khôi Phục Giá Trị",
    lead: "Bạn sẽ hiểu sự khác nhau giữa xấu hổ và cảm giác có lỗi, và bắt đầu khôi phục lại giá trị bản thân từ bên trong.",
    points: [
      "Phân biệt Shame và Guilt, thực hành Self-Compassion",
      "Breathwork giải phóng cảm xúc mắc kẹt trong cơ thể",
      "Viết lại niềm tin: từ \"Tôi không đủ\" sang \"Tôi là đủ\"",
    ],
  },
  {
    img: day4,
    title: "Tôi Làm Chủ Cảm Xúc — Dừng Overthinking",
    lead: "Bạn sẽ có công cụ thực tế để không bị cuốn theo cảm xúc mỗi khi bị kích hoạt, dùng được ngay trong đời sống hằng ngày.",
    points: [
      "Hiểu cơ chế Emotional Trigger đang vận hành trong bạn",
      "Kỹ thuật quan sát suy nghĩ, thực hành Mindfulness",
      "Bài tập trở về hiện tại (Inner Peace) khi cảm xúc bùng lên",
    ],
  },
  {
    img: day5,
    title: "Tôi Có Quyền Năng — Đánh Thức Ý Chí Nội Tại",
    lead: "Bạn sẽ đánh thức lại nguồn năng lượng và sự tự tin để bắt đầu lại, dù chưa biết chương tiếp theo của cuộc đời sẽ ra sao.",
    points: [
      "Fire Breath, kích hoạt vùng năng lượng ý chí (Solar Plexus)",
      "Tái lập trình niềm tin: \"Tôi đủ giỏi, tôi đủ giá trị\"",
      "Bài tập hành động nhỏ đầu tiên để xây lại niềm tin vào bản thân",
    ],
  },
  {
    img: day6,
    title: "Tôi Thu Hồi Năng Lượng — Ranh Giới Lành Mạnh",
    lead: "Bạn sẽ học cách nhận diện điều gì đang rút cạn năng lượng của mình, và xây ranh giới để bảo vệ bản thân mà không thấy tội lỗi.",
    points: [
      "Energy Audit: nhận diện các kiểu rò rỉ năng lượng trong công việc, mối quan hệ",
      "Thực hành cắt đứt gắn bó năng lượng với người, sự kiện và dự án cũ",
      "Học nói \"Không\" và bảo vệ trường năng lượng của chính mình",
    ],
  },
  {
    img: day7,
    title: "Tôi Tái Sinh — Đồng Bộ Tim - Não, Ký Giao Ước Mới",
    lead: "Bạn sẽ hoàn tất hành trình với một nền tảng an toàn mới, và một cam kết cụ thể để duy trì sự bình an sau khi khóa học kết thúc.",
    points: [
      "Heart-Brain Coherence Meditation để đưa hệ thần kinh về bình an nhanh chóng",
      "Chọn Timeline mới — hình dung phiên bản tương lai bạn muốn trở thành",
      "Ký giao ước sống từ giá trị nội tại, thay vì từ thành tựu bên ngoài",
    ],
  },
];

function DayCard({ img, index, onOpen }: { img: string; index: number; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.08 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A84C]/50 shadow-lg hover:shadow-[0_0_50px_rgba(201,168,76,0.4)] transition-shadow cursor-pointer text-left"
      style={{ transformOrigin: "center" }}
      data-testid={`button-day-${index + 1}`}
    >
      <img src={img} alt={`Ngày ${index + 1}`} className="w-full h-auto block" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
        <span className="text-white text-xs font-bold tracking-wide">NGÀY {index + 1}</span>
      </div>
    </motion.button>
  );
}

export function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  const active = openIndex !== null ? days[openIndex] : null;

  return (
    <section id="curriculum" className="py-24 bg-[#140728] relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-violet-900/25 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-4">
            HÀNH TRÌNH 7 NGÀY TÁI THIẾT AN TOÀN NỘI TÂM CỦA BẠN BẮT ĐẦU TỪ ĐÂY
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-2">
            7 chặng đưa bạn từ trạng thái sinh tồn trở về cảm giác an toàn, xứng đáng và vững vàng bên trong.
          </p>
          <p className="text-gray-400 text-sm">Bấm vào từng ngày để xem chi tiết bạn sẽ học gì.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5 mt-10">
          {days.slice(0, 4).map((d, i) => (
            <DayCard key={i} img={d.img} index={i} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12 md:max-w-3xl md:mx-auto">
          {days.slice(4).map((d, i) => (
            <DayCard key={i + 4} img={d.img} index={i + 4} onOpen={() => setOpenIndex(i + 4)} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-curriculum"
            className="group inline-flex items-center justify-between gap-4 px-8 py-4 md:py-5 rounded-none font-bold text-base md:text-lg text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.4)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.65)] max-w-xl w-full sm:w-auto mx-auto"
          >
            <span className="tracking-wide whitespace-nowrap">TÔI MUỐN ĐI TRÊN HÀNH TRÌNH 7 NGÀY NÀY</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <TrustBar dark />
        </motion.div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-lg w-[92vw] bg-[#1a0a2e] border border-[#C9A84C]/30 text-gray-100 p-0 overflow-hidden rounded-2xl">
          {active && (
            <div>
              <img src={active.img} alt={active.title} className="w-full h-auto block" />
              <div className="p-6">
                <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">
                  Ngày {openIndex !== null ? openIndex + 1 : ""}
                </span>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-[#F5D78E] mt-2 mb-3 leading-snug">
                  {active.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">{active.lead}</p>
                <ul className="space-y-2">
                  {active.points.map((p, i) => (
                    <li key={i} className="flex gap-2.5 text-sm md:text-base text-gray-200">
                      <span className="text-[#C9A84C] mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
