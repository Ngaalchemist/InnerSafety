import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { AlertCircle } from 'lucide-react';
import rootsCompareImage from '@assets/3a7a118b5aaf078c4cc85f9ecc99e6fb_1785305782800.jpg';

// Self-loads both fonts so the section renders correctly even if the
// project's global CSS doesn't import them.
// - Manrope: body copy, quotes, labels, lists — everything but the headline.
// - Playfair Display: reserved for the single H2 display moment only.
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

// ── Type scale ─────────────────────────────────────────────────────
// Exactly 4 tiers, reused everywhere instead of ad-hoc sizes per block.
const T_DISPLAY = 'text-4xl sm:text-5xl lg:text-6xl font-bold'; // the one headline
const T_QUOTE = 'text-xl sm:text-2xl font-medium italic'; // pull-quote / emphasis lines
const T_SUBHEAD = 'text-xl sm:text-2xl font-bold'; // h3-level section subheads
const T_BODY = 'text-base sm:text-lg leading-relaxed'; // all paragraphs and list items
const T_LABEL = 'text-sm sm:text-base font-bold uppercase tracking-wide'; // small tags/badges
const T_CAPTION = 'text-sm sm:text-base text-foreground/55 leading-snug'; // secondary line under a list item

// ── Spacing rhythm ─────────────────────────────────────────────────
// Exactly 2 tiers: gap between major blocks, gap between lines inside a block.
const BLOCK_GAP = 'mb-12 sm:mb-16';
const LINE_GAP = 'space-y-4 sm:space-y-5';

const fears = [
  {
    title: 'Sợ mình không đủ.',
    desc: 'Bạn luôn nhìn thấy điểm mạnh của người khác, nhưng chỉ nhìn thấy điểm yếu của chính mình.',
  },
  {
    title: 'Sợ thất bại.',
    desc: 'Bạn chuẩn bị rất nhiều nhưng vẫn trì hoãn, vì trong lòng luôn có một tiếng nói rằng: "Mình chưa đủ giỏi."',
  },
   {
    title: 'Sợ bị bỏ rơi.',
    desc: 'Bạn cố gắng làm hài lòng, nhẫn nhịn hoặc kiểm soát người khác chỉ để giữ một mối quan hệ.',
  },
  {
    title: 'Sợ bị đánh giá.',
    desc: 'Bạn nghĩ rất nhiều trước khi nói, trước khi đăng một bài viết hay trước khi dám thể hiện chính mình.',
  },
  {
    title: 'Sợ bắt đầu lại.',
    desc: 'Bạn tiếp tục ở lại với một công việc, một mối quan hệ hoặc một cuộc sống không còn phù hợp... chỉ vì bắt đầu lại có vẻ còn đáng sợ hơn.',
  },
  ];

