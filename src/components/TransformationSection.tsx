import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { CtaButton, TrustBar } from "./CtaButton";

const rows = [
  {
    before: "Luôn bất an, không biết tương lai sẽ ra sao, nhiều nỗi sợ bủa vây",
    after: "Cảm nhận được sự bình an nội tâm, ngay cả khi hoàn cảnh bên ngoài chưa rõ ràng",
  },
  {
    before: "Hoảng loạn, tim đập nhanh, mất ngủ mỗi khi nghĩ đến tiền hoặc tương lai",
    after: "Biết tự điều hòa hệ thần kinh trong vài phút, thay vì để cảm xúc cuốn đi cả đêm",
  },
  {
    before: "Overthinking không dứt, đầu óc luôn phân tích và tưởng tượng điều tệ nhất",
    after: "Có thể đưa sự chú ý trở về hiện tại, thay vì sống trong những kịch bản chưa xảy ra",
  },
  {
    before: "Niềm tin \"Tôi không đủ\" âm thầm điều khiển mọi quyết định",
    after: "Xây được nền tảng tự trọng: \"Tôi là đủ\" — không phụ thuộc vào thành tựu bên ngoài",
  },
  {
    before: "Tự trách bản thân sau mỗi biến cố: \"Giá như ngày đó...\"",
    after: "Nhìn lại biến cố bằng lòng tự từ bi, thay vì tiếp tục dằn vặt chính mình",
  },
  {
    before: "Tiền bạc là nỗi sợ thường trực, né tránh nhìn thẳng vào tài chính. Cố gồng mình gánh vác đến mức kiệt sức",
    after: "Tiền trở thành dòng chảy và công cụ kiến tạo, không còn là nỗi ám ảnh",
  },
  {
    before: "Không dám từ chối, ôm đồm trách nhiệm của người khác đến kiệt sức",
    after: "Biết đặt ranh giới lành mạnh và nói \"Không\" mà không có lỗi",
  },
];

export function TransformationSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#0e1712] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-emerald-900/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-white">
            HÀNH TRÌNH CHUYỂN HÓA <span className="text-[#C9A24C]">BẠN SẼ TRẢI QUA</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Đừng để những biến cố tiếp tục quyết định thay bạn con người mà bạn sẽ trở thành. Cảm giác
            an toàn bên trong bạn có thể gần hơn bạn nghĩ, bạn chỉ cần đúng hệ thống để làm điều đó xảy ra.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 mb-4 px-1 mt-10">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
              <X className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-400 text-xs md:text-sm cta-label uppercase">Trước</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-6 h-6 rounded-full bg-[#C9A24C] flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-[#0e1712]" />
            </div>
            <span className="text-[#F2E6C4] text-xs md:text-sm cta-label uppercase">Sau</span>
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
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A24C] text-[#0e1712] hover:bg-[#E4C77E] rounded-sm px-10 py-5" data-testid="button-cta-transformation">
            Tôi Muốn Bắt Đầu Chuyển Hóa
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
