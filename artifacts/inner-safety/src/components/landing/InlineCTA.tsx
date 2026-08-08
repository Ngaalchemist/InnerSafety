import { motion } from 'framer-motion';
import {
  ArrowRight,
  Monitor,
  Infinity as InfinityIcon,
  ShieldCheck,
  Users,
  BookOpen,
} from 'lucide-react';

const PURPLE = '#C084FC';
const GOLD = '#FBBF24';
const INK = '#0D0B18';

interface InlineCTAProps {
  headline: string;
  subtext?: string;
  buttonLabel?: string;
}

const trustBadges = [
  { icon: Monitor, label: 'Học online', sub: 'mọi lúc, mọi nơi' },
  { icon: InfinityIcon, label: 'Truy cập ngay', sub: 'sau khi đăng ký' },
  { icon: ShieldCheck, label: 'Hoàn tiền 7 ngày', sub: 'nếu không phù hợp' },
  { icon: Users, label: 'Cộng đồng riêng', sub: 'hỗ trợ 24/7' },
  { icon: BookOpen, label: 'Bài học ngắn gọn', sub: 'dễ hiểu, dễ áp dụng' },
];

export function InlineCTA({
  headline,
  subtext,
  buttonLabel = 'ĐĂNG KÝ NGAY — 444.000đ',
}: InlineCTAProps) {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 sm:py-14 px-4" style={{ backgroundColor: INK }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto text-center rounded-2xl p-6 sm:p-8"
        style={{
          border: '1px solid rgba(192,132,252,0.35)',
          backgroundColor: 'rgba(192,132,252,0.06)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <p
          className="text-white text-base sm:text-lg font-bold mb-1"
          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
          {headline}
        </p>
        {subtext && (
          <p className="text-white/60 text-sm mb-4">{subtext}</p>
        )}
        <button
          onClick={scrollToCTA}
          className="group w-full inline-flex items-center justify-center gap-2 rounded-full py-4 sm:py-5 px-8 font-bold text-base sm:text-lg transition-transform hover:scale-[1.02] shadow-xl"
          style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
          data-testid="button-inline-cta"
        >
          {buttonLabel}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Trust badges row */}
        <div
          className="mt-6 pt-5 grid grid-cols-2 sm:grid-cols-5 gap-y-4 gap-x-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {trustBadges.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center gap-1">
              <Icon className="w-5 h-5 shrink-0" style={{ color: PURPLE }} />
              <p
                className="text-white text-[11px] sm:text-xs leading-tight"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 600 }}
              >
                {label}
              </p>
              <p
                className="text-white/50 text-[10px] leading-tight"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 300 }}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
