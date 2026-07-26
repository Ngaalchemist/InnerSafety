import React from 'react';
import { Reveal } from '@/components/ui/reveal';
import { CheckCircle } from 'lucide-react';
import logoImg from '@assets/Gemini_Generated_Image_nmxs5qnmxs5qnmxs_1784992544531.png';
import treeRootsImg from '@assets/Gemini_Generated_Image_rz0f3rz0f3rz0f3r_1784884536664_1784992800248.png';

export function Hero() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Nga Alchemist Logo" className="h-10 w-10 object-contain rounded-full" />
            <span className="font-serif font-semibold text-lg tracking-tight text-primary">Nga Alchemist</span>
          </div>
          <a
            href="#register-form"
            onClick={scrollToForm}
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            Đăng Ký Ngay
          </a>
        </div>
      </nav>

      {/* Hero Text Section */}
      <section className="relative min-h-[85dvh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#fdf8f3] to-[#f7f0e6]">
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Bạn Không Hỏng.<br/>
                Hệ Thần Kinh Của Bạn Chỉ Đang Kẹt Ở Chế Độ Sinh Tồn.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Khám phá <strong>Inner Safety Experience™</strong> — Hành trình 7 ngày tái thiết nền tảng an toàn từ gốc rễ, để cơ thể thôi phản ứng vì sợ hãi và bạn có thể sống từ sự bình an.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-4 text-left max-w-xl mx-auto mb-10">
                {[
                  "Làm dịu hệ thần kinh sau thời gian dài căng thẳng và sợ hãi",
                  "Giảm overthinking, ngủ sâu hơn và lấy lại sự hiện diện",
                  "Xây lại nền tảng an toàn để mọi quyết định không còn xuất phát từ nỗi sợ"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-primary/10">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col items-center gap-4">
                <a
                  href="#register-form"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg shadow-primary/20"
                >
                  Tôi Muốn Tìm Lại Sự Bình An →
                </a>
                <div className="flex flex-col items-center">
                  <div className="text-sm font-medium text-destructive mb-1">
                    ⚡ Ưu đãi ra mắt — Chỉ còn vài suất cuối
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground line-through text-sm">2.997.000 VNĐ</span>
                    <span className="text-xl font-bold text-foreground">chỉ 1.497.000 VNĐ</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tree + Roots Visual Metaphor Section */}
      <section className="relative overflow-hidden bg-[#0e0c09]">
        <Reveal>
          <div className="relative">
            <img
              src={treeRootsImg}
              alt="Cây và bộ rễ — 10% người khác thấy, 90% quyết định cuộc đời bạn"
              className="w-full object-cover object-center max-h-[90vh]"
            />
            {/* Bottom gradient to blend into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0e0c09] to-transparent" />
          </div>
        </Reveal>

        {/* Tagline below image */}
        <div className="text-center py-12 px-4">
          <Reveal>
            <p className="text-2xl md:text-3xl font-serif text-[#c9a84c] font-bold mb-3">
              Bộ rễ mới là thứ quyết định tất cả.
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Bạn không cần mạnh mẽ hơn. Bạn cần xây lại bộ rễ — cảm giác an toàn bên trong — để cuộc đời được xây trên nền vững, không phải trên nỗi sợ vô hình.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
