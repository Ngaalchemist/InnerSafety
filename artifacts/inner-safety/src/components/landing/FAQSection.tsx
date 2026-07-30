import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Khóa học này phù hợp với ai?',
    answer: 'Người đã đi một chặng đường phát triển bản thân nhưng vẫn cảm thấy bị kéo lại bởi những nỗi sợ vô hình — dân văn phòng, freelancer, content creator, coach, healer, hoặc ai đó đang muốn chuyển hướng cuộc sống nhưng chưa dám bước ra.'
  },
  {
    question: 'Tôi không có nhiều kinh nghiệm thiền hay tâm linh, có học được không?',
    answer: 'Hoàn toàn được. Khóa học này không yêu cầu kiến thức nền. Inner Safety Method™ được thiết kế để ai cũng có thể áp dụng được, dù bạn đang bắt đầu hay đã có hành trình dài.'
  },
  {
    question: 'Sau 7 ngày, tôi sẽ nhận được gì?',
    answer: 'Bạn sẽ hiểu nỗi sợ của mình đến từ đâu, có công cụ để làm dịu hệ thần kinh ngay khi bị trigger, và bắt đầu ra quyết định từ sự rõ ràng thay vì sự hoảng loạn. Không phải hết sợ — mà sợ không còn điều khiển bạn nữa.'
  },
  {
    question: 'Tôi có bao lâu để hoàn thành khóa học?',
    answer: 'Khóa học được thiết kế để hoàn thành trong 7 ngày, mỗi ngày khoảng 30–45 phút. Bạn sẽ có quyền truy cập trọn đời sau khi đăng ký.'
  },
  {
    question: 'Nếu không phù hợp, tôi có được hoàn tiền không?',
    answer: 'Có. Chúng tôi cam kết hoàn tiền 100% trong vòng 7 ngày nếu bạn cảm thấy khóa học không phù hợp.'
  },
  {
    question: 'Giá 111.000đ có đúng không? Sao rẻ vậy?',
    answer: 'Đúng vậy. Đây là giá ra mắt đặc biệt — Nga muốn nhiều người nhất có thể tiếp cận được phương pháp này. Giá gốc sẽ là 1.297.000 VNĐ sau đợt ra mắt.'
  }
];

function FAQItem({ question, answer, index }: typeof faqs[0] & { index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="border-b border-border/30 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 sm:py-6 flex items-start justify-between gap-4 hover:text-primary transition-colors"
        data-testid={`faq-question-${index}`}
      >
        <span className="text-base sm:text-lg md:text-xl font-serif font-semibold text-foreground">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 sm:pb-6 text-sm sm:text-base text-foreground/80 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function FAQSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-4 sm:mb-6">
            Câu Hỏi Thường Gặp
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
