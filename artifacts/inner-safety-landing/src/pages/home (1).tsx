import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Import images
import ngaLogo from '@assets/nga_alchemist_logo_1784926721784.png';
import heroImg from '@assets/Gemini_Generated_Image_rz0f3rz0f3rz0f3r_1784884536664.png';
import heroAltImg from '@assets/ChatGPT_Image_Jul_24,_2026,_03_15_59_AM_1784884545442.png';
import ngay1 from '@assets/ngay_1_1784886445192.png';
import ngay2 from '@assets/ngay_2__1784886445192.png';
import ngay3 from '@assets/ngay_3_1784886445192.png';
import ngay4 from '@assets/ngay_4_1784886445193.png';
import ngay5 from '@assets/ngay_5_1784886445190.png';
import ngay6 from '@assets/ngay_6_1784886445191.png';
import ngay7 from '@assets/ngay_7_1784886445191.png';

// Icons
import { CheckCircle2, PlayCircle, Shield, ChevronRight, Lock, MessageCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll({
    target: useRef<HTMLDivElement>(null),
  });
  
  const scrollToRegister = () => {
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar onRegisterClick={scrollToRegister} />
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-background">
        {/* Dark bottom backdrop, matching the soil half of the tree image */}
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[#1a1510]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 grid md:grid-cols-2 gap-12 items-center min-h-[92dvh]">
          {/* Text content - sits on the light zone, dark readable text like the sample */}
          <div className="max-w-xl">
            <div className="text-primary uppercase tracking-widest text-xs font-bold mb-6">
              Inner Safety Experience™
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground font-bold leading-tight mb-6">
              Sau một biến cố...<br/>
              bạn vẫn tiếp tục sống.<br/>
              <span className="text-primary">Nhưng chưa bao giờ thật sự cảm thấy an toàn trở lại.</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-lg font-light">
              Inner Safety Experience™ là hành trình 7 ngày giúp bạn tái thiết cảm giác an toàn từ gốc rễ, để cơ thể thôi phản ứng vì sợ hãi và bạn có thể sống từ sự bình an thay.
            </p>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3 text-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Làm dịu hệ thần kinh để cơ thể không còn luôn trong trạng thái cảnh giác</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Ngủ sâu hơn, bớt overthinking và lấy lại cảm giác bình yên trong chính mình</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Đưa ra quyết định từ sự vững vàng thay vì phản ứng vì nỗi sợ</span>
              </li>
            </ul>
            <Button 
              onClick={scrollToRegister}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium shadow-[0_0_20px_rgba(200,168,75,0.4)] transition-all hover:scale-105"
            >
              🌿 TÔI MUỐN XÂY LẠI GỐC RỄ CỦA MÌNH
            </Button>
          </div>

          {/* Tree image - smaller, contained, shifted right (not full-bleed cover) */}
          <div className="relative flex justify-center md:justify-end">
            <img 
              src={heroImg} 
              alt="Sacred tree with glowing roots" 
              className="w-[92%] md:w-[85%] h-auto object-contain translate-x-2 md:translate-x-6"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: PAIN (Big Idea / Cây và Bộ Rễ) */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="prose prose-lg md:prose-xl prose-stone mx-auto text-foreground/80">
            <p className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed mb-12">
              Có thể bạn nghĩ mình chỉ đang lo lắng.<br/>
              Nhưng có một sự thật mà rất ít người nhận ra:
            </p>
            
            <p className="font-medium text-xl">
              Rất nhiều quyết định trong cuộc đời chúng ta không được đưa ra từ sự bình an - mà từ những nỗi sợ vô hình.
            </p>
            
            <ul className="list-none pl-0 space-y-2 font-serif text-primary/80 italic text-xl my-8">
              <li>Sợ không đủ.</li>
              <li>Sợ thất bại.</li>
              <li>Sợ mất tiền.</li>
              <li>Sợ bị bỏ rơi.</li>
              <li>Sợ bị đánh giá.</li>
              <li>Sợ bắt đầu lại.</li>
              <li>Sợ mình không còn giá trị.</li>
            </ul>

            <p>Những nỗi sợ ấy âm thầm quyết định thay bạn:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-foreground">
              <li>Bạn chọn ai để yêu</li>
              <li>Bạn dám theo đuổi điều gì.</li>
              <li>Bạn giữ lại hay buông bỏ điều gì.</li>
              <li>Và bạn tin rằng mình xứng đáng với điều gì.</li>
            </ul>

            <p className="text-2xl font-serif text-foreground/90 font-medium pb-12 border-b border-border">
              Theo thời gian, bạn không còn sống cuộc đời mình mong muốn. Bạn chỉ đang sống trong giới hạn mà nỗi sợ cho phép.
            </p>

            <div className="mt-16 bg-card border border-card-border p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-3xl font-serif text-foreground mb-8">Hãy hình dung cuộc đời bạn như một cái cây.</h3>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="mb-4 text-foreground/80">
                    Phần mọi người nhìn thấy: công việc, gia đình, sự cố gắng mỗi ngày - chỉ là phần thân và lá. Còn phần quyết định cái cây đó có đứng vững qua giông bão hay không, nằm sâu dưới đất, nơi không ai nhìn thấy: <strong>bộ rễ</strong>.
                  </p>
                  <p className="mb-4 text-foreground/80">
                    Có bộ rễ được xây từ nỗi sợ. Có bộ rễ được xây từ sự an toàn. Từ xa nhìn vào, hai cái cây trông giống hệt nhau.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-destructive/5 p-6 rounded-2xl border border-destructive/10">
                    <h4 className="font-serif text-destructive font-bold mb-2">Bạn có đang sống bằng rễ sợ hãi không?</h4>
                    <p className="text-sm">Bạn thấy phải kiểm soát mọi thứ. Bạn nói "tôi ổn" khi bên trong đang rối bời. Bạn làm rất nhiều, nghỉ ngơi thì thấy tội lỗi. Bạn từng đưa ra một quyết định lớn chỉ vì quá sợ, không phải vì thật sự muốn.</p>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
                    <h4 className="font-serif text-primary font-bold mb-2">Hay bạn đã có rễ an toàn?</h4>
                    <p className="text-sm">Bạn vẫn lo lắng, nhưng lo lắng không điều khiển quyết định của bạn. Bạn nói "không" mà không cần giải thích dài dòng. Bạn ra quyết định từ sự rõ ràng, không phải hoảng loạn.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-xl font-serif font-bold text-foreground mt-12 mb-0">
                Câu hỏi không phải "bạn có đang gặp khó khăn không" — mà là: "bộ rễ nào đang âm thầm ra quyết định thay bạn mỗi ngày, mà bạn không hề hay biết?"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: SELF-DIAGNOSIS */}
      <section className="py-24 bg-card relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif text-center mb-16 text-foreground">Đây Có Phải Điều Bạn Đang Trải Qua?</motion.h2>
            
            <motion.div variants={fadeUp} className="space-y-4 text-xl text-center font-serif text-foreground/80 italic mb-16">
              <p>Có thể bạn vừa mất tiền.</p>
              <p>Có thể bạn vừa mất việc.</p>
              <p>Có thể một cuộc hôn nhân vừa kết thúc.</p>
              <p>Có thể con bạn đã lớn và rời nhà.</p>
              <p>Có thể vai trò bạn từng tự hào nhất - giờ không còn nữa.</p>
            </motion.div>

            <motion.p variants={fadeUp} className="text-lg text-center mb-12 text-foreground/80 max-w-2xl mx-auto">
              Nhiều năm qua, bạn luôn là người mạnh mẽ nhất trong gia đình. Là chỗ dựa. Là người gánh vác và đứng ra giải quyết mọi chuyện. Nhưng bây giờ... đến chính bạn cũng không biết mình phải bám vào điều gì để bước tiếp.
            </motion.p>

            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border mb-16">
              <h3 className="font-bold text-xl mb-8 text-foreground">Mỗi ngày của bạn có đang diễn ra như thế này không?</h3>
              <ul className="space-y-6">
                {[
                  "Đêm giật mình tỉnh giấc, tim đập nhanh, đầu óc quay cuồng nghĩ về tiền bạc và tương lai",
                  "Cơ thể lúc nào cũng gồng cứng, vai gáy đau mỏi, hàm nghiến chặt không tự chủ",
                  "Chỉ một sự cố nhỏ cũng đủ kích hoạt cơn bùng nổ, hoặc khiến bạn rút lui vào im lặng",
                  "Một giọng nói ngầm lặp đi lặp lại: \"Mình không đủ giỏi\", \"Mình đang thất bại\", \"Mọi thứ sẽ không bao giờ khá hơn\""
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
                    <div className="min-w-6 mt-1 flex justify-center items-center h-6 w-6 rounded-full bg-destructive/10 text-destructive text-sm font-bold">✕</div>
                    <span className="text-foreground/80 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div variants={fadeUp} className="text-center">
              <p className="text-lg mb-8 font-medium">Và sâu bên dưới tất cả những điều đó - là những nỗi sợ bạn hiếm khi dám nói với ai:</p>
              <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
                <div className="p-6 border border-border rounded-xl bg-background/50">Sợ mình đã quá muộn để bắt đầu lại.</div>
                <div className="p-6 border border-border rounded-xl bg-background/50">Sợ người khác không còn nhìn mình bằng sự nể trọng như trước.</div>
                <div className="p-6 border border-border rounded-xl bg-background/50">Sợ nếu thừa nhận mình không ổn, mọi người sẽ nghĩ mình yếu đuối.</div>
                <div className="p-6 border border-border rounded-xl bg-background/50">Sợ chỉ cần ngừng cố gắng một chút, mọi thứ sẽ sụp đổ.</div>
                <div className="p-6 border border-border rounded-xl bg-background/50 md:col-span-2">Sợ những người mình thương — con cái, cha mẹ — sẽ phải gánh hậu quả mà đáng lẽ họ không nên gánh.</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-primary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Bạn đã thử: đọc sách self-help, thiền mỗi tối, tự nhủ nghĩ tích cực, ép mình mạnh mẽ hơn. Nhưng không ăn thua - không phải vì bạn kém cỏi, mà vì bạn đang cố sửa một bộ rễ nằm sâu dưới đất chỉ bằng cách tỉa cành lá ở trên.
              </p>
              <p className="font-bold text-xl text-primary mb-6">
                Kết quả là: Cố gắng → Kiệt sức → Tự trách → Rồi lại cố gắng.
              </p>
              <p className="text-foreground/80 italic">
                Cứ như vậy, ngày này qua ngày khác. Vì không ai từng nói với bạn sẽ có một giai đoạn như thế này, và cũng không ai dạy bạn cách đi qua nó.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* SECTION 4: SURVIVAL MODE */}
      <section className="py-24 bg-[#1a1510] text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif mb-8 text-primary">Vì sao điều này xảy ra?</motion.h2>
            <motion.p variants={fadeUp} className="text-2xl font-serif italic mb-12">Đây không phải lỗi của bạn.<br/>Bộ rễ sợ hãi không hình thành vì bạn yếu đuối.</motion.p>
            
            <div className="prose prose-invert prose-lg max-w-none text-white/80">
              <p>Nó hình thành vì cơ thể bạn đang làm đúng việc nó được lập trình để làm.</p>
              <p>Khi một biến cố xảy ra: mất mát, đổ vỡ, khủng hoảng, tổn thương, hệ thần kinh của bạn chỉ có một nhiệm vụ duy nhất: <strong>Giữ cho bạn sống sót.</strong></p>
              <p>Nó không quan tâm bạn có hạnh phúc hay không. Nó không quan tâm bạn có đang yêu đúng người hay không. Nó chỉ quan tâm: <strong>có nguy hiểm không?</strong></p>
              
              <div className="grid md:grid-cols-2 gap-6 my-12">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="text-primary font-bold text-xl mb-2">Chiến đấu</h4>
                  <p className="text-sm m-0">bạn trở nên gắt gỏng, dễ nổi nóng, luôn trong tư thế phòng thủ.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="text-primary font-bold text-xl mb-2">Bỏ chạy</h4>
                  <p className="text-sm m-0">bạn né tránh, trì hoãn, hoặc lao vào làm việc để không phải đối diện.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="text-primary font-bold text-xl mb-2">Đóng băng</h4>
                  <p className="text-sm m-0">bạn tê liệt, không biết bắt đầu từ đâu, cơ thể như bị khóa lại.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="text-primary font-bold text-xl mb-2">Làm hài lòng</h4>
                  <p className="text-sm m-0">bạn cố gắng chiều lòng mọi người xung quanh để cảm thấy an toàn hơn.</p>
                </div>
              </div>

              <p>Một khi hệ thần kinh học được rằng "thế giới này không an toàn", nó sẽ giữ nguyên trạng thái báo động đó — ngay cả khi biến cố đã qua từ rất lâu.</p>
              
              <div className="border-l-2 border-primary pl-6 my-12 space-y-4">
                <p className="m-0">Đó là lý do vì sao:</p>
                <p className="m-0">Bạn đã "vượt qua" biến cố về mặt lý trí — nhưng cơ thể vẫn phản ứng như thể chuyện đó vẫn đang xảy ra.</p>
                <p className="m-0">Bạn biết mình nên bình tĩnh — nhưng không thể ép cơ thể bình tĩnh lại chỉ bằng suy nghĩ.</p>
                <p className="m-0">Bạn từng cố "nghĩ tích cực", "buông bỏ", "tha thứ" — nhưng vài ngày sau lại quay về đúng vòng lặp cũ.</p>
              </div>
              
              <p className="text-2xl text-primary font-serif">Vì bạn đang cố giải quyết một vấn đề của cơ thể — chỉ bằng cách của trí óc.</p>
              <p className="italic opacity-80">Và nỗi sợ này không chỉ nằm ở một chỗ — nó âm thầm chi phối cả cách bạn nhìn tiền bạc, giá trị bản thân, cảm xúc, và cách bạn cho phép người khác đối xử với mình. Nó không hét lên. Nó thì thầm — cho đến khi bạn nhìn lại và tự hỏi: "Sao mình lại sống một cuộc đời không phải của mình như vậy?"</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: METHOD (Inner Safety Method) */}
      <section className="py-24 bg-background relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif text-foreground mb-6">Cách Tắt Chuông Báo Động</motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Tin tốt là: cái chuông đó không bị kẹt mãi mãi.<br/>
              Nó có thể tắt. Nhưng không phải bằng cách lờ nó đi, hay ép mình mạnh mẽ hơn — mà bằng cách đi đúng từng bước nhỏ, để cơ thể bạn tự nó tin rằng bây giờ đã an toàn rồi.
            </motion.p>
          </motion.div>

          <div className="bg-card rounded-[2rem] p-8 md:p-12 shadow-lg border border-border mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-serif text-primary font-bold mb-6">Inner Safety Experience™ không đến để sửa cây của bạn. Nó đến để xây lại bộ rễ.</h3>
            <p className="text-foreground/80 mb-12">
              Bạn không cần "mạnh mẽ hơn". Bạn không cần "cố gắng nhiều hơn". Bạn cần một điều duy nhất: một hệ thần kinh biết cách trở về trạng thái an toàn — để từ đó, mọi quyết định, mọi mối quan hệ, mọi hành động của bạn được dẫn dắt bởi sự bình an, chứ không phải nỗi sợ.
            </p>

            <div className="space-y-8 relative">
              <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-primary/20 hidden md:block" />
              
              {[
                { title: "Lớp 1 — Điều hòa hệ thần kinh & cơ thể vật lý (Body)", desc: "Đưa cơ thể ra khỏi trạng thái báo động, bằng kỹ thuật somatic và hơi thở thực hành trực tiếp trên thân thể — xả cortisol, dập chuông báo động đỏ." },
                { title: "Lớp 2 — Chữa lành cảm xúc (Heart)", desc: "Giải phóng những cảm xúc bị dồn nén, đóng băng — xấu hổ, tự trách, tổn thương chưa xử lý." },
                { title: "Lớp 3 — Tái lập trình tiềm thức (Mind)", desc: "Thay thế niềm tin cũ (\"tôi không đủ\", \"tôi không an toàn\") bằng niềm tin mới, neo sâu ở tầng tiềm thức chứ không chỉ ở lý trí." },
                { title: "Lớp 4 — Thực hành kết nối & tâm linh (Spirit)", desc: "Kết nối lại với phiên bản vững vàng hơn của chính mình, để chọn sống một cuộc đời mới — không phải phản ứng lại quá khứ." }
              ].map((layer, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex gap-6 relative md:pl-16">
                  <div className="hidden md:flex absolute left-0 top-1 h-12 w-12 rounded-full bg-background border-2 border-primary items-center justify-center text-primary font-serif font-bold text-xl z-10 shadow-[0_0_15px_rgba(200,168,75,0.3)]">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="md:hidden text-primary">🌱</span> {layer.title}
                    </h4>
                    <p className="text-foreground/70">{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-background/50 p-6 rounded-2xl border border-border">
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">
                <strong>Vì sao phải đi qua cả 4 lớp?</strong> Vì nếu chỉ chữa lành cảm xúc mà không điều hòa cơ thể — bạn hiểu vấn đề nhưng cơ thể vẫn phản ứng cũ. Nếu chỉ tái lập trình tiềm thức mà không xử lý cảm xúc — niềm tin mới sẽ không "dính" được lâu. Bộ rễ chỉ thật sự đổi khi cả cơ thể, cảm xúc, tiềm thức và tinh thần cùng đồng bộ.
              </p>
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed italic">
                Một lời nói thẳng, để bạn không bất ngờ: trong chương trình có cả nền tảng khoa học về hệ thần kinh, lẫn thực hành năng lượng và tâm linh (thôi miên trị liệu, làm việc với luân xa). Bạn không cần tin vào năng lượng để phần điều hòa hệ thần kinh có tác dụng — nhưng nếu bạn cởi mở với cả hai, hành trình sẽ trọn vẹn hơn.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h4 className="text-2xl font-serif text-foreground mb-8">Nhờ đi qua đủ 4 lớp, bạn sẽ:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-12">
              {[
                "Bình tĩnh lại chỉ sau vài phút khi cơn lo âu xuất hiện",
                "Ngủ ngon hơn mà không phải cố ép mình",
                "Bớt sợ chuyện tiền bạc dù hoàn cảnh chưa thay đổi ngay",
                "Biết nói \"không\" mà không còn cảm thấy có lỗi",
                "Tin vào giá trị bản thân mà không cần người khác công nhận"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-sm border border-border">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground/90 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <Button onClick={scrollToRegister} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium shadow-[0_0_20px_rgba(200,168,75,0.4)] transition-all hover:scale-105">
              [TÔI MUỐN XÂY LẠI GỐC RỄ CỦA MÌNH]
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6: DÀNH CHO AI */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-serif text-primary mb-8 font-bold">Chương trình này dành cho bạn nếu:</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg opacity-90">Bạn vừa trải qua một biến cố lớn (mất mát, đổ vỡ, khủng hoảng tài chính) và cảm thấy mất phương hướng</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg opacity-90">Bạn sẵn sàng dành 15-20 phút mỗi ngày, liên tục trong 7 ngày</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg opacity-90">Bạn muốn một hệ thống để thực hành, không chỉ để hiểu thêm</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-black/20 border border-white/5 p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-serif text-white/50 mb-8 font-bold">Có thể chưa phù hợp nếu:</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 opacity-70">
                  <div className="w-6 h-6 shrink-0 mt-1 flex justify-center items-center rounded-full border border-white/30 text-xs">✕</div>
                  <span className="text-lg">Bạn đang trong khủng hoảng tâm lý nghiêm trọng cần can thiệp y tế ngay — chương trình không thay thế điều trị chuyên sâu, hãy tiếp tục đồng hành cùng chuyên gia của bạn song song</span>
                </li>
                <li className="flex items-start gap-4 opacity-70">
                  <div className="w-6 h-6 shrink-0 mt-1 flex justify-center items-center rounded-full border border-white/30 text-xs">✕</div>
                  <span className="text-lg">Bạn tìm một giải pháp không cần thực hành gì, chỉ cần "biết thêm"</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: 7 NGÀY XÂY LẠI BỘ RỄ (Interactive Cards) */}
      <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Cosmic Background effect */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-[#0a0a0a] to-[#0a0a0a]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-6 text-glow">7 Ngày Xây Lại Bộ Rễ</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Inner Safety Method™ được thiết kế thành hành trình 7 ngày — mỗi ngày xây thêm một lớp của bộ rễ mới.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Top Row: 4 Cards */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <DayCard day={1} image={ngay1} title="🌿 Ngày 1 — Tôi An Toàn: Điều Hòa Hệ Thần Kinh" desc="Hiểu vì sao cơ thể phản ứng theo 4 kiểu Chiến đấu – Bỏ chạy – Đóng băng – Làm hài lòng. Bài thực hành thân thể xả cortisol, dập chuông báo động ngay lập tức. Thôi miên chữa lành, neo lại 'Điểm Trú Ẩn An Toàn'. Tích hợp: quy trình 3 phút đưa hệ thần kinh về bình an." />
              <DayCard day={2} image={ngay2} title="🌿 Ngày 2 — Tôi Không Còn Sợ: Chữa Lành Nỗi Sợ Về Tiền" desc="Giải mã kịch bản mất an toàn về tiền được truyền từ gia đình. Thôi miên Money Healing — viết 'hợp đồng mới' với tiền. Tích hợp: neo cảm giác 'tôi đủ đầy' vào quyết định chi tiêu thực tế." />
              <DayCard day={3} image={ngay3} title="🌿 Ngày 3 — Tôi Xứng Đáng: Giải Phóng Xấu Hổ, Khôi Phục Giá Trị" desc="Phân biệt cảm giác có lỗi và xấu hổ. Kỹ thuật hơi thở quét, xả cảm xúc đóng băng. Thôi miên chữa lành đứa trẻ bên trong. Tích hợp: lời tuyên ngôn tự từ bi." />
              <DayCard day={4} image={ngay4} title="🌿 Ngày 4 — Tôi Làm Chủ Cảm Xúc: Dừng Overthinking" desc="Bản đồ kích hoạt — điều gì đang rút cạn năng lượng của bạn. Kỹ thuật 'tách nhập' quan sát tâm trí. Thiền tháo chốt cảm xúc bùng nổ và sợ hãi. Tích hợp: nhật ký xử lý trigger 5 phút." />
            </div>
            
            {/* Bottom Row: 3 Cards */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <DayCard day={5} image={ngay5} title="🌿 Ngày 5 — Tôi Có Quyền Năng: Đánh Thức Ý Chí Nội Tại" desc="Nhận diện năng lượng sinh tồn và năng lượng kiến tạo. Hơi thở lửa đánh thức năng lượng sống. Thôi miên tái lập trình niềm tin: 'Tôi đủ giỏi — tôi đủ vững vàng'. Tích hợp: micro-action đầu tiên." />
              <DayCard day={6} image={ngay6} title="🌿 Ngày 6 — Tôi Thu Hồi Năng Lượng: Ranh Giới Lành Mạnh" desc="Energy Audit — bạn đang rò rỉ năng lượng cho ai. Cắt dây cáp năng lượng với người, sự kiện cũ. Thôi miên cài đặt ranh giới an toàn. Tích hợp: kịch bản nói 'KHÔNG' trong bình an." />
              <DayCard day={7} image={ngay7} title="🌿 Ngày 7 — Tôi Tái Sinh: Đồng Bộ Tim – Não, Ký Giao Ước Mới" desc="Bức tranh toàn cảnh — hành trình trở thành một Cycle Breaker. Somatic/breathwork đưa cơ thể và tâm trí vào hòa hợp. Thiền đồng bộ tim và não, chọn timeline mới. Tích hợp: lộ trình duy trì an toàn nội tâm 21 ngày." />
            </div>
          </div>

          <div className="text-center mt-20">
            <Button onClick={scrollToRegister} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-xl font-medium shadow-[0_0_30px_rgba(200,168,75,0.5)] transition-all hover:scale-105">
              [TÔI MUỐN ĐI TRÊN HÀNH TRÌNH 7 NGÀY NÀY]
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8: TRANSFORMATION */}
      <section className="py-24 bg-card relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Bạn sẽ khác đi như thế nào?</h2>
            <p className="text-xl text-foreground/70">Đừng để những biến cố tiếp tục quyết định thay bạn con người mà bạn sẽ trở thành.</p>
          </div>

          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 items-center mb-16">
            <div className="text-center text-xl font-serif font-bold text-destructive">TRƯỚC</div>
            <div className="w-12 h-12"></div>
            <div className="text-center text-xl font-serif font-bold text-primary">SAU</div>
          </div>

          <div className="space-y-6 mb-16">
            {[
              ["Luôn bất an, nhiều nỗi sợ bủa vây", "Cảm nhận được bình an nội tâm, ngay cả khi hoàn cảnh chưa rõ ràng"],
              ["Hoảng loạn, tim đập nhanh, mất ngủ khi nghĩ đến tiền", "Biết tự điều hòa hệ thần kinh trong vài phút"],
              ["Overthinking không dứt, tưởng tượng điều tệ nhất", "Đưa được sự chú ý về hiện tại"],
              ["Niềm tin \"Tôi không đủ\" điều khiển mọi quyết định", "Xây được nền tảng: \"Tôi là đủ\""],
              ["Tự trách bản thân sau mỗi biến cố", "Nhìn lại bằng lòng tự từ bi"],
              ["Cố gồng mình đến kiệt sức, không dám từ chối ai", "Biết đặt ranh giới, nói \"Không\" mà không có lỗi"]
            ].map(([before, after], i) => (
              <motion.div 
                key={i} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUp}
                className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-stretch"
              >
                <div className="bg-background border border-destructive/20 p-6 rounded-2xl flex items-center justify-center text-center opacity-80 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-destructive/50" />
                  <span className="text-foreground/80">{before}</span>
                </div>
                
                <div className="flex justify-center items-center rotate-90 md:rotate-0 text-muted-foreground">
                  <ChevronRight className="w-8 h-8 opacity-50" />
                </div>
                
                <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl flex items-center justify-center text-center shadow-[0_0_15px_rgba(200,168,75,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <span className="text-foreground font-medium">{after}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-serif text-foreground/90 italic mb-10 max-w-3xl mx-auto">
              "Đây không phải lời hứa về cuộc sống hoàn hảo. Đây là lời hứa về một bộ rễ vững vàng hơn — để từ đó, bạn có thể xây bất cứ điều gì bạn muốn."
            </p>
            <Button onClick={scrollToRegister} className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105">
              [TÔI MUỐN BẮT ĐẦU CHUYỂN HÓA]
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9: STORY NGA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-card border border-border p-8 md:p-16 rounded-[2.5rem] shadow-xl relative">
            <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
              Cycle Breaker
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">Vì Sao Nên Tin Nga?</h2>
            
            <div className="prose prose-lg prose-stone max-w-none text-foreground/80 leading-relaxed space-y-6">
              <p>Chào bạn, mình là Nga Alchemist — người đồng hành giúp những ai đang đi qua biến cố tìm lại cảm giác an toàn bên trong.</p>
              
              <p>Mình không bắt đầu hành trình này từ sách vở hàn lâm. Mình bắt đầu từ chính những vỡ vụn của đời mình: sự sụp đổ của một cuộc hôn nhân năm 2022, và giai đoạn kiệt quệ tài chính sau đó.</p>
              
              <p>Có giai đoạn mình giấu bạn bè việc ly hôn suốt gần một năm — vì xấu hổ hơn là vì buồn. Mình từng là người luôn có câu trả lời cho mọi chuyện, giờ lại không trả lời nổi câu hỏi của chính mình.</p>
              
              <p>Mình đã thử đủ mọi cách: đọc sách, thiền định, trị liệu thôi miên. Mỗi cách giúp mình tốt hơn một chút, nhưng chỉ cần một kích hoạt nhỏ, nỗi sợ cũ lại tràn về. Ngay cả khi đã là người thực hành thôi miên trị liệu, mình vẫn bị cuốn vào phản ứng cũ mỗi khi cuộc sống chạm đúng vết thương.</p>
              
              <p className="text-xl font-serif text-primary font-medium py-6 border-y border-border my-8">
                Đó là lúc mình hiểu: "Đây không phải là một biến cố ngẫu nhiên. Đây là một vòng lặp." Hiểu vấn đề thôi chưa đủ — phải có một hệ thống đi từ gốc, làm việc với đủ mọi tầng: cơ thể, hệ thần kinh, cảm xúc, tâm trí, niềm tin.
              </p>
              
              <p>Từ quá trình nghiên cứu, thực hành và đồng hành cùng hơn 500 khách hàng — phần lớn ở độ tuổi 35-50, đi qua ly hôn, mất việc, khủng hoảng tài chính — mình hệ thống hóa thành <strong>Inner Safety Method™</strong>.</p>
              
              <p>Phương pháp này dựa trên 3 nguyên tắc: điều hòa hệ thần kinh trước khi thay đổi niềm tin, chuyển hóa nhiều lớp cùng lúc, và xây lại cảm giác an toàn từ bên trong — để giá trị của bạn không phụ thuộc vào tiền bạc hay sự công nhận của người khác.</p>
              
              <p className="font-bold text-foreground">Mình không ở đây để dạy bạn né tránh biến cố. Mình ở đây để đồng hành giúp bạn đủ vững vàng đi qua sóng gió mà không đánh mất chính mình.</p>
            </div>
            
            <div className="mt-12 text-center">
              <Button onClick={scrollToRegister} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium shadow-[0_0_20px_rgba(200,168,75,0.3)] transition-all hover:scale-105">
                [TÔI CHỌN TÌM LẠI SỰ AN TOÀN BÊN TRONG]
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: REVIEWS */}
      <section className="py-24 bg-card overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 text-foreground">Bạn Không Phải Người Duy Nhất</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ReviewCard text="Tôi tưởng mình cần thêm kỷ luật. Hóa ra tôi cần một hệ thần kinh biết cách nghỉ ngơi." />
            <ReviewCard text="Bài tập ngày đầu tiên đã thay đổi cách tôi phản ứng với stress ngay lập tức. Tôi không nghĩ chỉ vài phút lại có thể tạo khác biệt như vậy." />
            <ReviewCard text="Phần chữa lành nỗi sợ về tiền đúng là điều tôi chưa từng thấy ai nói tới. Tôi nhận ra mình đã mang nỗi sợ đó từ gia đình suốt bao năm mà không hề biết." />
            <ReviewCard text="Không giống các khóa 'tư duy tích cực' tôi từng học. Cái này đi thẳng vào cơ thể, vào cảm xúc — chỗ mà mọi vấn đề thực sự nằm ở đó." />
          </div>
        </div>
      </section>

      {/* SECTION 11: OFFER */}
      <section className="py-24 bg-[#1a1510] text-white border-y border-primary/20 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Trọn Bộ Quyền Lợi</h2>
            <p className="text-xl text-white/80">Đây là toàn bộ những gì bạn nhận được trong Inner Safety Experience™</p>
          </div>

          <div className="bg-white/5 border border-primary/30 rounded-3xl p-8 md:p-12 mb-12 shadow-[0_0_50px_rgba(200,168,75,0.1)]">
            <h3 className="text-2xl font-serif text-primary font-bold mb-4 flex items-center gap-3">
              <span className="text-3xl">🌳</span> SẢN PHẨM CHÍNH: Inner Safety Experience™
            </h3>
            <p className="text-lg text-white/90 mb-6 font-medium">7 Chương, 28 Bài Học</p>
            <p className="text-white/70 leading-relaxed border-b border-white/10 pb-8">
              Trọn bộ lộ trình 7 ngày, đi qua 4 lớp: điều hòa hệ thần kinh, chữa lành cảm xúc, tái lập trình tiềm thức, thực hành kết nối — bao gồm video lý thuyết, bài thực hành thân thể, audio hướng dẫn chữa lành, và tài liệu tích hợp thực hành mỗi ngày.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-serif text-primary mb-6 flex items-center gap-2">
                <span className="text-2xl">🎁</span> Kèm theo 5 bonus thực chiến:
              </h4>
              <ul className="space-y-6">
                {[
                  { title: "01 — Emergency Reset 5 Phút", desc: "Lấy lại bình tĩnh trong 5 phút khi hoảng loạn ập đến giữa đêm hoặc giữa cuộc họp." },
                  { title: "02 — Money Healing Workbook", desc: "Nhận diện niềm tin gia đình về tiền đang điều khiển nỗi sợ thiếu thốn, viết lại 'hợp đồng mới' với tiền." },
                  { title: "03 — Worthy Affirmation Sleep Hypnosis™", desc: "Thôi miên thư giãn sâu trước khi ngủ, cài đặt lại giá trị bản thân." },
                  { title: "04 — Trigger Tracker", desc: "Nhận diện chính xác điều gì đang kích hoạt cảm xúc bùng nổ hoặc overthinking." },
                  { title: "05 — Boundary Workbook", desc: "Học nói 'không' mà không thấy tội lỗi." }
                ].map((bonus, i) => (
                  <li key={i} className="flex gap-4 items-start bg-black/20 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <strong className="text-white block mb-1">{bonus.title}</strong>
                      <span className="text-white/60 text-sm">{bonus.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12 bg-primary/10 border border-primary/30 p-8 rounded-2xl text-center">
              <div className="text-white/60 line-through text-2xl mb-2">Tổng giá trị: 4.444.444đ</div>
              <div className="text-primary font-bold text-4xl md:text-5xl font-serif mb-8 text-glow">Giá hôm nay: 1.111.111đ</div>
              <Button onClick={scrollToRegister} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-7 text-xl font-bold shadow-[0_0_30px_rgba(200,168,75,0.4)] transition-all hover:scale-105">
                [NHẬN TRỌN BỘ NGAY HÔM NAY]
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: WHY 7 DAYS */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">Vì Sao Chỉ Cần 7 Ngày?</h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-left">
            <p>Câu hỏi đúng đó. Và mình trả lời thật lòng luôn:</p>
            <p className="font-bold text-foreground">Bạn sẽ không hết đau hết buồn hoàn toàn chỉ sau 7 ngày. Không ai làm được vậy, ai nói vậy là đang nói dối bạn.</p>
            <p>Nhưng 7 ngày đủ để làm một việc quan trọng hơn nhiều: <strong>dựng lại cái nền</strong>.</p>
            <p>Giống như xây nhà — bạn không cần xây xong cả căn nhà trong 7 ngày. Nhưng nếu cái nền chắc, bạn có thể tự xây tiếp phần còn lại, mà không sợ nhà sập nữa.</p>
          </div>
          
          <div className="mt-12 bg-card border border-border p-8 rounded-2xl text-left">
            <h4 className="font-bold mb-6 text-xl">7 ngày này giúp bạn có:</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> <span>Một cơ thể biết tự làm dịu mình khi hoảng</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> <span>Vài công cụ nhỏ, mang theo dùng cả đời</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> <span>Một cái nền vững để từ đó tự đi tiếp</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 13: GUARANTEE */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">Cam Kết Hoàn Tiền</h2>
          <h3 className="text-2xl font-serif italic mb-10 text-white/90">Rủi ro thuộc về mình, không phải bạn</h3>
          
          <div className="space-y-6 text-lg text-white/80 leading-relaxed text-left max-w-3xl mx-auto bg-black/20 p-8 md:p-12 rounded-3xl border border-white/10">
            <p>Mình hiểu - khi đang ở giai đoạn khó khăn về tài chính, việc bỏ ra một khoản tiền cho bản thân cũng có thể khiến bạn do dự. Vì vậy mình đưa ra cam kết này:</p>
            <p className="font-bold text-white">Nếu sau khi hoàn thành đầy đủ 7 ngày, thực hành nghiêm túc theo đúng hướng dẫn mà bạn vẫn cảm thấy chương trình không mang lại giá trị cho mình - chỉ cần liên hệ trong vòng 7 ngày kể từ ngày đăng ký, bạn sẽ được hoàn lại 100% học phí mà không cần giải thích.</p>
            <p>Nếu rủi ro phải thuộc về ai, mình muốn nó thuộc về mình, không phải bạn.</p>
            <p className="text-sm opacity-70 italic mt-8 border-t border-white/10 pt-8">
              Nội dung chương trình được xây dựng dựa trên kinh nghiệm thực hành thôi miên trị liệu thật, không phải lời khuyên cảm tính hay chắp vá từ nhiều nguồn khác nhau.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-foreground mb-16">Câu Hỏi Thường Gặp</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Tôi chưa từng thiền hay thôi miên trị liệu — có học được không?", a: "Hoàn toàn được. Mỗi bài đều có hướng dẫn từng bước cụ thể." },
              { q: "Chương trình có phù hợp với tôi không?", a: "Nếu bạn đang trải qua mất mát, biến cố hoặc cảm giác mất phương hướng ở tuổi trung niên và muốn tìm lại sự vững vàng bên trong — đây chính là dành cho bạn." },
              { q: "Tôi đang trị liệu tâm lý — có nên tham gia không?", a: "Được, chương trình bổ trợ tốt nhưng không thay thế điều trị chuyên sâu — hãy tiếp tục đồng hành cùng chuyên gia của bạn song song." },
              { q: "Tôi không có nhiều thời gian, liệu có theo kịp không?", a: "Mỗi ngày trong lộ trình chỉ cần khoảng 30-45 phút, chia thành các bước ngắn 10-20 phút. Bạn có thể học vào bất kỳ thời điểm nào phù hợp, và có quyền truy cập trọn đời nên không có áp lực phải học đúng lịch." },
              { q: "Tôi từng thử nhiều khóa self-help rồi mà không hiệu quả, sao lần này khác?", a: "Hầu hết các phương pháp trước đây tác động vào tầng suy nghĩ — bạn \"biết\" mình nên làm gì nhưng cơ thể vẫn phản ứng cũ. Inner Safety Experience™ đi thẳng vào hệ thần kinh và cơ thể trước, sau đó mới đến tiềm thức và tư duy." },
              { q: "Tôi không giỏi thực hành các bài tập tâm linh/thân thể, liệu khóa học có phù hợp?", a: "Không cần kinh nghiệm gì trước đó. Mọi bài thực hành đều có hướng dẫn từng bước cụ thể — bạn chỉ cần làm theo." },
              { q: "Tôi lớn tuổi có học được không?", a: "Hoàn toàn được. Rất nhiều học viên của mình ở độ tuổi 40–60, chưa từng thiền hay học chữa lành trước đó. Chương trình được hướng dẫn từng bước, đơn giản và dễ thực hành cho cả người mới bắt đầu." },
              { q: "Tôi có xem lại được sau khi khóa học kết thúc không?", a: "Có. Bạn được truy cập trọn đời, học lại bất cứ lúc nào bạn cần." },
              { q: "Nếu tôi gặp khó khăn trong lúc học, có ai hỗ trợ không?", a: "Có — bạn được tham gia cộng đồng riêng của học viên và nhận hỗ trợ khi cần." },
              { q: "Nếu học xong mà không thấy hiệu quả thì sao?", a: "Có cam kết hoàn tiền 100% trong 7 ngày. Nếu bạn hoàn thành lộ trình mà cảm thấy không phù hợp, chỉ cần liên hệ để được hoàn lại toàn bộ." },
              { q: "Thông tin của tôi có được bảo mật không?", a: "Có. Toàn bộ thông tin đăng ký được bảo mật và chỉ dùng để liên hệ hỗ trợ bạn trong quá trình học." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 15: FINAL CTA & REGISTRATION FORM */}
      <section id="register-form" className="py-24 bg-card relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">Đừng Để Thêm Một Đêm Nữa Trôi Qua Trong Lo Âu</h2>
            <p className="text-xl text-foreground/80 mb-6">
              Trong khi nhiều người cùng hoàn cảnh vẫn đang loay hoay một mình mỗi đêm, bạn có thể là người bắt đầu tìm lại cảm giác an toàn bên trong - chỉ với 7 ngày và một hệ thống đã được xây dựng bài bản.
            </p>
            <p className="text-xl text-foreground/80 mb-6">
              Bạn đã đọc đến tận đây. Điều đó có nghĩa một phần trong bạn đã sẵn sàng cho một điều gì đó khác đi rồi.
            </p>
            <p className="text-xl text-foreground font-bold">
              7 ngày tới, bạn có thể tiếp tục vòng lặp cũ: cố gắng, kiệt sức, tự trách, rồi lại cố gắng. Hoặc bạn có thể là người bắt đầu trước, ngay hôm nay.
            </p>
          </div>

          <div className="bg-background border border-border shadow-2xl rounded-3xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
            
            {/* Form Left Side: Summary & Timer */}
            <div className="bg-[#1a1510] text-white p-8 md:p-12 md:w-[45%] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif text-primary mb-6">Tóm Tắt Quyền Lợi</h3>
                <ul className="space-y-4 mb-8 text-white/80 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 7 Chương, 28 Bài Học Inner Safety</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Emergency Reset 5 Phút</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Money Healing Workbook</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Worthy Affirmation Sleep Hypnosis™</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Trigger Tracker</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Boundary Workbook</li>
                </ul>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-white/50 line-through text-lg mb-1">4.444.444đ</div>
                  <div className="text-primary font-bold text-3xl font-serif mb-4">1.111.111đ</div>
                  <CountdownTimer />
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/50 justify-center">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Thanh toán bảo mật</span>
                <span className="flex items-center gap-1"><PlayCircle className="w-3 h-3" /> Truy cập ngay</span>
                <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Hoàn tiền 7 ngày</span>
              </div>
            </div>

            {/* Form Right Side: Inputs or QR */}
            <div className="p-8 md:p-12 md:w-[55%]">
              <RegistrationFlow />
            </div>
            
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center text-foreground/50 text-sm">
          <p className="font-serif text-lg text-foreground/80 mb-6">INNER SAFETY EXPERIENCE™ · Nga Alchemist · Cycle Breaker · Bản quyền © 2026</p>
          <p className="max-w-3xl mx-auto leading-relaxed mb-6">
            Miễn trừ trách nhiệm: Kết quả chia sẻ trong trang này không đại diện cho kết quả điển hình, khác nhau tùy hoàn cảnh cá nhân và mức độ cam kết. Chương trình mang tính giáo dục, không thay thế điều trị tâm lý/y tế chuyên sâu. Nếu bạn đang gặp khủng hoảng tâm lý nghiêm trọng, vui lòng tìm đến chuyên gia phù hợp. Trang này không thuộc và không được xác nhận bởi Facebook™ hay Meta Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}

// -------------------------------------------------------------
// SUB-COMPONENTS
// -------------------------------------------------------------

function Navbar({ onRegisterClick }: { onRegisterClick: () => void }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-4' : 'bg-background/70 backdrop-blur-sm py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-serif font-bold text-xl flex items-center gap-2 text-foreground">
          <img src={ngaLogo} alt="Nga Alchemist" className="h-8 w-auto object-contain" />
          Nga Alchemist
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <div className="flex gap-6 text-foreground/80">
            <a href="#" className="hover:text-primary transition-colors">Về chương trình</a>
            <a href="#" className="hover:text-primary transition-colors">Câu chuyện</a>
            <a href="#" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#" className="hover:text-primary transition-colors">Review</a>
          </div>
          <Button onClick={onRegisterClick} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 transition-transform hover:scale-105">
            ĐĂNG KÝ NGAY
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button onClick={onRegisterClick} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            ĐĂNG KÝ
          </Button>
        </div>
      </div>
    </nav>
  );
}

function DayCard({ day, image, title, desc }: { day: number, image: string, title: string, desc: string }) {
  return (
    <div className="group relative w-full sm:w-[300px] md:w-[280px] lg:w-[260px] aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 group-hover:opacity-0" />
      <div className="absolute inset-0 z-0">
        <img src={image} alt={`Day ${day}`} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
      </div>
      
      {/* Mystical Border */}
      <div className="absolute inset-2 border border-primary/30 rounded-xl z-20 pointer-events-none transition-all duration-500 group-hover:border-primary/80 group-hover:inset-3" />
      
      {/* Content that shows initially and hides on hover */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 group-hover:opacity-0">
        <span className="text-primary font-serif italic text-lg mb-2">Ngày {day}</span>
        <h4 className="text-white font-bold font-serif text-xl">{title.split('—')[1]?.trim() || title}</h4>
      </div>
      
      {/* Detailed content that shows on hover (at the bottom) */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-30 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <p className="text-xs text-white/90 leading-tight mb-2 font-medium">{title}</p>
        <p className="text-[10px] text-white/70 leading-snug line-clamp-4">{desc}</p>
      </div>
    </div>
  );
}

function ReviewCard({ text }: { text: string }) {
  return (
    <div className="bg-background border border-border p-8 rounded-2xl shadow-sm">
      <div className="flex text-primary mb-4">
        {[1,2,3,4,5].map(i => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        ))}
      </div>
      <p className="font-serif text-lg italic text-foreground/80 mb-6 leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-serif font-bold">
          HV
        </div>
        <div>
          <div className="font-bold text-sm text-foreground">Học viên giấu tên</div>
          <div className="text-xs text-foreground/50">Khóa Inner Safety Experience™</div>
        </div>
      </div>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 24 * 60 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <div className="text-xs text-white/60 mb-2">Ưu đãi kết thúc sau:</div>
      <div className="flex justify-center gap-2 text-primary font-mono text-xl">
        <div className="bg-black/50 px-3 py-2 rounded-lg border border-white/10">{hours.toString().padStart(2, '0')}</div>
        <div className="py-2">:</div>
        <div className="bg-black/50 px-3 py-2 rounded-lg border border-white/10">{minutes.toString().padStart(2, '0')}</div>
        <div className="py-2">:</div>
        <div className="bg-black/50 px-3 py-2 rounded-lg border border-white/10">{seconds.toString().padStart(2, '0')}</div>
      </div>
    </div>
  );
}

function RegistrationFlow() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setStep(2);
    }
  };

  if (step === 1) {
    return (
      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full justify-center">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Thông Tin Đăng Ký</h3>
        <p className="text-foreground/60 text-sm mb-6">Vui lòng điền thông tin chính xác để nhận quyền truy cập khóa học.</p>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Họ và tên</Label>
            <Input id="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="h-12 bg-card" placeholder="Nguyễn Văn A" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="h-12 bg-card" placeholder="email@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input id="phone" type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="h-12 bg-card" placeholder="0901234567" />
          </div>
        </div>
        
        <Button type="submit" className="w-full h-14 mt-4 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-xl transition-all hover:scale-[1.02]">
          TIẾP TỤC THANH TOÁN
        </Button>
      </form>
    );
  }

  // Step 2: QR Code
  const phoneLast4 = formData.phone.slice(-4) || '0000';
  const qrUrl = `https://img.vietqr.io/image/MB-0399906888-qr_only.png?amount=1111111&addInfo=ISE-${phoneLast4}-${encodeURIComponent(formData.name)}&accountName=NGA ALCHEMIST`;

  return (
    <div className="flex flex-col items-center justify-center text-center h-full animate-in fade-in zoom-in duration-300">
      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Hoàn Tất Thanh Toán</h3>
      <p className="text-foreground/70 text-sm mb-6">Quét mã QR này để thanh toán <strong>1.111.111đ</strong> qua ngân hàng. Sau khi thanh toán, bạn sẽ nhận email xác nhận trong vòng 24 giờ.</p>
      
      <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 mb-6">
        <img src={qrUrl} alt="QR Code Payment" className="w-48 h-48 mx-auto" />
      </div>
      
      <div className="bg-card w-full p-4 rounded-xl border border-border text-left text-sm mb-8 space-y-2">
        <div className="flex justify-between border-b border-border pb-2">
          <span className="text-foreground/60">Ngân hàng:</span>
          <span className="font-bold text-foreground">MB Bank</span>
        </div>
        <div className="flex justify-between border-b border-border pb-2">
          <span className="text-foreground/60">Số tài khoản:</span>
          <span className="font-bold text-primary">0399906888</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/60">Chủ tài khoản:</span>
          <span className="font-bold text-foreground uppercase">NGA ALCHEMIST</span>
        </div>
      </div>
      
      <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-xl mb-4 shadow-[0_0_20px_rgba(200,168,75,0.3)] transition-all hover:scale-[1.02]">
        ĐĂNG KÝ NGAY — GIỮ ƯU ĐÃI CHO TÔI
      </Button>
      
      <a href="#" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors mt-4 justify-center">
        <MessageCircle className="w-4 h-4" /> hoặc [NHẮN TIN CHO NGA QUA FACEBOOK]
      </a>
    </div>
  );
}