export function ProblemSection() {
  useSectionFonts();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Headline block — the one serif moment ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`text-center mb-8 sm:mb-10`}
        >
          <h2
            className={`${T_DISPLAY} text-gradient-gold mb-6`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Có Phải Nỗi Sợ Đang Âm Thầm
            <br />
            Điều Khiển Cuộc Đời Bạn?
          </h2>

          <div className={`max-w-3xl mx-auto ${LINE_GAP} ${T_BODY} text-foreground/80`}>
            <p>Có thể bạn nghĩ mình chỉ đang lo lắng quá nhiều.</p>
            <p>
              <span className="sm:whitespace-nowrap">
                Nhưng sự thật là rất nhiều quyết định trong cuộc sống không xuất phát từ điều bạn thật sự mong muốn...
              </span>
              <br />
              <strong className="text-foreground">
                Mà từ những nỗi sợ đã âm thầm điều khiển bạn suốt nhiều năm.
              </strong>
            </p>
            <p className="italic">Có thể đó là...</p>
          </div>
        </motion.div>

        {/* ── Fear list — same body scale as everything else, not oversized ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`max-w-2xl mx-auto ${BLOCK_GAP}`}
        >
          {fears.map((fear, idx) => (
            <motion.div
              key={fear.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
              className="flex items-start gap-3 py-3 sm:py-3.5 border-b border-border/30"
              data-testid={`fear-item-${idx}`}
            >
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className={`${T_BODY} text-foreground/90`}>{fear.title}</p>
                <p className={`${T_CAPTION} mt-1`}>{fear.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Consequence block ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`max-w-3xl mx-auto ${BLOCK_GAP}`}
        >
          <p className={`${T_QUOTE} text-foreground mb-2`}>
            Điều đáng sợ không phải là bạn có những nỗi sợ ấy.
          </p>
          <p className={`${T_QUOTE} text-foreground mb-4`}>
            Mà là chúng đang âm thầm đưa ra quyết định thay bạn.
          </p>
          <p className={`${T_BODY} italic text-foreground/70 mb-4`}>Thế nên...</p>
          <ul className={`${LINE_GAP} pl-4 sm:pl-6`}>
            <li className="flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <span className={`${T_BODY} text-foreground/80`}>
                Bạn không dám bắt đầu điều mình thật sự mong muốn.
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <span className={`${T_BODY} text-foreground/80`}>
                Bạn chọn sự an toàn thay vì cơ hội phát triển.
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <span className={`${T_BODY} text-foreground/80`}>
                Bạn thu nhỏ ước mơ của mình để tránh thất bại, bị từ chối hoặc bị đánh giá.
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <span className={`${T_BODY} text-foreground/80`}>
                Bạn tiếp tục sống theo những gì khiến mình bớt sợ, thay vì những gì khiến mình thật sự
                hạnh phúc.
              </span>
            </li>
          </ul>
          <p className={`${T_BODY} font-medium text-foreground mt-4 sm:mt-5`}>
            Theo thời gian, bạn không còn sống cuộc đời mình mong muốn.
          </p>
          <p className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold leading-snug mt-3 sm:mt-4 text-gradient-gold">
            Bạn chỉ đang sống trong giới hạn mà nỗi sợ cho phép.
          </p>
        </motion.div>

        {/* ── Tree metaphor (text only — the tree image already lives in Hero) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={BLOCK_GAP}
        >
          <div className={`text-center max-w-2xl mx-auto ${LINE_GAP}`}>
            <p className={`${T_QUOTE} text-foreground`}>Hãy hình dung cuộc đời bạn như một cái cây.</p>
            <p className={`${T_BODY} text-foreground/80`}>
              Phần mọi người nhìn thấy: công việc, gia đình, sự cố gắng mỗi ngày — chỉ là phần thân và
              lá. Còn phần quyết định cái cây đó có đứng vững qua giông bão hay không,{' '}
              <strong className="text-primary">nằm sâu dưới đất, nơi không ai nhìn thấy: bộ rễ.</strong>
            </p>
          </div>
        </motion.div>

        {/* ── Roots comparison ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={BLOCK_GAP}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20 mb-6">
              <img
                src={rootsCompareImage}
                alt="Comparison between fear roots and safety roots"
                className="w-full h-auto"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/30">
                <p className={`${T_LABEL} text-primary`}>Rễ An Toàn</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-destructive/10 border border-destructive/30">
                <p className={`${T_LABEL} text-destructive`}>Rễ Sợ Hãi</p>
              </div>
            </div>

            <p className={`text-center ${T_BODY} italic text-muted-foreground`}>
              "Từ xa nhìn vào, hai cái cây trông giống hệt nhau.
              <br />
              Nhưng chỉ một cái sẽ đứng vững qua giông bão."
            </p>
          </div>
        </motion.div>

        {/* ── Two-column check ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30">
            <h3 className={`${T_SUBHEAD} text-primary mb-5`}>Bạn có đang sống bằng rễ an toàn không?</h3>
            <ul className={LINE_GAP}>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className={`${T_BODY} text-foreground/80`}>
                  Bạn vẫn lo lắng, nhưng lo lắng không điều khiển quyết định của bạn.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className={`${T_BODY} text-foreground/80`}>
                  Bạn nói "không" mà không cần giải thích dài dòng.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className={`${T_BODY} text-foreground/80`}>
                  Bạn ra quyết định từ sự rõ ràng, không phải hoảng loạn.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 border-2 border-destructive/30">
            <h3 className={`${T_SUBHEAD} text-destructive mb-5`}>
              Hay bạn đang sống bằng rễ sợ hãi?
            </h3>
            <ul className={LINE_GAP}>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span className={`${T_BODY} text-foreground/80`}>Bạn thấy phải kiểm soát mọi thứ.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span className={`${T_BODY} text-foreground/80`}>
                  Bạn nói "tôi ổn" khi bên trong đang rối bời.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span className={`${T_BODY} text-foreground/80`}>
                  Bạn làm rất nhiều, nghỉ ngơi thì thấy tội lỗi.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span className={`${T_BODY} text-foreground/80`}>
                  Bạn từng đưa ra một quyết định lớn chỉ vì quá sợ, không phải vì thật sự muốn.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
