import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Heart, Waves, Sparkles, Check, X, AlertCircle } from 'lucide-react';
import goldenRootsImage from '@assets/b7c36e0667cc4b981650a080f50a5cc8_1785305788815.jpg';

const methods = [
  {
    icon: Brain,
    title: 'Thôi miên trị liệu',
    text: 'Tháo gỡ những chương trình vô thức đang giữ bạn mắc kẹt.'
  },
  {
    icon: Waves,
    title: 'Điều hòa hệ thần kinh',
    text: 'Đưa cơ thể thoát khỏi chế độ sinh tồn và trở về trạng thái an toàn.'
  },
  {
    icon: Heart,
    title: 'Somatic Healing',
    text: 'Giải phóng những cảm xúc còn mắc kẹt trong cơ thể.'
  },
  {
    icon: Sparkles,
    title: 'Tái lập trình niềm tin',
    text: 'Xây dựng bộ rễ nội tại mới để hành động từ sự bình an thay vì nỗi sợ.'
  }
];

const outcomes = [
  'Dám nói điều mình nghĩ mà không quá sợ bị đánh giá.',
  'Bình tĩnh hơn khi gặp áp lực.',
  'Ra quyết định mà không overthinking quá nhiều.',
  'Theo đuổi điều mình thật sự mong muốn.'
];

const stillFeelings = ['Overthinking', 'Trì hoãn', 'Tự nghi ngờ', 'Sợ bị đánh giá'];

const notList = ['Ép bản thân tích cực.', 'Cố mạnh mẽ hơn.', 'Đè nén nỗi sợ.'];
const isList = [
  'Xây dựng cảm giác an toàn từ bên trong.',
  'Tháo gỡ bộ rễ tạo ra nỗi sợ.',
  'Hành động từ sự bình an thay vì phải gồng mình.'
];

export function SolutionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading — kept in serif to match other section titles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Khám Phá Inner Safety Method™
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-sans text-foreground/80">
            Phương pháp giúp bạn tháo gỡ bộ rễ sợ hãi đa tầng.
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

        {/* Not / Is — makes the golden-roots image concrete right away */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10"
        >
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-destructive/15 to-destructive/5 border-2 border-destructive/25">
            <p className="text-sm sm:text-base font-bold uppercase tracking-wide text-destructive mb-4">
              Inner Safety Method™ không giúp bạn...
            </p>
            <ul className="space-y-3">
              {notList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/25">
            <p className="text-sm sm:text-base font-bold uppercase tracking-wide text-primary mb-4">
              Inner Safety Method™ giúp bạn...
            </p>
            <ul className="space-y-3">
              {isList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* One-line bridge — locks what the image means before explaining why it works */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center text-base sm:text-lg text-foreground/80 leading-relaxed mb-12 sm:mb-16"
        >
          Inner Safety Method™ không chỉ giúp bạn bình tĩnh hơn trong chốc lát. Mục tiêu là
          thay đổi <span className="text-primary font-semibold">"bộ rễ"</span> tạo ra nỗi sợ,
          để sự bình an trở thành trạng thái tự nhiên.
        </motion.p>

        {/* Paradox callout — unchanged framing, only the explanation line is softened */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <div className="rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-sm p-6 sm:p-8 text-center space-y-3">
            <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-primary">
              Điều kỳ lạ là...
            </p>
            <p className="text-xl sm:text-2xl font-medium text-foreground leading-snug">
              Bạn càng cố loại bỏ nỗi sợ, nó càng trở nên mạnh hơn.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed pt-2">
              Điều đó không có nghĩa là bạn yếu. Cũng không phải vì bạn thiếu ý chí.
              <br className="hidden sm:block" />
              Mà bởi vì bên trong bạn vẫn còn một phần{' '}
              <span className="text-primary font-semibold">chưa thật sự cảm thấy an toàn.</span>
            </p>
          </div>
        </motion.div>

        {/* Bridge from Problem → Solution: names the daily symptoms of that unsafety */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
        >
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4">
            Khi bên trong vẫn còn cảm giác phải phòng vệ... bạn sẽ tiếp tục:
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
            {stillFeelings.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-destructive/10 border border-destructive/25 text-sm text-foreground/80"
              >
                <AlertCircle className="w-3.5 h-3.5 text-destructive" />
                {item}
              </span>
            ))}
          </div>
          <p className="text-base sm:text-lg text-foreground/80 italic">
            ...dù bạn đã cố thay đổi rất nhiều lần.
          </p>
        </motion.div>

        {/* Core explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto space-y-6 sm:space-y-8 text-base sm:text-lg text-foreground/80 leading-relaxed mb-12 sm:mb-16"
        >
          <p className="text-xl sm:text-2xl font-semibold text-foreground text-center">
            Trong 7 ngày, bạn sẽ không phải ép mình mạnh mẽ hơn.
          </p>

          <p className="text-center">
            Thay vào đó, bạn sẽ từng bước giúp cơ thể và bên trong mình cảm thấy đủ an toàn.
            <br className="hidden sm:block" />
            Khi cảm giác an toàn xuất hiện... việc hành động sẽ trở nên tự nhiên hơn rất nhiều.
          </p>

          <div className="pt-6 sm:pt-8 border-t border-border/30 space-y-6">
            <p className="text-lg sm:text-xl text-center text-foreground/80">
              Khi <span className="text-primary font-semibold">"bộ rễ"</span> thay đổi...
              <br className="hidden sm:block" />
              bạn sẽ thấy mình dễ dàng hơn khi:
            </p>

            <ul className="space-y-3 max-w-xl mx-auto">
              {outcomes.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  className="flex items-start gap-3 text-foreground"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="text-base sm:text-lg font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Methods grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-center text-lg sm:text-xl font-medium text-foreground mb-6 sm:mb-8">
            Inner Safety Method™ kết hợp các phương pháp chuyển hóa đa tầng
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {methods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                className="flex items-start gap-4 p-4 sm:p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                data-testid={`method-card-${idx}`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <method.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-foreground mb-1">
                    {method.title}
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {method.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
