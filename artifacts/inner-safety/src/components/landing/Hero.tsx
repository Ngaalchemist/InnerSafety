import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Monitor,
  Users,
  Infinity as InfinityIcon,
  Star,
  Brain,
  RotateCcw,
  Unlock,
  Zap,
  Sprout,
  BookOpen,
} from 'lucide-react';
import cosmicTreeBg from '@assets/cay_hoang_hon.jpg';

// Self-loads the Google Fonts so the bold condensed headline and the
// display-serif header text render correctly even if the project's
// global CSS doesn't import them.
const GOOGLE_FONT_ID = 'font-anton-playfair';
function useAntonFont() {
  useEffect(() => {
    if (document.getElementById(GOOGLE_FONT_ID)) return;
    const link = document.createElement('link');
    link.id = GOOGLE_FONT_ID;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:ital,wght@0,700;1,600&family=Bodoni+Moda:wght@600;700&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
  }, []);
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const PURPLE = '#C084FC';
const GOLD = '#FBBF24';
const INK = '#0D0B18';

// ── QUOTE OVERLAY POSITION ──
// Tune these 3 values yourself to move the quote — no need to touch the JSX below.
// QUOTE_TOP:   '%' from the top of the hero section. Bigger number = lower on the page.
// QUOTE_RIGHT: '%' distance from the right edge. Bigger number = further LEFT (closer to the tree).
//              Smaller number (or negative) = further RIGHT (closer to the screen edge).
// QUOTE_WIDTH: max width in px. Narrower = text wraps onto more lines (taller, skinnier block).
const QUOTE_TOP = '30%';
const QUOTE_RIGHT = '-11%';
const QUOTE_WIDTH = 340;

// Decorative " " marks — positioned with `position: absolute` relative to the
// quote block below, so their placement never depends on how many lines the
// quote text wraps to or on font line-height quirks.
// OPEN_QUOTE_TOP:    px offset from the top of the quote block. More negative = higher above the text.
// CLOSE_QUOTE_BOTTOM: px offset from the bottom of the quote block. More negative = lower below the text.
const OPEN_QUOTE_TOP = '-34px';
const CLOSE_QUOTE_BOTTOM = '-34px';

// Quick-facts pill row — surfaces the 3 things people scan for first
// (time cost, format, difficulty) right next to the headline instead of
// being buried inside the long subheadline paragraph.
const quickFacts = [
  { icon: Zap, label: 'Chỉ 20 phút/ngày' },
  { icon: Monitor, label: 'Học mọi lúc, mọi nơi' },
  { icon: ShieldCheck, label: 'Không cần kinh nghiệm' },
];

// Short reassurance bullets under the subheadline
const checklist = [
  'Dám làm điều mình muốn mà không còn bị nỗi sợ kéo lùi.',
  'Ra quyết định mà không còn bị lo âu hay suy nghĩ quá nhiều chi phối.',
  'Tin vào chính mình và không còn luôn tự hỏi: “Mình có đủ tốt không?”."',
];

// 5 feature icons — mirrors the 5 checklist outcomes from the reference mockup
const featureGrid = [
  {
    icon: Sprout,
    title: 'Tháo gỡ gốc rễ nỗi sợ',
    desc: 'Cảm giác an toàn bền vững từ bên trong.',
  },
  {
    icon: Brain,
    title: 'Bình tĩnh khi bị trigger',
    desc: 'Làm dịu hệ thần kinh chỉ trong vài phút.',
  },
  {
    icon: RotateCcw,
    title: 'Giảm overthinking',
    desc: 'Ngừng suy nghĩ lặp lại vô tận.',
  },
  {
    icon: Unlock,
    title: 'Tháo gỡ niềm tin giới hạn',
    desc: 'Giải phóng những niềm tin kéo bạn lại.',
  },
  {
    icon: Zap,
    title: 'Dám hành động dù còn sợ',
    desc: 'Không chờ tự tin mới bắt đầu.',
  },
];

// Bottom trust strip — full-bleed bar at the base of the hero
const trustStrip = [
  { icon: Monitor, label: 'Học online', sub: 'mọi lúc, mọi nơi' },
  { icon: InfinityIcon, label: 'Truy cập ngay', sub: 'sau khi đăng ký' },
  { icon: ShieldCheck, label: 'Hoàn tiền 7 ngày', sub: 'nếu không phù hợp' },
  { icon: Users, label: 'Cộng đồng riêng', sub: 'hỗ trợ 24/7' },
  { icon: BookOpen, label: 'Bài học ngắn gọn', sub: 'dễ hiểu, dễ áp dụng' },
];

export function Hero() {
  useAntonFont();

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      {/* Background image — scaled down so the tree reads smaller, matching the reference mockup */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={cosmicTreeBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'right center' }}
        />
      </div>

      {/* ── NAVBAR (unchanged: logo + course name + CTA only) ── */}
      <nav
        className="sticky top-0 z-30 px-4 sm:px-10 lg:px-12 py-2"
        style={{ backgroundColor: 'rgba(13,11,24,0.7)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <span className="flex items-baseline gap-2 min-w-0">
            <span
              className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.12em] shrink-0"
              style={{ color: GOLD, fontFamily: "'Inter', sans-serif" }}
            >
              Beyond Fear
            </span>
            <span className="hidden sm:inline w-px h-3.5 shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.25)' }} />
            <span
              className="hidden sm:inline text-sm sm:text-base italic truncate"
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Playfair Display', serif", fontWeight: 600, letterSpacing: '0.2px' }}
            >
              7 Ngày Từ Sợ Hãi Đến Bình An
            </span>
          </span>

          <button
            onClick={scrollToCTA}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-transform hover:scale-105"
            style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
            data-testid="button-nav-cta"
          >
            ĐĂNG KÝ NGAY
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      <div className="px-4 sm:px-10 lg:px-12 relative z-10 pt-2 pb-0 lg:pt-3">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-3 relative">

          {/* ── TEXT COLUMN (eyebrow through avatar/rating) ── */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col text-left lg:max-w-[62%]"
          >
            {/* Eyebrow 1 — rating */}
            <motion.div variants={fadeInUp} className="mb-3">
              <div className="flex items-center gap-1.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ color: GOLD, fill: GOLD }} />
                ))}
                <span className="text-white text-xs sm:text-sm font-bold ml-1">
                  4.9/5 từ hơn 500+ học viên
                </span>
              </div>
                       </motion.div>

            {/* Eyebrow 2 — Inner Safety Method */}
            <motion.div variants={fadeInUp} className="mb-5">
              <p
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] mb-1"
                style={{ color: PURPLE }}
              >
                Inner Safety Method™
              </p>
              <p className="text-white/60 text-xs sm:text-sm italic leading-snug max-w-none">
                Phương pháp độc quyền giúp bạn tháo gỡ bộ rễ của nỗi sợ để xây dựng cảm giác an toàn từ bên trong.
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="uppercase mb-5 whitespace-nowrap"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(1.9rem, 4.6vw, 3.4rem)',
                lineHeight: 1.15,
                letterSpacing: '1px',
              }}
            >
              <span className="block text-white">BEYOND FEAR</span>
              <span className="block" style={{ color: GOLD }}>
                7 NGÀY TỪ SỢ HÃI ĐẾN BÌNH AN
              </span>
            </motion.h1>

            {/* ── QUICK-FACTS PILLS — time / format / difficulty, answered in 2 seconds ── */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-4">
              {quickFacts.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-bold"
                  style={{
                    backgroundColor: 'rgba(192,132,252,0.10)',
                    border: '1px solid rgba(192,132,252,0.4)',
                    color: '#E9D5FF',
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                  }}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-white/75 text-sm sm:text-base leading-relaxed mb-2 max-w-none"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Bạn biết mình muốn thay đổi, nhưng {' '}
              <strong className="font-bold" style={{ color: PURPLE }}>
                nỗi sợ, lo lắng và những suy nghĩ quá nhiều
              </strong>{' '}
              vẫn khiến bạn  {' '}
              <strong className="font-bold" style={{ color: PURPLE }}> <br />
               chần chừ, tự nghi ngờ
              </strong>{' '}
              và không dám bước tới.
              <br />
              <span className="block lg:whitespace-nowrap">
                Hành trình{' '}
                <strong className="font-bold" style={{ color: PURPLE }}>
                  Beyond Fear™
                </strong>{' '}
              là hành trình 7 ngày giúp bạn {' '}
                <strong className="font-bold text-white">
                 hiểu điều gì đang khiến mình sợ và <br /> mắc kẹt, bình tĩnh lại khi nỗi sợ xuất hiện, từng bước tin tưởng vào chính mình và dám hành động.
                </strong>
              </span>
            </motion.p>

            {/* Reassurance bullets — 3 short lines, plain list */}
            <motion.ul variants={staggerContainer} className="space-y-1.5 max-w-2x1 mt-3 mb-5">
              {checklist.map((item) => (
                <motion.li variants={fadeInUp} key={item} className="flex items-center gap-2.5">
                  <span className="shrink-0 text-base leading-none" style={{ color: PURPLE }}>
                    ✦
                  </span>
                  <span className="font-bold text-sm leading-snug" style={{ color: '#E9D5FF' }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── QUOTE OVERLAY — sits subtly on the background image, at the ground line under the tree ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="hidden lg:block absolute z-[5] pointer-events-none text-left"
            style={{ right: QUOTE_RIGHT, top: QUOTE_TOP, maxWidth: `${QUOTE_WIDTH}px` }}
          >
            <div className="relative pointer-events-auto" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
              <span
                aria-hidden="true"
                className="select-none"
                style={{
                  position: 'absolute',
                  top: OPEN_QUOTE_TOP,
                  left: 0,
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: '56px',
                  lineHeight: 1,
                  color: PURPLE,
                  opacity: 0.9,
                }}
              >
                “
              </span>
              <p
                className="italic leading-snug"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  fontSize: '14px',
                  color: '#FFFFFF',
                  textShadow: '0 1px 8px rgba(0,0,0,0.6)',
                }}
              >
                Vấn đề không phải là cuộc đời bạn.
                <br />
                Mà là{' '}
                <span style={{ color: GOLD, fontWeight: 600 }}>
                  gốc rễ của nỗi sợ
                </span>
                <br />
                đang âm thầm chi phối cách bạn sống và lựa chọn.
              </p>
              <span
                aria-hidden="true"
                className="select-none"
                style={{
                  position: 'absolute',
                  bottom: CLOSE_QUOTE_BOTTOM,
                  right: 0,
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: '56px',
                  lineHeight: 1,
                  color: PURPLE,
                  opacity: 0.9,
                }}
              >
                ”
              </span>
            </div>
            <p
              className="mt-3 text-sm font-tracking-wide pointer-events-auto text-right"
              style={{ color: 'rgba(233,213,255,0.9)', fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              — Nga Alchemist
            </p>
          </motion.div>

          {/* ── PRICE BOX (left) + FEATURE GRID (right) — side by side, same row, like the mockup ── */}
          <div className="flex flex-col lg:flex-row gap-4 lg:items-stretch">
            {/* Price box + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-4 w-full lg:w-[46%] shrink-0"
              style={{
                border: `1px solid rgba(192,132,252,0.35)`,
                backgroundColor: 'rgba(13,11,24,0.6)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <p className="text-white/70 text-xs font-bold uppercase tracking-wide mb-2">
                Trải nghiệm 7 ngày
              </p>

              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-extrabold text-3xl sm:text-4xl">444.000đ</span>
                  <span className="text-white/40 text-base line-through">1.480.000đ</span>
                </div>
                <span
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide ml-auto"
                  style={{
                    backgroundColor: 'rgba(251,191,36,0.12)',
                    color: GOLD,
                    border: '1px solid rgba(251,191,36,0.4)',
                  }}
                >
                  TIẾT KIỆM 70%
                </span>
              </div>

              <button
                onClick={scrollToCTA}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full py-3 px-6 font-bold text-sm transition-transform hover:scale-[1.02] shadow-2xl text-center"
                style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
                data-testid="button-hero-cta"
              >
                🔥 TÔI MUỐN BẮT ĐẦU 7 NGÀY
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Feature grid — one continuous box with internal dividers, stretched to fill remaining width */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1 rounded-2xl overflow-hidden flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[rgba(192,132,252,0.18)]"
              style={{
                border: '1px solid rgba(192,132,252,0.35)',
                backgroundColor: 'rgba(13,11,24,0.6)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {featureGrid.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  variants={fadeInUp}
                  key={title}
                  className="flex flex-1 flex-col items-center justify-center text-center gap-1 p-2.5"
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" style={{ color: PURPLE }} strokeWidth={1.5} />
                  <p
                    className="text-white text-xs sm:text-[13px] uppercase tracking-wide leading-tight"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 600, letterSpacing: '0.3px' }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-white/55 text-[10px] leading-tight"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 300 }}
                  >
                    {desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM TRUST STRIP — full-bleed bar across the entire hero width ── */}
      <div
        className="relative z-10 mt-0"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: 'rgba(13,11,24,0.75)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 lg:px-12 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-4">
          {trustStrip.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="w-6 h-6 shrink-0" style={{ color: PURPLE }} />
              <div>
                <p
                  className="text-white text-sm leading-tight"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 600, letterSpacing: '0.2px' }}
                >
                  {label}
                </p>
                <p
                  className="text-white/50 text-xs leading-tight"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 300 }}
                >
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
