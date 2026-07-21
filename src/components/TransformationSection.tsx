import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { CtaButton, TrustBar } from "./CtaButton";

const rows = [
  {
    before: "Hoảng loạn, khó ngủ, tim đập nhanh không rõ lý do",
    after: "Ngủ sâu, thức dậy thấy nhẹ nhõm, cơ thể không còn trong trạng thái báo động",
  },
  {
    before: "Overthinking liên tục, không thể tắt được \"cái đầu\"",
    after: "Tâm trí yên tĩnh hơn, phản ứng bình tĩnh trước biến cố thay vì cuốn theo nó",
  },
  {
    before: "Ám ảnh về tiền bạc, luôn thấy thiếu thốn dù đã cố gắng rất nhiều",
    after: "Cảm giác đủ đầy nội tâm, không còn hoảng loạn mỗi khi nghĩ đến tài chính",
  },
  {
    before: "Tự trách, tự ghét bản thân, luôn thấy \"mình không đủ\"",
    after: "Tin tưởng giá trị bản thân, ngừng tự trách sau mỗi lần vấp ngã",
  },
  {
    before: "Bùng nổ cảm xúc với người thân yêu rồi lại tự trách bản thân",
    after: "Làm chủ cảm xúc, kết nối lại gần gũi hơn với người thân",
  },
  {
    before: "Kiệt sức vì luôn phải gồng gánh, không dám từ chối ai",
    after: "Biết đặt ranh giới rõ ràng, giữ được năng lượng cho chính mình",
  },
];

export function TransformationSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#1a0a2e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-violet-800/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-white">
            SỰ CHUYỂN HÓA <span className="text-[#F5D78E]">BẠN CÓ THỂ MONG ĐỢI</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Đừng để khủng hoảng tuổi trung niên tiếp tục chi phối cuộc sống của bạn. Sự bình an mà
            bạn đang tìm kiếm có thể gần hơn bạn nghĩ — bạn chỉ cần đúng hệ thống để biến nó thành
            hiện thực.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 mb-4 px-1 mt-10">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
              <X className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-400 text-xs md:text-sm font-bold tracking-widest uppercase">Trước</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-[#140728]" />
            </div>
            <span className="text-[#F5D78E] text-xs md:text-sm font-bold tracking-widest uppercase">Sau</span>
          </div>
        </div>

        <div className="space-y-3">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="grid grid-cols-2 gap-4 bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="p-4 md:p-5 border-r border-white/10">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{r.before}</p>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-gray-100 text-sm md:text-base leading-relaxed">{r.after}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A84C] text-[#1a0a2e] hover:bg-[#E8C96A] rounded-xl px-10 py-5" data-testid="button-cta-transformation">
            TÔI MUỐN CHUYỂN HÓA NGAY — CHỈ 444.000Đ
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
