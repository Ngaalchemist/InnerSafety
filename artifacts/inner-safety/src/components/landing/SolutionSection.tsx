import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Heart, Waves, Sparkles } from 'lucide-react';
import goldenRootsImage from '@assets/b7c36e0667cc4b981650a080f50a5cc8_1785305788815.jpg';

const methods = [
  { icon: Brain, text: 'Thôi miên trị liệu (Hypnotherapy)' },
  { icon: Waves, text: 'Điều hòa hệ thần kinh (Nervous System Regulation)' },
  { icon: Heart, text: 'Somatic Healing' },
  { icon: Sparkles, text: 'Tái lập trình niềm tin vô thức (Subconscious Reprogramming)' }
];

export function SolutionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Khám Phá Inner Safety Method™
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-foreground/80">
            Phương Pháp Tháo Gỡ Bộ Rễ Sợ Hãi
          </p>
        </motion.div>

        {/* Golden roots image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/30">
            <img
              src={goldenRootsImage}
              alt="Golden glowing roots representing inner safety"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto space-y-6 sm:space-y-8 text-base sm:text-lg text-foreground/80 leading-relaxed mb-12 sm:mb-16"
        >
          <p className="text-2xl sm:text-3xl font-serif text-foreground italic text-center">
            Trong 7 ngày, bạn sẽ không cố gắng loại bỏ nỗi sợ.
          </p>
          
          <p className="text-center">
            Bạn sẽ học cách hiểu đúng bản chất của nỗi sợ, làm dịu hệ thần kinh, tháo gỡ các niềm tin gốc rễ và cài đặt trạng thái <strong className="text-primary">"An toàn nội tại"</strong> — để có thể bước ra hành động một cách tự nhiên mà không cần gồng mình.
          </p>

          <div className="pt-6 sm:pt-8 space-y-4 border-t border-border/30">
            <p className="text-xl sm:text-2xl font-medium text-foreground">
              Đây không phải khóa học dạy bạn "nghĩ tích cực".
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-gradient-gold">
              Đây là hành trình đi thẳng vào tầng sâu nhất — nơi nỗi sợ thực sự sống.
            </p>
          </div>
        </motion.div>

        {/* Methods grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-center text-lg sm:text-xl text-foreground/80 mb-6 sm:mb-8">
            Sử dụng các kỹ thuật từ:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {methods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                className="flex items-center gap-4 p-4 sm:p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                data-testid={`method-card-${idx}`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <method.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <p className="text-sm sm:text-base font-medium text-foreground">{method.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
