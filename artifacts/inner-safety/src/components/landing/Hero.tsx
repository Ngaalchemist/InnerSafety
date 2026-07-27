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

  return (
    <>
      {/* Navbar — dark, matches hero */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0807]/92 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Nga Alchemist" className="h-10 w-10 object-contain rounded-full" />
            <span className="font-serif font-semibold text-lg tracking-tight text-[#c9a84c]">Nga Alchemist</span>
          </div>
          <a
            href="#register-form"
            onClick={scrollToForm}
            className="text-sm font-bold bg-[#c9a84c] text-[#0a0807] px-5 py-2 rounded-full hover:bg-[#e0be6e] transition-colors shadow-md"
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

        <div className="container mx-auto px-4 z-20 relative pt-28 pb-16">
          <div className="max-w-3xl mx-auto text-center">

            {/* Eyebrow label */}
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/12 border border-[#c9a84c]/28 text-[#c9a84c] text-xs font-bold uppercase tracking-[0.18em] px-5 py-2.5 rounded-full mb-8">
                ✦ &nbsp;7 Ngày Xây Lại Gốc Rễ · Sống Vượt Trên Nỗi Sợ &nbsp;✦
              </div>
            </Reveal>

            {/* H1 — exactly 3 lines; "chế độ sinh tồn" locked on its own line */}
            <Reveal delay={0.06}>
              <h1 className="font-serif font-bold text-white leading-[1.18] mb-8 text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.85rem]">
                Bạn Không Hỏng.<br />
                Hệ Thần Kinh Của Bạn<br />
                Chỉ Đang Kẹt Ở&nbsp;<span className="text-[#c9a84c] whitespace-nowrap">Chế Độ Sinh Tồn.</span>
              </h1>
            </Reveal>

            {/* Sub headline 1 — personal hook */}
            <Reveal delay={0.12}>
              <p className="text-lg md:text-xl text-white/82 mb-5 max-w-2xl mx-auto leading-relaxed font-medium">
                Nếu bạn đã sống quá lâu trong lo âu, luôn cảnh giác, overthinking hoặc cảm thấy cơ thể chưa bao giờ thật sự được an toàn — hành trình này được tạo ra dành cho bạn.
              </p>
            </Reveal>

            {/* Sub headline 2 — product intro */}
            <Reveal delay={0.16}>
              <p className="text-base md:text-lg text-white/52 mb-10 max-w-2xl mx-auto leading-relaxed">
                Khám phá <strong className="text-white/80">Inner Safety Experience™</strong> — trải nghiệm chuyển hóa 7 ngày kết hợp{' '}
                <strong className="text-white/80">thôi miên dẫn dắt</strong>, điều hòa hệ thần kinh và thực hành năng lượng để giúp bạn tái thiết cảm giác an toàn từ gốc rễ.
              </p>
            </Reveal>

            {/* Bullets — concrete outcomes */}
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-3 text-left max-w-lg mx-auto mb-10">
                {[
                  'Cơ thể nhẹ nhõm — không còn cảm giác nặng nề, căng cứng mãn tính',
                  'Thức dậy mà không còn cảm giác lo âu vô cớ mỗi buổi sáng',
                  'Đưa ra quyết định từ sự bình an, không phải từ nỗi sợ',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white/[0.06] border border-white/[0.10] p-4 rounded-xl backdrop-blur-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                    <span className="text-white/88 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTA button + price */}
            <Reveal delay={0.25}>
              <div className="flex flex-col items-center gap-4 mb-10">
                <a
                  href="#register-form"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center bg-[#c9a84c] text-[#0a0807] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e0be6e] transition-all hover:scale-105 shadow-2xl shadow-[#c9a84c]/20"
                >
                  Tôi Muốn Tìm Lại Sự Bình An →
                </a>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-white/35 line-through text-sm">3.000.000 VNĐ</span>
                    <span className="text-xl font-bold text-white">1.111.000 VNĐ</span>
                  </div>
                  <div className="text-sm font-semibold text-[#c9a84c]">⚡ Giá ra mắt — Chỉ còn vài suất</div>
                </div>
              </div>
            </Reveal>

            {/* Trust signals row */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-white/10 pt-7 text-white/38 text-sm">
                {[
                  { icon: <Monitor className="w-4 h-4" />, label: 'Học online mọi lúc, mọi nơi' },
                  { icon: <Zap className="w-4 h-4" />, label: 'Truy cập ngay' },
                  { icon: <Users className="w-4 h-4" />, label: 'Có người đồng hành' },
                  { icon: <Infinity className="w-4 h-4" />, label: 'Truy cập trọn đời' },
                  { icon: <Shield className="w-4 h-4" />, label: 'Hoàn tiền 7 ngày' },
                ].map((item, idx) => (
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
