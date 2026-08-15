import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, FileText, Headphones, Scale, Coins, Users } from 'lucide-react';
import bundleImage from '../../../../../attached_assets/beyond-fear-healing-bundle.jpg';

// The core 7-day video journey is the actual product (Inner Safety
// Method™) — kept visually separate from the tools below it, instead of
// sitting in the same grid as a workbook or a decision-making chart.
// Otherwise the whole section reads as "a bundle of files" rather than
// "a method, plus tools that support it".
const core = {
  icon: Video,
  title: '7 Buổi Video Thực Hành',
  desc: 'Mỗi ngày 20 phút — từng bước tháo gỡ những tầng khác nhau của nỗi sợ, từ cơ thể, cảm xúc đến niềm tin và danh tính.'
};

const tools = [
  {
    icon: FileText,
    title: 'Healing Workbook',
    desc: 'Bộ bài tập giúp bạn nhận ra điều gì kích hoạt nỗi sợ, cách bạn thường phản ứng, và cách phá vòng lặp cũ.'
  },
  {
    icon: Headphones,
    title: 'I AM Word — Audio "Tôi Đủ"',
    desc: 'Bản ghi âm giúp củng cố self-worth và xây dựng lại cảm giác: "Tôi đủ."'
  },
  {
    icon: Headphones,
    title: 'Emergency Reset 5 Phút',
    desc: 'Audio ngắn dùng ngay khi bị trigger, hoảng hoặc overthinking — giúp bạn nhanh chóng quay về trạng thái bình tĩnh.'
  },
  {
    icon: Scale,
    title: 'Nặng vs Nhẹ — Công Cụ Ra Quyết Định',
    desc: 'Giúp bạn nhận ra điều gì đang khiến mình co lại, và đưa ra quyết định nhẹ nhàng hơn.'
  },
  {
    icon: Coins,
    title: 'Làm Hoà Với Tiền',
    desc: 'Một bài thực hành giúp bạn nhìn lại mối quan hệ với Tiền và tháo gỡ nỗi sợ thiếu hụt.'
  }
];

const support = {
  icon: Users,
  title: 'Private Community',
  desc: 'Cộng đồng đồng hành trong suốt hành trình 7 ngày — bạn không đi một mình.'
};

function IncludedCard({
  icon: Icon,
  title,
  desc,
  delay,
  isInView,
  testId
}: {
  icon: typeof Video;
  title: string;
  desc: string;
  delay: number;
  isInView: boolean;
  testId: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex items-start gap-4 p-4 sm:p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
      data-testid={testId}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </div>
      <div>
        <p className="text-sm sm:text-base font-semibold text-foreground mb-1">{title}</p>
        <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

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
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Bạn Nhận Được Gì<br />Trong 7 Ngày?
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-xl mx-auto">
            Không chỉ là 7 bài học. Bạn có một bộ công cụ để làm việc với nỗi sợ ngay khi nó
            xuất hiện.
          </p>
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

        {/* CORE — the actual method, visually distinct from the tools below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-6 sm:mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-primary mb-3 text-center sm:text-left">
            Chương trình chính
          </p>
          <div
            className="flex items-start gap-4 sm:gap-5 p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 border-2 border-primary/30"
            data-testid="included-core"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <core.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-foreground mb-1.5">{core.title}</p>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">{core.desc}</p>
            </div>
          </div>
        </motion.div>

        {/* TOOLS — support the core method, kept visually one tier lighter */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3 text-center sm:text-left">
            Công cụ đi kèm
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {tools.map((item, idx) => (
              <IncludedCard
                key={idx}
                {...item}
                delay={0.1 + idx * 0.08}
                isInView={isInView}
                testId={`included-tool-${idx}`}
              />
            ))}
          </div>
        </div>

        {/* SUPPORT */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3 text-center sm:text-left">
            Đồng hành
          </p>
          <IncludedCard
            {...support}
            delay={0.5}
            isInView={isInView}
            testId="included-support"
          />
        </div>

        {/* Value framing before the CTA that already follows this section
            on the page — no button here, to avoid a duplicate CTA. */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-center text-sm sm:text-base text-foreground/60 italic leading-relaxed"
        >
          Giá trị của toàn bộ chương trình không nằm ở số lượng tài liệu bạn nhận được — mà ở
          việc bạn có một hệ thống để tiếp tục làm việc với nỗi sợ, ngay cả sau khi 7 ngày kết thúc.
        </motion.p>
      </div>
    </section>
  );
}
