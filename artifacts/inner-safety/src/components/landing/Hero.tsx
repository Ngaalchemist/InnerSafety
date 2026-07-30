import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap, Users, Infinity, RefreshCcw, Check } from 'lucide-react';
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
  { text: 'Nhận diện "gốc rễ" khiến bạn trì hoãn, né tránh và tự giới hạn bản thân' },
  { text: 'Có công cụ giúp cơ thể bình tĩnh trở lại chỉ trong vài phút khi bị lo âu hoặc trigger.' },
  { text: 'Tháo gỡ những niềm tin như "Tôi chưa đủ", "Tôi sẽ thất bại", "Tôi sẽ bị đánh giá".' },
  { text: 'Thực hành khoảng 20 phút trong 7 ngày mỗi ngày với video hướng dẫn và workbook đơn giản, dễ áp dụng' },
  { text: 'Cài đặt lại cảm giác an toàn bên trong với Inner Safety Method™' },
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
    <section className="relative min-h-[66dvh] flex items-center overflow-hidden pt-14 pb-8 sm:pb-10">
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={cosmicTreeBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Legibility gradient — only on the left, where the text sits. Right side (tree/roots) stays untouched */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        {/* Light bottom gradient just for the button/badges, kept clear of the roots */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/35 to-transparent" />
        {/* Extra glow boost so the roots read as luminous rather than muted */}
        <div
          className="absolute inset-0 mix-blend-screen opacity-70 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 55% at 68% 88%, hsl(var(--primary) / 0.55), transparent 70%)'
          }}
        />
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

            {/* Headline — doubled size, 3 lines, key phrases in gold */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif font-bold leading-[1.05] tracking-tight mb-5 sm:mb-6 uppercase"
              style={{ fontSize: 'clamp(2.6rem, 8.8vw, 7.2rem)', letterSpacing: '-0.02em' }}
            >
              <span className="text-white block">
                NGỪNG ĐỂ <span className="text-gradient-gold">NỖI SỢ</span>
              </span>
              <span className="text-white block">TIẾP TỤC QUYẾT ĐỊNH</span>
              <span className="text-gradient-gold block">CUỘC ĐỜI BẠN</span>
            </motion.h1>

            {/* Subheadline — larger, brighter, with explicit line breaks */}
            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-base sm:text-lg text-white/95 font-medium leading-relaxed mb-7 sm:mb-9"
              style={{ textShadow: '0 2px 14px rgba(0,0,0,0.45)' }}
            >
              <p>
                Bạn không thiếu năng lực hay ý chí.<br />
                Điều còn thiếu là một <span className="text-gradient-gold font-semibold">"bộ rễ an toàn"</span> để bạn có thể<br />
                hành động mà không còn bị nỗi sợ, sự tự nghi ngờ hay overthinking kéo lùi.
              </p>
              <p>
                Trong 20 phút mỗi ngày, bạn sẽ học cách làm dịu hệ thần kinh, tháo gỡ những<br />
                phản ứng sợ hãi vô thức và bắt đầu sống từ sự bình an thay vì cơ chế sinh tồn.
              </p>
            </motion.div>

            {/* Bullets — unified gold/white style, single check icon */}
            <motion.ul variants={staggerContainer} className="space-y-3 sm:space-y-4 mb-9 sm:mb-11">
              {bullets.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-primary/30 rounded-xl px-4 py-3"
                  data-testid={`bullet-hero-${idx}`}
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="text-white font-medium text-sm sm:text-base leading-snug">
                    {item.text}
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

          {/* ── RIGHT COLUMN — quote card, sized to its content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-end flex-shrink-0"
          >
            <div className="relative bg-white/5 backdrop-blur-md border border-primary/25 rounded-xl px-6 py-5 text-right shadow-xl w-fit max-w-xs">
              <p className="text-primary text-3xl font-serif leading-none mb-2 opacity-70">"</p>
              <p className="font-serif italic text-white text-base xl:text-lg leading-snug mb-3">
                Không phải mọi điều quyết định cuộc đời bạn đều có thể nhìn thấy.
              </p>
              <p className="text-primary text-[11px] uppercase tracking-widest font-semibold">
                — Nga Alchemist
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
