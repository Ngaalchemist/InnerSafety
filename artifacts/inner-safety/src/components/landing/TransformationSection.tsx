import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check } from 'lucide-react';
import fearRootImage from '../../../../../attached_assets/re-so-hai-visual.png';
import safeRootImage from '../../../../../attached_assets/re-an-toan-visual.png';

const before = [
  'Ra quyết định từ sự hoảng loạn',
  'Sống trong giới hạn mà nỗi sợ cho phép',
  'Cơ thể & hệ thần kinh luôn căng thẳng',
  'Phải gồng mình nói "Tôi ổn" khi bên trong rối bời',
  'Bị kẹt trong vòng lặp overthinking',
  'Nghi ngờ giá trị bản thân mỗi ngày'
];

const after = [
  'Ra quyết định từ sự rõ ràng và tự tin',
  'Sống vượt trên nỗi sợ, dám bước ra ngoài vùng an toàn',
  'Làm dịu hệ thần kinh chỉ trong vài phút',
  'Sống thật, tháo bỏ áp lực, dám nói "Không" một cách nhẹ nhàng',
  'Làm chủ tâm trí, chuyển overthinking thành hành động',
  'Xây dựng "Bộ rễ an toàn" — cảm giác "Tôi đã đủ"'
];

export function TransformationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Cuộc Đời Bạn<br />Trước Và Sau
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 border-2 border-destructive/30 overflow-hidden"
          >
            <div className="relative">
              <img
                src={fearRootImage}
                alt="Rễ Sợ Hãi — sống trong hoảng loạn, căng thẳng, overthinking"
                className="w-full h-48 sm:h-56 object-cover"
                data-testid="img-fear-root"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-destructive/40 via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-destructive/30 flex items-center justify-center">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-destructive">
                  Rễ Sợ Hãi
                </h3>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {before.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-foreground/80"
                  >
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 overflow-hidden"
          >
            <div className="relative">
              <img
                src={safeRootImage}
                alt="Rễ An Toàn — bình an nội tại, tự tin, kết nối với bản thân"
                className="w-full h-48 sm:h-56 object-cover"
                data-testid="img-safe-root"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/30 flex items-center justify-center">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                  Rễ An Toàn
                </h3>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {after.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-foreground/80"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
