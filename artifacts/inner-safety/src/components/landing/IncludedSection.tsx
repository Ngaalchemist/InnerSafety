import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, FileText, Headphones, Sparkles, ListChecks, Coins, Users } from 'lucide-react';
import bundleImage from '../../../../../attached_assets/beyond-fear-healing-bundle.jpg';

const included = [
  {
    icon: Video,
    text: '7 buổi học video có hướng dẫn thực hành hàng ngày'
  },
  {
    icon: FileText,
    text: 'Workbook đi kèm — Bộ công cụ T.P.P (Trigger → Persona → Pattern Interrupt)'
  },
  {
    icon: Headphones,
    text: 'Audio "Emergency Reset 5 Phút" — sơ cứu hệ thần kinh khi bị trigger hoảng loạn'
  },
  {
    icon: Sparkles,
    text: 'Danh sách "Lời khẳng định I am Word" dùng mỗi sáng'
  },
  {
    icon: ListChecks,
    text: 'Bảng "Nặng vs Nhẹ" — công cụ ra quyết định nhanh'
  },
  {
    icon: Coins,
    text: 'Nghi thức "Hợp đồng mới với Tiền" — tháo gỡ nỗi sợ thiếu hụt tài chính'
  },
  {
    icon: Users,
    text: 'Cộng đồng học viên đồng hành suốt hành trình'
  }
];

export function IncludedSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Bạn Nhận Được Gì<br />Trong Khóa Học?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-5xl mx-auto mb-12 sm:mb-16"
        >
          <img
            src={bundleImage}
            alt="Beyond Fear Healing Bundle — trọn bộ 7 công cụ chuyển hóa"
            className="w-full h-auto rounded-2xl shadow-2xl border border-border/30"
            data-testid="img-included-bundle"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 sm:gap-6">
          {included.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-start gap-4 p-4 sm:p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              data-testid={`included-item-${idx}`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
