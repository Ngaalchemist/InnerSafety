import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  Monitor,
  Infinity as InfinityIcon,
  ShieldCheck,
  Users,
  BookOpen,
} from 'lucide-react';

// ── Shares the exact type scale used by ProblemSection so the CTA reads as
// the last block of the same section, not an imported widget. Keep these in
// sync with ProblemSection.tsx if that file's scale ever changes. ──────────
const T_BODY = 'text-base sm:text-lg leading-relaxed';
const T_LABEL_SM = 'text-xs sm:text-sm font-semibold';
const T_CAPTION = 'text-xs sm:text-sm text-foreground/55 leading-snug';

interface InlineCTAProps {
  headline: ReactNode;
  subtext?: string;
  buttonLabel?: string;
  /** Set false when embedded inside a parent block that already handles
   *  its own top margin (e.g. continuing straight off a previous line)
   *  so no extra gap/seam is introduced. */
  withTopSpacing?: boolean;
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
  withTopSpacing = true,
}: InlineCTAProps) {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // No own <section>, no background color, no border/blur card — this is
    // meant to be dropped inside a parent section's existing container so
    // it inherits that section's background, font, and rhythm exactly.
    <div className={`max-w-2xl mx-auto text-center ${withTopSpacing ? 'mt-8 sm:mt-10' : ''}`}>
      <p className={`${T_BODY} font-bold text-foreground mb-1`}>{headline}</p>
      {subtext && <p className={`${T_CAPTION} mb-5 sm:mb-6`}>{subtext}</p>}

      <motion.button
        onClick={scrollToCTA}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group w-full inline-flex items-center justify-center gap-2 rounded-full py-4 sm:py-5 px-8 font-bold text-base sm:text-lg shadow-xl"
        style={{ background: 'linear-gradient(90deg, #FBBF24, #C084FC)' }}
        data-testid="button-inline-cta"
      >
        <span className="text-background">{buttonLabel}</span>
        <ArrowRight className="w-5 h-5 text-background group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Trust badges — same caption scale + muted foreground as the rest
          of ProblemSection, not a separate white/translucent palette. */}
      <div className="mt-6 sm:mt-7 pt-5 sm:pt-6 grid grid-cols-2 sm:grid-cols-5 gap-y-4 gap-x-3 border-t border-border/30">
        {trustBadges.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex flex-col items-center text-center gap-1">
            <Icon className="w-5 h-5 shrink-0 text-primary" />
            <p className={`${T_LABEL_SM} text-foreground/90 leading-tight`}>{label}</p>
            <p className="text-[11px] sm:text-xs text-foreground/50 leading-tight">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
