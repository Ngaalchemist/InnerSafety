import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

export function FinalCtaSection() {
  const scrollToReg = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-28 relative overflow-hidden bg-[#0e1712]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-7"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F2E6C4] leading-tight">
            Đừng Để Thêm Một Đêm Nữa Trôi Qua Trong Lo Âu
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Trong khi nhiều người cùng hoàn cảnh vẫn đang loay hoay một mình mỗi đêm, bạn có thể là
            người bắt đầu tìm lại cảm giác an toàn bên trong — chỉ với 7 ngày và một hệ thống đã được
            xây dựng bài bản.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Bạn đã đọc đến tận đây. Điều đó có nghĩa một phần trong bạn đã sẵn sàng cho một điều gì đó
            khác đi rồi. 7 ngày tới, bạn có thể tiếp tục vòng lặp cũ: cố gắng, kiệt sức, tự trách, rồi
            lại cố gắng. Hoặc bạn có thể là người bắt đầu trước, ngay hôm nay.
          </p>

          <div className="space-y-5 pt-2">
            <CtaButton
              onClick={scrollToReg}
              className="text-lg md:text-xl px-12 py-6 shadow-[0_0_60px_rgba(201,162,76,0.5)] bg-[#C9A24C] text-[#0e1712] hover:bg-[#E4C77E]"
              data-testid="button-cta-final"
            >
              Giữ Ưu Đãi Cho Tôi Ngay Bây Giờ
            </CtaButton>
            <p className="text-[#C9A24C] text-sm md:text-base">
              ⏳ Chỉ còn 1.111.111đ (giá gốc 4.444.444đ) — chỉ mở cho 100 người đăng ký đầu tiên
            </p>
            <TrustBar dark />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
