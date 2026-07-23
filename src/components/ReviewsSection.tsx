import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import review1 from "@/assets/images/reviews/review-1.jpg";
import review2 from "@/assets/images/reviews/review-2.jpg";
import review3 from "@/assets/images/reviews/review-3.jpg";

const reviews = [
  {
    img: review1,
    name: "Chị N, 35 tuổi",
    tag: "Nhạy cảm, nhiều nỗi sợ, lệ thuộc cảm xúc — vừa trải qua biến cố tình cảm",
    caption: "Sau 7 ngày của hành trình",
  },
  {
    img: review2,
    name: "Anh T, 39 tuổi",
    tag: "Mất ngủ, cảm giác nặng nề, luôn lo âu bất an — vừa trải qua biến cố trong công việc",
    caption: "Sau 7 ngày của hành trình",
  },
  {
    img: review3,
    name: "Chị H, 41 tuổi",
    tag: "Vừa trải qua biến cố lớn trong tình cảm và hôn nhân",
    caption: "Sau 7 ngày của hành trình",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-24 bg-[#12201a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#C9A24C]/8 blur-[130px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <Quote className="w-8 h-8 text-[#C9A24C] mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F2E6C4] mb-3">
            Bạn không phải người duy nhất từng cảm thấy như vậy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A24C]/50 hover:shadow-[0_20px_50px_rgba(201,162,76,0.25)] transition-shadow"
              style={{ transformOrigin: "center" }}
            >
              <div className="p-3 pb-0">
                <img src={r.img} alt={r.name} className="w-full h-auto rounded-xl block" />
              </div>
              <div className="p-5">
                <p className="font-serif font-bold text-[#F2E6C4] text-base md:text-lg">{r.name}</p>
                <p className="text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">{r.tag}</p>
                <p className="text-[#C9A24C] text-xs md:text-sm mt-3 uppercase tracking-wide">{r.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
