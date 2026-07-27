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
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary/50 mb-2">Bước 1</div>
                <h3 className="text-xl font-bold mb-4">Safe State™</h3>
                <p className="text-muted-foreground">
                  Làm dịu hệ thần kinh để não và cơ thể ngừng báo động — tạo nền tảng để tiềm thức sẵn sàng tiếp nhận.
                </p>
                <p className="text-sm text-foreground/40 mt-4 italic">(Breathwork + Somatic)</p>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-xl h-full flex flex-col items-center text-center ring-2 ring-primary ring-offset-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-2">Bước 2 — Cốt lõi</div>
                <h3 className="text-xl font-bold mb-4">Safety Reprogram™</h3>
                <p className="text-primary-foreground/90 mb-4">
                  Thông qua các phiên <strong>thôi miên dẫn dắt</strong>, bạn từng bước giải phóng cảm xúc bị kìm nén, tháo gỡ niềm tin giới hạn vô thức và thay thế bằng niềm tin mới ở tầng sâu tiềm thức — chứ không chỉ ở lý trí.
                </p>
                <p className="text-sm text-primary-foreground/60 italic">
                  Không ép nghĩ tích cực. Không tự kỷ ám thị. Thay đổi từ chính nơi tạo ra phản ứng.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="bg-card p-8 rounded-3xl shadow-sm border border-border h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Navigation className="w-8 h-8 text-primary" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary/50 mb-2">Bước 3</div>
                <h3 className="text-xl font-bold mb-4">Safety Integration™</h3>
                <p className="text-muted-foreground">
                  Tiềm thức cần được củng cố bằng trải nghiệm mới. Bạn học cách sống từ cảm giác an toàn thay vì phản ứng theo chương trình cũ.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="text-center max-w-3xl mx-auto bg-muted p-8 rounded-2xl">
              <p className="text-lg font-medium text-foreground">
                <span className="text-primary font-bold">Thôi miên là engine.</span><br/>
                Hệ thần kinh là điều cần ổn định. Somatic và Breathwork là công cụ chuẩn bị.<br/>
                <span className="text-foreground/60 text-base">Tất cả phối hợp để cập nhật đúng nơi tạo ra thay đổi — tiềm thức.</span>
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
                Đừng để trạng thái sinh tồn tiếp tục điều khiển hành trình sứ mệnh của bạn.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
            <Reveal direction="right">
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white/50 mb-8 border-b border-white/10 pb-4">Trước Đây...</h3>
                <ul className="space-y-6">
                  {[
                    "Overthinking kéo dài mỗi khi chuẩn bị ra mắt điều gì mới",
                    "Sắp launch là freeze, sắp bán là tự nghi ngờ",
                    "Thành công một chút lại tự phá, kiếm được tiền lại thấy có lỗi",
                    "Luôn kiệt sức vì phải gồng mình mạnh mẽ để được nhìn nhận",
                    "Muốn hiện diện nhưng lại thu mình lại vào phút chót",
                    "Nỗi sợ điều khiển mọi quyết định trong sự nghiệp"
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
                    "Bình tĩnh lại chỉ sau vài phút khi nỗi sợ xuất hiện trước một bước tiến lớn",
                    "Cảm xúc được làm chủ — không còn bị trigger điều khiển hành động",
                    "\"Tôi đủ vững để bước lên\" trở thành niềm tin thật sự, không phải khẩu hiệu",
                    "Biết thiết lập ranh giới, bảo vệ năng lượng và sự tập trung cho sứ mệnh",
                    "Mối quan hệ với tiền bạc và sự hiện diện của mình trở nên lành mạnh hơn",
                    "Mọi quyết định xuất phát từ sự vững vàng, không phải nỗi sợ"
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
