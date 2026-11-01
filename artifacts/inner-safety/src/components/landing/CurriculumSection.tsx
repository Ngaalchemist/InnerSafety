import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, BookOpen, PenLine, Headphones, Sparkles } from 'lucide-react';
import day1Image from '../../../../../attached_assets/day-1.jpg';
import day2Image from '../../../../../attached_assets/day-2.jpg';
import day3Image from '../../../../../attached_assets/day-3.jpg';
import day4Image from '../../../../../attached_assets/day-4.jpg';
import day5Image from '../../../../../attached_assets/day-5.jpg';
import day6Image from '../../../../../attached_assets/day-6.jpg';
import day7Image from '../../../../../attached_assets/day-7.jpg';

// Every day follows the same 4-part format (Teaching → Reflection →
// Guided audio practice → Integration), rendered once per card as a
// fixed rhythm bar.
const DAY_FORMAT = [
  { icon: BookOpen, label: 'Giảng dạy', time: '10 phút' },
  { icon: PenLine, label: 'Reflection Journal', time: '5 phút' },
  { icon: Headphones, label: 'Thực hành có hướng dẫn bằng audio', time: '20–30 phút' },
  { icon: Sparkles, label: 'Integration', time: '5 phút' },
] as const;

const curriculum = [
  {
    day: 1,
    image: day1Image,
    title: 'Hiểu cách nỗi sợ ảnh hưởng đến lựa chọn',
    milestone: 'Nhận diện',
    learnLabel: 'Bạn sẽ khám phá',
    learns: [
      'Những tình huống thường khiến bạn do dự hoặc trì hoãn',
      '4 kiểu phản ứng quen thuộc khi đối diện nỗi sợ',
      'Nỗi sợ đang ảnh hưởng đến quyết định hằng ngày của bạn ra sao'
    ],
    result: 'Nhận diện các tình huống thường kích hoạt sự do dự'
  },
  {
    day: 2,
    image: day2Image,
    title: 'Tạo khoảng dừng trước khi phản ứng',
    milestone: 'Tạm dừng',
    learnLabel: 'Bạn sẽ thực hành',
    learns: [
      'Dừng lại vài nhịp trước khi phản ứng',
      'Quan sát cảm xúc và sự chú ý mà không vội đánh giá',
      'Một bài thực hành ngắn bạn có thể dùng lại bất cứ lúc nào'
    ],
    result: 'Làm quen các bài thực hành quan sát cảm xúc và sự chú ý'
  },
  {
    day: 3,
    image: day3Image,
    title: 'Hiểu và làm việc với cảm xúc',
    milestone: 'Phân biệt',
    learnLabel: 'Bạn sẽ học cách',
    learns: [
      'Phân biệt cảm xúc, suy nghĩ và hành động',
      'Nhận ra cảm xúc nào đang lên tiếng trong một tình huống cụ thể',
      'Làm việc với cảm xúc thay vì để nó dẫn đường'
    ],
    result: 'Phân biệt cảm xúc, suy nghĩ và hành động'
  },
  {
    day: 4,
    image: day4Image,
    title: 'Khám phá những niềm tin giới hạn',
    milestone: 'Khám phá',
    learnLabel: 'Bạn sẽ xem xét',
    learns: [
      'Những niềm tin quen thuộc về bản thân mà bạn chưa từng kiểm chứng',
      'Niềm tin nào đang thu hẹp lựa chọn của bạn',
      'Cách thử một góc nhìn khác và quan sát điều gì thay đổi'
    ],
    result: 'Xem xét những niềm tin quen thuộc và thử nghiệm góc nhìn khác'
  },
  {
    day: 5,
    image: day5Image,
    title: 'Nhận diện niềm tin về tiền bạc',
    milestone: 'Tìm hiểu',
    learnLabel: 'Bạn sẽ tìm hiểu',
    learns: [
      'Quan điểm cá nhân về tiền bạc của bạn đến từ đâu',
      'Quan điểm đó ảnh hưởng thế nào đến thói quen chi tiêu, tiết kiệm và kiếm tiền',
      'Một vài điều chỉnh nhỏ trong cách nhìn và hành vi tài chính'
    ],
    result: 'Tìm hiểu cách quan điểm cá nhân ảnh hưởng đến thói quen tài chính'
  },
  {
    day: 6,
    image: day6Image,
    title: 'Xây dựng hình ảnh bản thân mong muốn',
    milestone: 'Làm rõ',
    learnLabel: 'Bạn sẽ làm rõ',
    learns: [
      'Những “cài đặt mặc định” trong cách bạn vẫn nghĩ về bản thân',
      'Điều nào còn phù hợp để giữ, điều nào đã đến lúc cập nhật',
      'Hình ảnh bản thân và những lựa chọn bạn muốn phát triển tiếp'
    ],
    result: 'Làm rõ giá trị, phẩm chất và lựa chọn muốn phát triển'
  },
  {
    day: 7,
    image: day7Image,
    title: 'Từ nhận thức đến hành động',
    milestone: 'Hành động',
    learnLabel: 'Bạn sẽ hoàn thiện',
    learns: [
      'Tổng kết những gì bạn nhận ra trong 6 ngày trước',
      'Một cam kết thực hành rõ ràng cho bản thân',
      'Kế hoạch tiếp tục sau khi khóa học kết thúc'
    ],
    result: 'Tổng kết và xây dựng định hướng thực hành tiếp theo'
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
  milestone,
  learnLabel,
  learns,
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
              <strong className="text-primary">Kết quả học tập:</strong> {result}
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
            7 Ngày Hiểu Rõ Nỗi Sợ, <br /> Chủ Động Hơn Trong Mỗi Lựa Chọn
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Bạn không cần thay đổi mọi thứ trong một ngày.<br /> Mỗi ngày khoảng 40–50 phút, bạn học một
            khái niệm, viết vài dòng suy ngẫm và thực hành cùng audio hướng dẫn.
            <br className="hidden sm:block" />
            Sau 7 ngày, bạn hiểu rõ hơn nỗi sợ ảnh hưởng đến lựa chọn của mình ra sao, và có thêm những cách để dừng lại, nhìn lại, rồi hành động.
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
          Bảy ngày, bảy bước nhỏ: từ việc nhận ra nỗi sợ ảnh hưởng đến lựa chọn của bạn thế nào,
          đến việc chủ động chọn hướng đi phù hợp với giá trị của chính mình.
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
