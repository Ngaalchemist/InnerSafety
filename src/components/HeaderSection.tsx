import { Sprout } from "lucide-react";

export function HeaderSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e1712]/95 backdrop-blur-sm border-b border-[#C9A24C]/20 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <p className="flex items-center gap-2 font-serif font-bold text-[#F2E6C4] text-[11px] sm:text-sm md:text-base tracking-wide leading-tight">
            <Sprout className="w-4 h-4 md:w-5 md:h-5 text-[#C9A24C] flex-shrink-0" />
            INNER SAFETY EXPERIENCE™ · Nga Alchemist
          </p>

          <button
            onClick={scrollToPricing}
            data-testid="button-header-register"
            className="rounded-sm px-6 md:px-12 py-2.5 text-sm cta-label uppercase bg-[#C9A24C] text-[#0e1712] hover:bg-[#E4C77E] transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Đăng Ký
          </button>
        </div>
      </div>
    </header>
  );
}
