import React from 'react';
import { Reveal } from '@/components/ui/reveal';
import { Gift, PlayCircle, BookOpen, Clock, Zap, Headphones, Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function Offer() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bonuses = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Emergency Reset 5 Phút",
      value: "497.000 VNĐ",
      solve: "Cơn hoảng loạn cấp tính, lo âu đột ngột",
      get: "Audio hướng dẫn 5 phút làm dịu hệ thần kinh tức thì — dùng được ngay trong cơn sợ",
      why: "Chuẩn bị hệ thần kinh trước phiên thôi miên — khi cơ thể bình ổn, tiềm thức tiếp nhận tái lập trình sâu hơn"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Sleep Healing Audio",
      value: "297.000 VNĐ",
      solve: "Mất ngủ, não không tắt được, tiềm thức hoạt động tiêu cực vào ban đêm",
      get: "Audio 30 phút dẫn dắt vào trạng thái thư giãn sâu, củng cố tái lập trình tiềm thức trong khi ngủ",
      why: "Khi ý thức nghỉ ngơi, tiềm thức tiếp tục học — đây là thời điểm vàng để củng cố chương trình mới"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Trigger Tracker",
      value: "197.000 VNĐ",
      solve: "Không nhận ra chương trình sinh tồn cũ đang kích hoạt",
      get: "Template nhận diện trigger trong 30 ngày — biết chương trình nào đang chạy để biết cần cập nhật gì",
      why: "Không thể cập nhật điều mình không thấy — tracker biến vô thức thành có thức"
    }
  ];

  const curriculum = [
    {
      day: "Ngày 1",
      title: "Tôi An Toàn",
      subtitle: "Đưa hệ thần kinh từ hoảng loạn về bình an",
      lessons: "Vì sao tôi luôn bất an? | Somatic Reset | Xóa mã 'Thế giới nguy hiểm' | Thiền tái lập nền móng.",
      tools: "Emergency Reset 5 phút + Grounding Audio"
    },
    {
      day: "Ngày 2",
      title: "Tôi Không Còn Sợ",
      subtitle: "Chữa lành tiền và nỗi sợ thiếu thốn",
      lessons: "Hiểu nỗi sợ thiếu thốn | Money Healing | Chữa lành dòng họ | Thiền đủ đầy.",
      tools: "Money Journal + Money Ritual"
    },
    {
      day: "Ngày 3",
      title: "Tôi Xứng Đáng",
      subtitle: "Chữa lành Shame và giá trị bản thân",
      lessons: "Phẫu thuật Shame | Somatic vùng chậu | Violet Flame Healing | Viết lại giá trị bản thân.",
      tools: "Affirmation Audio"
    },
    {
      day: "Ngày 4",
      title: "Tôi Làm Chủ Cảm Xúc",
      subtitle: "Quản lý cảm xúc và tâm trí",
      lessons: "Vì sao cảm xúc bùng nổ? | Overthinking | Hợp nhất Nam-Nữ | Inner Peace Meditation.",
      tools: "Trigger Journal"
    },
    {
      day: "Ngày 5",
      title: "Tôi Có Quyền Năng",
      subtitle: "Kích hoạt sức mạnh nội tâm",
      lessons: "Đánh thức Mặt Trời nội tâm | Reprogram Mind | Quantum Confidence | Hành động đầu tiên.",
      tools: "Confidence Journal + Visualization"
    },
    {
      day: "Ngày 6",
      title: "Tôi Thu Hồi Năng Lượng",
      subtitle: "Bảo vệ trường năng lượng",
      lessons: "Energy Leak | Cutting Cords | Boundary | Aura Protection.",
      tools: "Boundary Worksheet + Energy Audit"
    },
    {
      day: "Ngày 7",
      title: "Tôi Tái Sinh",
      subtitle: "Đón nhận phiên bản mới",
      lessons: "Heart Brain Coherence | Timeline mới | Ký giao ước với chính mình | Platinum Light.",
      tools: "Heart Coherence Meditation + Sleep Healing Audio"
    }
  ];

  return (
    <>
      {/* SECTION 10 — OFFER UNBOXING */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Toàn Bộ Bạn Nhận Được Hôm Nay
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 mb-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="bg-primary text-primary-foreground p-6 rounded-2xl md:w-1/3 flex flex-col justify-center shadow-lg">
                  <PlayCircle className="w-12 h-12 mb-4 opacity-80" />
                  <h3 className="text-2xl font-serif font-bold mb-2">Inner Safety Experience™</h3>
                  <p className="opacity-90">7 Ngày Tái Thiết Nền Tảng An Toàn Giữa Tâm Bão Cuộc Đời</p>
                </div>
                
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold mb-4">Khóa học chính bao gồm:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> 7 Module chuyên sâu theo từng giai đoạn</li>
                    <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> 28+ video bài học hướng dẫn chi tiết</li>
                    <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> Phiên thôi miên trị liệu được thiết kế cho từng giai đoạn</li>
                    <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> Bộ công cụ Safe State™ (Breathwork + Somatic) chuẩn bị tiềm thức</li>
                    <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> Workbook nhận diện & cập nhật chương trình vô thức mỗi ngày</li>
                  </ul>
                  <div className="inline-block bg-muted px-4 py-2 rounded-lg font-medium">
                    Giá trị thực: 3.000.000 VNĐ
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-center mb-8 flex items-center justify-center gap-3">
                <Gift className="text-primary w-6 h-6" /> 
                Cộng Thêm 3 Quà Tặng Độc Quyền
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {bonuses.map((bonus, idx) => (
                  <div key={idx} className="bg-secondary/50 rounded-2xl p-6 border border-border relative overflow-hidden group hover:border-primary/30 transition-colors">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Trị giá {bonus.value}
                    </div>
                    <div className="text-primary mb-4 bg-background w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                      {bonus.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-3">{bonus.title}</h4>
                    <div className="space-y-2 text-sm text-foreground/80">
                      <p><strong className="text-foreground">Giải quyết:</strong> {bonus.solve}</p>
                      <p><strong className="text-foreground">Nhận được:</strong> {bonus.get}</p>
                      <p><strong className="text-foreground text-primary">Tại sao quan trọng:</strong> {bonus.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center bg-[#1b1918] text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-white/60 mb-2 font-medium">Tổng giá trị trọn bộ: <span className="line-through decoration-red-500 decoration-2 text-lg">3.991.000 VNĐ</span></div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-8">
                  Hôm nay: 1.111.000 VNĐ
                </div>
                <a
                  href="#register-form"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg shadow-primary/20 w-full sm:w-auto"
                >
                  Tôi Muốn Trọn Bộ Này →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 11 — CURRICULUM SHOWCASE */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Lộ Trình Chi Tiết 7 Ngày
              </h2>
              <p className="text-lg text-muted-foreground">
                Từng bước thiết kế để đưa bạn đi từ sợ hãi về lại vùng an toàn.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {curriculum.map((item, idx) => (
                <AccordionItem key={idx} value={`day-${idx}`} className="bg-card border border-border rounded-xl px-2 overflow-hidden data-[state=open]:border-primary/50 transition-colors">
                  <AccordionTrigger className="hover:no-underline py-5 px-4">
                    <div className="flex flex-col md:flex-row md:items-center text-left gap-2 md:gap-4 w-full pr-4">
                      <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-md text-sm shrink-0 w-max">
                        {item.day}
                      </span>
                      <span className="font-serif text-lg font-bold">Module {idx + 1}: {item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6 pt-2">
                    <p className="font-medium text-primary mb-4">{item.subtitle}</p>
                    <div className="space-y-3 text-foreground/80">
                      <p><strong>Bài học:</strong> {item.lessons}</p>
                      <p><strong>Công cụ:</strong> {item.tools}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}

// Needed missing icon component
function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}
