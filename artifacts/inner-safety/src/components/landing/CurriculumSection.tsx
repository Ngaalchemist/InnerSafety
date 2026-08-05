import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const curriculum = [
  {
    day: 1,
    phase: 'Nhận diện',
    from: 'Bạn đang bị nỗi sợ điều khiển mà không hay biết',
    title: 'Nhìn thấy nỗi sợ, thay vì bị nó điều khiển',
    learn: [
      'Vì sao bạn cứ muốn làm rồi lại chùn bước',
      'Cách nhận ra nỗi sợ đang xuất hiện, ngay khi nó vừa nhen nhóm',
      'Phân biệt đâu là tiếng nói của nỗi sợ, đâu là sự thật'
    ],
    winLabel: 'Sau ngày đầu tiên',
    win: 'Bạn không còn nghĩ "mình yếu đuối" — mà hiểu đây chỉ là phản ứng bình thường của não bộ.'
  },
  {
    day: 2,
    phase: 'Làm dịu',
    from: 'Cảm xúc kéo bạn đi trước khi bạn kịp phản ứng',
    title: 'Bình tĩnh lại khi lo lắng ập đến',
    learn: [
      'Cách dừng một cơn hoảng loạn trong tích tắc',
      'Đưa cơ thể về trạng thái bình an chỉ trong vài phút',
      'Không còn để cảm xúc cuốn đi mất kiểm soát'
    ],
    winLabel: 'Chiến thắng',
    win: 'Khi lo lắng xuất hiện, bạn biết cách làm dịu bản thân — thay vì hoảng sợ.'
  },
  {
    day: 3,
    phase: 'Thấu hiểu',
    from: 'Bạn cứ sợ mà không hiểu vì sao',
    title: 'Hiểu vì sao bạn luôn sợ',
    learn: [
      'Điều thật sự đứng sau nỗi sợ của bạn',
      'Vì sao cùng một chuyện, người khác lại không sợ',
      'Tìm ra "gốc rễ" đang khiến bạn mắc kẹt'
    ],
    winLabel: 'Chiến thắng',
    win: 'Bạn hiểu nỗi sợ của mình đến từ đâu — thay vì chỉ cố gắng chống lại nó.'
  },
  {
    day: 4,
    phase: 'Viết lại',
    from: 'Những niềm tin cũ đang âm thầm giữ chân bạn',
    title: 'Thay đổi những suy nghĩ đang giữ chân bạn',
    learn: [
      'Nhận diện những câu nói đang giới hạn bản thân',
      'Thay thế chúng bằng một cách nhìn mới',
      'Không còn tự hạ thấp chính mình'
    ],
    winLabel: 'Chiến thắng',
    win: 'Bạn bắt đầu tin rằng mình có thể thay đổi.'
  },
  {
    day: 5,
    phase: 'Cắm rễ',
    from: 'Bạn phải cố gồng mình mới thấy an toàn',
    title: 'Xây lại cảm giác an toàn từ bên trong',
    learn: [
      'Không cần cố gồng để cảm thấy ổn',
      'Không cần kiểm soát mọi thứ xung quanh',
      'Tự tạo cảm giác bình an ngay trong chính mình'
    ],
    winLabel: 'Chiến thắng',
    win: 'Bạn có một nơi an toàn để quay về, mỗi khi cuộc sống trở nên hỗn loạn.'
  },
  {
    day: 6,
    phase: 'Lựa chọn',
    from: 'Bạn quyết định trong lo lắng, rồi hối hận',
    title: 'Ra quyết định mà không bị nỗi sợ dẫn dắt',
    learn: [
      'Phân biệt đâu là tiếng nói của nỗi sợ',
      'Đâu là điều trái tim thật sự muốn',
      'Hình dung rõ phiên bản tự tin của chính mình'
    ],
    winLabel: 'Chiến thắng',
    win: 'Bạn biết cách lựa chọn từ sự bình an — thay vì từ lo lắng.'
  },
  {
    day: 7,
    phase: 'Hành động',
    from: 'Bạn có cảm hứng, nhưng chưa từng bắt đầu',
    title: 'Bước ra khỏi vùng an toàn bằng những hành động nhỏ',
    learn: [
      'Chọn ra 3 bước nhỏ để bắt đầu ngay',
      'Không còn trì hoãn như trước',
      'Cách duy trì động lực sau khi khóa học kết thúc'
    ],
    winLabel: 'Chiến thắng',
    win: 'Bạn kết thúc khóa học bằng hành động thật — không chỉ có cảm hứng.'
  }
];

function DayCard({ day, phase, from, title, learn, winLabel, win, index, isLast }: typeof curriculum[0] & { index: number; isLast: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative flex gap-4 sm:gap-6"
    >
      {/* Timeline rail */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center relative z-10">
          <span className="text-base sm:text-lg font-bold text-primary-foreground">{day}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-border/20 mt-1" />
        )}
      </div>

      <div className="flex-1 pb-4 sm:pb-6 min-w-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-4 sm:p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
          data-testid={`curriculum-day-${day}`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium tracking-wide uppercase text-primary/80 mb-1.5">
                Ngày {day} · {phase}
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-gradient-gold leading-snug">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground italic mt-1.5">{from}</p>
            </div>
            <ChevronDown
              className={`w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>

          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4 border-t border-border/30 mt-4">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-2.5">
                  Bạn sẽ học
                </p>
                <ul className="space-y-2">
                  {learn.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-primary/10 border-l-4 border-primary">
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  <strong className="text-primary">🎯 {winLabel}:</strong> {win}
                </p>
              </div>
            </div>
          </motion.div>
        </button>
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
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm sm:text-base font-medium tracking-wide uppercase text-primary/80 mb-3">
            Hành trình khách hàng
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Sau 7 ngày, bạn sẽ không còn để nỗi sợ quyết định cuộc đời mình
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80">
            Nhận diện → Làm dịu → Thấu hiểu → Viết lại → Cắm rễ → Lựa chọn → Hành động
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {curriculum.map((day, index) => (
            <DayCard key={day.day} {...day} index={index} isLast={index === curriculum.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
