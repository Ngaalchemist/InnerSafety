import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, FileText, Users, Headphones, Scale, Zap, Infinity as InfinityIcon, Repeat } from 'lucide-react';
import bundleImage from '../../../../../attached_assets/beyond-fear-healing-bundle.jpg';

// The core 7-day program is the actual product (Inner Safety Method™).
// Rendered as ONE continuous panel — a "manuscript" the four pieces
// live inside, joined by a spine of light — rather than four equal
// boxes, so it reads as a single relic worth having, not a feature grid.
const coreProgram = [
  {
    icon: Video,
    title: '7 Buổi Video Thực Hành',
    desc: 'Mỗi ngày 20 phút — từng bước tháo gỡ những tầng khác nhau của nỗi sợ, từ cơ thể, cảm xúc đến niềm tin và danh tính.'
  },
  {
    icon: FileText,
    title: 'Healing Workbook',
    desc: 'Bộ bài tập giúp bạn nhận ra điều gì kích hoạt nỗi sợ, cách bạn thường phản ứng, và cách phá vòng lặp cũ.'
  },
  {
    icon: Users,
    title: 'Private Community',
    desc: 'Cộng đồng đồng hành trong suốt hành trình 7 ngày — bạn không đi một mình.'
  },
  {
    icon: Repeat,
    title: '21 Ngày Duy Trì Tần Số An Toàn',
    desc: 'Audio thực hành mỗi ngày trong 21 ngày sau khóa học, giúp bạn duy trì tần số bình an và tiếp tục củng cố cảm giác an toàn đã xây dựng trong 7 ngày.'
  }
];

// Quà tặng độc quyền — bonus tools that support the core method.
// Kept as a lighter, staggered set of cards: something you unlock,
// not something you're issued.
const giftBonuses = [
  {
    icon: Headphones,
    title: 'Emergency Reset 5 Phút',
    desc: 'Audio ngắn dùng ngay khi bị trigger, hoảng hoặc overthinking — giúp bạn nhanh chóng quay về trạng thái bình tĩnh.'
  },
  {
    icon: Headphones,
    title: 'Sleep Healing Audio — "Tôi Đủ"',
    desc: 'Bản ghi âm nghe vào buổi tối, giúp bạn chìm vào giấc ngủ trong khi tiềm thức âm thầm củng cố cảm giác an toàn và giá trị bản thân.'
  },
  {
    icon: Scale,
    title: 'Nặng vs Nhẹ — Công Cụ Ra Quyết Định',
    desc: 'Giúp bạn nhận ra điều gì đang khiến mình co lại, và đưa ra quyết định nhẹ nhàng hơn.'
  },
  {
    icon: Zap,
    title: 'Pattern Interrupt — Công Cụ Ngắt Vòng Lặp Phản Ứng',
    desc: 'Một kỹ thuật ngắt phản ứng cảm xúc tự động ngay khi trigger vừa xuất hiện — chỉ vài giây, đủ để bạn không bị cuốn vào vòng lặp cũ.'
  }
];

