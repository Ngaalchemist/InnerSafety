import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Self-loads fonts so the section renders correctly even if the
// project's global CSS doesn't import them.
const GOOGLE_FONT_ID = 'font-manrope-playfair';
function useSectionFonts() {
  useEffect(() => {
    if (document.getElementById(GOOGLE_FONT_ID)) return;
    const link = document.createElement('link');
    link.id = GOOGLE_FONT_ID;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@700&display=swap';
    document.head.appendChild(link);
  }, []);
}

const T_BODY = 'text-base sm:text-lg leading-relaxed';
const T_QUOTE = 'text-xl sm:text-2xl font-medium italic';
const LINE_GAP = 'space-y-4 sm:space-y-5';
const BLOCK_GAP = 'mb-10 sm:mb-14';

const reactions = ['trì hoãn', 'tự nghi ngờ', 'kiểm soát', 'làm hài lòng', 'thu mình', 'quay về điều quen thuộc'];

export function BigIdeaSection() {
  useSectionFonts();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{ fontFamily: "'Manrope', sans-serif" }}
      data-testid="section-big-idea"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* ── Block 1 — knowledge isn't the problem ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`${BLOCK_GAP} ${LINE_GAP} ${T_BODY} text-foreground/80`}
          >
            <p className="text-2xl sm:text-3xl font-bold text-foreground">Bạn không thiếu kiến thức.</p>
            <p>Có thể bạn đã đọc rất nhiều.</p>
            <p>Đã thiền.</p>
            <p>Đã chữa lành.</p>
            <p>Đã hiểu về niềm tin, tiềm thức, năng lượng, manifestation.</p>
          </motion.div>

          {/* ── Block 2 — the gap ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className={`${BLOCK_GAP} ${LINE_GAP} ${T_BODY} text-foreground/80`}
          >
            <p>Nhưng đôi khi…</p>
            <p className="text-foreground font-semibold">
              biết mình cần làm gì không đồng nghĩa với việc mình có thể làm được điều đó một cách tự nhiên.
            </p>
            <p>
              Bởi vì dưới những gì bạn hiểu bằng lý trí vẫn có thể tồn tại những cách phản ứng cũ:
            </p>
            <p className="text-primary font-semibold tracking-wide">{reactions.join(' · ')}</p>
          </motion.div>

          {/* ── Block 3 — the named concept ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={BLOCK_GAP}
          >
            <p className={`${T_BODY} text-foreground/80 mb-4`}>Tôi gọi đó là:</p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-gold uppercase"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              SINH TỒN CHẠY NGẦM
            </h2>
          </motion.div>

          {/* ── Block 4 — how it looks ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className={`${BLOCK_GAP} ${LINE_GAP} ${T_BODY} text-foreground/80`}
          >
            <p>Không phải lúc nào nó cũng trông như khủng hoảng.</p>
            <p>
              Đôi khi nó trông giống một người vẫn làm việc, vẫn học hỏi, vẫn chăm sóc mọi thứ…
              <br />
              nhưng bên trong chưa thật sự cảm thấy đủ vững để bước vào điều mới.
            </p>
          </motion.div>

          {/* ── Câu đinh ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-t border-border/40 pt-10 sm:pt-12"
          >
            <p className={`${T_QUOTE} text-foreground/80 mb-3`}>
              Có thể vấn đề không phải bạn cần học thêm.
            </p>
            <p className={`${T_QUOTE} text-primary`}>
              Có thể nền bên trong của bạn chưa theo kịp những gì bạn đã hiểu.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
