import React from 'react';
import { Reveal } from '@/components/ui/reveal';
import { Shield, Sparkles, Navigation } from 'lucide-react';
import treeRootsImg from '@assets/Gemini_Generated_Image_rz0f3rz0f3rz0f3r_1784884536664_1784992800248.png';

export function Solution() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* SECTION 6 — THE SOLUTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Giới Thiệu: Inner Safety Method™
              </h2>
              <p className="text-xl text-muted-foreground">
                Hệ thống tái thiết cảm giác an toàn theo đúng thứ tự vận hành của con người
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Reveal delay={0.1} direction="up">
              <div className="bg-card p-8 rounded-3xl shadow-sm border border-border h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Layer 1: Cơ thể vật lý &<br/>Hệ thần kinh (Beta/3D)</h3>
                <p className="text-muted-foreground">
                  <strong>Body Reset</strong> — Xả bỏ hormone căng thẳng, dập chuông báo động sinh tồn đang kẹt trong cơ thể.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className="bg-card p-8 rounded-3xl shadow-sm border border-border h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Layer 2: Cảm xúc &<br/>Tiềm thức (Alpha/Theta)</h3>
                <p className="text-muted-foreground">
                  Giải phóng cảm xúc bị kìm nén, tháo gỡ niềm tin giới hạn, thay đổi dấu ấn năng lượng đã hình thành từ tổn thương.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="bg-card p-8 rounded-3xl shadow-sm border border-border h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Navigation className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Layer 3: Danh tính &<br/>Lộ trình sống</h3>
                <p className="text-muted-foreground">
                  Tái lập bản sắc mới, sống và ra quyết định từ nội lực sâu thẳm thay vì chạy theo thành tựu bên ngoài.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="text-center max-w-3xl mx-auto bg-muted p-8 rounded-2xl">
              <p className="text-lg font-medium text-foreground">
                <span className="text-primary font-bold">Không bắt bạn nghĩ tích cực.</span><br/>
                Chúng tôi giúp bạn tháo gỡ nỗi sợ theo đúng thứ tự vận hành của con người.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 7 — BEFORE & AFTER TRANSFORMATION */}
      <section className="py-24 bg-[#1b1918] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img src={treeRootsImg} alt="Transformation Background" className="w-full h-full object-cover object-top" />
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Hành Trình Chuyển Hóa
              </h2>
              <p className="text-xl text-white/70">
                Đừng để trạng thái sinh tồn tiếp tục điều khiển cuộc đời bạn.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
            <Reveal direction="right">
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white/50 mb-8 border-b border-white/10 pb-4">Trước Đây...</h3>
                <ul className="space-y-6">
                  {[
                    "Overthinking kéo dài — đầu óc không có phút yên",
                    "Cảm xúc bùng nổ hoặc tê liệt hoàn toàn",
                    "Cảm thấy mình không đủ, không xứng đáng",
                    "Luôn kiệt sức vì gồng mình mạnh mẽ",
                    "Mối quan hệ và tiền bạc gây căng thẳng mãn tính",
                    "Sợ hãi điều khiển mọi quyết định"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white/70">
                      <div className="mt-1 text-red-400">✕</div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-primary/30 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-8 border-b border-white/10 pb-4">Sau 7 Ngày...</h3>
                <ul className="space-y-6">
                  {[
                    "Bình tĩnh lại chỉ sau vài phút khi cơn lo âu xuất hiện",
                    "Cảm xúc được làm chủ — không còn bị trigger điều khiển",
                    "\"Tôi là đủ\" trở thành niềm tin thật sự, không phải khẩu hiệu",
                    "Nguồn năng lượng được bảo vệ — biết cách thiết lập ranh giới",
                    "Mối quan hệ với tiền và người xung quanh lành mạnh hơn",
                    "Mọi quyết định xuất phát từ sự bình an, không phải nỗi sợ"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-white">
                      <div className="mt-1 text-primary">✓</div>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="text-center">
              <a
                href="#register-form"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg shadow-primary/20"
              >
                Bắt Đầu Hành Trình Của Tôi →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
