import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Home } from "lucide-react";

const faqs = [
  {
    q: "Tôi chưa từng thiền, chưa từng thôi miên trị liệu — có học được không?",
    a: "Hoàn toàn được. Chương trình được thiết kế cho người mới bắt đầu, mỗi bài đều có hướng dẫn từng bước cụ thể.",
  },
  {
    q: "Tôi có phải chia sẻ những chuyện riêng tư của mình không?",
    a: "Không. Đây là hành trình cá nhân, bạn thực hành một mình theo tốc độ riêng, không cần công khai hay chia sẻ với ai.",
  },
  {
    q: "Tôi cần có kinh nghiệm về chữa lành/tâm linh trước đó không?",
    a: "Không cần. Mọi khái niệm đều được giải thích lại từ đầu, theo đúng thứ tự dễ tiếp thu.",
  },
  {
    q: "Tôi đang trong quá trình trị liệu tâm lý — tôi có nên tham gia không?",
    a: "Được, chương trình có thể bổ trợ tốt cho quá trình trị liệu của bạn. Tuy nhiên đây không phải dịch vụ thay thế điều trị y tế/tâm lý chuyên sâu — nếu bạn đang gặp khủng hoảng nghiêm trọng, hãy tiếp tục đồng hành cùng chuyên gia của mình song song.",
  },
  {
    q: "Chương trình có phù hợp với tôi không?",
    a: "Nếu bạn đang trải qua mất mát, biến cố hoặc cảm giác mất phương hướng ở tuổi trung niên và muốn tìm lại sự vững vàng bên trong — đây chính là dành cho bạn.",
  },
  {
    q: "Tôi có xem lại được sau khi khóa học kết thúc không?",
    a: "Có. Bạn được truy cập trọn đời, học lại bất cứ lúc nào bạn cần.",
  },
  {
    q: "Nếu tôi gặp khó khăn trong lúc học, có ai hỗ trợ không?",
    a: "Có — bạn được tham gia cộng đồng riêng của học viên và nhận hỗ trợ khi cần.",
  },
  {
    q: "Nếu tôi bận thì sao?",
    a: "Không sao. Mỗi bài học chỉ khoảng 15–20 phút và bạn có thể học bất cứ lúc nào phù hợp với lịch của mình. Bạn cũng được truy cập trọn đời, nên không có áp lực phải hoàn thành đúng trong 7 ngày.",
  },
  {
    q: "Tôi lớn tuổi có học được không?",
    a: "Hoàn toàn được. Rất nhiều học viên của mình ở độ tuổi 40–60, chưa từng thiền hay học chữa lành trước đó. Chương trình được hướng dẫn từng bước, đơn giản và dễ thực hành cho cả người mới bắt đầu.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 bg-[#FAF6EC] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Home className="w-7 h-7 text-[#A67C2E]" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#16241c]">Vì sao chỉ cần 7 ngày?</h2>
          <p className="mt-4 text-[#3F5C48] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Bạn sẽ không hết đau hết buồn hoàn toàn chỉ sau 7 ngày. Không ai làm được vậy, ai nói vậy
            là đang nói dối bạn. Nhưng 7 ngày đủ để làm một việc quan trọng hơn nhiều: dựng lại cái nền.
          </p>
          <p className="mt-3 text-[#3F5C48] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Giống như xây nhà — bạn không cần xây xong cả căn nhà trong 7 ngày. Nhưng nếu cái nền
            chắc, bạn có thể tự xây tiếp phần còn lại, mà không sợ nhà sập nữa. 7 ngày này giúp bạn có
            một cơ thể biết tự làm dịu mình khi hoảng, vài công cụ nhỏ mang theo dùng cả đời, và một
            cái nền vững để từ đó tự đi tiếp.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14">
          <div className="flex items-center gap-2 justify-center mb-6">
            <HelpCircle className="w-6 h-6 text-[#A67C2E]" />
            <h3 className="font-serif font-bold text-xl md:text-2xl text-[#16241c]">Hỏi Đáp</h3>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-[#C9A24C]/25">
                <AccordionTrigger className="text-left font-semibold text-[#16241c] hover:no-underline text-sm md:text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#3F5C48] text-sm md:text-base leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
