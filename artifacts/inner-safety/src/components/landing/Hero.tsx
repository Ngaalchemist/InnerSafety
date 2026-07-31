import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  ShieldCheck,
  Clock,
  Calendar,
  Monitor,
  Users,
  Zap,
  CheckCircle2,
  Brain,
  Waves,
  Unlink,
  Footprints,
  TreePine,
} from 'lucide-react';
import cosmicTreeBg from '@assets/cay_tim_dich_sang_phai.jpg';
import logoImg from '@assets/Logo_Inner_Safety_transparent.png';

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

const quickFacts = [
  { icon: Clock, title: '20 phút / ngày', caption: 'dễ thực hành' },
  { icon: Calendar, title: '7 ngày', caption: 'thực hành liên tục' },
  { icon: Monitor, title: 'Học online', caption: 'truy cập ngay' },
  { icon: Users, title: 'Cộng đồng hỗ trợ', caption: 'đồng hành cùng bạn' },
];

const avatarInitials = ['A', 'M', 'T', 'H'];

const benefitCards = [
  { icon: Brain, title: 'Bình tĩnh khi bị trigger', desc: 'Làm dịu hệ thần kinh chỉ trong vài phút.' },
  { icon: Waves, title: 'Giảm overthinking', desc: 'Ngừng suy nghĩ lặp lại vô tận.' },
  { icon: Unlink, title: 'Tháo gỡ niềm tin giới hạn', desc: 'Giải phóng những niềm tin kéo bạn lại.' },
  { icon: Footprints, title: 'Dám hành động dù còn sợ', desc: 'Không chờ tự tin mới bắt đầu.' },
  { icon: TreePine, title: 'Xây gốc rễ an toàn', desc: 'Cảm giác an toàn bền vững từ bên trong.' },
];

