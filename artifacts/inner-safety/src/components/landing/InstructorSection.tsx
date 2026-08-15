import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Calendar, ArrowRight } from 'lucide-react';
import ngaPortrait from '@assets/nga-portrait.png';
import ngaRmitImage from '@assets/nga-rmit-cleaned.jpg';

// Formal, verifiable credentials only — no brand nicknames mixed in
const credentials = [
  'Certified Hypnotherapist (CTAA Accredited)',
  '4+ năm thực hành thôi miên trị liệu',
  '500+ người đồng hành'
];

// Only real, concrete numbers — no filler stats
const stats = [
  { icon: Users, value: '500+', label: 'Học viên & khách hàng đồng hành' },
  { icon: Calendar, value: '4+', label: 'Năm nghiên cứu & thực hành thôi miên trị liệu' },
  { icon: Award, value: '7', label: 'Ngày chuyển hóa chuyên sâu trong khóa học' }
];

function scrollToMethod() {
  const el = document.getElementById('solution');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export function InstructorSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="instructor" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold">
            Người Dẫn Đường Của Bạn
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Hero identity block — centered, portrait leads, editorial-poster
              style instead of a side-by-side "About Me" layout. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="w-40 h-40 sm:w-52 sm:h-52 mx-auto mb-6 sm:mb-7 relative rounded-2xl overflow-hidden shadow-xl border border-border/20">
              <img
                src={ngaPortrait}
                alt="Nga Alchemist - Founder Inner Safety Method"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gradient-gold mb-1.5">
              Nga Alchemist
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-5 sm:mb-6">
              Hypnotherapist • Founder, Inner Safety Method™
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-7 sm:mb-9">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs sm:text-sm text-foreground/80"
                >
                  {cred}
                </div>
              ))}
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-medium italic text-foreground max-w-xl mx-auto leading-snug">
              "Tôi không tạo ra Inner Safety Method™ vì tôi chưa từng biết sợ. Tôi tạo ra nó
              vì tôi đã từng sống rất lâu với nỗi sợ."
            </p>
          </motion.div>

          <div className="border-t border-border/30 mb-10 sm:mb-14" />

          {/* Personal story — the real "why trust her" answer, led by lived
              experience rather than a research/methodology recap. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 sm:space-y-5 text-sm sm:text-base text-foreground/80 leading-relaxed mb-10 sm:mb-14"
          >
            <p>
              Từ năm 2009, cuộc đời tôi thay đổi khi bố mẹ ly hôn.
            </p>
            <p>
              Từ một cô gái lớn lên trong sự đủ đầy, tôi bất ngờ phải bước ra khỏi tổ ấm của
              mình và bắt đầu một hành trình mà ở đó, tôi liên tiếp trải qua những đổ vỡ và
              thất bại.
            </p>
            <p>Những thất bại trong tình cảm khiến tôi từng tin rằng:</p>
            <p className="pl-4 sm:pl-6 border-l-2 border-destructive/40 italic text-foreground/70 space-y-1">
              <span className="block">"Mình không xứng đáng."</span>
              <span className="block">"Mình không có giá trị."</span>
              <span className="block">"Không ai cần mình."</span>
            </p>
            <p>
              Sau đó là những biến cố khác: phá sản, thất nghiệp, ly hôn, và những năm tháng
              vừa chữa lành chính mình, vừa nuôi con nhỏ.
            </p>
            <p>
              Tôi hiểu cảm giác rất muốn bước tiếp nhưng bên trong luôn có một thứ gì đó kéo
              mình lại. Không chỉ là những tiếng nói giới hạn trong đầu. Mà còn là những tổn
              thương, cảm xúc, phản ứng của cơ thể và cả môi trường xung quanh — tất cả cùng
              góp phần khiến chúng ta thu nhỏ mình lại.
            </p>
            <p>Và đây là lý do Inner Safety Method™ ra đời.</p>
            <p>
              Sau hơn 4 năm nghiên cứu, thực hành thôi miên trị liệu và đồng hành cùng khách
              hàng, tôi nhận ra:{' '}
              <strong className="text-foreground">
                chúng ta không phải lúc nào cũng thiếu ý chí. Nhiều khi, chúng ta chỉ đang cố
                xây một cuộc đời mới trên một nền tảng bên trong vẫn còn sợ hãi.
              </strong>
            </p>
            <p>
              Vì vậy, <strong className="text-primary">Inner Safety Method™</strong> không chỉ
              dạy bạn cố gắng hơn, suy nghĩ tích cực hơn hay ép mình vượt qua nỗi sợ. Nó giúp
              bạn đi xuống những tầng sâu hơn của nỗi sợ — nơi cơ thể, cảm xúc, niềm tin và
              cách bạn nhìn chính mình đang cùng tạo nên vòng lặp cũ. Để bạn không còn phải
              chiến đấu với chính mình, mà có thể bước đi từ một nền tảng bình an hơn.
            </p>
          </motion.div>

          {/* Closing line — lands right before the method CTA. Deliberately
              placed as its own beat rather than folded into the paragraph
              above, since it's the emotional thesis of the whole section. */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg sm:text-xl md:text-2xl font-medium italic text-foreground text-center max-w-2xl mx-auto leading-snug mb-10 sm:mb-14"
          >
            Tôi hiểu nỗi sợ không chỉ vì tôi đã nghiên cứu nó.
            <br />
            Tôi hiểu nó vì tôi đã từng để nó cầm lái cuộc đời mình.
          </motion.p>

          {/* Stats — real numbers only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
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
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <div className="border-t border-border/30 mb-10 sm:mb-14" />

          {/* Method teaser — one line + a way back up to Solution, closing
              the section with a clear next step instead of trailing off. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <p className="text-lg sm:text-xl font-bold text-gradient-gold mb-2">
              Inner Safety Method™
            </p>
            <p className="text-sm sm:text-base text-foreground/70 mb-5 max-w-md mx-auto">
              Tháo gỡ nỗi sợ từ nhiều tầng, thay vì chỉ cố vượt qua nó.
            </p>
            <button
              onClick={scrollToMethod}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
              data-testid="button-explore-method"
            >
              Khám phá phương pháp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* RMIT speaking photo — closes the section as social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
              <img
                src={ngaRmitImage}
                alt="Nga Alchemist speaking at RMIT University"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center text-xs sm:text-sm text-foreground/60 mt-3">
              Nga Alchemist chia sẻ tại Đại học RMIT
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
