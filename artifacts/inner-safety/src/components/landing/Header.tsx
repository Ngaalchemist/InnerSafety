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
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">NA</span>
            </div>
            <h1 className="text-lg sm:text-xl font-serif font-semibold tracking-tight text-foreground">
              7 Ngày Sống Vượt Trên Nỗi Sợ
            </h1>
          </div>
          
          <button
            onClick={scrollToCTA}
            className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            data-testid="button-header-cta"
          >
            Đăng ký ngay — 111.000đ
          </button>
        </div>
      </div>
    </motion.header>
  );
}
