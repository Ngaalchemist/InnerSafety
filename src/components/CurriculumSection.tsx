import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Coins, Gem, Wind, Flame, KeyRound, Sunrise, type LucideIcon } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CtaButton, TrustBar } from "./CtaButton";

// GHI CHÚ: khi bạn gửi 7 ảnh minh họa cho từng ngày, chỉ cần import ảnh (vd: day1 from
// "@/assets/images/day-1.png") và truyền vào field `img` bên dưới — card sẽ tự hiển thị ảnh
// thay cho icon, không cần sửa gì thêm ở phần layout/hover.
const days: { icon: LucideIcon; title: string; lead: string; points: string[]; img?: string }[] = [
  {
    icon: ShieldCheck,
    title: "Tôi An Toàn: Điều Hòa Hệ Thần Kinh",
    lead: "Bạn sẽ hiểu vì sao cơ thể luôn trong trạng thái báo động, và học cách đưa hệ thần kinh trở về bình an — bước nền tảng trước khi làm bất cứ điều gì khác.",
    points: [
      "Vì sao cơ thể luôn ở trạng thái báo động dù không có nguy hiểm thật",
      "Kỹ thuật đưa hệ thần kinh trở về bình an ngay trong buổi học đầu tiên",
      "Nền tảng bắt buộc trước khi làm việc với cảm xúc và niềm tin",
    ],
  },
  {
    icon: Coins,
    title: "Tôi Không Còn Sợ: Chữa Lành Nỗi Sợ Về Tiền",
    lead: "Bạn sẽ nhìn thấy gốc rễ của nỗi sợ thiếu thốn, và bắt đầu viết lại mối quan hệ của mình với tiền bạc. Giải mã kịch bản sinh tồn & nghiệp tổ tiên (Luân xa 1).",
    points: [
      "Giải mã kịch bản sinh tồn liên quan đến tiền bạc",
      "Nhận diện niềm tin về tiền được thừa hưởng từ gia đình, tổ tiên",
      "Bắt đầu viết lại mối quan hệ của mình với tiền",
    ],
  },
  {
    icon: Gem,
    title: "Tôi Xứng Đáng: Giải Phóng Xấu Hổ, Khôi Phục Giá Trị",
    lead: "Bạn sẽ hiểu sự khác nhau giữa xấu hổ và cảm giác có lỗi, và bắt đầu khôi phục lại giá trị bản thân từ bên trong.",
    points: [
      "Phân biệt xấu hổ (shame) và cảm giác có lỗi (guilt)",
      "Giải phóng những lớp xấu hổ âm thầm điều khiển hành vi",
      "Khôi phục giá trị bản thân không phụ thuộc người khác",
    ],
  },
  {
    icon: Wind,
    title: "Tôi Làm Chủ Cảm Xúc: Dừng Overthinking",
    lead: "Bạn sẽ có công cụ thực tế để không bị cuốn theo cảm xúc mỗi khi bị kích hoạt, dùng được ngay trong đời sống hằng ngày.",
    points: [
      "Công cụ dừng overthinking ngay khi nó bắt đầu",
      "Cách quay về hiện tại thay vì sống trong kịch bản tưởng tượng",
      "Thực hành dùng được ngay trong đời sống hằng ngày",
    ],
  },
  {
    icon: Flame,
    title: "Tôi Có Quyền Năng: Đánh Thức Ý Chí Nội Tại",
    lead: "Bạn sẽ đánh thức lại nguồn năng lượng và sự tự tin để bắt đầu lại, dù chưa biết chương tiếp theo của cuộc đời sẽ ra sao.",
    points: [
      "Đánh thức nguồn năng lượng và ý chí nội tại",
      "Lấy lại sự tự tin để bắt đầu lại từ đầu",
      "Vững vàng dù chưa biết chương tiếp theo sẽ ra sao",
    ],
  },
  {
    icon: KeyRound,
    title: "Tôi Thu Hồi Năng Lượng: Ranh Giới Lành Mạnh",
    lead: "Bạn sẽ học cách nhận diện điều gì đang rút cạn năng lượng của mình, và xây ranh giới để bảo vệ bản thân mà không thấy tội lỗi.",
    points: [
      "Nhận diện điều gì đang rút cạn năng lượng của mình",
      "Xây ranh giới lành mạnh để bảo vệ bản thân",
      "Nói \"không\" mà không còn thấy tội lỗi",
    ],
  },
  {
    icon: Sunrise,
    title: "Tôi Tái Sinh: Đồng Bộ Tim - Não, Ký Giao Ước Mới",
    lead: "Bạn sẽ hoàn tất hành trình với một nền tảng an toàn mới, và một cam kết cụ thể để duy trì sự bình an sau khi khóa học kết thúc.",
    points: [
      "Bài thực hành đồng bộ Tim - Não để tích hợp thay đổi",
      "Ký một giao ước mới với chính mình",
      "Kế hoạch cụ thể để duy trì sự bình an sau khóa học",
    ],
  },
];