function CoreRow({
  icon: Icon,
  title,
  desc,
  delay,
  isInView,
  isLast,
  testId
}: {
  icon: typeof Video;
  title: string;
  desc: string;
  delay: number;
  isInView: boolean;
  isLast: boolean;
  testId: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`relative flex gap-4 sm:gap-6 ${isLast ? '' : 'pb-8 sm:pb-10'}`}
      data-testid={testId}
    >
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-primary/40 blur-md" />
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_25px_-4px] shadow-primary">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
        </div>
      </div>
      <div className="pt-1 sm:pt-2">
        <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1.5">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-foreground/65 leading-relaxed max-w-md">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function GiftCard({
  icon: Icon,
  title,
  desc,
  delay,
  isInView,
  offset,
  testId
}: {
  icon: typeof Video;
  title: string;
  desc: string;
  delay: number;
  isInView: boolean;
  offset: boolean;
  testId: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`group relative p-5 sm:p-6 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-accent/60 hover:-translate-y-1.5 transition-all duration-300 ${offset ? 'sm:mt-6' : ''}`}
      data-testid={testId}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:radial-gradient(circle_at_20%_0%,hsl(var(--accent)/0.12),transparent_70%)] pointer-events-none" />
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors duration-300">
        <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-accent" />
      </div>
      <p className="text-sm sm:text-base font-semibold text-foreground mb-1.5 font-serif">{title}</p>
      <p className="text-sm text-foreground/65 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export function IncludedSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 relative overflow-hidden">
      {/* Ambient cosmic glow — echoes the starfield already on the body */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] w-[420px] h-[420px] rounded-full bg-accent/15 blur-[110px]" />
        <div className="absolute bottom-0 right-[8%] w-[480px] h-[480px] rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-3 text-[11px] sm:text-xs tracking-[0.35em] uppercase text-primary/80 font-semibold mb-5">
            <span className="w-8 sm:w-10 h-px bg-primary/50" />
            Hành Trang Chuyển Hoá
            <span className="w-8 sm:w-10 h-px bg-primary/50" />
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.05] mb-5 sm:mb-6">
            Bạn Nhận Được Gì<br />
            <span className="italic text-gradient-gold">Trong 7 Ngày?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-xl mx-auto">
            Không chỉ là 7 bài học. Bạn có một bộ công cụ để làm việc với nỗi sợ ngay khi nó
            xuất hiện.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-5xl mx-auto mb-16 sm:mb-20"
        >
          <img
            src={bundleImage}
            alt="Beyond Fear Healing Bundle — trọn bộ 7 công cụ chuyển hóa"
            className="w-full h-auto rounded-2xl shadow-2xl border border-border/30"
            data-testid="img-included-bundle"
          />
        </motion.div>

        {/* CHƯƠNG TRÌNH CHÍNH — one continuous relic, not four equal boxes */}
        <div className="relative max-w-3xl mx-auto mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: -6 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -top-5 right-4 sm:right-10 z-20 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-br from-primary to-[hsl(40,90%,68%)] text-primary-foreground text-xs sm:text-sm font-bold shadow-[0_8px_24px_-6px] shadow-primary/60"
          >
            <InfinityIcon className="w-4 h-4" />
            Truy cập trọn đời
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2rem] sm:rounded-[2.5rem] border border-primary/25 bg-gradient-to-b from-card/70 to-card/30 backdrop-blur-sm p-7 sm:p-12 pt-10 sm:pt-14 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.12),transparent_65%)] pointer-events-none" />

            <p className="relative text-xs sm:text-sm tracking-[0.3em] uppercase text-primary font-bold mb-8 sm:mb-10 text-center">
              Chương Trình Chính
            </p>

            <div className="relative">
              {/* spine of light connecting the four pieces */}
              <div className="absolute left-6 sm:left-7 top-2 bottom-2 w-px bg-gradient-to-b from-primary/70 via-accent/40 to-transparent hidden sm:block" />
              {coreProgram.map((item, idx) => (
                <CoreRow
                  key={idx}
                  {...item}
                  delay={0.1 + idx * 0.1}
                  isInView={isInView}
                  isLast={idx === coreProgram.length - 1}
                  testId={`included-core-${idx}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* QUÀ TẶNG ĐỘC QUYỀN — lighter, staggered, something unlocked */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent font-bold mb-8 text-center">
            ✦ Quà Tặng Độc Quyền ✦
          </p>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {giftBonuses.map((item, idx) => (
              <GiftCard
                key={idx}
                {...item}
                delay={0.1 + idx * 0.1}
                isInView={isInView}
                offset={idx % 2 === 1}
                testId={`included-gift-${idx}`}
              />
            ))}
          </div>
        </div>

        {/* Value framing before the CTA that already follows this section
            on the page — no button here, to avoid a duplicate CTA. */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-center text-lg sm:text-xl font-serif italic text-foreground/70 leading-relaxed"
        >
          "Giá trị của toàn bộ chương trình không nằm ở số lượng tài liệu bạn nhận được — mà ở
          việc bạn có một hệ thống để tiếp tục làm việc với nỗi sợ, ngay cả sau khi 7 ngày kết thúc."
        </motion.p>
      </div>
    </section>
  );
}
