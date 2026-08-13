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
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Hai trạng thái. Hai cách sống. Bạn đang ở đâu, và bạn muốn đi về đâu?
          </p>
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
                alt="Rễ Sợ Hãi — sống trong hoảng loạn, overthinking, căng thẳng, áp lực triền miên"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover object-top"
                data-testid="img-fear-root"
              />
              {/* Light bottom-only fade so the full emotional image stays visible */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-destructive/40">
                <X className="w-4 h-4 text-destructive" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-destructive uppercase">Trước</span>
              </div>
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
                alt="Rễ An Toàn — bình an, tự tin, yêu thương, sống thật, làm chủ tâm trí"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover object-top"
                data-testid="img-safe-root"
              />
              {/* Light bottom-only fade so the full emotional image stays visible */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-primary/40">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-primary uppercase">Sau</span>
              </div>
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
