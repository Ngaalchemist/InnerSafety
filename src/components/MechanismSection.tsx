import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";
import { AlarmClock, Wind } from "lucide-react";

const symptoms = [
  "Đêm giật mình tỉnh giấc, tim đập nhanh, đầu óc quay cuồng nghĩ về tiền bạc và tương lai",
  "Cơ thể lúc nào cũng trong trạng thái gồng cứng, vai gáy đau mỏi, hàm nghiến chặt không tự chủ",
  "Chỉ một sự cố nhỏ cũng đủ kích hoạt cơn bùng nổ hoặc khiến bạn rút lui vào im lặng",
  "Một giọng nói ngầm lặp đi lặp lại: \"Mình không đủ giỏi\", \"Mình đang thất bại\", \"Mọi thứ sẽ không bao giờ khá hơn\"",
];

const fears = [
  "Sợ mình đã quá muộn để bắt đầu lại",
  "Sợ người khác không còn nhìn mình bằng sự nể trọng như trước",
  "Sợ nếu thừa nhận mình đang không ổn, mọi người sẽ nghĩ mình yếu đuối",
  "Sợ chỉ cần mình ngừng cố gắng một chút thôi, mọi thứ sẽ sụp đổ",
  "Sợ những người mình thương — con cái, cha mẹ — sẽ phải gánh hậu quả mà đáng lẽ họ không nên gánh",
];

const tried = [
  { label: "Đọc cả chục cuốn sách self-help", note: "hiểu hết trên giấy, nhưng gặp chuyện lại y như cũ" },
  { label: "Ngồi thiền mỗi tối theo app", note: "ngồi yên 10 phút mà đầu vẫn chạy lung tung" },
  { label: "Nghe podcast, tự nhủ phải suy nghĩ tích cực lên", note: "lúc nghe thấy đúng ghê, vài tiếng sau lại quên" },
  { label: "Ép mình phải mạnh mẽ, phải gánh hết", note: "càng ép càng dồn nén, rồi bùng nổ" },
  { label: "Làm việc nhiều hơn để không phải nghĩ", note: "chỉ thấy mệt thêm" },
];

