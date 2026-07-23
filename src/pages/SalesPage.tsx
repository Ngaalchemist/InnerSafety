import { StarField } from "@/components/StarField";
import { HeaderSection } from "@/components/HeaderSection";
import { HeroSection } from "@/components/HeroSection";
import { MechanismSection } from "@/components/MechanismSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TransformationSection } from "@/components/TransformationSection";
import { InstructorSection } from "@/components/InstructorSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { WhatsInsideSection } from "@/components/WhatsInsideSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { FooterSection } from "@/components/FooterSection";

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <StarField />
      <div className="relative z-10">
        <HeaderSection />
        <div className="h-16" />
        <HeroSection />
        <MechanismSection />
        <BenefitsSection />
        <TransformationSection />
        <InstructorSection />
        <ReviewsSection />
        <WhatsInsideSection />
        <CurriculumSection />
        <FaqSection />
        <FinalCtaSection />
        <RegistrationSection />
        <FooterSection />
      </div>
    </div>
  );
}