function DayCard({ day, index, onOpen }: { day: (typeof days)[number]; index: number; onOpen: () => void }) {
  const Icon = day.icon;
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.08 }}
      whileHover={{ scale: 1.07, y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A24C]/60 shadow-lg hover:shadow-[0_20px_55px_rgba(201,162,76,0.4)] transition-shadow cursor-pointer text-left bg-gradient-to-br from-[#16241c] to-[#0e1712] p-5 flex flex-col justify-between min-h-[180px]"
      style={{ transformOrigin: "center" }}
      data-testid={`button-day-${index + 1}`}
    >
      {day.img ? (
        <img src={day.img} alt={`Ngày ${index + 1}`} className="w-full h-auto block rounded-lg mb-3" />
      ) : (
        <div className="w-11 h-11 rounded-full bg-[#C9A24C]/15 border border-[#C9A24C]/40 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-[#C9A24C]" />
        </div>
      )}
      <div>
        <span className="text-[#C9A24C] text-[10px] cta-label uppercase tracking-wider">Ngày {index + 1}</span>
        <p className="text-white text-sm md:text-base font-semibold leading-snug mt-1">{day.title}</p>
      </div>
    </motion.button>
  );
}

export function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  const active = openIndex !== null ? days[openIndex] : null;
  const ActiveIcon = active?.icon;

  return (
    <section id="curriculum" className="py-24 bg-[#0e1712] relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-emerald-900/25 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A24C]/8 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F2E6C4] mb-4">
            Hành Trình 7 Ngày Tái Thiết An Toàn Nội Tâm Của Bạn Bắt Đầu Từ Đây
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-2">
            7 chặng đưa bạn từ trạng thái sinh tồn trở về cảm giác an toàn, xứng đáng và vững vàng bên trong.
          </p>
          <p className="text-gray-400 text-sm">Bấm vào từng ngày để xem chi tiết bạn sẽ học gì.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5 mt-10">
          {days.slice(0, 4).map((d, i) => (
            <DayCard key={i} day={d} index={i} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12 md:max-w-3xl md:mx-auto">
          {days.slice(4).map((d, i) => (
            <DayCard key={i + 4} day={d} index={i + 4} onOpen={() => setOpenIndex(i + 4)} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-curriculum"
            className="group inline-flex items-center justify-between gap-4 px-8 py-4 md:py-5 rounded-sm text-[#0e1712] bg-[#C9A24C] hover:bg-[#E4C77E] transition-all shadow-[0_8px_30px_rgba(201,162,76,0.4)] hover:shadow-[0_14px_44px_rgba(201,162,76,0.65)] max-w-xl w-full sm:w-auto mx-auto"
          >
            <span className="cta-label uppercase whitespace-nowrap text-base md:text-lg">Tôi Muốn Đi Trên Hành Trình 7 Ngày Này</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <TrustBar dark />
        </motion.div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-lg w-[92vw] bg-[#12201a] border border-[#C9A24C]/30 text-gray-100 p-0 overflow-hidden rounded-2xl">
          {active && ActiveIcon && (
            <div>
              <div className="bg-gradient-to-br from-[#16241c] to-[#0e1712] p-8 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A24C]/15 border border-[#C9A24C]/40 flex items-center justify-center">
                  <ActiveIcon className="w-8 h-8 text-[#C9A24C]" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-[#C9A24C] text-xs cta-label uppercase">
                  Ngày {openIndex !== null ? openIndex + 1 : ""}
                </span>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-[#F2E6C4] mt-2 mb-3 leading-snug">
                  {active.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">{active.lead}</p>
                <ul className="space-y-2">
                  {active.points.map((p, i) => (
                    <li key={i} className="flex gap-2.5 text-sm md:text-base text-gray-200">
                      <span className="text-[#C9A24C] mt-1">•</span>
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
