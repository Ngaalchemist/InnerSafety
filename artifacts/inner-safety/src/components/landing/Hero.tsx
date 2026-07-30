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
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 pb-12 sm:pb-16">
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={cosmicTreeBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
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
              className="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-primary mb-3"
            >
              Inner Safety Method™
            </motion.p>

            {/* Eyebrow 2 — audience line */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base italic text-white/70 leading-relaxed mb-5 sm:mb-6"
            >
              Dành cho những người luôn biết mình có nhiều giá trị hơn... nhưng vẫn chưa thể bước ra.
            </motion.p>

            {/* Headline — 3 tiers, 3× bigger, all-caps serif */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif font-bold leading-[1.05] tracking-tight mb-5 sm:mb-6 uppercase"
              style={{ fontSize: 'clamp(2.34rem, 5.72vw, 4.68rem)', letterSpacing: '-0.02em' }}
            >
              <span className="text-gradient-gold block">NGỪNG ĐỂ NỖI SỢ</span>
              <span className="text-gradient-gold block">TIẾP TỤC QUYẾT ĐỊNH</span>
              <span className="text-gradient-gold block">CUỘC ĐỜI BẠN</span>
            </motion.h1>

            {/* Subheadline — two paragraphs */}
            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-base sm:text-lg font-semibold text-white/90 leading-relaxed mb-7 sm:mb-9"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <p>
                Bạn không thiếu năng lực hay ý chí. Điều còn thiếu là một{' '}
                <span
                  className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f6d371] to-[#c9902e]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15em' }}
                >
                  "bộ rễ an toàn"
                </span>{' '}
                để bạn có thể hành động<br />
                mà không còn bị nỗi sợ, sự tự nghi ngờ hay overthinking kéo lùi.
              </p>
              <p>
                Trong 20 phút mỗi ngày, bạn sẽ học cách làm dịu hệ thần kinh,<br />
                tháo gỡ những phản ứng sợ hãi vô thức và bắt đầu sống từ sự bình an thay vì cơ chế sinh tồn.
              </p>
            </motion.div>

            {/* Bullets */}
            <motion.ul variants={staggerContainer} className="space-y-3 sm:space-y-4 mb-9 sm:mb-11">
              {bullets.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                  data-testid={`bullet-hero-${idx}`}
                >
                  <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full border border-[#c9a24d] mt-1 shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#e8c778]" strokeWidth={3} />
                  </span>
                  <span className="text-white/80 font-light text-sm sm:text-base leading-snug">
                    <span
                      className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f6d371] to-[#c9902e]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15em' }}
                    >
                      {item.lead}
                    </span>
                    {item.rest}
                    {item.lead2 && (
                      <span
                        className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f6d371] to-[#c9902e]"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15em' }}
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
                className="group inline-flex items-center gap-3 px-7 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground font-bold text-sm sm:text-base hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-105 w-full sm:w-auto justify-center"
                data-testid="button-hero-cta"
                style={{ boxShadow: '0 0 32px -4px hsl(var(--primary) / 0.5)' }}
              >
                TRẢI NGHIỆM 7 NGÀY CHỈ VỚI 111.000đ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust badges */}
              <div className="mt-5 flex flex-wrap gap-3">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-white/80 text-xs font-medium"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
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
          >
            <div className="border-r-2 border-[#c9a24d] pr-6 text-right">
              <p
                className="italic font-medium text-white/90 text-lg xl:text-xl leading-snug mb-2.5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Không phải mọi điều quyết định cuộc đời bạn đều có thể nhìn thấy.
              </p>
              <p className="text-[#c9a24d] text-[11px] uppercase tracking-[0.2em] font-medium">
                Nga Alchemist
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