const trustStrip = [
  { icon: Monitor, title: 'HỌC ONLINE', caption: 'mọi lúc, mọi nơi' },
  { icon: Zap, title: 'TRUY CẬP NGAY', caption: 'sau khi đăng ký' },
  { icon: ShieldCheck, title: 'HOÀN TIỀN 7 NGÀY', caption: 'nếu không phù hợp' },
  { icon: Users, title: 'CỘNG ĐỒNG RIÊNG', caption: 'hỗ trợ 24/7' },
  { icon: CheckCircle2, title: 'BÀI HỌC NGẮN GỌN', caption: 'dễ hiểu, dễ áp dụng' },
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
          style={{ filter: 'saturate(1.35) contrast(1.12) brightness(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
      </div>

      {/* ── NAVBAR (sticky, no nav links) ── */}
      <nav
        className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8 py-4 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(13,11,24,0.7)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center">
          <img src={logoImg} alt="Inner Safety Method™" className="h-8 sm:h-9 w-auto" />
        </div>

        <button
          onClick={scrollToCTA}
          className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-transform hover:scale-105"
          style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
          data-testid="button-nav-cta"
        >
          ĐĂNG KÝ NGAY
        </button>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 pb-16 lg:pt-8 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-8">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex-1 lg:max-w-[62%] flex flex-col text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex self-start items-center gap-2 rounded-full border px-4 py-1.5 mb-5"
              style={{ borderColor: 'rgba(192,132,252,0.4)', background: 'rgba(192,132,252,0.08)' }}
            >
              <Shield className="w-3.5 h-3.5" style={{ color: PURPLE }} />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide" style={{ color: PURPLE }}>
                CHƯƠNG TRÌNH THỰC HÀNH 7 NGÀY
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif font-bold leading-[1.08] uppercase mb-5"
              style={{ fontSize: 'clamp(2.34rem, 5.98vw, 4.42rem)', letterSpacing: '-0.02em' }}
            >
              <span className="block text-white">NGỪNG ĐỂ NỖI SỢ</span>
              <span className="block" style={{ color: GOLD }}>
                ĐIỀU KHIỂN CUỘC ĐỜI BẠN
              </span>
            </motion.h1>

            {/* Subheadline 1 — new, right under the headline */}
            <motion.p
              variants={fadeInUp}
              className="italic font-medium text-white/85 text-base sm:text-lg leading-snug mb-3 max-w-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Dành cho người biết mình có nhiều giá trị hơn... nhưng vẫn đang bị nỗi sợ vô hình giữ chân.
            </motion.p>

            {/* Subheadline 2 — original supporting copy */}
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-sm sm:text-base leading-relaxed mb-7 max-w-xl"
            >
              Inner Safety Method™ giúp bạn làm dịu hệ thần kinh, giảm overthinking và xây dựng cảm
              giác an toàn từ bên trong để{' '}
              <span
                className="font-semibold"
                style={{ color: GOLD }}
              >
                hành động ngay cả khi vẫn còn sợ
              </span>
              .
            </motion.p>

            {/* Quick facts row */}
            <motion.div variants={staggerContainer} className="flex flex-wrap gap-x-8 gap-y-4 mb-7">
              {quickFacts.map(({ icon: Icon, title, caption }) => (
                <motion.div variants={fadeInUp} key={title} className="flex items-center gap-2.5">
                  <Icon className="w-5 h-5 shrink-0" style={{ color: PURPLE }} />
                  <div className="leading-tight">
                    <p className="text-white text-sm font-semibold">{title}</p>
                    <p className="text-white/45 text-xs">{caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonial row */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-7 flex-wrap">
              <div className="flex -space-x-2 shrink-0">
                {avatarInitials.map((letter, i) => (
                  <div
                    key={letter}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2"
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
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-white text-sm font-semibold">90% người thử nghiệm đánh giá tích cực</span>
                </div>
                <p className="text-white/45 text-xs">
                  Từ nhóm học viên đầu tiên trải nghiệm chương trình.
                </p>
              </div>
            </motion.div>

            {/* Benefit row — moved up, right after the subheadlines */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-x-6 gap-y-4 mb-8 pb-7 border-b border-white/10 max-w-2xl"
            >
              {benefitCards.map(({ icon: Icon, title }) => (
                <motion.div variants={fadeInUp} key={title} className="flex items-center gap-2 min-w-[130px]">
                  <Icon className="w-4 h-4 shrink-0" style={{ color: PURPLE }} />
                  <p className="text-white/85 text-xs sm:text-[13px] font-semibold leading-tight">{title}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA — just the button, enlarged, no surrounding card */}
            <motion.div variants={fadeInUp} className="max-w-lg w-full">
              <button
                onClick={scrollToCTA}
                className="group w-full inline-flex items-center justify-center gap-3 rounded-full py-5 sm:py-6 px-8 font-bold text-base sm:text-lg mb-5 transition-transform hover:scale-[1.02] shadow-2xl"
                style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
                data-testid="button-hero-cta"
              >
                TÔI MUỐN BẮT ĐẦU 7 NGÀY NGAY — CHỈ 111.000Đ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust badges — now directly under the CTA button */}
              <div className="flex flex-wrap gap-x-7 gap-y-3">
                {trustStrip.map(({ icon: Icon, title, caption }) => (
                  <div key={title} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 shrink-0" style={{ color: PURPLE }} />
                    <div className="leading-tight">
                      <p className="text-white text-xs font-bold">{title}</p>
                      <p className="text-white/40 text-[11px]">{caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — quote card over the tree image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:w-[30%] shrink-0"
          >
            <div className="border-r-2 pr-6 text-right mt-6" style={{ borderColor: '#c9a24d' }}>
              <p
                className="italic font-medium text-white/90 text-lg xl:text-xl leading-snug mb-2.5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Không phải mọi điều quyết định cuộc đời bạn
                <br />
                đều có thể nhìn thấy.
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] font-medium" style={{ color: '#c9a24d' }}>
                Nga Alchemist
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
