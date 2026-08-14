import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Video, Headphones, NotebookPen } from 'lucide-react';
import day1Image from '../../../../../attached_assets/day-1.jpg';
import day2Image from '../../../../../attached_assets/day-2.jpg';
import day3Image from '../../../../../attached_assets/day-3.jpg';
import day4Image from '../../../../../attached_assets/day-4.jpg';
import day5Image from '../../../../../attached_assets/day-5.jpg';
import day6Image from '../../../../../attached_assets/day-6.jpg';
import day7Image from '../../../../../attached_assets/day-7.jpg';

const curriculum = [
  {
    day: 1,
    image: day1Image,
    title: 'NHÌN THẤY NỖI SỢ THAY VÌ BỊ NỖI SỢ ĐIỀU KHIỂN',
    milestone: 'Nhận biết',
    learnLabel: 'Bạn sẽ nhận ra',
    learns: [
      'Vì sao bạn cứ muốn làm rồi lại chùn bước',
      'Cách nhận ra nỗi sợ đang xuất hiện',
      'Biết đâu là tiếng nói của nỗi sợ, đâu là sự thật'
    ],
    media: { videoMinutes: 18, audio: false, reflection: true },
    result: `Lần đầu tiên bạn cảm thấy: "Có lẽ mình không bị mắc kẹt như mình từng nghĩ."`
  },
  {
    day: 2,
    image: day2Image,
    title: 'BÌNH TĨNH LẠI KHI LO LẮNG XUẤT HIỆN',
    milestone: 'Làm dịu',
    learnLabel: 'Bạn sẽ thực hành',
    learns: [
      'Cách dừng cơn hoảng loạn',
      'Cách đưa cơ thể về trạng thái bình an trong vài phút',
      'Không còn bị cảm xúc kéo đi'
    ],
    media: { videoMinutes: 15, audio: true, reflection: false },
    result: 'Thay vì hoảng loạn như trước... bạn biết cách đưa mình trở về bình tĩnh.'
  },
  {
    day: 3,
    image: day3Image,
    title: 'HIỂU VÌ SAO BẠN LUÔN SỢ',
    milestone: 'Hiểu gốc',
    learnLabel: 'Bạn sẽ trải nghiệm',
    learns: [
      'Điều gì thật sự đứng sau nỗi sợ',
      'Vì sao cùng một chuyện nhưng người khác không sợ',
      'Tìm ra "gốc rễ" khiến bạn mắc kẹt'
    ],
    media: { videoMinutes: 20, audio: true, reflection: true },
    result: `Bạn nhận ra: "Hoá ra mình sợ không phải vì yếu — mà vì có một gốc rễ chưa từng được nhìn thấy."`
  },
  {
    day: 4,
    image: day4Image,
    title: 'THAY ĐỔI NHỮNG SUY NGHĨ ĐANG GIỮ CHÂN BẠN',
    milestone: 'Đổi niềm tin',
    learnLabel: 'Bạn sẽ thay đổi',
    learns: [
      'Nhận diện những câu nói đang giới hạn bản thân',
      'Thay thế bằng cách nhìn mới',
      'Không còn tự hạ thấp chính mình'
    ],
    media: { videoMinutes: 17, audio: false, reflection: true },
    result: `Thay vì tự nhủ "chắc mình không làm được đâu"... bạn bắt đầu tin rằng mình có thể.`
  },
  {
    day: 5,
    image: day5Image,
    title: 'XÂY LẠI CẢM GIÁC AN TOÀN TỪ BÊN TRONG',
    milestone: 'Xây an toàn',
    learnLabel: 'Bạn sẽ xây dựng',
    learns: [
      'Không còn phải cố gồng',
      'Không cần kiểm soát mọi thứ',
      'Tạo cảm giác bình an ngay trong chính mình'
    ],
    media: { videoMinutes: 16, audio: true, reflection: false },
    result: 'Dù mọi thứ xung quanh có hỗn loạn, bạn biết mình vẫn có một nơi an toàn để quay về — chính là bên trong mình.'
  },
  {
    day: 6,
    image: day6Image,
    title: 'RA QUYẾT ĐỊNH MÀ KHÔNG BỊ NỖI SỢ DẪN DẮT',
    milestone: 'Quyết định mới',
    learnLabel: 'Bạn sẽ áp dụng',
    learns: [
      'Phân biệt đâu là tiếng nói của nỗi sợ',
      'Đâu là điều trái tim thật sự muốn',
      'Hình dung phiên bản tự tin của chính mình'
    ],
    media: { videoMinutes: 19, audio: false, reflection: true },
    result: 'Thay vì để nỗi sợ chọn thay... lần này, chính bạn là người quyết định.'
  },
  {
    day: 7,
    image: day7Image,
    title: 'BƯỚC RA KHỎI VÙNG AN TOÀN BẰNG NHỮNG HÀNH ĐỘNG NHỎ',
    milestone: 'Bắt đầu hành động',
    learnLabel: 'Bạn sẽ bắt đầu',
    learns: [
      'Chọn 3 bước nhỏ để bắt đầu',
      'Không còn trì hoãn',
      'Duy trì động lực sau khóa học'
    ],
    media: { videoMinutes: 15, audio: false, reflection: true },
    result: `Bạn không chỉ "có cảm hứng" — bạn đã thật sự bước những bước đầu tiên.`
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

function MediaBadges({ media }: { media: typeof curriculum[0]['media'] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-foreground/80">
        <Video className="w-3.5 h-3.5 text-primary" />
        Video {media.videoMinutes} phút
      </span>
      {media.audio && (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-foreground/80">
          <Headphones className="w-3.5 h-3.5 text-primary" />
          Audio Healing
        </span>
      )}
      {media.reflection && (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-foreground/80">
          <NotebookPen className="w-3.5 h-3.5 text-primary" />
          Bài thực hành
        </span>
      )}
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
  media,
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

        <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4 border-t border-border/30 mt-4">
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

          <MediaBadges media={media} />

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
          className="text-center mb-12 sm:mb-16"
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

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {curriculum.map((day, index) => (
            <DayCard key={day.day} {...day} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
