import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Monitor,
  Users,
  Infinity as InfinityIcon,
  Lock,
  Check,
} from 'lucide-react';
import cosmicTreeBg from '@assets/cay_hoang_hon.jpg';
import logoImg from '@assets/Logo_cay_transparent.png';

// Self-loads the Google Font so the elegant serif italic accents render
// correctly even if the project's global CSS doesn't import it.
const GOOGLE_FONT_ID = 'font-cormorant-garamond';
function useCormorantGaramondFont() {
  useEffect(() => {
    if (document.getElementById(GOOGLE_FONT_ID)) return;
    const link = document.createElement('link');
    link.id = GOOGLE_FONT_ID;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&display=swap';
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

const avatarInitials = ['A', 'M', 'T', 'H'];

const checklist = [
  'Ngừng overthinking trước mỗi quyết định.',
  'Bình tĩnh trở lại chỉ trong vài phút khi bị trigger.',
  'Thay thế niềm tin giới hạn bằng những niềm tin giúp bạn phát triển.',
  'Dám xuất hiện và chia sẻ giá trị mà không còn bị nỗi sợ kéo lùi.',
];

const trustStrip = [
  { icon: Monitor, label: 'Học online mọi lúc mọi nơi' },
  { icon: InfinityIcon, label: 'Truy cập trọn đời' },
  { icon: Users, label: 'Cộng đồng riêng' },
  { icon: ShieldCheck, label: 'Hoàn tiền 7 ngày' },
];

export function Hero() {
  useCormorantGaramondFont();

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
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── NAVBAR (single sticky header: logo + course name + CTA only) ── */}
      <nav
        className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8 py-2"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 pb-16 lg:pt-8 lg:pb-24">
        <div className="flex flex-col gap-10">

          {/* ── MAIN COLUMN ── */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col text-left lg:max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="mb-4">
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
              className="font-serif font-bold leading-[1.08] uppercase mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5.6vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              <span className="block text-white">NGỪNG ĐỂ NỖI SỢ</span>
              <span className="block" style={{ color: GOLD }}>
                ĐIỀU KHIỂN CUỘC ĐỜI BẠN
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-sm sm:text-base leading-relaxed mb-3 max-w-xl"
            >
              Chỉ với{' '}
              <span className="font-semibold" style={{ color: PURPLE }}>
                20 phút
              </span>{' '}
              mỗi ngày trong 7 ngày, bạn sẽ làm dịu hệ thần kinh, tháo gỡ gốc rễ của nỗi sợ, và xây
              dựng cảm giác an toàn nội tại để chủ động, tự tin và bình tĩnh sống đúng với con người
              mà mình sinh ra để trở thành.
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-7">
              <p className="text-white/45 text-sm italic leading-snug">Không cần ép bản thân tích cực.</p>
              <p className="text-white/45 text-sm italic leading-snug">Không cần thêm nhiều lý thuyết chữa lành.</p>
            </motion.div>

            {/* Testimonial row */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-7 flex-wrap">
              <div className="flex -space-x-2 shrink-0">
                {avatarInitials.map((letter, i) => (
                  <div
                    key={letter}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white border-2"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD}, ${PURPLE})`,
                      borderColor: INK,
                      zIndex: avatarInitials.length - i,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-0.5">
                  500+ học viên &amp; khách hàng đã đồng hành
                </p>
                <p className="text-white/45 text-xs">
                  Họ đã bắt đầu hành động thay vì tiếp tục để nỗi sợ điều khiển cuộc đời.
                </p>
              </div>
            </motion.div>

            {/* Checklist */}
            <motion.ul variants={staggerContainer} className="space-y-3 max-w-xl">
              {checklist.map((item) => (
                <motion.li variants={fadeInUp} key={item} className="flex items-start gap-2.5">
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-full border shrink-0 mt-0.5"
                    style={{ borderColor: 'rgba(192,132,252,0.5)' }}
                  >
                    <Check className="w-3 h-3" style={{ color: PURPLE }} strokeWidth={3} />
                  </span>
                  <span className="text-white/85 text-sm leading-snug">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* ── SINGLE CTA BUTTON (no box, no price) ── */}
            <motion.button
              variants={fadeInUp}
              onClick={scrollToCTA}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full py-4 px-8 font-bold text-sm mt-8 transition-transform hover:scale-[1.02] shadow-2xl text-center"
              style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
              data-testid="button-hero-cta"
            >
              TÔI MUỐN SỐNG KHÔNG CÒN BỊ NỖI SỢ ĐIỀU KHIỂN
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* ── TRUST STRIP (full width) ── */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-6 mt-12 pt-8 border-t border-white/10"
        >
          {trustStrip.map(({ icon: Icon, label }) => (
            <motion.div variants={fadeInUp} key={label} className="flex items-center gap-2.5">
              <Icon className="w-5 h-5 shrink-0" style={{ color: PURPLE }} />
              <p className="text-white text-xs font-bold">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── PAYMENT SECURITY LINE ── */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-6 text-white/40 text-xs">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            <span>Thanh toán bảo mật tuyệt đối</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Được bảo trợ bởi</span>
            <span className="font-semibold text-white/60 italic">Stripe</span>
          </div>
        </div>
      </div>
    </section>
  );
}
