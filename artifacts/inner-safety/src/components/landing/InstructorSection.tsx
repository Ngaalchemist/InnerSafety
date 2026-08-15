import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar } from 'lucide-react';
import ngaPortrait from '@assets/nga-portrait.png';
// NOTE: pointing at the actual existing asset file (nga-rmit-cleaned.jpg) so the
// build doesn't break — rename the physical file if you want the import path to
// read "nga-speaking.jpg" instead.
import ngaSpeakingImage from '@assets/nga-rmit-cleaned.jpg';

// ─────────────────────────────────────────────────────────────────────────
// FONT SETUP:
//   • Display type (headline, name, quotes, numbers, CTA) → back to the
//     site's own `font-serif` so this section matches every other section's
//     headline typography instead of introducing a new display font.
//   • Body copy, labels, captions → "Be Vietnam Pro" at a light weight, for
//     the softer/gentler reading feel, with full Vietnamese diacritic support.
//
// Only needs this in index.html <head> for the body font (font-serif is
// presumably already wired up site-wide):
//
//   <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet">
// ─────────────────────────────────────────────────────────────────────────

// Formal, verifiable credentials only — no brand nicknames mixed in
const credentials = [
  'Certified Hypnotherapist (CTAA Accredited)',
  '4+ năm thực hành thôi miên trị liệu',
  '500+ người đồng hành'
];

// Only real, concrete numbers — no filler stats.
// Kept to 2: one social-proof number, one authority number.
// (The "7 ngày" product feature was moved out of instructor trust — it belongs
// to the course/method section, not to "why trust this person".)
const stats = [
  { icon: Users, value: '500+', label: 'Học viên & khách hàng đã đồng hành' },
  { icon: Calendar, value: '4+', label: 'Năm nghiên cứu & thực hành thôi miên trị liệu' }
];

export function InstructorSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="instructor" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline — names the brand ("Beyond Fear") instead of a generic
            "your guide" claim cold traffic has no reason to believe yet. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold">
            Người Đứng Sau Beyond Fear
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* PERSON block — portrait, name, role, credentials, hook quote.
              This front-loads competence + identity before any story, so
              cold traffic gets "why trust this person" in the first screen. */}
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

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold mb-1.5">
              Nga Alchemist
            </h3>
            <p className="font-['Be_Vietnam_Pro'] font-light text-sm sm:text-base md:text-lg text-foreground/80 mb-5 sm:mb-6">
              Hypnotherapist • Founder, Inner Safety Method™
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
              "Tôi không tạo ra Inner Safety Method™ vì tôi chưa từng biết sợ. Tôi tạo ra nó
              vì tôi đã từng để nỗi sợ cầm lái cuộc đời mình."
            </p>
          </motion.div>

          <div className="border-t border-border/30 mb-10 sm:mb-14" />

          {/* STORY block — trimmed and given a clear lead-in line + a sharper
              insight "bridge" sentence, instead of trailing through many
              beats before getting to the method. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-['Be_Vietnam_Pro'] font-light space-y-4 sm:space-y-5 text-sm sm:text-base text-foreground/80 leading-relaxed mb-10 sm:mb-14"
          >
            <p className="font-serif font-semibold text-base sm:text-lg text-foreground">
              Tôi hiểu nỗi sợ đó… vì tôi đã từng sống bên trong nó.
            </p>
            <p>
              Năm 2009, biến cố bố mẹ ly hôn làm cuộc đời tôi thay đổi. Từ một cô gái lớn lên
              trong sự ấm êm, tôi chới với bước ra khỏi tổ ấm an toàn và loay hoay bắt đầu lại
              mọi thứ.
            </p>
            <p>
              Gia đình tan vỡ cùng những thất bại liên tiếp trong tình cảm dần mài mòn sự tự
              tin, khiến tôi từng tin rằng:
            </p>
            <div className="py-2 sm:py-3 text-center space-y-2 sm:space-y-2.5">
              <p className="italic text-foreground/70">"Mình không xứng đáng."</p>
              <p className="italic text-foreground/70">"Mình chẳng có giá trị gì."</p>
              <p className="italic text-foreground/70">"Sẽ chẳng một ai cần mình."</p>
            </div>
            <p>
              Chưa dừng lại ở đó, biến cố Covid-19 bất ngờ ập đến{' '}
              <span className="italic text-foreground/70">như một gáo nước lạnh</span>: phá
              sản, thất nghiệp, ly hôn. Tôi rơi vào chuỗi ngày vừa ôm con nhỏ, vừa nhặt nhạnh
              từng mảnh vỡ của chính mình để chữa lành.
            </p>
            <p>
              Hơn ai hết, tôi thấu cảm trọn vẹn cảm giác: rất muốn bước tiếp, nhưng bên trong
              luôn có một{' '}
              <span className="italic text-foreground/70">lực cản vô hình</span> kéo ghì mình
              lại.
            </p>
            <p>
              Sau hơn 4 năm nghiên cứu, thực hành thôi miên trị liệu và đồng hành cùng hàng trăm
              khách hàng, tôi nhận ra:
            </p>
            <p className="text-center px-2 sm:px-4">
              <strong className="font-normal text-foreground">
                Nhiều khi, chúng ta không thiếu ý chí. Chúng ta chỉ đang cố xây một cuộc đời mới
                trên một nền tảng bên trong vẫn còn sợ hãi.
              </strong>
            </p>
            <p>Và đó là lý do Inner Safety Method™ ra đời.</p>
            <p>
              Phương pháp này không ép bạn phải "mạnh mẽ lên", cũng không bắt bạn gồng mình
              "vượt qua nỗi sợ". Thay vào đó, nó nhẹ nhàng dẫn dắt bạn soi chiếu vào{' '}
              <strong className="font-normal text-primary">
                4 nơi mà nỗi sợ thường để lại dấu vết
              </strong>
              : cơ thể, cảm xúc, niềm tin, và cách bạn tự nhìn nhận chính mình.
            </p>
         
          </motion.div>

          {/* Closing line — the emotional thesis, kept as its own beat and
              echoing the hero's "đừng để nỗi sợ cầm lái" framing. */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-serif italic font-medium text-lg sm:text-xl md:text-2xl text-foreground text-center max-w-2xl mx-auto leading-snug mb-10 sm:mb-14"
          >
            Bạn không cần chiến đấu với chính mình để bước tiếp.
            <br />
            Bạn cần một nền tảng bên trong đủ an toàn để bước đi.
          </motion.p>

          {/* Stats — 2 real numbers only: social proof + authority.
              "7 ngày" moved out (that's a product feature, not instructor trust). */}
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

          {/* TODO(testimonials): feedback recommends 2–3 short, real
              testimonials here (one concrete sentence each, not a paragraph)
              to back up the "500+" claim before moving into the method
              teaser. Insert real customer quotes — do not fabricate. */}
        </div>

        {/* Speaking photo — sits here (before the method CTA) as the closing
            piece of visual proof for the story/credibility section, wider
            than the text column above (max-w-5xl instead of max-w-3xl) so it
            reads as a large, confident image rather than a small thumbnail.
            Deliberately no venue/institution name in the alt text or
            caption, so it doesn't imply an endorsement/affiliation that
            wasn't confirmed. */}
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
