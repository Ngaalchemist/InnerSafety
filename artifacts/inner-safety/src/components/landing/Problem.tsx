import React from 'react';
import { Reveal } from '@/components/ui/reveal';
import crucibleImg from '@assets/b7c36e0667cc4b981650a080f50a5cc8_1784992832049.jpg';
import nervousSystemImg from '@assets/cd77bc5724d6b5571ffe542739aa734c_1784992832049.jpg';

export function Problem() {
  return (
    <>
      {/* SECTION 2 — AGITATION & EMPATHY */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Đó Có Phải Là Điều Bạn Đang Trải Qua?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bạn đã qua biến cố. Cuộc sống bên ngoài có thể đã tiếp tục. Nhưng bên trong — hệ thần kinh vẫn đang sống trong chế độ sinh tồn.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Đầu óc không ngừng quay — overthinking kéo dài đến tận đêm khuya, không tắt được.",
              "Cảm xúc bùng nổ bất ngờ — hoặc ngược lại, bạn tê liệt hoàn toàn, không cảm nhận được gì.",
              "Luôn cảm thấy mình không đủ tốt, không đủ giỏi, không xứng đáng bắt đầu lại.",
              "Kiệt sức vì phải gồng mình mạnh mẽ mỗi ngày trong khi bên trong đang sụp đổ.",
              "Đã đọc sách, thiền định, nghĩ tích cực — mà sao vẫn không khá hơn?"
            ].map((pain, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm h-full">
                  <p className="text-foreground font-medium">{pain}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE PARADIGM SHIFT */}
      <section className="py-24 relative overflow-hidden bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="right">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-square">
                <img 
                  src={crucibleImg} 
                  alt="Crucible concept" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            
            <Reveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  Vì Sao Điều Này Xảy Ra?
                </h2>
                <h3 className="text-xl font-medium text-primary mb-8">
                  Ẩn dụ Lò Nung — Biến cố không đến để phá hủy bạn
                </h3>
                
                <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8 bg-background/50 rounded-r-xl p-6 italic text-foreground/80">
                  "Khi chiếc bánh được tạo ra, trứng phải vỡ, bột phải tan. Biến cố không đến để phá hủy bạn — mà để nung chảy những gì đã cũ, giúp phiên bản chân thật hơn của bạn được hình thành."
                </blockquote>
                
                <p className="text-lg font-medium text-foreground bg-primary/10 inline-block px-6 py-3 rounded-xl">
                  Bạn không yếu đuối. Bạn không kém cỏi. Bạn chỉ đang đi qua lò nung.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE REAL REASON */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Vì Sao Đọc Sách, Thiền Định Và Nghĩ Tích Cực Vẫn Không Đủ?
            </h2>
            <p className="text-xl text-primary font-medium mb-12">
              "Bạn không thể dùng tư duy trên đầu để dập tắt nỗi sợ đang cuộn trào trong cơ thể."
            </p>
          </Reveal>

          <div className="flex flex-col gap-4 text-left mb-12">
            {[
              { fail: "Thiền định và mindfulness", reason: "Vẫn overthinking vì hệ thần kinh chưa được xả bỏ hormone căng thẳng" },
              { fail: "Sách self-help và affirmations", reason: "Tiềm thức không tiếp nhận niềm tin mới khi cơ thể còn ở chế độ báo động" },
              { fail: "Positive thinking", reason: "Cố nghĩ tốt trên nền tảng sợ hãi chỉ tạo thêm mệt mỏi" },
              { fail: "Chia sẻ với bạn bè / tư vấn tâm lý lý thuyết", reason: "Đã hiểu lý do nhưng cơ thể vẫn phản ứng cũ" },
              { fail: "Cố gồng mình và 'chờ qua đi'", reason: "Sinh tồn kéo dài làm kiệt quệ thần kinh" }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-muted p-5 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/3 font-semibold text-foreground/80 line-through decoration-destructive decoration-2">
                    {item.fail}
                  </div>
                  <div className="text-primary text-xl hidden md:block">→</div>
                  <div className="md:w-2/3 font-medium text-foreground">
                    {item.reason}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
              <p className="text-xl md:text-2xl font-serif font-medium">
                Cơ thể và hệ thần kinh phải tin rằng nó đã an toàn trước — rồi tâm trí mới có thể bình yên.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — THE MECHANISM */}
      <section className="py-24 bg-[#Eef3f1]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Cơ Chế Chuông Báo Động Sinh Tồn
                </h2>
                <div className="space-y-6 text-foreground/80 text-lg">
                  <p>
                    Khi đối mặt với biến cố, hệ thần kinh của chúng ta tự động bật sang trạng thái <strong>Fight-Flight-Freeze</strong> (Chiến đấu - Bỏ chạy - Đóng băng). Đây là cơ chế bảo vệ tự nhiên.
                  </p>
                  <p>
                    Nhưng khi căng thẳng kéo dài, hệ thần kinh bắt đầu coi "chế độ sinh tồn" là trạng thái bình thường. Cortisol và adrenaline liên tục tiết ra, chặn đứng mọi khả năng thay đổi và chữa lành.
                  </p>
                  <div className="bg-white/60 p-6 rounded-xl border border-white">
                    <p className="font-semibold text-foreground mb-2">Đây không phải lỗi của bạn. Đây là sinh lý học.</p>
                    <p className="text-sm">
                      Khi hệ thần kinh liên tục ở chế độ báo động đỏ, não bộ không thể phân biệt được mối nguy thật sự và mối nguy tưởng tượng — và nó luôn chọn: sinh tồn trước.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-square">
                <img 
                  src={nervousSystemImg} 
                  alt="Nervous System" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
