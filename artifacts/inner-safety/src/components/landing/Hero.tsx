import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, Zap, Users, Infinity, RefreshCcw } from 'lucide-react';
import cosmicTreeBg from '@assets/ẢNh_cây_nền_tím_1785394971585.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const bullets = [
  { lead: 'Nhận diện "gốc rễ"', rest: ' khiến bạn trì hoãn, né tránh và tự giới hạn bản thân' },
  { lead: 'Có công cụ giúp cơ thể bình tĩnh trở lại', rest: ' chỉ trong vài phút khi bị lo âu hoặc trigger.' },
  { lead: 'Tháo gỡ những niềm tin', rest: ' như "Tôi chưa đủ", "Tôi sẽ thất bại", "Tôi sẽ bị đánh giá".' },
  { lead: 'Cài đặt lại cảm giác an toàn', rest: ' bên trong với ', lead2: 'Inner Safety Method™' },
];

const trustBadges = [
  { icon: Clock,       label: 'Học online mọi lúc, mọi nơi' },
  { icon: Zap,         label: 'Truy cập ngay' },
  { icon: Users,       label: 'Có cộng đồng riêng' },
  { icon: Infinity,    label: 'Truy cập trọn đời' },
  { icon: RefreshCcw,  label: 'Hoàn tiền 7 ngày' },
];

export function Hero() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-14 pb-8 sm:pb-10">
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={cosmicTreeBg}
          alt=""
          aria-hidden="true"
          className="absolute top-0 h-full object-cover object-center"
          style={{ width: '150%', left: '-5%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-black/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-8">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex-1 lg:max-w-[72%] flex flex-col text-left"
          >
            {/* Eyebrow 1 — brand label */}
            <motion.p
              variants={fadeInUp}
              className="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold mb-2"
              style={{ color: '#C084FC' }}
            >
              Inner Safety Method™
            </motion.p>

            {/* Eyebrow 2 — audience line */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base italic text-white/70 leading-relaxed mb-3 sm:mb-4"
            >
              Dành cho những người luôn biết mình có thể sống lớn hơn... nhưng vẫn đang bị nỗi sợ vô hình giữ chân.
            </motion.p>

            {/* Headline — 3 tiers, 3× bigger, all-caps serif */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif font-bold leading-[1.05] tracking-tight mb-4 sm:mb-5 uppercase"
              style={{ fontSize: 'clamp(2.34rem, 5.72vw, 4.68rem)', letterSpacing: '-0.02em' }}
            >
              <span className="block" style={{ color: '#FFFFFF' }}>NGỪNG ĐỂ NỖI SỢ TIẾP TỤC</span>
              <span
                className="block"
                style={{ color: '#FBBF24', textShadow: '0 0 12px rgba(251, 191, 36, 0.3)' }}
              >
                QUYẾT ĐỊNH CUỘC ĐỜI BẠN
              </span>
            </motion.h1>

            {/* Subheadline — two paragraphs */}
            <motion.div
              variants={fadeInUp}
              className="space-y-2 sm:space-y-3 text-base sm:text-lg font-light leading-relaxed mb-5 sm:mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p style={{ color: '#F3F4F6' }}>
                Bạn không thiếu năng lực hay ý chí. Điều còn thiếu là một{' '}
                <span
                  className="italic font-semibold"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15em', color: '#FBBF24' }}
                >
                  "bộ rễ an toàn"
                </span>{' '}
                để bạn có thể hành động<br />
                mà không còn bị nỗi sợ, sự tự nghi ngờ hay overthinking kéo lùi.
              </p>
              <p style={{ color: '#E5E7EB' }}>
                Chỉ với 20 phút mỗi ngày, bạn sẽ học cách làm dịu hệ thần kinh, tháo gỡ những phản ứng sợ hãi vô thức<br />
                và xây dựng cảm giác an toàn từ bên trong - để có thể hành động ngay cả khi chưa hết sợ.
              </p>
            </motion.div>

            {/* Bullets */}
            <motion.ul variants={staggerContainer} className="space-y-2 sm:space-y-3 mb-6 sm:mb-7">
              {bullets.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                  data-testid={`bullet-hero-${idx}`}
                >
                  <span
                    className="flex items-center justify-center w-[18px] h-[18px] rounded-full mt-1 shrink-0"
                    style={{ border: '1px solid #F59E0B' }}
                  >
                    <Check className="w-2.5 h-2.5" strokeWidth={3} style={{ color: '#F59E0B' }} />
                  </span>
                  <span className="font-light text-sm sm:text-base leading-snug" style={{ color: '#E5E7EB' }}>
                    <span
                      className="italic font-semibold"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15em', color: '#FFFFFF' }}
                    >
                      {item.lead}
                    </span>
                    {item.rest}
                    {item.lead2 && (
                      <span
                        className="italic font-semibold"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15em', color: '#FFFFFF' }}
                      >
                        {item.lead2}
                      </span>
                    )}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <button
                onClick={scrollToCTA}
                className="group inline-flex items-center gap-3 px-7 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm sm:text-base transition-all duration-500 hover:scale-105 w-full sm:w-auto justify-center"
                data-testid="button-hero-cta"
                style={{
                  background: 'linear-gradient(90deg, #F59E0B, #D97706)',
                  color: '#0D0B18',
                  fontWeight: 700,
                  boxShadow: '0 4px 20px rgba(245, 158, 11, 0.4)',
                }}
              >
                TRẢI NGHIỆM 7 NGÀY CHỈ VỚI 111.000đ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust badges */}
              <div className="mt-5 flex flex-wrap gap-3">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid #A1A1AA',
                      color: '#A1A1AA',
                    }}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: '#A1A1AA' }} />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — quote card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-end justify-center flex-shrink-0 max-w-xs xl:max-w-sm"
            style={{ transform: 'translateY(20vh)' }}
          >
            <div className="pr-6 text-right" style={{ borderRight: '2px solid #F59E0B' }}>
              <p
                className="italic font-medium text-lg xl:text-xl leading-snug mb-2.5"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Không phải mọi điều quyết định cuộc đời bạn<br />
                đều có thể nhìn thấy.
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] font-medium" style={{ color: '#FBBF24' }}>
                Nga Alchemist
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
