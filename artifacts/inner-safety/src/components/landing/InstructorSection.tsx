import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Calendar } from 'lucide-react';
import ngaPortrait from '@assets/nga-portrait.png';
import ngaRmitImage from '@assets/nga-rmit-cleaned.jpg';

// Formal, verifiable credentials only — no brand nicknames mixed in
const credentials = [
  'Certified Hypnotherapist (CTAA Accredited)',
  '3+ năm thực hành thôi miên trị liệu',
  '500+ người đồng hành'
];

// Only real, concrete numbers — no filler stats
const stats = [
  { icon: Users, value: '500+', label: 'Học viên & khách hàng đồng hành' },
  { icon: Calendar, value: '3+', label: 'Năm nghiên cứu & thực hành thôi miên trị liệu' },
  { icon: Award, value: '7', label: 'Ngày chuyển hóa chuyên sâu trong khóa học' }
];

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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Người Dẫn Đường Của Bạn
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Profile card — portrait + identity + bio side by side, editorial style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 p-6 sm:p-10 lg:p-12 mb-12 sm:mb-16"
          >
            <div className="grid md:grid-cols-[220px_1fr] gap-8 sm:gap-10 items-start">
              {/* Portrait */}
              <div className="mx-auto md:mx-0 w-40 sm:w-48 md:w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/20 aspect-square">
                  <img
                    src={ngaPortrait}
                    alt="Nga Alchemist - Founder Inner Safety Method"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Identity + credentials + bio */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gradient-gold mb-1">
                  Nga Alchemist
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-5 sm:mb-6">
                  Hypnotherapist • Founder, Inner Safety Method™
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs sm:text-sm text-foreground/80"
                    >
                      {cred}
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                  <p>
                    Từ năm 2019, mình bước vào hành trình khám phá tâm trí, tiềm thức và bản chất của sự chuyển hóa con người.
                  </p>
                  <p>
                    Sau nhiều năm nghiên cứu, thực hành thôi miên trị liệu và đồng hành với hàng trăm khách hàng, mình nhận ra rằng <strong className="text-foreground">phần lớn chúng ta không thiếu kiến thức hay ý chí. Chúng ta chỉ đang cố xây một cuộc đời mới trên một hệ thần kinh vẫn còn sống trong nỗi sợ.</strong>
                  </p>
                  <p>
                    Khi bên trong chưa thật sự cảm thấy an toàn, mỗi lần muốn bước ra, chia sẻ giá trị hay tạo nên điều mới, tâm trí sẽ lập tức kích hoạt những vòng lặp quen thuộc: Sợ thất bại. Sợ bị phán xét. Sợ không đủ. Overthinking. Đóng băng. Trì hoãn.
                  </p>
                  <p>
                    Từ những nghiên cứu về thôi miên trị liệu, điều hòa hệ thần kinh, somatic healing và tái lập trình niềm tin vô thức, Nga phát triển <strong className="text-primary">Inner Safety Method™</strong> — phương pháp giúp tháo gỡ bộ rễ của nỗi sợ ở nhiều tầng nhận thức để xây dựng cảm giác an toàn nội tại, nền tảng giúp con người hành động từ sự bình an thay vì từ cơ chế sinh tồn.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats — real numbers only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
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
