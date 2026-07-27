import React from 'react';
import { Reveal } from '@/components/ui/reveal';
import { Brain, Waves, MinusCircle, BatteryLow, HelpCircle } from 'lucide-react';
import glowingPlantImg from '@assets/b7c36e0667cc4b981650a080f50a5cc8_1784992832049.jpg';
import meditatingImg from '@assets/cd77bc5724d6b5571ffe542739aa734c_1784992832049.jpg';

export function Problem() {
  const painPoints = [
    {
      icon: <Brain className="w-6 h-6" />,
      text: 'Đầu óc không ngừng suy nghĩ,  overthinking kéo dài đến tận đêm khuya, không dừng được.',
    },
    {
      icon: <Waves className="w-6 h-6" />,
      text: 'Cảm xúc bùng nổ bất ngờ hoặc ngược lại, bạn tê liệt hoàn toàn, không cảm nhận được gì.',
    },
    {
      icon: <MinusCircle className="w-6 h-6" />,
      text: 'Luôn cảm thấy mình không đủ tốt, không đủ giỏi, không xứng đáng bắt đầu lại.',
    },
    {
      icon: <BatteryLow className="w-6 h-6" />,
      text: 'Kiệt sức vì phải gồng mình mạnh mẽ mỗi ngày trong khi bên trong đang sụp đổ.',
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      text: 'Đã đọc sách, thiền định, nghĩ tích cực... mà sao vẫn không khá hơn?',
    },
  ];

  const fears = [
    'Sợ không đủ.',
    'Sợ thất bại.',
    'Sợ mất tiền.',
    'Sợ bị bỏ rơi.',
    'Sợ bị đánh giá.',
    'Sợ bắt đầu lại.',
    'Sợ mình không còn giá trị.',
  ];

  const fearDecisions = [
    'Bạn chọn ai để yêu.',
    'Bạn dám theo đuổi điều gì.',
    'Bạn giữ lại hay buông bỏ điều gì.',
    'Và bạn tin rằng mình xứng đáng với điều gì.',
  ];

  const rootFearItems = [
    'Bạn thấy phải kiểm soát mọi thứ.',
    'Bạn nói "tôi ổn" khi bên trong đang rối bời.',
    'Bạn làm rất nhiều, nghỉ ngơi thì thấy tội lỗi.',
    'Bạn từng đưa ra một quyết định lớn chỉ vì quá sợ, không phải vì thật sự muốn.',
  ];

  const rootSafeItems = [
    'Bạn vẫn lo lắng, nhưng lo lắng không điều khiển quyết định.',
    'Bạn nói "không" mà không cần giải thích dài dòng.',
    'Bạn ra quyết định từ sự rõ ràng, không phải hoảng loạn.',
  ];

  const survivalModes = [
    {
      emoji: '⚔️',
      mode: 'Chiến đấu (Fight)',
      desc: 'Bạn trở nên gắt gỏng, dễ nổi nóng hoặc luôn trong tư thế phòng thủ.',
    },
    {
      emoji: '🏃',
      mode: 'Bỏ chạy (Flight)',
      desc: 'Bạn trì hoãn, né tránh hoặc lao vào làm việc để không phải đối diện cảm xúc.',
    },
    {
      emoji: '🧊',
      mode: 'Đóng băng (Freeze)',
      desc: 'Bạn tê liệt, mất động lực và không biết phải bắt đầu từ đâu.',
    },
    {
      emoji: '🤲',
      mode: 'Làm hài lòng (Fawn)',
      desc: 'Bạn luôn cố làm vừa lòng người khác để đổi lấy cảm giác an toàn.',
    },
  ];

  return (
    <>
      {/* ── SECTION 2 — AGITATION: Pain points with icons ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Đây Có Phải Là Điều Bạn Đang Trải Qua?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bạn đã qua biến cố. Cuộc sống bên ngoài có thể đã tiếp tục. Nhưng bên trong, liệu có phải một phần của bạn vẫn chưa tin rằng mình đã an toàn?".
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {painPoints.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm h-full flex items-start gap-4 group hover:border-primary/30 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/15 transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-foreground font-medium leading-relaxed pt-2">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — NEW BELIEF: Fear is running your decisions ── */}
      <section className="py-24 bg-[#0a0807] text-white overflow-hidden relative">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-96 h-96 bg-[#c9a84c] rounded-full blur-[140px] opacity-8 absolute -top-24 -right-24" />
          <div className="w-64 h-64 bg-[#c9a84c] rounded-full blur-[110px] opacity-6 absolute -bottom-16 -left-16" />
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Reveal>
            <p className="text-white/40 text-center mb-3">Có thể bạn nghĩ mình chỉ đang lo lắng.</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-5">
              Nhưng Có Một Sự Thật Mà<br className="hidden md:block" /> Rất Ít Người Nhận Ra:
            </h2>
            <p className="text-xl text-[#c9a84c] font-medium text-center mb-14 leading-relaxed">
              Rất nhiều quyết định trong cuộc đời không được đưa ra từ sự bình an<br className="hidden md:block" /> — mà từ những nỗi sợ vô hình.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <Reveal direction="right">
              <div>
                <p className="text-white/45 mb-4 uppercase tracking-widest text-xs font-bold">
                  Những nỗi sợ âm thầm đó...
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {fears.map((fear, idx) => (
                    <span
                      key={idx}
                      className="bg-white/8 border border-white/14 text-white/78 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {fear}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div>
                <p className="text-white/45 mb-4 uppercase tracking-widest text-xs font-bold">
                  ...âm thầm quyết định thay bạn:
                </p>
                <ul className="space-y-4">
                  {fearDecisions.map((dec, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="text-[#c9a84c] shrink-0 mt-1 font-bold">→</span>
                      <span className="text-lg leading-snug">{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Theo thời gian, bạn không còn sống cuộc đời mình mong muốn.
                <br />
                <span className="text-[#c9a84c] font-semibold">
                  Bạn chỉ đang sống trong giới hạn mà nỗi sợ cho phép.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 3b — ROOT METAPHOR: Tree visualization ── */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="right">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img
                  src={meditatingImg}
                  alt="Bộ rễ an toàn bên trong"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal direction="left">
              <div>
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Ẩn dụ gốc rễ</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Hãy Hình Dung Cuộc Đời Bạn Như Một Cái Cây.
                </h2>
                <p className="text-foreground/80 text-lg mb-5 leading-relaxed">
                  Phần mọi người nhìn thấy — công việc, gia đình, sự cố gắng mỗi ngày — chỉ là phần thân và lá. Còn phần{' '}
                  <strong>quyết định cái cây đó có đứng vững qua giông bão</strong> hay không nằm sâu dưới đất, nơi không ai nhìn thấy:{' '}
                  <strong>bộ rễ.</strong>
                </p>
                <p className="text-foreground/65 mb-8 leading-relaxed">
                  Có bộ rễ được xây từ nỗi sợ. Có bộ rễ được xây từ sự an toàn. Từ xa nhìn vào, hai cái cây trông giống hệt nhau.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-red-50 border border-red-100 p-5 rounded-2xl">
                    <p className="font-bold text-red-700 mb-3 text-xs uppercase tracking-wide">
                      Rễ sợ hãi — bạn có nhận ra?
                    </p>
                    <ul className="space-y-2">
                      {rootFearItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-red-800/80 text-sm">
                          <span className="shrink-0 mt-0.5 text-red-400 font-bold">✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/[0.08] border border-primary/15 p-5 rounded-2xl">
                    <p className="font-bold text-primary mb-3 text-xs uppercase tracking-wide">
                      Rễ an toàn — điều bạn sẽ xây
                    </p>
                    <ul className="space-y-2">
                      {rootSafeItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/80 text-sm">
                          <span className="shrink-0 mt-0.5 text-primary font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <blockquote className="border-l-4 border-primary pl-5 py-2 text-foreground/70 italic text-base leading-relaxed">
                  "Câu hỏi không phải bạn có đang gặp khó khăn không — mà là: bộ rễ nào đang âm thầm ra quyết định thay bạn mỗi ngày, mà bạn không hề hay biết?"
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — WHY THIS HAPPENS (Neuroscience + Fight/Flight/Freeze/Fawn) ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal direction="right">
              <div>
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Vì sao điều này xảy ra?</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                  Đây Không Phải Lỗi Của Bạn.
                </h2>
                <p className="text-xl text-primary font-medium mb-7">
                  Đây là cách cơ thể được tạo ra để bảo vệ bạn.
                </p>
                <div className="space-y-4 text-foreground/80 text-base leading-relaxed mb-7">
                  <p>
                    Bộ rễ sợ hãi không hình thành vì bạn yếu đuối. Nó hình thành vì sau mỗi biến cố, hệ thần kinh sẽ làm đúng điều nó được lập trình để làm:{' '}
                    <strong className="text-foreground">giúp bạn sống sót.</strong>
                  </p>
                  <p>
                    Khi đối mặt với mất mát, đổ vỡ hay khủng hoảng, hệ thần kinh tự động chuyển sang{' '}
                    <strong className="text-foreground">chế độ sinh tồn (Survival Mode)</strong> để bảo vệ bạn:
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {survivalModes.map((mode, idx) => (
                    <div key={idx} className="bg-muted p-4 rounded-xl border border-border hover:border-primary/20 transition-colors">
                      <div className="text-2xl mb-2">{mode.emoji}</div>
                      <p className="font-bold text-foreground text-sm mb-1">{mode.mode}</p>
                      <p className="text-foreground/60 text-xs leading-relaxed">{mode.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 p-5 rounded-xl border border-primary/20">
                  <p className="text-foreground font-medium text-sm leading-relaxed">
                    Trong thời điểm biến cố, những phản ứng này đã giúp bạn vượt qua. Nhưng khi biến cố kết thúc, hệ thần kinh không nhận ra nguy hiểm đã qua — và vẫn tiếp tục phản ứng như thể bạn đang cần phải sinh tồn.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
                <img
                  src={glowingPlantImg}
                  alt="Hệ thần kinh và gốc rễ"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — WHY KNOWLEDGE DOESN'T WORK ── */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10">
              Vì Sao Bạn Biết Rất Nhiều...<br />Nhưng Cuộc Sống Vẫn Không Thay Đổi?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="text-left max-w-2xl mx-auto bg-white rounded-2xl p-8 mb-8 shadow-sm border border-border space-y-4 text-foreground/80 text-base leading-relaxed">
              <p>
                Bởi vì theo thời gian, những phản ứng sinh tồn đó không còn chỉ là phản ứng nhất thời — chúng trở thành một{' '}
                <strong className="text-foreground">chương trình vô thức mà tiềm thức tự động kích hoạt</strong> mỗi khi gặp điều gì quen thuộc với tổn thương cũ.
              </p>
              <p className="text-foreground/45 italic text-sm">Không cần bạn lựa chọn. Không cần bạn nhận ra.</p>
              <p>
                Chỉ cần một lời từ chối, một cuộc tranh cãi, một áp lực tài chính — hệ thần kinh sẽ ngay lập tức khởi động chương trình cũ: overthinking, lo âu, mất ngủ, tự chỉ trích, né tránh.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="text-left max-w-2xl mx-auto space-y-4 text-foreground/78 text-base mb-10">
              <p>
                Không phải vì bạn thiếu ý chí. Mà vì{' '}
                <strong className="text-foreground">kiến thức chỉ thay đổi phần ý thức</strong>, trong khi chương trình đang vận hành lại nằm ở tầng vô thức.
              </p>
              <p>
                Bạn không thể thay đổi một chương trình vô thức chỉ bằng việc hiểu nó.{' '}
                <strong className="text-foreground">Bạn cần cập nhật chính chương trình đang điều khiển những phản ứng ấy.</strong>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
              <p className="text-xl md:text-2xl font-serif font-medium mb-3">
                Đó là lý do Inner Safety Experience™ được tạo ra.
              </p>
              <p className="text-primary-foreground/80 text-base leading-relaxed">
                Chúng tôi không bắt bạn suy nghĩ tích cực hơn. Chúng tôi bắt đầu bằng việc giúp hệ thần kinh cảm thấy an toàn trở lại — để tiềm thức sẵn sàng cập nhật những chương trình sinh tồn cũ.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
