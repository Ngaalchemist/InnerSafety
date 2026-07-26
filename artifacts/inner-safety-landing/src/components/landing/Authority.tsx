import React from 'react';
import { Reveal } from '@/components/ui/reveal';
import { Star } from 'lucide-react';
import ngaPhoto from '@assets/bca740a8-bf3b-433b-8b50-afe2a1ba901f_1784989963055.jfif';

export function Authority() {
  const testimonials = [
    {
      name: "Chị Minh Hà",
      age: "42 tuổi",
      situation: "Khủng hoảng ly hôn & Mất kết nối bản thân",
      text: "Sau ly hôn, tôi luôn gồng mình tỏ ra ổn trước mặt con cái. Đêm xuống là những cơn hoảng loạn không báo trước. Khóa học này không khuyên tôi phải mạnh mẽ nữa. Ngày thứ 3, tôi khóc nức nở nhưng cảm thấy nhẹ nhõm vô cùng. Lần đầu tiên sau 2 năm, tôi ngủ một giấc không mộng mị."
    },
    {
      name: "Chị Thanh Trúc",
      age: "38 tuổi",
      situation: "Kiệt quệ tài chính & Mất việc",
      text: "Phá sản công ty khiến tôi mất hoàn toàn niềm tin vào chính mình. Tôi sợ hãi mọi thứ liên quan đến tiền. Modun về Money Healing thực sự là một cú gỡ gút ngoạn mục. Tôi không còn thấy khó thở khi nhắc đến nợ nần nữa, hệ thần kinh của tôi đã bình tĩnh trở lại để bắt đầu làm lại từ đầu."
    },
    {
      name: "Chị Ngọc Lan",
      age: "45 tuổi",
      situation: "Empty Nest & Khủng hoảng tuổi trung niên",
      text: "Con đi du học, tôi rơi vào trạng thái chơi vơi, không biết mình là ai ngoài vai trò làm mẹ. Tôi đã thử thiền Vipassana nhưng không thể ngồi yên. Phương pháp xả bỏ qua cơ thể của Nga giúp tôi thoát khỏi trạng thái tê liệt cảm xúc. Giờ đây, tôi thấy bình an khi ở một mình."
    },
    {
      name: "Chị Thu Hương",
      age: "36 tuổi",
      situation: "Stress mãn tính & Overthinking",
      text: "Đầu óc tôi lúc nào cũng như có 100 tab đang mở, kiệt sức triền miên dù không làm việc nặng. Audio reset 5 phút là vị cứu tinh của tôi. Nó thực sự hoạt động! Tôi đã biết cách thiết lập ranh giới năng lượng tại nơi làm việc mà không cảm thấy tội lỗi. Tuyệt vời!"
    }
  ];

  return (
    <>
      {/* SECTION 8 — AUTHORITY & STORY */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
                <img 
                  src={ngaPhoto} 
                  alt="Nga Alchemist" 
                  className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5] md:aspect-auto"
                />
              </div>
            </Reveal>

            <Reveal direction="left">
              <div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-2">
                  Nga Alchemist
                </h2>
                <p className="text-primary font-medium text-lg mb-8 uppercase tracking-wider">
                  Founder · Inner Safety Method™<br/>
                  <span className="text-muted-foreground text-sm normal-case tracking-normal">Chuyên gia Tái thiết An toàn Nội tâm</span>
                </p>

                <div className="prose prose-lg prose-p:text-foreground/80 mb-10">
                  <p>
                    "Mình không tạo ra Inner Safety Method™ từ lý thuyết. Phương pháp này bắt đầu từ chính hành trình đi qua đổ vỡ, mất phương hướng và những năm tháng tìm lại cảm giác an toàn bên trong."
                  </p>
                  <p>
                    "Mình không dạy bạn những điều học được từ sách vở — mình đồng hành cùng bạn bằng trải nghiệm của một người đã từng đi qua vỡ vụn và tự dựng lại cái nền cho chính mình. Nơi nào bạn thấy đau nhất, tối tăm nhất, mình đều đã từng ở đó."
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border mb-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Khách hàng</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">3+</div>
                    <div className="text-sm text-muted-foreground">Năm nghiên cứu</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">7</div>
                    <div className="text-sm text-muted-foreground">Bước cốt lõi</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">1</div>
                    <div className="text-sm text-muted-foreground">Sứ mệnh</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Chuyên môn: Nghiên cứu hệ thần kinh, thôi miên trị liệu, tâm lý học chấn thương.<br/>
                  Đồng hành chuyên sâu cùng phụ nữ 35-50 tuổi đi qua ly hôn, mất việc, khủng hoảng tài chính.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 9 — SOCIAL PROOF */}
      <section className="py-24 bg-muted border-t border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Bạn Không Phải Người Duy Nhất
              </h2>
              <p className="text-xl text-muted-foreground">
                Những người phụ nữ đã tự dựng lại nền tảng bình an giữa giông bão.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testi, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border h-full flex flex-col">
                  <div className="flex text-primary mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/90 italic mb-6 flex-grow">
                    "{testi.text}"
                  </p>
                  <div className="mt-auto border-t border-border pt-4">
                    <div className="font-bold text-foreground">{testi.name}</div>
                    <div className="text-sm text-muted-foreground">{testi.age} • {testi.situation}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
