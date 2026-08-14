import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, BookOpen, PenLine, Headphones, Sparkles, Flame } from 'lucide-react';
import day1Image from '../../../../../attached_assets/day-1.jpg';
import day2Image from '../../../../../attached_assets/day-2.jpg';
import day3Image from '../../../../../attached_assets/day-3.jpg';
import day4Image from '../../../../../attached_assets/day-4.jpg';
import day5Image from '../../../../../attached_assets/day-5.jpg';
import day6Image from '../../../../../attached_assets/day-6.jpg';
import day7Image from '../../../../../attached_assets/day-7.jpg';

// Every day follows the same 4-part format (Teaching → Reflection →
// Hypnosis/Healing Journey → Integration), so it's rendered once per card
// as a fixed rhythm bar instead of a different badge set per day.
const DAY_FORMAT = [
  { icon: BookOpen, label: 'Giảng dạy', time: '10 phút' },
  { icon: PenLine, label: 'Reflection Journal', time: '5 phút' },
  { icon: Headphones, label: 'Hypnosis / Healing Journey', time: '20–30 phút' },
  { icon: Sparkles, label: 'Integration', time: '5 phút' },
] as const;

const curriculum = [
  {
    day: 1,
    image: day1Image,
    title: 'SỰ THỨC TỈNH',
    milestone: 'Thấy',
    learnLabel: 'Bạn sẽ nhận ra',
    learns: [
      'Vì sao bạn cứ chuẩn bị rất kỹ mà đến phút cuối lại chùn bước',
      '4 cách cơ thể phản ứng khi sợ hãi xuất hiện — và bạn đang mắc kẹt ở kiểu nào',
      'Cách nhận ra ngay lập tức khi nỗi sợ đang "cầm lái" thay vì bạn'
    ],
    result: 'Lần đầu tiên, bạn đứng lùi lại đủ xa để thấy: không phải mình yếu — mà nỗi sợ đã lái xe quá lâu.'
  },
  {
    day: 2,
    image: day2Image,
    title: 'TRỞ VỀ CƠ THỂ',
    milestone: 'Ổn định',
    learnLabel: 'Bạn sẽ học cách',
    learns: [
      'Đưa cơ thể về trạng thái bình tĩnh chỉ trong vài phút, bất cứ khi nào cần',
      'Vì sao "biết mình nên bình tĩnh" không giúp được gì, cho đến khi cơ thể thật sự cảm thấy an toàn',
      'Tạo một "nơi an toàn" bên trong mà bạn có thể quay về bất cứ lúc nào'
    ],
    result: 'Lần đầu tiên sau rất lâu, bạn cảm thấy: cơ thể mình thật sự an toàn.'
  },
  {
    day: 3,
    image: day3Image,
    title: 'GIẢI PHÓNG CẢM XÚC BỊ MẮC KẸT',
    milestone: 'Buông',
    learnLabel: 'Bạn sẽ giải phóng',
    learns: [
      'Vì sao có những cảm xúc bạn tưởng đã qua nhưng vẫn âm thầm điều khiển cuộc sống',
      'Vì sao chỉ cần bị chê một câu là cơ thể lại phản ứng như nhiều năm trước',
      'Cách giải phóng những cảm xúc còn mắc kẹt để chúng không tiếp tục kéo bạn về quá khứ'
    ],
    highlight: 'Phiên chữa lành sâu nhất trong 7 ngày',
    result: 'Bạn cảm thấy nhẹ đi một điều đã mang theo rất lâu, mà không hẳn biết vì sao nó lại nặng đến vậy.'
  },
  {
    day: 4,
    image: day4Image,
    title: 'THÁO GỠ BỘ RỄ NIỀM TIN',
    milestone: 'Tái lập',
    learnLabel: 'Bạn sẽ tháo gỡ',
    learns: [
      'Những niềm tin bạn đang gọi là "sự thật"... thật ra chỉ là điều bạn từng được dạy',
      'Vì sao bạn luôn thấy mình chưa đủ, dù đã cố gắng rất nhiều',
      'Cách thay thế những niềm tin cũ bằng một nền tảng mới vững chắc hơn'
    ],
    result: `Thay vì tự nhủ "chắc mình không làm được đâu"... bạn bắt đầu tin rằng mình có thể.`
  },
  {
    day: 5,
    image: day5Image,
    title: 'CHỮA LÀNH MỐI QUAN HỆ VỚI TIỀN',
    milestone: 'Mở rộng',
    learnLabel: 'Bạn sẽ hàn gắn',
    learns: [
      'Vì sao bạn né tránh nhìn vào tài khoản, hoặc luôn thấy thiếu dù kiếm được bao nhiêu',
      'Mối quan hệ thật sự giữa bạn và Tiền — không phải mindset, mà là một mối quan hệ cần được chữa lành',
      'Cách viết lại "hợp đồng" mới với Tiền, để không còn né tránh hay sợ hãi'
    ],
    result: 'Bạn không còn né tránh nhìn vào tài khoản của mình — mà cảm thấy mình và Tiền đang ở cùng một phía.'
  },
  {
    day: 6,
    image: day6Image,
    title: 'BƯỚC VÀO DANH TÍNH MỚI',
    subtitle: 'Higher Self Journey',
    milestone: 'Trở thành',
    learnLabel: 'Bạn sẽ gặp',
    learns: [
      'Phiên bản của bạn — người đã đi qua tất cả những gì bạn đang trải qua',
      'Một danh tính mới mà bạn được phép bước vào, thay vì tiếp tục là phiên bản cũ',
      'Cảm giác thật sự khi biết mình có thể tin tưởng chính mình'
    ],
    highlight: 'Hành trình được yêu thích nhất',
    result: 'Bạn khóc — không phải vì đau, mà vì lần đầu tiên gặp được người mình luôn có thể trở thành.'
  },
  {
    day: 7,
    image: day7Image,
    title: 'BEYOND FEAR',
    milestone: 'Vượt qua',
    learnLabel: 'Bạn sẽ bước vào',
    learns: [
      'Một nghi thức khép lại phiên bản cũ, thay vì chỉ "kết thúc khóa học"',
      'Cách mang cảm giác an toàn này đi cùng bạn, ngay cả khi khóa học đã xong',
      'Bước hành động đầu tiên để chính thức sống là con người mới của mình'
    ],
    highlight: 'Graduation Ceremony — buổi lễ khép lại hành trình',
    result: `Bạn không chỉ "học xong" — bạn bước ra là một người khác với người đã bước vào Ngày 1.`
  }
];

