import React from 'react';
import { Reveal } from '@/components/ui/reveal';
import { ShieldCheck, Star, Lock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function Closing() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      q: "Thôi miên trị liệu có phải là bị điều khiển không?",
      a: "Hoàn toàn không. Trong suốt phiên thôi miên, bạn luôn tỉnh táo và có quyền dừng lại bất cứ lúc nào. Thôi miên là trạng thái tập trung sâu — giống như khi bạn đọc sách say mê đến mức không nghe tiếng xung quanh. Bạn vẫn nhận thức được mọi thứ, chỉ là tâm trí đang ở trạng thái thư giãn sâu và cởi mở hơn với những thay đổi tích cực. Không ai có thể bắt bạn làm điều bạn không muốn."
    },
    {
      q: "Tôi rất bận — 7 ngày liệu có đủ thời gian không?",
      a: "Mỗi ngày chỉ cần 30-60 phút. Khóa học được thiết kế cho những người bận rộn — bạn có thể học theo tốc độ của mình, không bị giới hạn thời gian xem lại."
    },
    {
      q: "Tôi chưa bao giờ thiền — có học được không?",
      a: "Hoàn toàn không cần kinh nghiệm. Các bài thực hành được dẫn dắt từng bước, ngắn gọn, thực tế — không phải 'ngồi im hàng giờ'."
    },
    {
      q: "Tôi đã thử nhiều phương pháp rồi — tại sao cái này khác?",
      a: "Vì Inner Safety Method™ sử dụng thôi miên trị liệu như cơ chế cốt lõi — giúp cập nhật trực tiếp chương trình vô thức đang tạo ra phản ứng sợ hãi, thay vì chỉ tác động ở tầng ý thức. Hầu hết phương pháp khác (thiền, sách, affirmation) đều hoạt động ở tầng ý thức — trong khi vấn đề lại nằm ở tiềm thức."
    },
    {
      q: "Tôi đã 45 tuổi — có quá muộn không?",
      a: "Không bao giờ là quá muộn. Hầu hết học viên của Nga đều ở độ tuổi 35-50. Hệ thần kinh có thể tái lập trình ở bất kỳ độ tuổi nào — đó là điều khoa học đã chứng minh."
    },
    {
      q: "Tôi có thể xem lại bài học sau khi mua không?",
      a: "Có. Bạn được truy cập vĩnh viễn vào toàn bộ khóa học và có thể xem lại bất kỳ lúc nào bạn cần."
    },
    {
      q: "Nếu không phù hợp thì sao?",
      a: "Nga cam kết hoàn tiền 100% trong vòng 7 ngày nếu bạn thực hành đầy đủ mà không cảm nhận được sự thay đổi. Rủi ro thuộc về Nga, không phải về bạn."
    },
    {
      q: "Tôi đã chữa lành/phát triển bản thân rất nhiều năm rồi — chương trình này khác gì so với những gì tôi đã học?",
      a: "Rất nhiều học viên đến với Nga đã từng thiền, đọc sách, làm inner child, shadow work — và vẫn bị kẹt ở đúng khoảnh khắc chuẩn bị bước lên. Đó là vì hầu hết những công cụ đó tác động ở tầng ý thức, trong khi phản ứng sợ hãi lại nằm ở tầng tiềm thức. Inner Safety Experience™ không lặp lại một vòng chữa lành khác — nó là bước cắm rễ để những gì bạn đã học được thật sự 'hạ cánh' vào hành động."
    }
  ];

  return (
    <>
      {/* SECTION 12 — FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Câu Hỏi Thường Gặp
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="bg-muted border border-border rounded-xl px-2 data-[state=open]:bg-white transition-colors shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-5 px-4 text-left font-medium text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 pt-1 text-foreground/80 leading-relaxed text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* SECTION 13 — RISK REVERSAL */}
      <section className="py-24 bg-[#Eef3f1] border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Cam Kết Của Nga
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Reveal delay={0.1} direction="up">
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center h-full border border-border">
                <ShieldCheck className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-bold text-lg mb-3">Hoàn Tiền 100%<br/>Trong 7 Ngày</h3>
                <p className="text-muted-foreground text-sm">Nếu bạn thực hành đầy đủ mà không cảm nhận được thay đổi, Nga hoàn tiền toàn bộ, không hỏi lý do.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center h-full border border-border">
                <Star className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-bold text-lg mb-3">Chất Lượng<br/>Được Kiểm Chứng</h3>
                <p className="text-muted-foreground text-sm">Nội dung kết hợp Thôi miên Trị liệu, Somatic Therapy và 500+ ca thực tế — được kiểm chứng qua hàng trăm học viên ở độ tuổi 35–50.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center h-full border border-border">
                <Lock className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-bold text-lg mb-3">Bảo Mật<br/>Tuyệt Đối</h3>
                <p className="text-muted-foreground text-sm">Thông tin của bạn được bảo mật hoàn toàn. Không chia sẻ với bên thứ ba. Không spam.</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="text-center bg-primary/10 py-6 px-8 rounded-xl max-w-3xl mx-auto">
              <p className="text-xl font-serif font-medium text-foreground italic">
                "Nếu phải có ai chịu rủi ro cho hành trình này, người đó phải là Nga, không phải bạn."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 14 — URGENCY & FINAL CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Đừng Để Thêm Một Ngày Nữa<br/>Trôi Qua Trong Giới Hạn Mà Nỗi Sợ Cho Phép
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Đã đến lúc cắm rễ đủ sâu để bước vào phiên bản lớn hơn của chính mình. Bạn có thể bắt đầu xây lại bộ rễ đó — ngay hôm nay.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col items-center gap-6">
              <a
                href="#register-form"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-xl hover:bg-primary/90 transition-transform hover:scale-105 shadow-2xl shadow-primary/30"
              >
                Tôi Bắt Đầu Ngay Tối Nay →
              </a>
              
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-muted-foreground line-through">3.000.000 VNĐ</span>
                  <span className="text-2xl font-bold text-foreground">1.111.000 VNĐ</span>
                </div>
                <div className="text-sm font-medium text-destructive bg-destructive/10 px-4 py-1.5 rounded-full">
                  ⚡ Ưu đãi này kết thúc khi đủ số lượng học viên
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
