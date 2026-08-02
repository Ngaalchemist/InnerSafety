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
import logoImg from '@assets/Logo_cay_transparent.png';

// Self-loads the Google Font so the bold condensed headline renders
// correctly even if the project's global CSS doesn't import it.
const GOOGLE_FONT_ID = 'font-anton';
function useAntonFont() {
  useEffect(() => {
    if (document.getElementById(GOOGLE_FONT_ID)) return;
    const link = document.createElement('link');
    link.id = GOOGLE_FONT_ID;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Anton&display=swap';
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
          style={{
            objectPosition: 'right 15%',
            transform: 'scale(0.88) translateX(3%)',
            transformOrigin: 'right center',
          }}
        />
      </div>

      {/* ── NAVBAR (single sticky header: logo + course name + CTA only) ── */}
      <nav
        className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-10 lg:px-16 py-2"
        style={{ backgroundColor: 'rgba(13,11,24,0.7)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-2.5">
          <img src={logoImg} alt="Inner Safety Method™" className="h-6 sm:h-7 w-auto" />
          <span className="hidden sm:inline text-white/80 text-xs font-semibold tracking-wide uppercase">
            7 Ngày Vượt Trên Nỗi Sợ
          </span>
        </div>

        <button
          onClick={scrollToCTA}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-transform hover:scale-105"
          style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
          data-testid="button-nav-cta"
        >
          ĐĂNG KÝ NGAY
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </nav>

      {/* ── SUBTLE QUOTE — right side of the tree ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute z-20 top-[38%] right-[6%] xl:right-[9%] max-w-[240px] text-right"
      >
        <p className="italic text-white/60 text-sm leading-relaxed">
          Điều quyết định cuộc đời bạn không nằm ở những gì người khác nhìn thấy, mà ở gốc rễ bên trong bạn.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 pb-16 lg:pt-8 lg:pb-24">
        <div className="flex flex-col gap-10">

          {/* ── MAIN COLUMN ── */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col text-left lg:max-w-[62%] lg:pl-[12%]"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="mb-3">
              <p
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] mb-1"
                style={{ color: PURPLE }}
              >
                Inner Safety Method™
              </p>
              <p className="text-white/60 text-xs sm:text-sm italic leading-snug max-w-md">
                Chương trình thực hành 7 ngày dành cho những người biết mình sinh ra để làm nhiều điều hơn.
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="uppercase mb-3"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(2.2rem, 5.6vw, 4rem)',
                lineHeight: 1.45,
                letterSpacing: '1px',
              }}
            >
              <span className="block text-white">NGỪNG ĐỂ NỖI SỢ</span>
              <span className="block" style={{ color: GOLD }}>
                ĐIỀU KHIỂN CUỘC ĐỜI BẠN
              </span>
            </motion.h1>

            {/* Star rating social proof — directly under headline */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-3 flex-wrap">
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

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-sm sm:text-base leading-relaxed mb-2 max-w-xl"
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

            {/* Checklist */}
            <motion.ul variants={staggerContainer} className="space-y-2 max-w-xl mt-3">
              {checklist.map((item) => (
                <motion.li variants={fadeInUp} key={item} className="flex items-start gap-2.5">
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-full border shrink-0 mt-0.5"
                    style={{ borderColor: 'rgba(192,132,252,0.5)' }}
                  >
                    <Check className="w-3 h-3" style={{ color: PURPLE }} strokeWidth={3} />
                  </span>
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
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full py-3 px-6 font-bold text-sm mt-5 transition-transform hover:scale-[1.02] shadow-2xl text-center"
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
