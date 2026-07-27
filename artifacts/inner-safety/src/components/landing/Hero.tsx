import React from 'react';
import { Reveal } from '@/components/ui/reveal';
import { CheckCircle, Monitor, Zap, Users, Infinity, Shield } from 'lucide-react';
import logoImg from '@assets/Gemini_Generated_Image_nmxs5qnmxs5qnmxs_1784992544531.png';
import treeRootsImg from '@assets/Gemini_Generated_Image_rz0f3rz0f3rz0f3r_1784884536664_1784992800248.png';

export function Hero() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Bullets split into a bold/yellow lead-in + normal remainder
  const bullets = [
    { bold: 'Cơ thể nhẹ nhõm', rest: ' , không còn cảm giác nặng nề, căng cứng mãn tính' },
    { bold: 'Thức dậy mà không còn cảm giác lo âu vô cớ', rest: ' mỗi buổi sáng' },
    { bold: 'Đưa ra quyết định từ sự bình an', rest: ', không phải từ nỗi sợ' },
  ];

  const trustBadges = [
    { icon: <Monitor className="w-4 h-4 text-[#c9a84c]" />, label: 'Học online mọi lúc, mọi nơi' },
    { icon: <Zap className="w-4 h-4 text-[#c9a84c]" />, label: 'Truy cập ngay' },
    { icon: <Users className="w-4 h-4 text-[#c9a84c]" />, label: 'Có cộng đồng riêng' },
    { icon: <Infinity className="w-4 h-4 text-[#c9a84c]" />, label: 'Truy cập trọn đời' },
    { icon: <Shield className="w-4 h-4 text-[#c9a84c]" />, label: 'Hoàn tiền 7 ngày' },
  ];

  return (
    <>
      {/* Navbar — dark, matches hero, thin single line */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0807]/92 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-11 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Nga Alchemist" className="h-6 w-6 object-contain rounded-full" />
            <span className="font-serif font-medium text-sm tracking-tight text-[#c9a84c]">Nga Alchemist</span>
          </div>
          <a
            href="#register-form"
            onClick={scrollToForm}
            className="text-xs font-semibold bg-[#c9a84c] text-[#0a0807] px-3.5 py-1.5 rounded-full hover:bg-[#e0be6e] transition-colors"
          >
            Đăng Ký Ngay
          </a>
        </div>
      </nav>

      {/* Hero — full screen dark, tree+roots as dramatic background */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#0a0807]">

        {/* Background: tree+roots image with layered gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src={treeRootsImg}
            alt=""
            className="w-full h-full object-cover object-center opacity-28"
          />
          {/* Top fade so text reads clearly; bottom fade for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0807]/85 via-[#0a0807]/45 to-[#0a0807]/90" />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0807_100%)]" />
        </div>

        {/* Wider container: expanded from max-w-3xl to max-w-6xl (~+50%) so content breathes further left/right */}
        <div className="container mx-auto px-4 md:px-8 z-20 relative pt-16 pb-24 md:pt-20 md:pb-52">
          <div className="max-w-6xl mx-auto text-center">

            {/* Eyebrow label — plain thin text, no box/background, 2 lines */}
            <Reveal>
              <div className="flex flex-col items-center gap-1 mb-6">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#c9a84c]">
                  Inner Safety Experience™
                </span>
                <span className="text-[0.65rem] md:text-xs font-medium uppercase tracking-[0.16em] text-[#c9a84c]/70">
                  7 Ngày Xây Lại Gốc Rễ - Sống Vượt Trên Nỗi Sợ
                </span>
              </div>
            </Reveal>

            {/* H1 — "Chế Độ Sinh Tồn" locked on its own line */}
            <Reveal delay={0.06}>
              <h1 className="font-serif font-bold text-white leading-[1.15] mb-9 text-[2.7rem] sm:text-[3.4rem] md:text-[4rem] lg:text-[4.55rem]">
                Bạn Không Hỏng.<br />
                Hệ Thần Kinh Của Bạn Chỉ<br />
                Đang Kẹt Ở<br />
                <span className="text-[#c9a84c] whitespace-nowrap">Chế Độ Sinh Tồn.</span>
              </h1>
            </Reveal>

            {/* Sub headline 1 — personal hook */}
            <Reveal delay={0.12}>
              <p className="text-base md:text-lg text-white/82 mb-2 max-w-3xl mx-auto leading-relaxed font-medium">
                Nếu bạn đã sống quá lâu trong lo âu, luôn cảnh giác, overthinking hoặc cảm thấy cơ thể chưa bao giờ thật sự được an toàn — hành trình này được tạo ra dành cho bạn.
              </p>
            </Reveal>

            {/* Sub headline 2 — product intro; product name in yellow display serif */}
            <Reveal delay={0.16}>
              <p className="text-sm md:text-base text-white/52 mb-10 max-w-3xl mx-auto leading-relaxed">
                Khám phá{' '}
                <strong className="font-serif font-semibold text-[#c9a84c]">Inner Safety Experience™</strong>
                {' '}— trải nghiệm chuyển hóa 7 ngày kết hợp{' '}
                <strong className="text-white/80">thôi miên hướng dẫn </strong>, điều hòa hệ thần kinh và thực hành năng lượng để giúp bạn tái thiết cảm giác an toàn từ gốc rễ.
              </p>
            </Reveal>

            {/* Bullets — concrete outcomes, bold + yellow lead-in */}
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-1.5 text-left max-w-2xl mx-auto mb-14">
                {bullets.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                    <span className="text-white/88">
                      <strong className="text-[#c9a84c] font-bold">{item.bold}</strong>
                      {item.rest}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTA button + price */}
            <Reveal delay={0.25}>
              <div className="flex flex-col items-center gap-3 mb-14">
                <a
                  href="#register-form"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center bg-[#c9a84c] text-[#0a0807] px-10 py-3.5 rounded-full font-bold text-base md:text-lg hover:bg-[#e0be6e] transition-all hover:scale-105 shadow-2xl shadow-[#c9a84c]/20"
                >
                  Tôi Muốn Tìm Lại Sự Bình An →
                </a>
              </div>
            </Reveal>

            {/* Trust signals row — always all 5 visible, wraps on small screens */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-white/45 text-xs md:text-sm">
                {trustBadges.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}
