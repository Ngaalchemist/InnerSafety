import { motion } from "framer-motion";
import { ChevronRight, Monitor, Zap, Users, Infinity, BrainCircuit, Leaf, HeartHandshake } from "lucide-react";
import instructorImg from "@/assets/images/instructor-beach.jpg";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Điều hòa hệ thần kinh trước khi thay đổi niềm tin",
    desc: "Một hệ thần kinh luôn ở chế độ báo động sẽ rất khó tiếp nhận những suy nghĩ tích cực. Vì vậy, sự thay đổi cần bắt đầu từ cơ thể trước.",
  },
  {
    icon: Leaf,
    title: "Chuyển hóa nhiều lớp cùng lúc",
    desc: "Không chỉ làm việc với suy nghĩ, mà đồng thời đi qua cơ thể, cảm xúc và những niềm tin nằm sâu trong tiềm thức để tạo nên sự thay đổi bền vững.",
  },
  {
    icon: HeartHandshake,
    title: "Xây lại cảm giác an toàn từ bên trong",
    desc: "Để giá trị của bạn không còn phụ thuộc vào tiền bạc, thành tựu hay sự công nhận của người khác, mà đến từ chính sự vững vàng bên trong.",
  },
];

const ctaBadges = [
  { icon: Monitor, label: "Học online" },
  { icon: Zap, label: "Bắt đầu ngay" },
  { icon: Users, label: "Có người đồng hành" },
  { icon: Infinity, label: "Truy cập trọn đời" },
];

export function InstructorSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#FAF6EC] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs md:text-sm cta-label uppercase tracking-[0.3em] text-[#A67C2E] mb-3">
            Inner Safety Method™
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#16241c] tracking-wide">
            Chào bạn, mình là Nga Alchemist
          </h2>
          <p className="mt-4 text-[#3F5C48] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Mình đồng hành cùng những người đang đi qua biến cố tìm lại cảm giác an toàn bên trong, để
            dù cuộc đời có thay đổi thế nào, họ vẫn không đánh mất chính mình.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl border border-[#C9A24C]/25 mb-12 max-w-md mx-auto"
        >
          <img src={instructorImg} alt="Nga Alchemist" className="w-full object-cover" />
        </motion.div>

        <div className="space-y-5 text-[#2c3b31] leading-[1.9] text-base md:text-lg">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Mình không bắt đầu hành trình này từ sách vở hàn lâm. Mình bắt đầu từ chính những vỡ vụn
            của đời mình: sự sụp đổ của một cuộc hôn nhân và giai đoạn kiệt quệ tài chính.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Giai đoạn đó, mình đã thử đủ mọi cách: đọc sách, thiền định, trị liệu thôi miên... Mỗi
            cách giúp mình tốt hơn một chút, nhưng chỉ cần một kích hoạt nhỏ, nỗi sợ cũ lại tràn về.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Điều khiến mình bối rối nhất là: ngay cả khi đã trở thành người thực hành thôi miên trị
            liệu, mỗi ngày đồng hành cùng người khác và liên tục làm việc với chính mình, mình vẫn bị
            cuốn vào những phản ứng cũ mỗi khi cuộc sống chạm đúng vết thương cũ.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif font-semibold text-[#16241c] text-xl md:text-2xl leading-snug"
          >
            "Hiểu vấn đề thôi chưa đủ, thiền định và thực hành cũng chưa đủ. Muốn thay đổi thật sự,
            phải có một hệ thống đi từ gốc."
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Từ quá trình nghiên cứu, thực hành và đồng hành cùng hơn 500 khách hàng, mình dần hệ thống
            hóa thành{" "}
            <span className="font-semibold text-[#16241c]">Inner Safety Method™</span> — một phương
            pháp giúp đưa cơ thể thoát khỏi trạng thái sinh tồn trước, rồi từng bước chuyển hóa cảm
            xúc, niềm tin và cảm giác về chính mình. Đó cũng là nền tảng của{" "}
            <span className="font-semibold text-[#16241c]">Inner Safety Experience™</span>.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl p-7 md:p-9 bg-gradient-to-br from-[#12201a] to-[#0e1712] border border-[#C9A24C]/30 shadow-xl"
        >
          <p className="text-center text-[#C9A24C] cta-label uppercase text-xs md:text-sm mb-6">Phương pháp được xây dựng trên 3 nguyên tắc cốt lõi</p>
          <ul className="space-y-7">
            {pillars.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A24C]/15 border border-[#C9A24C]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <p.icon className="w-5 h-5 text-[#C9A24C]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#F2E6C4] text-lg md:text-xl mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-gray-200 leading-[1.9] text-base md:text-lg">{p.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[#16241c] font-serif font-bold text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-2">
            Mình không ở đây để dạy bạn cách né tránh biến cố.
          </p>
          <p className="text-[#3F5C48] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Mình ở đây để đồng hành giúp bạn đủ vững vàng đi qua sóng gió mà không đánh mất chính mình.
            Nếu bạn đã sẵn sàng ngừng gồng mình để mạnh mẽ, mình sẽ rất vinh dự được đồng hành cùng bạn.
          </p>
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-guide"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-sm text-[#0e1712] bg-[#C9A24C] hover:bg-[#E4C77E] transition-all shadow-[0_8px_30px_rgba(201,162,76,0.35)] hover:shadow-[0_14px_44px_rgba(201,162,76,0.6)] mx-auto"
          >
            <span className="cta-label uppercase whitespace-nowrap text-base md:text-lg">Tôi Chọn Tìm Lại Sự An Toàn Bên Trong</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {ctaBadges.map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-sm md:text-base text-[#3F5C48] font-medium"
              >
                <b.icon className="w-4 h-4 text-[#A67C2E]" />
                {b.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
