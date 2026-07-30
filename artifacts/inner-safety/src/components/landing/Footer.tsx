import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 border-t border-border/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">NA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-foreground">
                Inner Safety Method™
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Phương pháp tháo gỡ bộ rễ sợ hãi và xây dựng sự an toàn nội tại
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm text-muted-foreground"
          >
            <button className="hover:text-primary transition-colors">
              Chính sách bảo mật
            </button>
            <span className="text-border">•</span>
            <button className="hover:text-primary transition-colors">
              Điều khoản
            </button>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-xs sm:text-sm text-muted-foreground"
          >
            <p className="mb-2">© 2025 Nga Alchemist · Inner Safety Method™</p>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/20"
          >
            <p className="text-xs text-muted-foreground/70 text-center max-w-3xl mx-auto leading-relaxed">
              Kết quả học tập có thể khác nhau tùy từng cá nhân. Khóa học này không thay thế cho tư vấn y tế hoặc tâm lý chuyên nghiệp.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
