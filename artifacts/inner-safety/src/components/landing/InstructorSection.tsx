import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar } from 'lucide-react';
import ngaPortrait from '@assets/nga-portrait.png';
import ngaSpeakingImage from '@assets/nga-rmit-cleaned.jpg';

const credentials = [
  'Certified Hypnotherapist (CTAA Accredited)',
  '4+ Năm Thực Hành',
  '500+ Khách Hàng Đồng Hành'
];

const stats = [
  { icon: Users, value: '500+', label: 'Khách hàng & học viên đã đồng hành' },
  { icon: Calendar, value: '4+', label: 'Năm thực hành thôi miên trị liệu' }
];

export function InstructorSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="instructor" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold">
            Người Đồng Hành Cùng Bạn
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* PROFILE / CREDENTIALS HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="w-56 sm:w-72 md:w-80 aspect-[3/4] mx-auto mb-6 sm:mb-7 relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
              <img
                src={ngaPortrait}
                alt="Nga Alchemist - Founder Inner Safety Method"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
              NGA ALCHEMIST
            </h3>
            <p className="font-['Be_Vietnam_Pro'] font-medium text-sm sm:text-base md:text-lg text-primary mb-5 sm:mb-6">
              Founder of Inner Safety Method™ | Certified Hypnotherapist (CTAA Accredited)
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-7 sm:mb-9">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="font-['Be_Vietnam_Pro'] font-light px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs sm:text-sm text-foreground/80"
                >
                  {cred}
                </div>
              ))}
            </div>

            <p className="font-serif italic font-medium text-lg sm:text-xl md:text-2xl text-foreground max-w-xl mx-auto leading-snug">
              "Chuyển Hóa Từ Gốc Rễ — Để nỗi sợ không còn là thứ quyết định bạn sống cuộc đời như thế nào."
            </p>
          </motion.div>

          <div className="border-t border-border/30 mb-10 sm:mb-14" />

          {/* MAIN STORY / BODY TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-['Be_Vietnam_Pro'] font-light space-y-5 text-sm sm:text-base text-foreground/80 leading-relaxed mb-10 sm:mb-14"
          >
            {/* Khối 1: Thấu cảm đầu tiên */}
            <p className="font-serif font-semibold text-base sm:text-lg text-foreground">
              Tôi hiểu cảm giác bất lực ấy - vì tôi đã từng ở chính nơi đó.
            </p>
            <p>
              Bạn vẫn đi làm, chăm sóc gia đình và hoàn thành tốt mọi trách nhiệm mỗi ngày. Nhưng sâu bên trong, bạn luôn ở trong một trạng thái cảnh giác khó gọi tên: sợ mình không đủ tốt, sợ sai, sợ bị đánh giá, muốn bứt phá nhưng cứ mỗi lần định bước đi, một phần nào đó trong bạn lại kéo bạn lùi lại.
            </p>
            <p>
              Đặc biệt là, sự mắc kẹt này không phải vì bạn thiếu kiến thức hay thiếu quyết tâm. 
              Bạn đã đọc rất nhiều sách, học nhiều phương pháp, đã thiền, đã chữa lành, đã tha thứ... Bạn biết rất rõ mình cần làm gì và khao khát bước tiếp, nhưng cơ thể và cảm xúc của bạn dường như vẫn không thể nhúc nhích.
              Tôi rất hiểu sự bất lực âm thầm đó. Vì tôi không chỉ chứng kiến nó qua hơn 4 năm làm thôi miên trị liệu, mà bởi chính tôi đã từng vật lộn rất nhiều năm trong vòng lặp ấy.
            </p>

            {/* Khối 2: Khi thế giới an toàn sụp đổ */}
            <div className="pt-4">
              <h4 className="font-serif font-bold text-lg sm:text-xl text-gradient-gold mb-3">
                Khi thế giới an toàn của tôi sụp đổ
              </h4>
              <p className="mb-3">
                Năm 2009, bố mẹ tôi ly hôn. Thế giới an toàn mà tôi từng biết hoàn toàn sụp đổ. Những tổn thương gia đình, cùng những đổ vỡ tình cảm sau đó, dần bào mòn sự tự tin và gieo vào tôi những niềm tin rất sâu:
              </p>
              <div className="py-2 px-4 rounded-xl bg-primary/5 border border-primary/20 text-center space-y-1 my-3">
                <p className="italic text-foreground/90 font-medium">“Mình không đủ tốt.”</p>
                <p className="italic text-foreground/90 font-medium">“Mình không đủ giá trị.”</p>
                <p className="italic text-foreground/90 font-medium">“Sẽ chẳng ai thực sự cần mình.”</p>
              </div>
              <p>
                Tôi đã làm điều mà rất nhiều người trong chúng ta vẫn làm: cố gắng nhiều hơn để chứng minh rằng mình có giá trị. Tôi lao vào công việc, gây dựng được một chuỗi Airbnb khá thành công và từng nghĩ rằng mình đã tạo được một nền tảng đủ vững chắc cho cuộc đời.
              </p>
              <p className="mt-3">
                Cho đến khi Covid-19 xảy ra. Công việc sụp đổ, tôi phá sản, nợ nần và hôn nhân đổ vỡ. Gần như tất cả những điểm tựa bên ngoài mà tôi từng dựa vào đều biến mất cùng lúc. Và lần đầu tiên, tôi không còn cách nào khác ngoài việc quay vào bên trong.
              </p>
            </div>

            {/* Khối 3: Đã chữa lành nhưng vẫn không thể bước đi */}
            <div className="pt-4">
              <h4 className="font-serif font-bold text-lg sm:text-xl text-gradient-gold mb-3">
                Tôi đã chữa lành rất nhiều - nhưng vẫn không thể bước đi
              </h4>
              <p>
                Tôi dành nhiều năm học hỏi, thiền định, khám phá thế giới bên trong và bén duyên với thôi miên trị liệu. Tôi bắt đầu đồng hành cùng những người khác trên hành trình chữa lành và nghĩ mình đã vượt qua. Cho đến khi cuộc đời tiếp tục đưa tôi đến những thử thách lớn hơn.
              </p>
              
              <div className="my-4 p-4 rounded-xl bg-card/60 border border-border/40 space-y-2">
                <p>Tôi biết mình cần tiến lên. Lý trí nói: <strong className="text-foreground font-medium">“Đi đi.”</strong> Tôi biết mình có khả năng, biết mình có điều muốn tạo ra và muốn trao đi.</p>
                <p>Nhưng cơ thể tôi lại nói: <strong className="text-foreground font-medium">“Không.”</strong></p>
              </div>

              <p>
                Tôi trì hoãn. Tôi né tránh. Tôi overthink. Tôi sợ bị nhìn thấy. Và có những giai đoạn tôi gần như đóng băng hoàn toàn. Tôi từng đứng yên hàng tháng trời, rồi hàng năm trời, dù bên trong biết rất rõ mình muốn đi đâu. Đó là một trong những trải nghiệm bất lực nhất tôi từng có.
              </p>
              <p className="italic text-foreground/90 font-medium mt-3 text-center sm:text-left">
                “Tại sao mình đã đồng hành cùng rất nhiều người, mà chính mình vẫn không thể bước qua nỗi sợ của mình?”
              </p>
            </div>

            {/* Khối 4: Điểm xoay chuyển (Visual Anchors & In đậm trọng tâm) */}
            <div className="pt-4 space-y-4">
              <p className="text-base sm:text-lg text-primary font-medium">
                Và rồi tôi nhận ra: vấn đề không phải là do tôi chưa đủ mạnh mẽ. 
                Đó là khoảnh khắc thay đổi hoàn toàn cách tôi nhìn về chữa lành.
              </p>
              
              <div className="space-y-3 pl-4 border-l-2 border-primary/40 my-4">
                <p>
                  <strong className="text-foreground font-semibold">Không phải mọi sự trì hoãn đều là lười biếng. Không phải mọi sự bất động đều là thiếu ý chí.</strong>
                </p>
                <p>
                  Có những lúc tôi biết chính xác mình cần làm gì, nhưng cơ thể vẫn phản ứng như thể tôi đang gặp nguy hiểm. <strong className="text-foreground font-semibold">Tôi càng ép mình phải mạnh mẽ, tôi càng kiệt sức.</strong> Càng cố dùng lý trí để “sửa” mình, tôi càng cảm thấy có gì đó bên trong đang gào thét chống lại chính mình.
                </p>
              </div>

              <p className="text-foreground font-medium pt-2">
                Tôi nhận ra mình không cần phải tiếp tục chiến đấu với chính mình nữa. Điều tôi thực sự cần là xây dựng lại cảm giác rằng:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20 text-center font-medium text-foreground/90">
                  “Tôi an toàn khi là chính mình.”
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20 text-center font-medium text-foreground/90">
                  “Tôi an toàn khi được nhìn thấy.”
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20 text-center font-medium text-foreground/90">
                  “Tôi an toàn khi hành động.”
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20 text-center font-medium text-foreground/90">
                  “Tôi an toàn khi bước ra khỏi điều quen thuộc.”
                </div>
              </div>

              <p>
                Đó chính là nền tảng của <strong className="text-foreground font-semibold">Inner Safety Method™</strong> — phương pháp tôi phát triển từ hành trình cá nhân, thực hành thôi miên trị liệu và quá trình đồng hành cùng khách hàng.
              </p>
              <p>
                Thay vì chỉ cố thay đổi suy nghĩ, chúng ta bắt đầu từ những nơi sâu hơn: <span className="text-primary font-medium">Cơ thể → Cảm xúc → Niềm tin → Cách bạn nhìn nhận chính mình.</span> Khi bên trong không còn phải liên tục chống đỡ, việc hành động không còn là một cuộc chiến.
              </p>
            </div>

            {/* Khối 5: Nguồn gốc của Beyond Fear */}
            <div className="pt-4 space-y-3">
              <p>
                Tôi không tạo ra <strong className="text-foreground font-semibold">Beyond Fear™</strong> từ lý thuyết. Tôi tạo ra Beyond Fear™ từ chính hành trình của mình: từ một người từng trải qua đổ vỡ, phá sản, mất phương hướng, cho đến một người đã dành nhiều năm chữa lành nhưng vẫn có lúc đóng băng trước chính những điều mình khao khát; cùng hơn 4 năm thực hành thôi miên trị liệu với 500+ khách hàng.
              </p>
              <p>
                Tôi không ở đây để nói với bạn: <em className="text-foreground/70">“Hãy cố gắng lên”</em>, <em className="text-foreground/70">“Hãy suy nghĩ tích cực hơn”</em> hay <em className="text-foreground/70">“Bạn chỉ cần vượt qua nỗi sợ”</em>. Tôi tạo ra Beyond Fear™ để giúp bạn bắt đầu xây dựng lại cảm giác an toàn từ bên trong — <strong className="text-foreground font-semibold">để nỗi sợ không còn là thứ quyết định bạn sẽ sống cuộc đời như thế nào.</strong>
              </p>
            </div>
          </motion.div>

          {/* CLOSING CALL TO ACTION / EMOTIONAL FINALE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-primary/10 via-primary/5 to-transparent border border-primary/20"
          >
            <p className="font-['Be_Vietnam_Pro'] text-base sm:text-lg text-foreground/90 leading-relaxed mb-4">
              Nếu bạn đã quá mệt mỏi vì đầu óc hiểu rất rõ mình cần làm gì, nhưng một phần bên trong vẫn không thể bước đi, có lẽ đã đến lúc ngừng ép mình phải mạnh mẽ hơn.
            </p>
            <p className="font-serif italic font-bold text-xl sm:text-2xl md:text-3xl text-gradient-gold leading-tight">
              Đã đến lúc trở về nền.
              <br />
              Và từ một nơi đủ an toàn bên trong, bạn có thể bắt đầu bước đi một lần nữa.
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl mx-auto mb-10 sm:mb-14"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 text-center"
                data-testid={`stat-${idx}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <p className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-gradient-gold mb-2">
                  {stat.value}
                </p>
                <p className="font-['Be_Vietnam_Pro'] font-light text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* SPEAKING / REAL-LIFE IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-5xl mx-auto mb-10 sm:mb-14"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
            <img
              src={ngaSpeakingImage}
              alt="Nga Alchemist chia sẻ trên sân khấu"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="font-['Be_Vietnam_Pro'] font-light text-center text-xs sm:text-sm text-foreground/60 mt-3">
            Nga Alchemist chia sẻ tại một sự kiện
          </p>
        </motion.div>
      </div>
    </section>
  );
}
