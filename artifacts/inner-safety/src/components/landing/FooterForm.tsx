import React, { useState, useEffect } from 'react';
import { ShieldCheck, Star, Lock, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export function FooterForm() {
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Countdown timer logic (24h loop)
  useEffect(() => {
    // Setting up a standard 24h rolling countdown
    const getTargetTime = () => {
      let target = localStorage.getItem('timer_target');
      if (!target || new Date().getTime() > parseInt(target, 10)) {
        // Set target to 24h from now
        const newTarget = new Date().getTime() + 24 * 60 * 60 * 1000;
        localStorage.setItem('timer_target', newTarget.toString());
        return newTarget;
      }
      return parseInt(target, 10);
    };

    const targetTime = getTargetTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        // Reset to 24h
        const newTarget = new Date().getTime() + 24 * 60 * 60 * 1000;
        localStorage.setItem('timer_target', newTarget.toString());
        setTimeLeft({ hours: 24, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
      isValid = false;
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <>
      <section id="register-form" className="py-24 bg-[#1b1918] text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Đăng Ký Ngay — Giữ Ưu Đãi Cho Tôi
            </h2>
            <p className="text-xl text-white/70">
              Điền thông tin bên dưới để được liên hệ tư vấn và nhận ưu đãi đặc biệt
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 bg-white/5 rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl">
            {/* Left Column: Summary */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Bạn sẽ nhận được:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Inner Safety Experience™ — 7 ngày, 28+ bài học",
                  "Emergency Reset 5 Phút (trị giá 497k)",
                  "Money Healing Workbook (trị giá 397k)",
                  "Sleep Healing Audio (trị giá 297k)",
                  "Trigger Tracker (trị giá 197k)",
                  "Energy Audit (trị giá 197k)",
                  "Truy cập vĩnh viễn",
                  "Cam kết hoàn tiền 100% trong 7 ngày"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 text-primary">✓</div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-black/30 p-6 rounded-2xl border border-white/5">
                <div className="text-white/60 mb-1">Tổng giá trị: <span className="line-through">3.582.000 VNĐ</span></div>
                <div className="text-3xl font-bold text-primary">Chỉ: 1.497.000 VNĐ</div>
              </div>
            </div>

            {/* Right Column: Form & Countdown */}
            <div className="order-1 lg:order-2">
              <div className="bg-white text-foreground rounded-2xl p-8 shadow-xl">
                <div className="flex flex-col items-center mb-8 pb-6 border-b border-border">
                  <div className="text-sm font-bold text-destructive uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> ⏰ Ưu đãi kết thúc sau:
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center text-2xl font-bold text-foreground font-mono shadow-inner">
                        {timeLeft.hours.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 font-medium">GIỜ</span>
                    </div>
                    <div className="text-2xl font-bold mt-4">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center text-2xl font-bold text-foreground font-mono shadow-inner">
                        {timeLeft.minutes.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 font-medium">PHÚT</span>
                    </div>
                    <div className="text-2xl font-bold mt-4">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center text-2xl font-bold text-destructive font-mono shadow-inner">
                        {timeLeft.seconds.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 font-medium">GIÂY</span>
                    </div>
                  </div>
                </div>

                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-2xl font-bold">
                      ✓
                    </div>
                    <h4 className="text-xl font-bold mb-2">Cảm ơn bạn!</h4>
                    <p>Nga sẽ liên hệ trong vòng 24 giờ để hỗ trợ bạn bắt đầu hành trình.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input
                        id="name"
                        placeholder="Nhập họ tên của bạn"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`h-12 bg-background ${errors.name ? 'border-destructive' : ''}`}
                      />
                      {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`h-12 bg-background ${errors.phone ? 'border-destructive' : ''}`}
                      />
                      {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground mt-4 shadow-lg shadow-primary/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Đang xử lý...' : 'Giữ Ưu Đãi Cho Tôi →'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Hoàn tiền 7 ngày
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" /> Chất lượng kiểm chứng
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" /> Bảo mật tuyệt đối
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white/40 py-8 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="mb-4 text-sm">
            © 2025 Nga Alchemist · Inner Safety Method™ | <a href="#" className="hover:text-white/70 underline underline-offset-4">Chính sách bảo mật</a> | <a href="#" className="hover:text-white/70 underline underline-offset-4">Điều khoản sử dụng</a>
          </p>
          <p className="text-xs max-w-3xl mx-auto leading-relaxed">
            Disclaimer: Kết quả có thể khác nhau tùy theo cá nhân. Inner Safety Experience™ không thay thế tư vấn y tế chuyên nghiệp. Thông tin được chia sẻ mang tính chất giáo dục, không nhằm mục đích chẩn đoán hay điều trị bệnh lý y khoa.
          </p>
        </div>
      </footer>
    </>
  );
}