export function MechanismSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#0e1712] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-emerald-900/25 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#C9A24C]/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10 space-y-10 text-gray-200 leading-[1.9] text-base md:text-lg">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif font-bold text-2xl md:text-4xl text-[#F2E6C4] leading-tight text-center mb-4"
        >
          Đây có phải là điều bạn đang trải qua?
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Có thể bạn vừa mất tiền. Có thể bạn vừa mất việc. Có thể một cuộc hôn nhân vừa kết thúc.
          Có thể con bạn đã lớn và rời nhà. Có thể vai trò mà bạn từng tự hào nhất… giờ không còn nữa.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Nhiều năm qua, bạn luôn là người mạnh mẽ nhất trong gia đình. Là chỗ dựa. Là người gánh vác
          và đứng ra giải quyết mọi chuyện. Nhưng bây giờ... đến chính bạn cũng không biết mình phải
          bám vào điều gì để bước tiếp.
        </motion.p>

        <div>
          <p className="font-semibold text-white mb-4">Có phải mỗi ngày của bạn đang diễn ra như thế này?</p>
          <ul className="space-y-2.5 pl-1">
            {symptoms.map((s, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A24C] mt-1">❌</span>
                <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white">
          Và sâu bên dưới tất cả những điều đó… là những nỗi sợ mà bạn hiếm khi dám nói với ai.
        </motion.p>

        <div>
          <ul className="space-y-2.5 pl-1">
            {fears.map((s, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A24C] mt-1">•</span>
                <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-y-2 border-[#C9A24C]/40 py-7 px-4 text-center"
        >
          <p className="font-serif text-lg md:text-xl text-[#F2E6C4] leading-relaxed">
            Thế là bạn lại tiếp tục: Cố gắng → Kiệt sức → Tự trách → Rồi lại cố gắng. Cứ như vậy...
            ngày này qua ngày khác. Không ai từng nói với bạn rằng sẽ có một giai đoạn như thế trong
            cuộc đời. Cũng không ai dạy bạn phải đi qua nó như thế nào.
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif font-bold text-2xl md:text-4xl text-[#F2E6C4] leading-tight text-center pt-6"
        >
          Vì sao điều này xảy ra với bạn
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Nếu bạn đã thử rất nhiều cách mà vẫn không khá hơn... có thể vấn đề chưa bao giờ nằm ở ý chí
          hay năng lực của bạn. Có một cách nghĩ khác, đơn giản hơn nhiều, có thể giúp bạn nhẹ lòng
          ngay bây giờ.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Bạn còn nhớ lần đầu tiên nhìn ai đó làm bánh không? Muốn có một chiếc bánh mới… Trứng phải
          vỡ. Bột phải bị trộn. Đường thì biến mất vào một đống dính nhớp trông chẳng ra hình thù gì.
          Nếu chỉ nhìn vào khoảnh khắc ấy, ai cũng sẽ nghĩ: "Hỏng hết rồi." Nhưng người làm bánh thì
          biết... Đó không phải là kết thúc. Đó là một phần của quá trình.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Khi đống lộn xộn ấy được cho vào lò, sức nóng sẽ làm mọi thứ tan ra, hòa vào nhau, và một
          cái bánh thơm ngon ra đời. Cái bánh đó không thể có, nếu không có lúc trứng vỡ, bột bay và
          mọi thứ trông như hỏng bét.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Có lẽ những gì đang vỡ vụn trong cuộc đời bạn lúc này cũng vậy. Những mất mát… những biến
          cố… những điều đang khiến bạn tưởng như mình vỡ vụn… Có thể không đến để phá hủy bạn. Mà để
          nung chảy những gì đã cũ không còn phù hợp, để một phiên bản trưởng thành hơn của chính bạn
          được hình thành.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-y-2 border-[#C9A24C]/40 py-7 px-4 text-center"
        >
          <p className="font-serif text-xl md:text-2xl text-[#F2E6C4] leading-relaxed">
            Bạn không hỏng. Bạn chỉ đang ở trong lò nung.
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif font-bold text-2xl md:text-4xl text-[#F2E6C4] leading-tight text-center pt-6"
        >
          Vì sao bạn vẫn chưa khá hơn?
        </motion.h2>

        <div>
          <p className="font-semibold text-white mb-4">Bạn đã thử rất nhiều cách:</p>
          <ul className="space-y-3 pl-1">
            {tried.map((t, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A24C] mt-1">•</span>
                <span>
                  {t.label} <span className="italic text-gray-400">({t.note})</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white">
          Nhưng không ăn thua. Không phải vì bạn kém cỏi hay không cố gắng. Mà vì bạn đang cố sửa một
          chuyện ở trong người bằng cách chỉ nghĩ trong đầu.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Khi bạn đang run rẩy vì sợ hãi, câu nói "Đừng sợ nữa, nghĩ tích cực lên" hoàn toàn vô tác
          dụng. Nỗi sợ không nằm ở suy nghĩ — nỗi sợ đang đóng băng trong hệ thần kinh và tế bào của bạn.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif font-bold text-2xl md:text-4xl text-[#F2E6C4] leading-tight text-center pt-6 flex items-center justify-center gap-3"
        >
          <AlarmClock className="w-7 h-7 md:w-9 md:h-9 text-[#C9A24C]" />
          Vì sao cơ thể bạn lại phản ứng như vậy?
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Hãy tưởng tượng cơ thể bạn có một hệ thống báo động sinh tồn. Bình thường, chuông chỉ kêu
          khi có nguy hiểm thật — như có xe sắp tông vào bạn. Lúc đó tim đập nhanh, người run lên, để
          bạn né kịp. Rất hữu ích.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Nhưng khi bạn gặp biến cố lớn (mất tiền, mất việc, chia tay), cơ thể không phân biệt được
          nỗi đau tâm lý hay nguy hiểm chết người. Với nó, tất cả đều là BÁO ĐỘNG ĐỎ.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Thế là chuông cứ kêu mãi. Ngay cả khi bạn đang ngồi yên trên ghế, an toàn, không ai đuổi
          theo bạn cả — cơ thể bạn vẫn tưởng đang gặp nguy hiểm. Đó là lý do bạn mất ngủ, tim đập
          nhanh, hay cáu, đầu không ngừng nghĩ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 border-y-2 border-[#C9A24C]/40 py-7 px-4"
        >
          <Wind className="w-8 h-8 text-[#C9A24C] flex-shrink-0 mt-1" />
          <p className="font-serif text-lg md:text-xl text-[#F2E6C4] leading-relaxed">
            Đây không phải vì bạn yếu đuối. Đây là cơ thể bạn đang mắc kẹt trong Trạng thái Sinh tồn
            Chạy ngầm. Muốn bình yên, việc đầu tiên là phải tắt cái chuông báo động đó đi.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center pt-4">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A24C] text-[#0e1712] hover:bg-[#E4C77E] rounded-sm px-10 py-5" data-testid="button-cta-mechanism">
            Tôi Muốn Tắt Chuông Báo Động Này — Chỉ 1.111.111đ
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
