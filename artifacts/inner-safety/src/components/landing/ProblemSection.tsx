import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle } from 'lucide-react';
import treeImage from '@assets/Gemini_Generated_Image_rz0f3rz0f3rz0f3r_1784884536664_17849928_1785305808666.jpg';
import rootsCompareImage from '@assets/3a7a118b5aaf078c4cc85f9ecc99e6fb_1785305782800.jpg';

const fears = [
  'Sợ không đủ.',
  'Sợ thất bại.',
  'Sợ mất tiền.',
  'Sợ bị bỏ rơi.',
  'Sợ bị đánh giá.',
  'Sợ bắt đầu lại.',
  'Sợ mình không còn giá trị.'
];

export function ProblemSection() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-6 sm:mb-8">
            Bạn Đang Sống Trong Giới Hạn<br />Của Nỗi Sợ?
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
            <p>Có thể bạn nghĩ mình chỉ đang lo lắng.</p>
            <p>
              Nhưng có một sự thật mà rất ít người nhận ra: <strong className="text-foreground">Rất nhiều quyết định trong cuộc đời chúng ta không được đưa ra từ sự bình an — mà từ những nỗi sợ vô hình.</strong>
            </p>
          </div>
        </motion.div>

        {/* Fear list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          {fears.map((fear, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              className="flex items-center gap-3 sm:gap-4 py-3 sm:py-4 border-b border-border/30"
              data-testid={`fear-item-${idx}`}
            >
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-destructive flex-shrink-0" />
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/90">{fear}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed mb-16 sm:mb-24"
        >
          <p className="text-xl sm:text-2xl font-serif text-foreground italic">
            Những nỗi sợ ấy âm thầm quyết định thay bạn:
          </p>
          <ul className="space-y-3 sm:space-y-4 pl-4 sm:pl-6">
            <li>Bạn không dám bắt đầu điều mình thật sự muốn.</li>
            <li>Bạn chọn sự an toàn thay vì bước ra khỏi vùng quen thuộc.</li>
            <li>Bạn thu nhỏ mong muốn của mình để tránh cảm giác thất bại, bị từ chối hay bị đánh giá.</li>
          </ul>
          <p className="text-lg sm:text-xl font-medium text-foreground pt-4 sm:pt-6">
            Theo thời gian, bạn không còn sống cuộc đời mình mong muốn.<br />
            <strong className="text-gradient-gold">Bạn chỉ đang sống trong giới hạn mà nỗi sợ cho phép.</strong>
          </p>
        </motion.div>

        {/* Tree metaphor */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16 sm:mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20 mb-8 sm:mb-12">
              <img
                src={treeImage}
                alt="Tree cross-section showing glowing roots"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            <div className="text-center max-w-2xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p className="text-xl sm:text-2xl font-serif text-foreground italic">
                Hãy hình dung cuộc đời bạn như một cái cây.
              </p>
              <p>
                Phần mọi người nhìn thấy: công việc, gia đình, sự cố gắng mỗi ngày — chỉ là phần thân và lá. Còn phần quyết định cái cây đó có đứng vững qua giông bão hay không, <strong className="text-primary">nằm sâu dưới đất, nơi không ai nhìn thấy: bộ rễ.</strong>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Roots comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16 sm:mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20 mb-6 sm:mb-8">
              <img
                src={rootsCompareImage}
                alt="Comparison between fear roots and safety roots"
                className="w-full h-auto"
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center p-4 rounded-xl bg-destructive/10 border border-destructive/30">
                <p className="text-lg sm:text-xl font-serif font-semibold text-destructive">Rễ Sợ Hãi</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/30">
                <p className="text-lg sm:text-xl font-serif font-semibold text-primary">Rễ An Toàn</p>
              </div>
            </div>
            
            <p className="text-center text-base sm:text-lg italic text-muted-foreground">
              "Từ xa nhìn vào, hai cái cây trông giống hệt nhau.<br />
              Nhưng chỉ một cái sẽ đứng vững qua giông bão."
            </p>
          </div>
        </motion.div>

        {/* Two-column check */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
        >
          {/* Fear roots column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 border-2 border-destructive/30">
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-destructive mb-4 sm:mb-6">
              Bạn có đang sống bằng rễ sợ hãi không?
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Bạn thấy phải kiểm soát mọi thứ.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Bạn nói "tôi ổn" khi bên trong đang rối bời.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Bạn làm rất nhiều, nghỉ ngơi thì thấy tội lỗi.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Bạn từng đưa ra một quyết định lớn chỉ vì quá sợ, không phải vì thật sự muốn.</span>
              </li>
            </ul>
          </div>

          {/* Safety roots column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30">
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-primary mb-4 sm:mb-6">
              Hay bạn đã có rễ an toàn?
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Bạn vẫn lo lắng, nhưng lo lắng không điều khiển quyết định của bạn.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Bạn nói "không" mà không cần giải thích dài dòng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Bạn ra quyết định từ sự rõ ràng, không phải hoảng loạn.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
