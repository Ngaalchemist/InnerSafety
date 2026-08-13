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
      <InlineCTA
        headline="Bạn đã nhận ra vấn đề. Giờ là lúc thay đổi nó."
        subtext="Chỉ 20 phút/ngày trong 7 ngày."
      />
      <SolutionSection />
      <CurriculumSection />
      <IncludedSection />
      <InlineCTA
        headline="Sẵn sàng bắt đầu hành trình 7 ngày của bạn?"
        subtext="Hoàn tiền 100% nếu không phù hợp."
      />
      <TransformationSection />
      <InstructorSection />
      <TestimonialsSection />
      <InlineCTA
        headline="500+ người đã làm chủ nỗi sợ của họ. Bạn thì sao?"
        buttonLabel="TÔI MUỐN THAM GIA NGAY"
      />
      <CheckoutSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
