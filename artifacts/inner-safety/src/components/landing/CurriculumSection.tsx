import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
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
    subtitle: 'Awareness',
    learns: [
      'Vì sao bạn cứ muốn làm rồi lại chùn bước',
      'Cách nhận ra nỗi sợ đang xuất hiện',
      'Biết đâu là tiếng nói của nỗi sợ, đâu là sự thật'
    ],
    result: 'Bạn sẽ không còn nghĩ "mình yếu đuối", mà hiểu đây chỉ là phản ứng bình thường của não bộ.'
  },
  {
    day: 2,
    image: day2Image,
    title: 'BÌNH TĨNH LẠI KHI LO LẮNG XUẤT HIỆN',
    subtitle: 'Regulation',
    learns: [
      'Cách dừng cơn hoảng loạn',
      'Cách đưa cơ thể về trạng thái bình an trong vài phút',
      'Không còn bị cảm xúc kéo đi'
    ],
    result: 'Khi lo lắng xuất hiện, bạn biết cách làm dịu bản thân thay vì hoảng sợ.'
  },
  {
    day: 3,
    image: day3Image,
    title: 'HIỂU VÌ SAO BẠN LUÔN SỢ',
    subtitle: 'Healing',
    learns: [
      'Điều gì thật sự đứng sau nỗi sợ',
      'Vì sao cùng một chuyện nhưng người khác không sợ',
      'Tìm ra "gốc rễ" khiến bạn mắc kẹt'
    ],
    result: 'Bạn hiểu nỗi sợ của mình đến từ đâu, thay vì chỉ cố gắng chống lại nó.'
  },
  {
    day: 4,
    image: day4Image,
    title: 'THAY ĐỔI NHỮNG SUY NGHĨ ĐANG GIỮ CHÂN BẠN',
    subtitle: 'Reprogramming',
    learns: [
      'Nhận diện những câu nói đang giới hạn bản thân',
      'Thay thế bằng cách nhìn mới',
      'Không còn tự hạ thấp chính mình'
    ],
    result: 'Bạn bắt đầu tin rằng mình có thể thay đổi.'
  },
  {
    day: 5,
    image: day5Image,
    title: 'XÂY LẠI CẢM GIÁC AN TOÀN TỪ BÊN TRONG',
    subtitle: 'Integration',
    learns: [
      'Không còn phải cố gồng',
      'Không cần kiểm soát mọi thứ',
      'Tạo cảm giác bình an ngay trong chính mình'
    ],
    result: 'Bạn có một nơi an toàn để quay về mỗi khi cuộc sống trở nên hỗn loạn.'
  },
  {
    day: 6,
    image: day6Image,
    title: 'RA QUYẾT ĐỊNH MÀ KHÔNG BỊ NỖI SỢ DẪN DẮT',
    subtitle: 'Identity',
    learns: [
      'Phân biệt đâu là tiếng nói của nỗi sợ',
      'Đâu là điều trái tim thật sự muốn',
      'Hình dung phiên bản tự tin của chính mình'
    ],
    result: 'Bạn biết cách lựa chọn từ sự bình an thay vì lo lắng.'
  },
  {
    day: 7,
    image: day7Image,
    title: 'BƯỚC RA KHỎI VÙNG AN TOÀN BẰNG NHỮNG HÀNH ĐỘNG NHỎ',
    subtitle: 'Action',
    learns: [
      'Chọn 3 bước nhỏ để bắt đầu',
      'Không còn trì hoãn',
      'Duy trì động lực sau khóa học'
    ],
    result: 'Bạn kết thúc khóa học bằng hành động thật, thay vì chỉ có cảm hứng.'
  }
];

function DayCard({ day, image, title, subtitle, learns, result, index }: typeof curriculum[0] & { index: number }) {
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
            alt={`${title} - ${subtitle}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
        </div>
      )}

      <div
        className="w-full text-left p-4 sm:p-6"
        data-testid={`curriculum-day-${day}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <span className="text-base sm:text-lg font-bold text-primary-foreground">{day}</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-gradient-gold">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground italic">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4 border-t border-border/30 mt-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">
              Bạn sẽ học
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
          <p className="text-base sm:text-lg md:text-xl text-foreground/80">
            Một lộ trình rõ ràng, từng bước một, để bạn tìm lại sự bình an và tự tin trong chính mình.
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
