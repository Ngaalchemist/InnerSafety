import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Monitor,
  Users,
  Infinity as InfinityIcon,
  Check,
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
    link.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:wght@700&display=swap';
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

// Short reassurance bullets under the subheadline
const checklist = [
  'Không cần ép bản thân.',
  'Không cần "tích cực độc hại".',
  'Không cần chờ đến lúc tự tin.',
];

// 5 feature icons — mirrors the 5 checklist outcomes from the reference mockup
const featureGrid = [
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
  {
    icon: Sprout,
    title: 'Xây gốc rễ an toàn',
    desc: 'Cảm giác an toàn bền vững từ bên trong.',
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

const AVATAR_COLORS = ['#C084FC', '#FBBF24', '#F472B6', '#60A5FA'];

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

      <div className="px-4 sm:px-10 lg:px-12 relative z-10 pt-2 pb-0 lg:pt-3">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-5 relative">

          {/* ── QUOTE — sits over the tree image, right side, echoing the reference mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute z-10 text-right"
            style={{ top: '20%', right: '3%', maxWidth: '260px' }}
          >
            <span
              className="block text-5xl leading-none mb-1"
              style={{ color: PURPLE, fontFamily: "'Playfair Display', serif", opacity: 0.7 }}
            >
              &ldquo;
            </span>
            <p
              className="italic text-white/85 text-sm leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Điều thay đổi cuộc đời bạn không nằm ở những gì người khác nhìn thấy, mà ở gốc rễ bên trong bạn.
            </p>
          </motion.div>

          {/* ── TEXT COLUMN (eyebrow through avatar/rating) ── */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col text-left lg:max-w-[58%]"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="mb-2">
              <p
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] mb-1"
                style={{ color: PURPLE }}
              >
                Inner Safety Method™
              </p>
              <p className="text-white/60 text-xs sm:text-sm italic leading-snug max-w-none">
                Chương trình thực hành 7 ngày dành cho những người biết mình sinh ra để làm nhiều điều hơn...nhưng vẫn đang bị nỗi sợ giữ chân.
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="uppercase mb-2"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(2.4rem, 6.2vw, 4.4rem)',
                lineHeight: 1.15,
                letterSpacing: '1px',
              }}
            >
              <span className="block text-white">NGỪNG ĐỂ NỖI SỢ TIẾP TỤC</span>
              <span className="block" style={{ color: GOLD }}>
                ĐIỀU KHIỂN CUỘC ĐỜI BẠN
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-sm sm:text-base leading-relaxed mb-2 max-w-none"
            >
              Chỉ với{' '}
              <span className="font-semibold" style={{ color: PURPLE }}>
                20 phút
              </span>{' '}
              mỗi ngày trong 7 ngày.
              <br />
              Bạn sẽ làm dịu hệ thần kinh, tháo gỡ gốc rễ của nỗi sợ, và xây
              dựng cảm giác an toàn nội tại để sống đúng với con người
              mà mình sinh ra để trở thành.
            </motion.p>

            {/* Reassurance bullets — 3 short lines, plain list */}
            <motion.ul variants={staggerContainer} className="space-y-1.5 max-w-md mt-3 mb-5">
              {checklist.map((item) => (
                <motion.li variants={fadeInUp} key={item} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 shrink-0" style={{ color: PURPLE }} strokeWidth={3} />
                  <span className="font-bold text-sm leading-snug" style={{ color: '#E9D5FF' }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* ── AVATAR + RATING ROW ── */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2.5">
                {AVATAR_COLORS.map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{
                      backgroundColor: c,
                      color: INK,
                      border: `2px solid ${INK}`,
                    }}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5" style={{ color: GOLD, fill: GOLD }} />
                  ))}
                  <span className="text-white text-xs font-bold ml-1">4.9/5 từ hơn 2.000 học viên</span>
                </div>
                <p className="text-white/50 text-[11px] leading-snug mt-0.5">
                  Họ đã bắt đầu hành động thay vì tiếp tục trì hoãn vì nỗi sợ.
                </p>
              </div>
            </motion.div>
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

              <div className="flex items-center flex-wrap gap-3 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-extrabold text-3xl sm:text-4xl">111.000đ</span>
                  <span className="text-white/40 text-base line-through">1.111.000đ</span>
                </div>
                <span
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide"
                  style={{
                    backgroundColor: 'rgba(251,191,36,0.12)',
                    color: GOLD,
                    border: '1px solid rgba(251,191,36,0.4)',
                  }}
                >
                  TIẾT KIỆM 90%
                </span>
              </div>

              <button
                onClick={scrollToCTA}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full py-3 px-6 font-bold text-sm transition-transform hover:scale-[1.02] shadow-2xl text-center"
                style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
                data-testid="button-hero-cta"
              >
                🔥 Tôi muốn bắt đầu 7 ngày ngay!
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
                  <p className="text-white font-extrabold text-xs sm:text-[13px] uppercase tracking-wide leading-tight">
                    {title}
                  </p>
                  <p className="text-white/55 text-[10px] leading-tight">{desc}</p>
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
                <p className="text-white text-sm font-bold leading-tight">{label}</p>
                <p className="text-white/50 text-xs leading-tight">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
