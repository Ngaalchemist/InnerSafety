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
  Clock,
  Calendar,
  Laptop,
} from 'lucide-react';
import cosmicTreeBg from '@assets/cay_hoang_hon.jpg';

const GOOGLE_FONT_ID = 'font-anton-playfair';
function useAntonFont() {
  useEffect(() => {
    if (document.getElementById(GOOGLE_FONT_ID)) return;
    const link = document.createElement('link');
    link.id = GOOGLE_FONT_ID;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:wght@700&display=swap';
    document.head.appendChild(link);
  }, []);
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const PURPLE = '#C084FC';
const GOLD = '#FBBF24';
const INK = '#0D0B18';

// Compact horizontal stat row under the headline
const quickStats = [
  { icon: Clock, label: '20 phút / ngày', sub: 'dễ thực hành' },
  { icon: Calendar, label: '7 ngày', sub: 'thực hành liên tục' },
  { icon: Laptop, label: 'Học online', sub: 'truy cập ngay' },
  { icon: Users, label: 'Cộng đồng hỗ trợ', sub: 'đồng hành cùng bạn' },
];

// 5 feature boxes — matches mockup icons & 2-line copy exactly
const featureGrid = [
  { icon: Brain, title: 'Bình tĩnh\nkhi bị trigger', desc: 'Làm dịu hệ thần kinh chỉ trong vài phút.' },
  { icon: RotateCcw, title: 'Giảm\nOverthinking', desc: 'Ngừng suy nghĩ lặp lại vô tận.' },
  { icon: Unlock, title: 'Tháo gỡ niềm tin\ngiới hạn', desc: 'Giải phóng những niềm tin kéo bạn lại.' },
  { icon: Zap, title: 'Dám hành động\ndù còn sợ', desc: 'Không chờ tự tin mới bắt đầu.' },
  { icon: Sprout, title: 'Xây gốc rễ\nan toàn', desc: 'Cảm giác an toàn bền vững từ bên trong.' },
];

// Bottom trust strip — sits directly under the feature boxes, no gap
const trustStrip = [
  { icon: Monitor, label: 'Học online', sub: 'mọi lúc, mọi nơi' },
  { icon: InfinityIcon, label: 'Truy cập ngay', sub: 'sau khi đăng ký' },
  { icon: ShieldCheck, label: 'Hoàn tiền 7 ngày', sub: 'nếu không phù hợp' },
  { icon: Users, label: 'Cộng đồng riêng', sub: 'hỗ trợ 24/7' },
  { icon: BookOpen, label: 'Bài học ngắn gọn', sub: 'dễ hiểu, dễ áp dụng' },
];

const AVATAR_COLORS = ['#C084FC', '#FBBF24', '#F472B6', '#60A5FA'];

export function Hero() {
  useAntonFont();

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={cosmicTreeBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'right 10%' }}
        />
      </div>

      {/* ── NAVBAR ── */}
      <nav
        className="sticky top-0 z-30 px-4 sm:px-10 lg:px-12 py-1.5"
        style={{
          backgroundColor: 'rgba(13,11,24,0.75)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <span
            className="text-sm sm:text-base font-bold uppercase tracking-wide"
            style={{ color: GOLD, fontFamily: "'Playfair Display', serif" }}
          >
            7 Ngày Vượt Trên Nỗi Sợ
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

      {/* ── QUOTE floating right (absolute — doesn't add scroll height) ── */}
      <div
        className="hidden lg:block absolute z-20 text-left"
        style={{ top: '36%', right: '6%', maxWidth: '230px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <span className="block text-2xl leading-none mb-1" style={{ color: PURPLE }}>
            &ldquo;
          </span>
          <p className="italic text-white/75 text-xs leading-snug -mt-2">
            Không phải mọi điều quyết định cuộc đời bạn
            <br />
            đều có thể nhìn thấy.
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-[10px] font-semibold tracking-widest uppercase mt-1"
          style={{ color: PURPLE }}
        >
          – Nga Alchemist
        </motion.p>
      </div>

      {/* ── TEXT COLUMN ── */}
      <div className="px-4 sm:px-10 lg:px-12 relative z-10 pt-2.5 pb-1.5 lg:pt-3">
        <div className="max-w-[1280px] mx-auto w-full">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col text-left lg:max-w-[50%]"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-1.5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide text-white"
                style={{
                  border: `1px solid rgba(192,132,252,0.5)`,
                  backgroundColor: 'rgba(192,132,252,0.12)',
                }}
              >
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: PURPLE }} />
                Chương trình thực hành 7 ngày
              </span>
            </motion.div>

            {/* Eyebrow — single short line */}
            <motion.div variants={fadeInUp} className="mb-1">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: PURPLE }}
              >
                Inner Safety Method™
              </p>
              <p className="text-white/55 text-[11px] italic leading-snug max-w-sm">
                Inner Safety Method™ giúp bạn làm dịu hệ thần kinh, giảm overthinking và xây dựng
                cảm giác an toàn từ bên trong để{' '}
                <span style={{ color: GOLD }} className="not-italic font-semibold">
                  hành động ngay cả khi vẫn còn sợ.
                </span>
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="uppercase mb-1.5"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(1.7rem, 3.6vw, 2.6rem)',
                lineHeight: 1.15,
                letterSpacing: '0.5px',
              }}
            >
              <span className="block text-white">NGỪNG ĐỂ NỖI SỢ</span>
              <span className="block" style={{ color: GOLD }}>
                ĐIỀU KHIỂN CUỘC ĐỜI BẠN
              </span>
            </motion.h1>

            {/* Compact stat row — replaces checklist, matches mockup */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-x-4 gap-y-1.5 mb-1.5">
              {quickStats.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: PURPLE }} strokeWidth={1.8} />
                  <div>
                    <span className="text-white text-[11px] font-bold leading-none">{label}</span>
                    <span className="text-white/45 text-[10px] leading-none ml-1">{sub}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Avatar + rating */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-1.5">
              <div className="flex -space-x-2">
                {AVATAR_COLORS.map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold"
                    style={{ backgroundColor: c, color: INK, border: `2px solid ${INK}` }}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3" style={{ color: GOLD, fill: GOLD }} />
                  ))}
                  <span className="text-white text-[11px] font-bold ml-1">
                    4.9/5 từ hơn 2.000 học viên
                  </span>
                </div>
                <p className="text-white/45 text-[10px] leading-snug">
                  Họ đã bắt đầu hành động thay vì tiếp tục trì hoãn vì nỗi sợ.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── PRICE BOX (left) + FEATURE GRID (right) — left-padded only, feature grid bleeds to right edge ── */}
      <div className="relative z-10 px-4 sm:px-10 lg:pl-12 lg:pr-0">
        <div className="flex flex-col lg:flex-row gap-3 lg:items-stretch">
          {/* ── PRICE BOX ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-3 w-full lg:w-[42%] shrink-0 flex flex-col justify-between"
            style={{
              border: `1px solid rgba(192,132,252,0.35)`,
              backgroundColor: 'rgba(13,11,24,0.82)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                  Trải nghiệm 7 ngày · Chỉ với
                </p>
                <span
                  className="text-[10px] font-extrabold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: 'rgba(251,191,36,0.18)', color: GOLD, border: '1px solid rgba(251,191,36,0.35)' }}
                >
                  TIẾT KIỆM 86%
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="font-extrabold leading-none"
                  style={{ color: GOLD, fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.7rem, 3vw, 2.3rem)' }}
                >
                  111.000đ
                </span>
                <span className="text-white/35 text-sm line-through">799.000đ</span>
              </div>

              <button
                onClick={scrollToCTA}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 px-6 font-extrabold text-sm sm:text-base transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(251,191,36,0.4)] shadow-xl mb-1.5"
                style={{
                  background: `linear-gradient(90deg, ${GOLD} 0%, #f59e0b 50%, ${PURPLE} 100%)`,
                  color: INK,
                  letterSpacing: '0.02em',
                }}
                data-testid="button-hero-cta"
              >
                TÔI MUỐN BẮT ĐẦU 7 NGÀY NGAY!
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <p className="flex items-center gap-1.5 text-white/45 text-[10px]">
                <ShieldCheck className="w-3 h-3 shrink-0" style={{ color: PURPLE }} />
                Hoàn tiền 100% trong 7 ngày nếu chương trình không phù hợp.
              </p>
            </div>
          </motion.div>

          {/* ── FEATURE GRID — opaque background, bleeds to right edge, matches mockup ── */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 rounded-2xl lg:rounded-r-none flex-1"
            style={{
              border: '1px solid rgba(192,132,252,0.22)',
              borderRight: 'none',
              backgroundColor: 'rgba(13,11,24,0.88)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {featureGrid.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                variants={fadeInUp}
                key={title}
                className="flex flex-col items-center justify-center text-center gap-1.5 px-2 py-3"
                style={{ borderRight: idx < 4 ? '1px solid rgba(192,132,252,0.15)' : undefined }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(192,132,252,0.12)', border: '1px solid rgba(192,132,252,0.2)' }}
                >
                  <Icon className="w-[18px] h-[18px]" style={{ color: PURPLE }} strokeWidth={1.6} />
                </div>
                <p
                  className="font-extrabold text-[11px] uppercase tracking-wide leading-snug text-white"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {title}
                </p>
                <p className="text-white/50 text-[10px] leading-snug hidden sm:block">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── TRUST STRIP — directly under feature boxes, no gap, bleeds to right edge ── */}
      <div
        className="relative z-10 px-4 sm:px-10 lg:pl-12 lg:pr-0"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          backgroundColor: 'rgba(13,11,24,0.88)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-2 gap-x-4 py-2">
          {trustStrip.map(({ icon: Icon, label, sub }, idx) => (
            <div
              key={label}
              className="flex items-center gap-2.5"
              style={{ borderRight: idx < 4 ? '1px solid rgba(255,255,255,0.06)' : undefined }}
            >
              <Icon className="w-5 h-5 shrink-0" style={{ color: PURPLE }} strokeWidth={1.6} />
              <div>
                <p className="text-white text-xs font-bold leading-tight">{label}</p>
                <p className="text-white/45 text-[10px] leading-tight">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
