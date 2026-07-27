import React from 'react';
import { Reveal } from '@/components/ui/reveal';
import { Star } from 'lucide-react';
import ngaPhoto from '@assets/bca740a8-bf3b-433b-8b50-afe2a1ba901f_1784989963055.jfif';

export function Authority() {
  const testimonials = [
    {
      name: "Chị Ngọc Anh",
      age: "32 tuổi",
      situation: "Chia tay · Lệ thuộc cảm xúc",
      text: "Sau phiên đầu tiên em chỉ có một cảm giác là... nhẹ. Như vừa đặt xuống một cục đá đè trong người. Ngực không còn tức, bụng cũng không còn đau như trước. Em không nghĩ chỉ một buổi mà cơ thể mình lại khác đến vậy."
    },
    {
      name: "Chị Huyền",
      age: "35 tuổi",
      situation: "Overthinking & lo âu kéo dài",
      text: "Em vẫn có cảm xúc chứ, nhưng không còn bị nó cuốn đi nữa. Mỗi khi có chuyện xảy ra, em bắt đầu dừng lại để quan sát thay vì phản ứng như trước. Em thấy mình bình tĩnh hơn rất nhiều."
    },
    {
      name: "Anh Linh",
      age: "35 tuổi",
      situation: "Khủng hoảng sau phá sản và mất việc",
      text: "Lúc tìm đến chị, em chỉ thấy mọi thứ đều là lỗi của hoàn cảnh. Sau một thời gian thực hành, em bắt đầu nhìn lại chính mình. Không còn đổ lỗi nữa. Em tỉnh táo hơn, bình an hơn và biết mình cần làm gì tiếp theo."
    },
    {
      name: "Chị Anh Thư",
      age: "",
      situation: "Mất ngủ · Nặng ngực · Mất ý nghĩa sống",
      text: "Sau 7 ngày em thấy kết nối với bản thân mình hơn, tin vào bản thân hơn. Tim không còn nặng nữa. Em ngủ ngon, những triệu chứng cũ gần như không quay lại. Điều em vui nhất là... em thấy mình yêu đời hơn."
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
                <p className="text-primary font-medium text-lg mb-1 uppercase tracking-wider">
                  Founder · Inner Safety Method™
                </p>
                <p className="text-muted-foreground text-sm mb-1">Chuyên gia Thôi miên Trị liệu & Tái lập trình Tiềm thức</p>
                <p className="text-muted-foreground/70 text-xs mb-8 font-medium">Certified Hypnotherapist (CTAA Accredited) · 3+ năm thực hành · 500+ khách hàng</p>

                <div className="prose prose-lg prose-p:text-foreground/80 mb-10">
                  <p>
                    "Có một thời gian dài, mình cũng từng tin rằng hành trình phát triển bản thân và tâm linh sẽ đưa mình đến nhiều ánh sáng hơn, nhiều bình an hơn. Nhưng càng đi, mình càng nhận ra đó không phải là một con đường chỉ có ánh sáng."
                  </p>
                  <p>
                    "Đó là những lần danh tính sụp đổ. Là những lần đối diện với nỗi sợ sâu nhất. Là những giai đoạn mình không còn biết mình là ai. Và chính những trải nghiệm đó đã dạy mình một điều quan trọng: Con người không cần học cách bay cao trước — con người cần một bộ rễ đủ vững để đứng yên giữa giông bão."
                  </p>
                  <p>
                    "Inner Safety Method™ ra đời để giúp bạn từng bước xây lại nền tảng an toàn từ gốc rễ. Mình không hứa thay đổi cuộc đời bạn trong vài ngày — mình chỉ mong giúp bạn đặt xuống một phần gánh nặng đã mang quá lâu, để bình tĩnh hơn, vững vàng hơn và tin vào chính mình hơn mỗi ngày."
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
                  Chuyên môn: Thôi miên trị liệu, tái lập trình tiềm thức, điều hòa cảm xúc &amp; phát triển bản thân.<br/>
                  Đồng hành chuyên sâu cùng phụ nữ 35–50 tuổi đi qua ly hôn, mất việc, khủng hoảng tài chính.
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
