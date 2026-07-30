import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const curriculum = [
  {
    day: 1,
    title: 'GIẢI MÃ MA TRẬN NỖI SỢ',
    subtitle: 'Awareness',
    content: 'Nỗi sợ là "Tín hiệu", không phải kẻ thù. Công cụ: "Chiếc xe Sợ hãi" (Fear Bus) — nhận diện ai đang cầm lái và "hành lý" bạn mang theo.',
    result: 'Ngừng tự phán xét; chuyển từ vị thế nạn nhân sang "Người quan sát".'
  },
  {
    day: 2,
    title: 'LÀM DỊU HỆ THẦN KINH',
    subtitle: 'Regulation',
    content: 'Quy luật 90 giây của cảm xúc. Công cụ: Pattern Interrupt vật lý — rung lắc cơ thể, hơi thở 4-7-8, Tapping.',
    result: 'Biết cách tự "cắt cơn" đóng băng/trì hoãn trong vài phút.'
  },
  {
    day: 3,
    title: 'THÁO GỠ TRIGGER & NHU CẦU ẨN',
    subtitle: 'Healing',
    content: '"Nhu cầu là vị thầy". Phương pháp STRO để truy tìm câu chuyện tự kể.',
    result: 'Hiểu rõ nhu cầu gốc rễ (được yêu thương, an toàn, công nhận) đằng sau nỗi sợ.'
  },
  {
    day: 4,
    title: 'VIẾT LẠI NIỀM TIN GỐC',
    subtitle: 'Reprogramming',
    content: '"Believing is Seeing". Facting (Đối diện sự thật) & Rewriting Rules.',
    result: 'Xóa bỏ các "lời nói dối" trong hệ niềm tin cũ và ghi đè mã lệnh mới.'
  },
  {
    day: 5,
    title: 'CẮM RỄ AN TOÀN',
    subtitle: 'Integration',
    content: 'Luân xa 1 — Tòa tháp của sự an toàn. Câu lệnh quyền năng "I am Word" & Thôi miên cắm rễ vào lòng đất.',
    result: 'Cài đặt cảm giác "Tôi an toàn" vào tận cấp độ tế bào.'
  },
  {
    day: 6,
    title: 'SỐNG TỪ BỘ RỄ AN TOÀN',
    subtitle: 'Identity',
    content: 'Phân biệt Nặng (Sợ hãi) và Nhẹ (Sự thật). Embody Your Future Self — nhập thân vào phiên bản đã thành công.',
    result: 'Ra quyết định từ sự bình an và hào hứng.'
  },
  {
    day: 7,
    title: 'BƯỚC RA THẾ GIỚI',
    subtitle: 'Action',
    content: '"Hành động thay đổi sự thật". Manifestation Blueprint — 3 bước đi tí hon trong 72 giờ tới.',
    result: 'Phá vỡ trì hoãn bằng hành động thực tế.'
  }
];

function DayCard({ day, title, subtitle, content, result, index }: typeof curriculum[0] & { index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 sm:p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
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
          <ChevronDown 
            className={`w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{content}</p>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-primary/10 border-l-4 border-primary">
              <p className="text-xs sm:text-sm font-medium text-foreground">
                <strong className="text-primary">Kết quả:</strong> {result}
              </p>
            </div>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}

export function CurriculumSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Lộ Trình 7 Ngày Chuyển Hóa
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80">
            Awareness → Regulation → Healing → Reprogramming → Integration → Identity → Action
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
