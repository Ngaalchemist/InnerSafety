import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  ShieldCheck,
  Monitor,
  Users,
  Zap,
  Star,
  Lock,
  Brain,
  Waves,
  Unlink,
  Footprints,
  TreePine,
} from 'lucide-react';
import cosmicTreeBg from '@assets/cay_hoang_hon.jpg';
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

const avatarInitials = ['A', 'M', 'T', 'H'];

const benefitCards = [
  { icon: Brain, title: 'BÌNH TĨNH KHI BỊ TRIGGER', desc: 'Làm dịu hệ thần kinh chỉ trong vài phút.' },
  { icon: Waves, title: 'GIẢM OVERTHINKING', desc: 'Ngừng suy nghĩ lặp lại vô tận.' },
  { icon: Unlink, title: 'THÁO GỠ NIỀM TIN GIỚI HẠN', desc: 'Giải phóng những niềm tin kéo bạn lại.' },
  { icon: Footprints, title: 'DÁM HÀNH ĐỘNG DÙ CÒN SỢ', desc: 'Không chờ tự tin mới bắt đầu.' },
  { icon: TreePine, title: 'XÂY GỐC RỄ AN TOÀN', desc: 'Cảm giác an toàn bền vững từ bên trong.' },
];

const trustStrip = [
  { icon: Monitor, title: 'HỌC ONLINE', caption: 'mọi lúc, mọi nơi' },
  { icon: Zap, title: 'TRUY CẬP NGAY', caption: 'sau khi đăng ký' },
  { icon: Users, title: 'CỘNG ĐỒNG RIÊNG', caption: 'hỗ trợ 24/7' },
  { icon: ShieldCheck, title: 'HOÀN TIỀN 7 NGÀY', caption: 'nếu không phù hợp' },
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
        className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8 py-4"
        style={{ backgroundColor: 'rgba(13,11,24,0.7)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Inner Safety Method™" className="h-8 sm:h-9 w-auto" />
          <span className="hidden sm:inline text-white/80 text-sm font-semibold tracking-wide">
            Inner Safety Method™
          </span>
        </div>

        <button
          onClick={scrollToCTA}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-transform hover:scale-105"
          style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
          data-testid="button-nav-cta"
        >
          ĐĂNG KÝ NGAY
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-16 lg:pt-14 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex-1 lg:max-w-[58%] flex flex-col text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex self-start items-center gap-2 rounded-full border px-4 py-1.5 mb-5"
              style={{ borderColor: 'rgba(192,132,252,0.4)', background: 'rgba(192,132,252,0.08)' }}
            >
              <Shield className="w-3.5 h-3.5" style={{ color: PURPLE }} />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide" style={{ color: PURPLE }}>
                Inner Safety Method™ 
                (/br)CHƯƠNG TRÌNH THỰC HÀNH 7 NGÀY
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif font-bold leading-[1.08] uppercase mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5.6vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              <span className="block text-white">XÂY CẢM GIÁC AN TOÀN</span>
              <span className="block text-white">TỪ BÊN TRONG</span>
              <span className="block" style={{ color: GOLD }}>
                ĐỂ HÀNH ĐỘNG NGAY
              </span>
              <span className="block" style={{ color: GOLD }}>
                CẢ KHI VẪN CÒN SỢ.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-sm sm:text-base leading-relaxed mb-7 max-w-xl"
            >
              Chỉ với{' '}
              <span className="font-semibold" style={{ color: PURPLE }}>
                20 phút
              </span>{' '}
              mỗi ngày, bạn sẽ làm dịu hệ thần kinh, giảm overthinking và tháo gỡ niềm tin giới hạn để
              sống{' '}
              <span className="font-semibold" style={{ color: PURPLE }}>
                chủ động, tự tin và bình tĩnh
              </span>{' '}
              trong mọi quyết định.
            </motion.p>

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
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5" style={{ color: GOLD, fill: GOLD }} />
                    ))}
                  </div>
                  <span className="text-white text-sm font-semibold ml-1">4.9/5 từ hơn 2.000 học viên</span>
                </div>
                <p className="text-white/45 text-xs">
                  Họ đã bắt đầu hành động thay vì tiếp tục để nỗi sợ điều khiển cuộc đời.
                </p>
              </div>
            </motion.div>

            {/* Benefit cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 rounded-2xl border p-5 sm:p-6 max-w-2xl"
              style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}
            >
              {benefitCards.map(({ icon: Icon, title, desc }) => (
                <motion.div variants={fadeInUp} key={title} className="flex flex-col items-start gap-2.5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center border"
                    style={{ borderColor: 'rgba(192,132,252,0.4)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: PURPLE }} />
                  </div>
                  <p className="text-white text-[11px] sm:text-xs font-bold leading-tight tracking-wide">
                    {title}
                  </p>
                  <p className="text-white/45 text-[11px] leading-snug">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — quote card + pricing card over the tree image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:w-[36%] shrink-0 flex-col justify-between min-h-[520px]"
          >
            <div className="border-r-2 pr-6 text-right" style={{ borderColor: '#c9a24d' }}>
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

            {/* Pricing card */}
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: 'rgba(192,132,252,0.3)', background: 'rgba(13,11,24,0.6)' }}
            >
              <p className="text-center text-xs sm:text-sm font-semibold tracking-wide text-white/70 mb-2">
                TRẢI NGHIỆM 7 NGÀY CHỈ VỚI
              </p>
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-white/40 line-through text-sm">799.000đ</span>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                  style={{ color: GOLD, borderColor: GOLD }}
                >
                  TIẾT KIỆM 86%
                </span>
              </div>
              <p
                className="text-center font-serif font-bold mb-5"
                style={{ color: GOLD, fontSize: '2.75rem', lineHeight: 1 }}
              >
                111.000đ
              </p>
              <button
                onClick={scrollToCTA}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full py-4 font-bold text-sm mb-3 transition-transform hover:scale-[1.02] shadow-2xl"
                style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
                data-testid="button-hero-cta"
              >
                TÔI MUỐN BẮT ĐẦU 7 NGÀY NGAY!
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-white/50 text-[11px] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" style={{ color: PURPLE }} />
                Hoàn tiền 100% trong 7 ngày nếu chương trình không phù hợp.
              </p>
            </div>
          </motion.div>

          {/* ── MOBILE CTA (shown only when right column is hidden) ── */}
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="lg:hidden w-full">
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: 'rgba(192,132,252,0.3)', background: 'rgba(13,11,24,0.6)' }}
            >
              <p className="text-center text-xs font-semibold tracking-wide text-white/70 mb-2">
                TRẢI NGHIỆM 7 NGÀY CHỈ VỚI
              </p>
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-white/40 line-through text-sm">799.000đ</span>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                  style={{ color: GOLD, borderColor: GOLD }}
                >
                  TIẾT KIỆM 86%
                </span>
              </div>
              <p className="text-center font-serif font-bold mb-5" style={{ color: GOLD, fontSize: '2.5rem' }}>
                111.000đ
              </p>
              <button
                onClick={scrollToCTA}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full py-4 font-bold text-sm mb-3 shadow-2xl"
                style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
              >
                TÔI MUỐN BẮT ĐẦU 7 NGÀY NGAY!
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-white/50 text-[11px] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" style={{ color: PURPLE }} />
                Hoàn tiền 100% trong 7 ngày nếu chương trình không phù hợp.
              </p>
            </div>
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
          {trustStrip.map(({ icon: Icon, title, caption }) => (
            <motion.div variants={fadeInUp} key={title} className="flex items-center gap-2.5">
              <Icon className="w-5 h-5 shrink-0" style={{ color: PURPLE }} />
              <div className="leading-tight">
                <p className="text-white text-xs font-bold">{title}</p>
                <p className="text-white/40 text-[11px]">{caption}</p>
              </div>
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
