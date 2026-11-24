import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Flower2, Heart, Infinity as InfinityIcon } from 'lucide-react';
import bigIdeaBg from '@assets/big_idea_bg.webp';

// Self-loads fonts so the section renders correctly even if the
// project's global CSS doesn't import them.
const GOOGLE_FONT_ID = 'font-bigidea';
function useBigIdeaFonts() {
  useEffect(() => {
    if (document.getElementById(GOOGLE_FONT_ID)) return;
    const link = document.createElement('link');
    link.id = GOOGLE_FONT_ID;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,500&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap';
    document.head.appendChild(link);
  }, []);
}

const BG = '#140a22'; // section background, matches the deep purple of the artwork
const CHAMPAGNE = '#F2C879'; // gold used for accents / borders
const CREAM = '#FFF3DC';
const SERIF = "'Playfair Display', serif";
const SANS = "'Be Vietnam Pro', sans-serif";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

// Left column list (icon + line)
const knowledgeList = [
  { icon: BookOpen, text: 'Có thể bạn đã đọc rất nhiều.' },
  { icon: Flower2, text: 'Đã thiền.' },
  { icon: Heart, text: 'Đã chữa lành.' },
  { icon: InfinityIcon, text: 'Đã hiểu về niềm tin, tiềm thức, năng lượng, manifestation.' },
];

const reactions = ['trì hoãn', 'tự nghi ngờ', 'kiểm soát', 'làm hài lòng', 'thu mình', 'quay về điều quen thuộc'];

// Labels under the glowing icons that are already drawn inside the artwork.
// left/top are % of the artwork itself, so they stay glued to the icons at any size.
const orbitLabels = [
  { label: 'KIẾN THỨC', left: 50, top: 5.6 },
  { label: 'HIỂU BIẾT', left: 36.8, top: 17.7 },
  { label: 'NĂNG LƯỢNG', left: 63.8, top: 17.7 },
  { label: 'THIỀN', left: 32.5, top: 24.4 },
  { label: 'MANIFESTATION', left: 67.5, top: 24.4 },
  { label: 'CHỮA LÀNH', left: 31.5, top: 30.8 },
  { label: 'PHÁT TRIỂN\nBẢN THÂN', left: 68.6, top: 30.8 },
];

/*
 * LAYOUT NOTE
 * On desktop (lg+) the whole section is ONE 16:9 canvas that never grows taller than the
 * browser window, so the full picture is visible at a glance. Every size inside it uses
 * `cqw` (1% of the canvas width), so text, artwork and spacing all shrink together.
 * Below lg the blocks simply stack (headline → artwork → pill/chips/quote box).
 */
