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

const checklist = [
  'Ngừng overthinking.',
  'Bình tĩnh khi bị trigger.',
  'Thay đổi niềm tin giới hạn.',
  'Dám hành động dù vẫn còn sợ.',
];

const trustStrip = [
  { icon: Monitor, label: 'Học online mọi lúc mọi nơi' },
  { icon: InfinityIcon, label: 'Truy cập trọn đời' },
  { icon: Users, label: 'Cộng đồng riêng' },
  { icon: ShieldCheck, label: 'Hoàn tiền 7 ngày' },
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
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={cosmicTreeBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'right 15%' }}
        />
      </div>

      {/* ── NAVBAR (single sticky header: logo + course name + CTA only) ── */}
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

      {/* ── QUOTE — right side of the tree, anchored at the grass/soil line (matches reference image position): quote above ground, purple attribution below ── */}
      <div
        className="hidden lg:block absolute z-20 top-[43%] right-[6%] xl:right-[8%] text-left"
        style={{ maxWidth: '280px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transform: 'translateY(-100%)' }}
        >
          <span className="block text-2xl leading-none mb-1" style={{ color: PURPLE }}>
            &ldquo;
          </span>
          <p className="italic text-white/75 text-sm leading-snug -mt-2">
            Điều quyết định cuộc đời bạn<br />
            không nằm ở những gì người khác nhìn thấy,<br />
            mà ở gốc rễ bên trong bạn.
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold tracking-wide uppercase mt-1"
          style={{ color: PURPLE }}
        >
          — Nga Alchemist
        </motion.p>
      </div>

      <div className="px-4 sm:px-10 lg:px-12 relative z-10 pt-4 pb-10 lg:pt-5 lg:pb-16">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">

          {/* ── MAIN COLUMN ── */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col text-left lg:max-w-[55%]"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="mb-2">
              <p
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] mb-1"
                style={{ color: PURPLE }}
              >
                Inner Safety Method™
              </p>
              <p className="text-white/60 text-xs sm:text-sm italic leading-snug max-w-md">
                Chương trình thực hành 7 ngày dành cho những người biết mình sinh ra để làm nhiều điều hơn...nhưng vẫn đang bị nỗi sợ giữ chân.
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="uppercase mb-2"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3.6rem)',
                lineHeight: 1.25,
                letterSpacing: '1px',
              }}
            >
              <span className="block text-white">NGỪNG ĐỂ NỖI SỢ</span>
              <span className="block" style={{ color: GOLD }}>
                ĐIỀU KHIỂN CUỘC ĐỜI BẠN
              </span>
            </motion.h1>

            {/* Star rating social proof — directly under headline */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-2 flex-wrap">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{ color: PURPLE, fill: PURPLE }}
                  />
                ))}
              </div>
              <span className="text-white text-base sm:text-lg font-bold">4.9/5</span>
              <span className="text-white/70 text-base sm:text-lg">
                — 500+ khách hàng và học viên đã đồng hành
              </span>
            </motion.div>

            {/* Subheadline — narrower than the headline block above it, so it reads as its own layer */}
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-sm sm:text-base leading-relaxed mb-2 max-w-md"
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

            {/* Checklist — plain list, no chip background, tight spacing so the CTA sits above the fold */}
            <motion.ul variants={staggerContainer} className="space-y-1.5 max-w-md mt-3">
              {checklist.map((item) => (
                <motion.li variants={fadeInUp} key={item} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 shrink-0" style={{ color: PURPLE }} strokeWidth={3} />
                  <span className="font-bold text-sm leading-snug" style={{ color: '#E9D5FF' }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* ── SINGLE CTA BUTTON (no box, no price) ── */}
            <motion.button
              variants={fadeInUp}
              onClick={scrollToCTA}
              className="group w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 rounded-full py-[18px] px-9 font-bold text-sm mt-5 transition-transform hover:scale-[1.02] shadow-2xl text-center"
              style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
              data-testid="button-hero-cta"
            >
              TÔI MUỐN LÀM CHỦ NỖI SỢ CỦA MÌNH
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* ── TRUST BADGES (directly under the CTA) ── */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4"
            >
              {trustStrip.map(({ icon: Icon, label }) => (
                <motion.div variants={fadeInUp} key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 shrink-0" style={{ color: PURPLE }} />
                  <p className="text-white/70 text-xs font-semibold">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
