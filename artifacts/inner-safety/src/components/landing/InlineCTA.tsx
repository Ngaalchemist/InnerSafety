import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PURPLE = '#C084FC';
const GOLD = '#FBBF24';
const INK = '#0D0B18';

interface InlineCTAProps {
  headline: string;
  subtext?: string;
  buttonLabel?: string;
}

export function InlineCTA({
  headline,
  subtext,
  buttonLabel = 'ĐĂNG KÝ NGAY — 111.000đ',
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
        className="max-w-2xl mx-auto text-center rounded-2xl p-6 sm:p-8"
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
          className="group inline-flex items-center justify-center gap-2 rounded-full py-3 px-7 font-bold text-sm transition-transform hover:scale-[1.03] shadow-xl"
          style={{ background: `linear-gradient(90deg, ${GOLD}, ${PURPLE})`, color: INK }}
          data-testid="button-inline-cta"
        >
          {buttonLabel}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
