import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Check, Shield, Clock, Lock } from 'lucide-react';

const included = [
  '7 buổi học video thực hành hàng ngày',
  'Workbook & công cụ T.P.P đầy đủ',
  'Audio sơ cứu hệ thần kinh 5 phút',
  'Cộng đồng học viên đồng hành',
  'Truy cập trọn đời'
];

export function FinalCTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to the backend
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
  };

  return (
    <section id="final-cta" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Bạn Không Cần Phải Tiếp Tục<br />Sống Từ Nỗi Sợ
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-foreground/80 max-w-3xl mx-auto">
            Bắt đầu hành trình 7 ngày tháo gỡ rễ sợ hãi — ngay hôm nay.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            {/* What's included */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-4 sm:mb-6">
                Bạn sẽ nhận được:
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration form */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-4 sm:mb-6">
                Đăng ký ngay
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nguyễn Văn A"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="0912 345 678"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="email@example.com"
                    data-testid="input-email"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105"
                  data-testid="button-submit-registration"
                >
                  TÔI MUỐN SỐNG TỪ BÌNH AN — CHỈ 111.000đ
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Trust micro-copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Hoàn tiền 100% trong 7 ngày</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Truy cập trọn đời</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <span>Bảo mật thông tin</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
