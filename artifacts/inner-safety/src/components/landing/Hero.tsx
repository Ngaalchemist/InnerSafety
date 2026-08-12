import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Heart,
  Brain,
  Flower2,
  Sparkles,
  Eye,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Star,
} from 'lucide-react';
import meditationImg from '@assets/nguoi_phu_nu_thien.jpg';

// Self-loads the Google Fonts so the display-serif headline and the
// Be Vietnam Pro body text render correctly even if the project's
// global CSS doesn't import them.
const GOOGLE_FONT_ID = 'font-playfair-bevietnam';
function useHeroFonts() {
  useEffect(() => {
    if (document.getElementById(GOOGLE_FONT_ID)) return;
    const link = document.createElement('link');
    link.id = GOOGLE_FONT_ID;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap';
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
const CARD_BG = 'rgba(192,132,252,0.06)';
const CARD_BORDER = '1px solid rgba(192,132,252,0.25)';

// The three "method" pillars, shown as small icon cards under the intro paragraph
const methodPillars = [
  { icon: Brain, line1: 'Điều hòa', line2: 'hệ thần kinh' },
  { icon: Flower2, line1: 'Chữa lành', line2: 'gốc rễ cảm xúc' },
  { icon: Sparkles, line1: 'Thực hành', line2: 'chuyển hóa' },
];

// "Sau 7 ngày, bạn sẽ có thể..." outcome cards
const outcomeCards = [
  {
    icon: Eye,
    title: 'Dám xuất hiện',
    desc: 'mà không còn bị nỗi sợ giữ chân.',
  },
  {
    icon: Compass,
    title: 'Ra quyết định',
    desc: 'từ sự bình an thay vì lo âu và overthinking.',
  },
  {
    icon: ShieldCheck,
    title: 'Bình tĩnh trước',
    desc: 'những điều từng khiến bạn hoảng sợ.',
  },
  {
    icon: Heart,
    title: 'Tin vào chính mình',
    desc: 'và thật sự cảm thấy: “Mình đã đủ.”',
  },
];

// "Nếu bạn đang..." checklist
const painPoints = [
  'Luôn suy nghĩ quá nhiều trước mỗi quyết định.',
  'Trì hoãn vì sợ thất bại hoặc sợ bị đánh giá.',
  'Dễ lo lắng, căng thẳng và cảm thấy mất kết nối với chính mình.',
  'Muốn thay đổi nhưng luôn có một điều gì đó giữ bạn lại.',
];

export function Hero() {
  useHeroFonts();

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      {/* ── NAVBAR ── */}
      <nav
        className="sticky top-0 z-30 px-4 sm:px-10 lg:px-12 py-2"
        style={{ backgroundColor: 'rgba(13,11,24,0.85)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
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
              Từ Lo Âu Đến Bình An Trong 7 Ngày
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

      <div className="px-4 sm:px-10 lg:px-12 relative z-10 pt-6 pb-8 lg:pt-8">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-7">

          {/* ── TOP ROW: text column + meditation image ── */}
          <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
            {/* Text column */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col text-left lg:w-[54%]"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="mb-3">
                <span
                  className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full"
                  style={{
                    color: PURPLE,
                    border: '1px solid rgba(192,132,252,0.45)',
                    backgroundColor: 'rgba(192,132,252,0.08)',
                  }}
                >
                  Inner Safety Method™
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={fadeInUp} className="mb-3">
                <span
                  className="block italic"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: 'clamp(2.4rem, 5.2vw, 3.75rem)',
                    lineHeight: 1.1,
                    background: `linear-gradient(90deg, ${GOLD}, #F0ABFC)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Beyond Fear
                </span>
                <span
                  className="block text-white mt-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: 'clamp(1.25rem, 2.6vw, 1.75rem)',
                    lineHeight: 1.25,
                  }}
                >
                  Từ lo âu đến bình an trong 7 ngày
                </span>
              </motion.h1>

              {/* Intro line with heart icon */}
              <motion.p
                variants={fadeInUp}
                className="flex items-start gap-2 text-white/80 text-sm sm:text-base leading-relaxed mb-4"
              >
                <Heart className="w-4 h-4 mt-1 shrink-0" style={{ color: PURPLE }} />
                <span>
                  Lấy lại{' '}
                  <strong className="font-bold" style={{ color: PURPLE }}>
                    cảm giác an toàn
                  </strong>{' '}
                  từ bên trong để sống, yêu và hành động mà không còn bị nỗi sợ điều khiển.
                </span>
              </motion.p>

              {/* Method pillars */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-3 gap-2.5 mb-4"
              >
                {methodPillars.map(({ icon: Icon, line1, line2 }) => (
                  <motion.div
                    variants={fadeInUp}
                    key={line1}
                    className="rounded-xl px-2 py-3.5 flex flex-col items-center text-center gap-1.5"
                    style={{ backgroundColor: CARD_BG, border: CARD_BORDER }}
                  >
                    <Icon className="w-5 h-5" style={{ color: PURPLE }} strokeWidth={1.75} />
                    <p
                      className="text-white text-xs sm:text-[13px] leading-tight"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 600 }}
                    >
                      {line1}
                      <br />
                      {line2}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Supporting paragraph */}
              <motion.p
                variants={fadeInUp}
                className="text-white/60 text-sm leading-relaxed"
              >
                Không chỉ giúp bạn hiểu nỗi sợ, mà còn giúp bạn từng bước xây dựng{' '}
                <strong className="font-bold" style={{ color: PURPLE }}>
                  cảm giác an toàn từ bên trong
                </strong>{' '}
                để bình an trước mọi biến động.
              </motion.p>
            </motion.div>

            {/* Meditation image — fixed aspect ratio so it never grows past the text column's natural height */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-[44%] aspect-[3/2] lg:aspect-auto lg:h-[420px] rounded-2xl overflow-hidden shrink-0"
              style={{ border: '1px solid rgba(192,132,252,0.25)' }}
            >
              <img
                src={meditationImg}
                alt="Người phụ nữ thiền định trước hoàng hôn bên hồ, biểu tượng cho sự bình an nội tại"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* ── "Sau 7 ngày, bạn sẽ có thể..." ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2
              className="text-white text-lg sm:text-xl font-bold mb-5"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Sau <span style={{ color: GOLD }}>7 ngày</span>, bạn sẽ có thể...
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {outcomeCards.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  variants={fadeInUp}
                  key={title}
                  className="rounded-2xl p-4 text-left flex flex-col gap-2"
                  style={{ backgroundColor: CARD_BG, border: CARD_BORDER }}
                >
                  <Icon className="w-5 h-5" style={{ color: PURPLE }} strokeWidth={1.75} />
                  <p
                    className="text-white text-sm leading-snug"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 600 }}
                  >
                    {title}
                  </p>
                  <p className="text-white/55 text-xs leading-snug">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Pain points + CTA panel ── */}
          <div className="grid lg:grid-cols-2 gap-5">
            {/* Nếu bạn đang... */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl p-6 flex flex-col justify-center"
              style={{ backgroundColor: CARD_BG, border: CARD_BORDER }}
            >
              <h3
                className="text-base font-bold mb-3"
                style={{ color: PURPLE, fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                Nếu bạn đang...
              </h3>
              <ul className="space-y-2.5 mb-4">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: PURPLE }} />
                    <span className="text-white/75 text-sm leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white font-bold text-sm flex items-center gap-1.5">
                Beyond Fear được tạo ra dành cho bạn.
                <Heart className="w-4 h-4" style={{ color: PURPLE }} />
              </p>
            </motion.div>

            {/* CTA panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(192,132,252,0.22), rgba(251,191,36,0.10))',
                border: '1px solid rgba(192,132,252,0.35)',
              }}
            >
              <span
                className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-3"
                style={{
                  color: GOLD,
                  border: '1px solid rgba(251,191,36,0.4)',
                  backgroundColor: 'rgba(251,191,36,0.10)',
                }}
              >
                Chỉ 20 phút mỗi ngày
              </span>

              <h3
                className="text-white text-xl sm:text-2xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bắt đầu hành trình 7 ngày
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Chỉ 20 phút mỗi ngày để lấy lại sự bình an từ bên trong.
              </p>

              <button
                onClick={scrollToCTA}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full py-3 px-6 font-bold text-sm transition-transform hover:scale-[1.02] shadow-2xl mb-4"
                style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
                data-testid="button-hero-cta"
              >
                ĐĂNG KÝ NGAY
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: PURPLE }} />
                  <span className="text-white/60 text-[11px] leading-tight">
                    Thực hành đơn giản
                    <br />
                    Dễ áp dụng
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: PURPLE }} />
                  <span className="text-white/60 text-[11px] leading-tight">
                    Hỗ trợ đồng hành
                    <br />
                    Trong suốt 7 ngày
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3" style={{ color: GOLD, fill: GOLD }} />
                    ))}
                  </div>
                  <span className="text-white/60 text-[11px] leading-tight">
                    4.9/5 từ hơn 500+
                    <br />
                    khách hàng
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
