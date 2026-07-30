import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap, Users, Infinity, RefreshCcw } from 'lucide-react';
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
  { icon: '✓',  text: 'Nhận diện "gốc rễ" khiến bạn trì hoãn, né tránh và tự giới hạn bản thân' },
  { icon: '✅', text: 'Có công cụ giúp cơ thể bình tĩnh trở lại chỉ trong vài phút khi bị lo âu hoặc trigger.' },
  { icon: '✅', text: 'Tháo gỡ những niềm tin như "Tôi chưa đủ", "Tôi sẽ thất bại", "Tôi sẽ bị đánh giá".' },
  { icon: '✅', text: 'Thực hành khoảng 20 phút trong 7 ngày mỗi ngày với video hướng dẫn và workbook đơn giản, dễ áp dụng' },
  { icon: '✓',  text: 'Cài đặt lại cảm giác an toàn bên trong với Inner Safety Method™' },
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
              style={{ fontSize: 'clamp(1.8rem, 4.4vw, 3.6rem)', letterSpacing: '-0.02em' }}
            >
              <span className="text-gradient-gold block">7 NGÀY</span>
              <span className="text-white block">NGỪNG ĐỂ NỖI SỢ</span>
              <span className="text-white/90 block">QUYẾT ĐỊNH CUỘC ĐỜI BẠN.</span>
            </motion.h1>

            {/* Subheadline — two paragraphs */}
            <motion.div
              variants={fadeInUp}
              className="space-y-3 text-sm sm:text-base text-white/75 leading-relaxed mb-7 sm:mb-9"
            >
              <p>
                Bạn không thiếu năng lực hay ý chí.<br />
                Điều còn thiếu là một "bộ rễ an toàn" để bạn có thể hành động mà không còn bị nỗi sợ, sự tự nghi ngờ hay overthinking kéo lùi.
              </p>
              <p>
                Trong 20 phút mỗi ngày, bạn sẽ học cách làm dịu hệ thần kinh, tháo gỡ những phản ứng sợ hãi vô thức và bắt đầu sống từ sự bình an thay vì cơ chế sinh tồn.
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
                  <span className="text-primary font-bold text-base mt-0.5 shrink-0">{item.icon}</span>
                  <span className="text-white/90 font-medium text-sm sm:text-base leading-snug">
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

          {/* ── RIGHT COLUMN — quote card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-end justify-center flex-shrink-0 w-72 xl:w-80"
          >
            <div className="relative bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl px-7 py-8 text-right shadow-2xl">
              {/* Decorative top accent */}
              <div className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/30 to-transparent" />
              </div>
              {/* Opening quote mark */}
              <p className="text-primary text-5xl font-serif leading-none mb-3 opacity-60">"</p>
              <p className="font-serif italic text-white/90 text-base xl:text-lg leading-relaxed mb-5">
                Không phải mọi điều quyết định cuộc đời bạn đều có thể nhìn thấy.
              </p>
              <p className="text-primary text-xs uppercase tracking-widest font-semibold">
                — Nga Alchemist
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
