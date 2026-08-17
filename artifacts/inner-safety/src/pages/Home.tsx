import { Hero } from '@/components/landing/Hero';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { CurriculumSection } from '@/components/landing/CurriculumSection';
import { IncludedSection } from '@/components/landing/IncludedSection';
import { TransformationSection } from '@/components/landing/TransformationSection';
import { InstructorSection } from '@/components/landing/InstructorSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { CheckoutSection } from '@/components/landing/CheckoutSection';
import { Footer } from '@/components/landing/Footer';
import { InlineCTA } from '@/components/landing/InlineCTA';
export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full relative noise-texture">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CurriculumSection />
      <IncludedSection />
      <InlineCTA
        headline="Sẵn sàng bắt đầu hành trình 7 ngày của bạn?"
        subtext="Hoàn tiền 100% nếu không phù hợp."
        withTopSpacing={false}
      />
      <TransformationSection />
      <InstructorSection />
      <TestimonialsSection />
      <InlineCTA
        headline="500+ Ca thôi miên thực tế.<br /> Một hành trình được xây dựng từ những trải nghiệm thật."
        buttonLabel="TÔI MUỐN THAM GIA NGAY"
        withTopSpacing={false}
      />
      <CheckoutSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
