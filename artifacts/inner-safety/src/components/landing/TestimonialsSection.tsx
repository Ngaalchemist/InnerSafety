import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import review6 from '@/assets/testimonials/review-6.jpg';
import review4 from '@/assets/testimonials/review-4.jpg';
import review2 from '@/assets/testimonials/review-2.jpg';
import review3 from '@/assets/testimonials/review-3.jpg';
import review1 from '@/assets/testimonials/review-1.jpg';
import review5 from '@/assets/testimonials/review-5.jpg';

// Order + sizing follows the "4 strong + 2 short" trust formula:
//   Review 6 (large) → Review 4 + Review 2 (small pair)
//   Review 3 (large) → Review 1 + Review 5 (small pair)
const featuredTop = {
  src: review6,
  alt: 'Học viên chia sẻ: em nghĩ do em may mắn mọi thứ đến nhanh, nhưng giờ em thấy khác biệt nhất ở em là không sợ hãi điều gì bất ý'
};

const pairTop = [
  {
    src: review4,
    alt: 'Học viên chia sẻ về bài làm dịu hệ thần kinh ngày 2 và kết quả áp dụng cụ thể'
  },
  {
    src: review2,
    alt: 'Học viên chia sẻ trải nghiệm giải phóng cảm xúc và cảm nhận trước/sau buổi học'
  }
];

const featuredBottom = {
  src: review3,
  alt: 'Học viên chia sẻ: em cảm nhận được sự hồi sinh, những chương trình cũ được xoá và lập trình mới đang hoạt động'
};

const pairBottom = [
  {
    src: review1,
    alt: 'Học viên chia sẻ: em thấy kết nối với bản thân mình hơn, tim không còn bị nặng nữa'
  },
  {
    src: review5,
    alt: 'Học viên chia sẻ cảm nhận về buổi thiền và tác động lên cơ thể, cảm xúc'
  }
];

// The 6 source screenshots have very different aspect ratios (e.g. review-6 is
// wide/landscape at 1122×656, review-3 is tall/portrait at 980×1436). Sizing
// purely by the image's own aspect ratio (w-full h-auto) makes the two
// "large" cards read as different visual weights — one short & wide, one
// tall & narrow — which breaks the "these are the 2 biggest, strongest
// reviews" signal the layout is going for.
//
// Fix: give every card in the same tier (large / small) a fixed-height
// frame and letterbox the screenshot inside with object-contain. This keeps
// every card in a tier visually equal in size — and, just as importantly,
// never crops any of the review text.
function ScreenshotCard({
  src,
  alt,
  large = false,
  delay = 0,
  isInView
}: {
  src: string;
  alt: string;
  large?: boolean;
  delay?: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`rounded-xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 flex items-center justify-center p-3 sm:p-4 ${
        large
          ? 'h-[420px] sm:h-[480px] lg:h-[520px] shadow-lg shadow-primary/5'
          : 'h-[300px] sm:h-[340px]'
      }`}
      data-testid={large ? 'testimonial-featured' : 'testimonial-small'}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
      />
    </motion.div>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Đây là điều học viên thực sự nói sau khi học
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Không phải lời mình nói. Đây là những gì học viên nhắn lại sau khi trải nghiệm chương trình.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {/* Review 6 — featured, large */}
          <ScreenshotCard
            src={featuredTop.src}
            alt={featuredTop.alt}
            large
            delay={0}
            isInView={isInView}
          />

          {/* Review 4 + Review 2 — small pair */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {pairTop.map((item, idx) => (
              <ScreenshotCard
                key={item.src}
                src={item.src}
                alt={item.alt}
                delay={0.1 + idx * 0.1}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Review 3 — featured, large */}
          <ScreenshotCard
            src={featuredBottom.src}
            alt={featuredBottom.alt}
            large
            delay={0.3}
            isInView={isInView}
          />

          {/* Review 1 + Review 5 — small pair */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {pairBottom.map((item, idx) => (
              <ScreenshotCard
                key={item.src}
                src={item.src}
                alt={item.alt}
                delay={0.4 + idx * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