const TOTAL_DAYS = curriculum.length;

function ProgressDots({ day }: { day: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Tiến độ ngày ${day} trên ${TOTAL_DAYS}`}>
      {Array.from({ length: TOTAL_DAYS }).map((_, i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i < day ? 'bg-primary' : 'bg-border/50'
          }`}
        />
      ))}
    </div>
  );
}

function DayFormatBar() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-foreground/60">
      {DAY_FORMAT.map(({ icon: Icon, label, time }, i) => (
        <span key={label} className="inline-flex items-center gap-1.5">
          <Icon className="w-3.5 h-3.5 text-primary/70 flex-shrink-0" />
          {label} <span className="text-foreground/40">· {time}</span>
          {i < DAY_FORMAT.length - 1 && <span className="hidden sm:inline text-border ml-4">/</span>}
        </span>
      ))}
    </div>
  );
}

function DayCard({
  day,
  image,
  title,
  subtitle,
  milestone,
  learnLabel,
  learns,
  highlight,
  result,
  index
}: typeof curriculum[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
    >
      {image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={`${title} - ${milestone}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          {highlight && (
            <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur-sm text-xs font-semibold text-accent-foreground shadow-lg">
              <Flame className="w-3.5 h-3.5" />
              {highlight}
            </div>
          )}
        </div>
      )}

      <div className="w-full text-left p-4 sm:p-6" data-testid={`curriculum-day-${day}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <span className="text-base sm:text-lg font-bold text-primary-foreground">{day}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-gradient-gold">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-xs sm:text-sm text-muted-foreground italic">{subtitle}</p>
                )}
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs sm:text-sm text-muted-foreground">{milestone}</p>
                  <ProgressDots day={day} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 space-y-4 sm:space-y-5 border-t border-border/30 mt-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">
              {learnLabel}
            </p>
            <ul className="space-y-2">
              {learns.map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <DayFormatBar />

          <div className="p-3 sm:p-4 rounded-lg bg-primary/10 border-l-4 border-primary">
            <p className="text-xs sm:text-sm font-medium text-foreground">
              <strong className="text-primary">🎯 Chiến thắng:</strong> {result}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CurriculumSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="curriculum" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Sau 7 Ngày, Bạn Sẽ Không Còn Để Nỗi Sợ <br /> Quyết Định Cuộc Đời Mình
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Bạn không cần thay đổi cuộc đời trong một ngày. Chỉ cần đi từng bước, mỗi ngày
            khoảng 20 phút.
            <br className="hidden sm:block" />
            Sau 7 ngày... bạn sẽ nhìn cuộc sống bằng một trạng thái hoàn toàn khác.
          </p>
        </motion.div>

        {/* Story-arc teaser — frames the 7 days as one continuous journey,
            not seven separate topics, before the day cards begin. */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center text-sm sm:text-base text-foreground/60 italic max-w-xl mx-auto mb-12 sm:mb-16"
        >
          Đây không phải một khóa học. Đây là một cuộc hành hương nội tâm 7 ngày — từ người
          đang bị nỗi sợ cầm lái, đến người bước ra với một danh tính mới.
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {curriculum.map((day, index) => (
            <DayCard key={day.day} {...day} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
