import { Hero } from '@/components/landing/Hero';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { CurriculumSection } from '@/components/landing/CurriculumSection';
import { IncludedSection } from '@/components/landing/IncludedSection';
import { TransformationSection } from '@/components/landing/TransformationSection';
import { InstructorSection } from '@/components/landing/InstructorSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { FinalCTASection } from '@/components/landing/FinalCTASection';
import { Footer } from '@/components/landing/Footer';
export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full relative noise-texture">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CurriculumSection />
      <IncludedSection />
      <TransformationSection />
      <InstructorSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
