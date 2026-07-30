import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.85, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-xl bg-background/95 border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
              <span className="text-[11px] font-bold text-primary-foreground">NA</span>
            </div>
            <h1 className="text-sm sm:text-base font-serif font-semibold tracking-tight text-foreground">
              7 Ngày Sống Vượt Trên Nỗi Sợ
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm sm:text-base font-medium text-foreground/80">
            <a href="#curriculum" className="hover:text-foreground transition-colors">Về chương trình</a>
            <a href="#instructor" className="hover:text-foreground transition-colors">Câu chuyện</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Review</a>
          </nav>

          <button
            onClick={scrollToCTA}
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:scale-105 transition-all duration-300"
            data-testid="button-header-cta"
            style={{
              background: 'linear-gradient(90deg, #F59E0B, #C084FC)',
              color: '#0D0B18',
              fontWeight: 700,
              boxShadow: '0 4px 20px rgba(245, 158, 11, 0.4)',
              transform: 'translateX(-30%)',
            }}
          >
            Đăng ký ngay — 111.000đ
          </button>
        </div>
      </div>
    </motion.header>
  );
}