export function BigIdeaSection() {
  useBigIdeaFonts();

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: BG, fontFamily: SANS }}
      data-testid="section-big-idea"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-4">
        <div
          className="relative flex flex-col lg:block lg:aspect-[16/9] lg:overflow-hidden lg:mx-auto lg:w-[min(100%,calc((100dvh_-_4rem)*1.7778))]"
          style={{ containerType: 'inline-size' }}
        >
          {/* ── ARTWORK ── */}
          <div className="order-2 relative w-full max-w-[560px] mx-auto aspect-[1122/1402] lg:max-w-none lg:mx-0 lg:absolute lg:right-[10%] lg:top-0 lg:w-[56.25%]">
            <img
              src={bigIdeaBg}
              alt=""
              aria-hidden="true"
              width={1122}
              height={1402}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Edge fades so the artwork melts into the section background */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[18%] hidden lg:block"
              style={{ background: `linear-gradient(90deg, ${BG}, transparent)` }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-[8%] hidden lg:block"
              style={{ background: `linear-gradient(270deg, ${BG}, transparent)` }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[10%]"
              style={{ background: `linear-gradient(180deg, ${BG}, transparent)` }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[14%]"
              style={{ background: `linear-gradient(0deg, ${BG}, transparent)` }}
            />

            {/* Labels for the icons drawn in the artwork */}
            {orbitLabels.map(({ label, left, top }) => (
              <span
                key={label}
                className="hidden md:block absolute -translate-x-1/2 text-center text-[10px] lg:[font-size:max(8px,0.85cqw)] tracking-wide text-white/85 whitespace-pre-line leading-tight"
                style={{ left: `${left}%`, top: `${top}%`, textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Desktop-only fade where the canvas crops the bottom of the artwork */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-x-0 bottom-0 h-[14%] z-[5] pointer-events-none"
            style={{ background: `linear-gradient(0deg, ${BG}, transparent)` }}
          />

          {/* ── LEFT COLUMN ── (first on mobile via order-1) */}
          <motion.div
            {...fadeUp}
            className="order-1 mb-8 lg:mb-0 lg:absolute lg:left-0 lg:top-[2.5%] lg:w-[36%] relative z-10"
          >
            <div className="flex items-center gap-3 mb-6 lg:[margin-bottom:1.6cqw] lg:[gap:1cqw]">
              <Flower2
                className="w-6 h-6 lg:[width:2.2cqw] lg:[height:2.2cqw]"
                style={{ color: CHAMPAGNE }}
                strokeWidth={1.25}
              />
              <span
                className="text-xs sm:text-sm font-medium lg:[font-size:1cqw]"
                style={{ color: CHAMPAGNE, letterSpacing: '0.4em' }}
              >
                BEYOND FEAR
              </span>
              <span
                aria-hidden="true"
                className="hidden sm:block h-px w-24 lg:[width:8cqw]"
                style={{ background: `linear-gradient(90deg, ${CHAMPAGNE}, transparent)` }}
              />
            </div>

            <h2
              className="uppercase font-bold [font-size:clamp(1.6rem,7vw,2.7rem)] lg:[font-size:3.3cqw]"
              style={{ fontFamily: SERIF, color: CREAM, lineHeight: 1.12 }}
            >
              <span className="block lg:whitespace-nowrap">BẠN KHÔNG THIẾU</span>
              <span className="block lg:whitespace-nowrap">KIẾN THỨC.</span>
            </h2>
            <span
              aria-hidden="true"
              className="block mt-3 mb-7 h-px w-[85%] lg:[margin-top:1cqw] lg:[margin-bottom:1.8cqw]"
              style={{
                background: `linear-gradient(90deg, ${CHAMPAGNE}, transparent)`,
                boxShadow: `0 0 10px ${CHAMPAGNE}66`,
              }}
            />

            <ul className="flex flex-col gap-4 mb-8 lg:[gap:1cqw] lg:[margin-bottom:2cqw]">
              {knowledgeList.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 text-white/90 text-base font-light leading-snug lg:[gap:1.2cqw] lg:[font-size:1.3cqw]"
                >
                  <Icon
                    className="w-7 h-7 shrink-0 text-white/80 lg:[width:2cqw] lg:[height:2cqw]"
                    strokeWidth={1.25}
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <p
              className="italic text-white/90 text-base font-light leading-snug pl-4 max-w-[26rem] lg:max-w-[92%] lg:[font-size:1.25cqw] lg:[padding-left:1.2cqw]"
              style={{ fontFamily: SANS, borderLeft: `2px solid ${CHAMPAGNE}` }}
            >
              Biết mình cần làm gì không đồng nghĩa với việc mình có thể làm được điều đó một cách tự nhiên.
            </p>
          </motion.div>

          {/* ── BOTTOM CLUSTER: pill + chips + italic lines + câu đinh ──
              On desktop each row is placed at the exact spot of the approved mockup
              (top = % of canvas height, left/width = % of canvas width).
              On mobile the wrapper is a normal stacked column. */}
          <div className="order-3 relative z-10 -mt-32 sm:-mt-40 flex flex-col items-center gap-5 text-center lg:contents">
            {/* SINH TỒN CHẠY NGẦM pill */}
            <motion.div
              {...fadeUp}
              className="flex justify-center lg:absolute lg:z-10 lg:top-[57.9%] lg:left-[36.9%] lg:w-[40%]"
            >
              <div
                className="rounded-full px-8 sm:px-12 py-3 sm:py-4 lg:[padding:0.5cqw_2.2cqw] whitespace-nowrap"
                style={{
                  border: `1.5px solid ${CHAMPAGNE}`,
                  backgroundColor: 'rgba(20,10,34,0.75)',
                  boxShadow: `0 0 24px ${CHAMPAGNE}40, inset 0 0 18px ${CHAMPAGNE}1f`,
                }}
              >
                <span
                  className="uppercase font-semibold [font-size:clamp(1.2rem,5vw,1.6rem)] lg:[font-size:2.05cqw]"
                  style={{ fontFamily: SERIF, color: CREAM, letterSpacing: '0.02em', lineHeight: 1.2 }}
                >
                  SINH TỒN CHẠY NGẦM
                </span>
              </div>
            </motion.div>

            {/* Reaction chips */}
            <motion.div
              {...fadeUp}
              className="flex flex-wrap lg:flex-nowrap justify-center gap-2.5 sm:gap-3 lg:[gap:1.6cqw] lg:absolute lg:z-10 lg:top-[69.6%] lg:left-[25%] lg:w-[66.7%]"
            >
              {reactions.map((r) => (
                <span
                  key={r}
                  className="rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base text-white/90 whitespace-nowrap lg:[padding:0.4cqw_1.25cqw] lg:[font-size:1.26cqw]"
                  style={{
                    border: `1px solid ${CHAMPAGNE}99`,
                    backgroundColor: 'rgba(20,10,34,0.7)',
                    boxShadow: `0 0 12px ${CHAMPAGNE}26`,
                  }}
                >
                  {r}
                </span>
              ))}
            </motion.div>

            {/* Italic explanation */}
            <motion.p
              {...fadeUp}
              className="italic text-white/90 text-sm sm:text-base font-light leading-relaxed max-w-3xl lg:max-w-none lg:absolute lg:z-10 lg:top-[76.4%] lg:left-[12%] lg:w-[76%] lg:whitespace-nowrap lg:[font-size:1.3cqw] lg:[line-height:1.3]"
            >
              Đôi khi nó trông giống một người vẫn làm việc, vẫn học hỏi, vẫn chăm sóc mọi thứ…
              <br className="hidden sm:block" />{' '}
              nhưng bên trong chưa thật sự cảm thấy đủ vững để bước vào điều mới.
            </motion.p>

            {/* Câu đinh */}
            <motion.div
              {...fadeUp}
              className="relative w-full flex items-center gap-4 lg:[gap:0.7cqw] lg:absolute lg:z-10 lg:top-[84.8%] lg:left-[3.7%] lg:w-[92.6%]"
            >
              <span
                aria-hidden="true"
                className="hidden lg:block h-px flex-1"
                style={{ background: `linear-gradient(90deg, transparent, ${CHAMPAGNE})` }}
              />
              <div
                className="relative rounded-3xl px-8 sm:px-14 py-4 sm:py-5 w-full lg:w-[70.8%] lg:shrink-0 lg:[padding:0.6cqw_4cqw]"
                style={{
                  border: `1.5px solid ${CHAMPAGNE}`,
                  backgroundColor: 'rgba(20,10,34,0.8)',
                  boxShadow: `0 0 26px ${CHAMPAGNE}33`,
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-4 sm:left-6 top-2 select-none text-[44px] lg:[font-size:3.4cqw] lg:[left:2cqw] lg:[top:0.4cqw]"
                  style={{ fontFamily: SERIF, color: CHAMPAGNE, lineHeight: 1 }}
                >
                  “
                </span>
                <p
                  className="italic [font-size:clamp(1rem,4.2vw,1.4rem)] lg:[font-size:1.9cqw]"
                  style={{ fontFamily: SERIF, color: CHAMPAGNE, lineHeight: 1.35 }}
                >
                  Có thể vấn đề không phải bạn cần học thêm.
                  <br />
                  Có thể nền bên trong của bạn chưa theo kịp những gì bạn đã hiểu.
                </p>
                <span
                  aria-hidden="true"
                  className="absolute right-4 sm:right-6 bottom-0 select-none text-[44px] lg:[font-size:3.4cqw] lg:[right:2cqw] lg:[bottom:-0.6cqw]"
                  style={{ fontFamily: SERIF, color: CHAMPAGNE, lineHeight: 1 }}
                >
                  ”
                </span>
              </div>
              <span
                aria-hidden="true"
                className="hidden lg:block h-px flex-1"
                style={{ background: `linear-gradient(90deg, ${CHAMPAGNE}, transparent)` }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
