import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import review6 from '@/assets/testimonials/review-6.jpg';
import review4 from '@/assets/testimonials/review-4.jpg';
import review2 from '@/assets/testimonials/review-2.jpg';
import review3 from '@/assets/testimonials/review-3.jpg';
import review1 from '@/assets/testimonials/review-1.jpg';
import review5 from '@/assets/testimonials/review-5.jpg';

// All 6 source screenshots are portrait chat/DM captures. Rather than
// building a size hierarchy (which only works cleanly when shapes are
// consistent), every card here is styled identically — same width, same
// border radius, same gap, same background. The only thing that carries
// priority is READING ORDER, not size:
//   Row 1: Review 6 → Review 4 → Review 2
//   Row 2: Review 3 → Review 1 → Review 5
// Each screenshot keeps its own natural aspect ratio (no cropping to force
// a uniform height) — cards are equal-width, not equal-height, and that's
// intentional: it reads like a real screenshot gallery, not a stretched
// stock-photo grid.
const reviews = [
  {
    src: review6,
    alt: 'Học viên chia sẻ: em nghĩ do em may mắn mọi thứ đến nhanh, nhưng giờ em thấy khác biệt nhất ở em là không sợ hãi điều gì bất ý',
    name: 'Minh Anh',
    title: 'Content Creator, 32 tuổi'
  },
  {
    src: review4,
    alt: 'Học viên chia sẻ về bài làm dịu hệ thần kinh ngày 2 và kết quả áp dụng cụ thể',
    name: 'Thanh Hằng',
    title: 'Tarot Reader, Healer, 34 tuổi'
  },
  {
    src: review2,
    alt: 'Học viên chia sẻ trải nghiệm giải phóng cảm xúc và cảm nhận trước/sau buổi học',
    name: 'Hải Yến',
    title: 'Healer, 30 tuổi'
  },
  {
    src: review3,
    alt: 'Học viên chia sẻ: em cảm nhận được sự hồi sinh, những chương trình cũ được xoá và lập trình mới đang hoạt động',
    name: 'Ngọc Mai',
    title: 'Coach, 36 tuổi'
  },
  {
    src: review1,
    alt: 'Học viên chia sẻ: em thấy kết nối với bản thân mình hơn, tim không còn bị nặng nữa',
    name: 'Thùy Dương',
    title: 'Content Creator, 33 tuổi'
  },
  {
    src: review5,
    alt: 'Học viên chia sẻ cảm nhận về buổi thiền và tác động lên cơ thể, cảm xúc',
    name: 'Thanh Thủy',
    title: 'Healer, 38 tuổi'
  }
];

function ReviewCard({
  src,
  alt,
  name,
  title,
  delay,
  isInView
}: {
  src: string;
  alt: string;
  name: string;
  title: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="rounded-xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 p-3 sm:p-4"
      data-testid="testimonial-card"
    >
      <img src={src} alt={alt} loading="lazy" className="w-full h-auto rounded-lg block" />
      <div className="border-t border-border/30 mt-3 sm:mt-4 pt-3 sm:pt-4">
        <p className="font-semibold text-foreground text-sm sm:text-base">{name}</p>
        <p className="text-xs sm:text-sm text-muted-foreground">{title}</p>
      </div>
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
            Sau 7 Ngày, Điều Gì Đã Thay Đổi?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Chia sẻ từ những học viên đã trải nghiệm Beyond Fear
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((item, idx) => (
            <ReviewCard
              key={item.src}
              src={item.src}
              alt={item.alt}
              name={item.name}
              title={item.title}
              delay={idx * 0.08}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
