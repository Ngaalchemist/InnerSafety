import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Minh Anh',
    title: 'Content Creator, 32 tuổi',
    rating: 5,
    quote: 'Trước đây mình luôn nghĩ là mình thiếu tự tin. Nhưng sau khóa học này mình mới nhận ra, mình không thiếu tự tin, mình chỉ chưa cảm thấy an toàn với chính mình thôi. Bài "Cắm rễ an toàn" ngày 5 làm mình khóc... cảm giác được chạm vào phần sâu nhất của bản thân. Giờ mình có công cụ để tự sơ cứu khi bị trigger, không còn phải chạy trốn nữa.'
  },
  {
    name: 'Thanh Hằng',
    title: 'Freelance Designer, 28 tuổi',
    rating: 5,
    quote: 'Mình từng học nhiều khóa mindset, NLP, coaching... nhưng vẫn cảm thấy "thiếu thiếu cái gì đó". Inner Safety Method chính là mảnh ghép còn thiếu. Nó không dạy mình nghĩ tích cực, mà dạy mình làm dịu hệ thần kinh để không còn phải sống trong chế độ sinh tồn nữa. Ngày 2 về điều hòa hệ thần kinh đã thay đổi cách mình đối mặt với lo lắng.'
  },
  {
    name: 'Quang Huy',
    title: 'Chuyên viên tư vấn tài chính, 35 tuổi',
    rating: 5,
    quote: 'Tôi nghĩ chỉ phụ nữ mới cần những thứ này. Nhưng sau khi vợ tôi học xong và thay đổi rõ rệt, tôi mới quyết định thử. Bất ngờ nhất là phần "Hợp đồng mới với Tiền" — tôi mới nhận ra nỗi sợ thiếu hụt đã khiến tôi làm việc như một cái máy suốt 10 năm qua. Giờ tôi có thể nói "không" với khách hàng mà không cảm thấy tội lỗi.'
  },
  {
    name: 'Linh Chi',
    title: 'Yoga teacher, 29 tuổi',
    rating: 5,
    quote: 'Mình dạy yoga, thiền, breathwork... nhưng bản thân vẫn bị overthinking nặng. Khóa học này giúp mình hiểu rằng overthinking không phải là tính cách, mà là cơ chế tự bảo vệ của hệ thần kinh. Công cụ Pattern Interrupt trong ngày 2 cực kỳ hữu ích — giờ mình dạy luôn cho học viên của mình.'
  },
  {
    name: 'Tuấn Anh',
    title: 'Startup founder, 38 tuổi',
    rating: 5,
    quote: 'Tôi từng nghĩ nỗi sợ là động lực để thành công. Nhưng thực ra nỗi sợ chỉ khiến tôi làm việc điên cuồng để chứng minh giá trị. Sau 7 ngày, tôi mới thật sự hiểu "sống từ bình an" nghĩa là gì. Tôi vẫn làm việc chăm chỉ, nhưng giờ tôi làm vì yêu thích, không phải vì sợ thất bại.'
  },
  {
    name: 'Mai Phương',
    title: 'Nhân viên văn phòng, 27 tuổi',
    rating: 5,
    quote: 'Mình hay tự so sánh với người khác và cảm thấy mình "chưa đủ". Khóa học giúp mình nhìn thấy những niềm tin gốc rễ đã hình thành từ nhỏ — "phải giỏi mới được yêu", "phải hoàn hảo mới có giá trị". Ngày 4 về viết lại niềm tin gốc thật sự là bước ngoặt. Mình bắt đầu sống cho chính mình, không phải cho sự kỳ vọng của người khác.'
  }
];

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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Học Viên Nói Gì?
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-4 sm:p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
              data-testid={`testimonial-${idx}`}
            >
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border/30 pt-3 sm:pt-4">
                <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
