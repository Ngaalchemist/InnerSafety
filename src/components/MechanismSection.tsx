import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

const struggles = [
  "Nửa đêm tỉnh giấc, tim đập nhanh, đầu óc quay cuồng nghĩ về tiền bạc và tương lai",
  "Căng cứng cơ thể, nghiến chặt hàm mà không biết vì sao",
  "Overthinking đến mức không thể tập trung vào công việc hay người thân",
  "Nổi cáu với người mình yêu thương nhất chỉ vì một chuyện rất nhỏ",
  "Một tiếng nói trong đầu liên tục nhắc: \"Mình không đủ. Mình đang thất bại.\"",
];

const tried = [
  { label: "Đọc hàng chục cuốn sách self-help", note: "hiểu lý thuyết, nhưng cơ thể vẫn phản ứng y như cũ mỗi khi có chuyện" },
  { label: "Thiền theo app mỗi tối", note: "ngồi yên 10 phút nhưng đầu vẫn chạy hàng trăm suy nghĩ" },
  { label: "Tự nhủ \"phải mạnh mẽ lên, phải cố gắng hơn\"", note: "chỉ dồn nén cảm xúc, đến khi bùng nổ không kiểm soát được" },
  { label: "Làm việc nhiều hơn để \"quên đi\"", note: "chỉ khiến kiệt sức và xa cách người thân hơn" },
  { label: "Nói chuyện với bạn bè thân", note: "được an ủi tạm thời nhưng nỗi bất an vẫn quay lại vào 2 giờ sáng" },
];

const insights = [
  "Khủng hoảng tuổi trung niên không phải là \"yếu đuối\" — đó là hệ thần kinh đang phơi bày những niềm tin sinh tồn đã bị chôn giấu suốt hàng chục năm",
  "Cơ thể có thể ở trạng thái báo động hoặc đóng băng trong nhiều năm mà bạn chỉ thấy \"mệt mỏi\", \"dễ cáu\", \"mất ngủ\"",
  "Tiềm thức lưu giữ niềm tin về tiền bạc và giá trị bản thân được cài đặt từ thời thơ ấu, và chúng kích hoạt mạnh hơn khi có biến cố ở tuổi trung niên",
  "Chữa lành thật sự cần đi từ cơ thể (somatic) trước, rồi mới đến tư duy — \"nói chuyện\" với một hệ thần kinh đang báo động thường không có tác dụng",
];

const outcomes = [
  "Gọi tên chính xác điều đang khiến mình bất an, thay vì chỉ thấy \"mệt mỏi\" chung chung",
  "Điều hòa hệ thần kinh trong vài phút, thay vì để cảm xúc cuốn đi cả buổi tối",
  "Chữa lành nỗi sợ tài chính mà không cần đợi hoàn cảnh thay đổi trước",
  "Đặt ranh giới rõ ràng mà không thấy tội lỗi",
  "Tin lại vào giá trị bản thân — không phụ thuộc vào thành tựu bên ngoài",
];

export function MechanismSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-violet-800/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10 space-y-10 text-gray-200 leading-[1.9] text-base md:text-lg">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif font-bold text-2xl md:text-4xl text-[#F5D78E] leading-tight text-center mb-4"
        >
          Phương pháp đang giúp hàng trăm người 35-48 tuổi chuyển từ<br className="hidden md:block" />
          "sinh tồn mỗi ngày" sang "an toàn từ bên trong" — chỉ trong 7 ngày
        </motion.h2>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-l-2 border-[#C9A84C]/50 pl-5 italic text-gray-300"
        >
          "Tôi cứ nghĩ mình đang suy sụp. Đến khi nhìn lại, tôi mới nhận ra: đây không phải là một
          sự sụp đổ — đó là hệ thần kinh của tôi lần đầu tiên lên tiếng."
        </motion.blockquote>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Có một buổi tối, sau một biến cố tài chính hay một cuộc nhìn lại 20 năm sự nghiệp, bạn
          ngồi lại và tự hỏi: "Sao đến tuổi này rồi mà mình vẫn thấy bất an như vậy? Sao mọi thứ lại
          sụp xuống đúng lúc mình tưởng đã ổn định?"
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Bạn từng nghĩ vấn đề nằm ở hoàn cảnh — công việc, tài chính, các mối quan hệ. Rồi bạn nhận
          ra: mỗi lần biến cố xảy ra, cùng một cảm giác quay lại — hoảng loạn, tự trách, rồi kiệt sức
          vì cố gắng kiểm soát mọi thứ.
        </motion.p>

        <div>
          <p className="font-semibold text-white mb-4">Mỗi ngày trôi qua, cuộc chiến bên trong bạn vẫn là:</p>
          <ul className="space-y-2.5 pl-1">
            {struggles.map((s, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A84C] mt-1">•</span>
                <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-4">Bạn đã từng cố mọi cách người ta mách:</p>
          <ul className="space-y-3 pl-1">
            {tried.map((t, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A84C] mt-1">•</span>
                <span>
                  {t.label} <span className="italic text-gray-400">({t.note})</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white">
          Và đỉnh điểm là cái đêm bạn nhận ra: vấn đề không phải vì bạn thiếu cố gắng. Vấn đề là
          không ai từng chỉ bạn cách làm việc với hệ thần kinh của chính mình — nơi thực sự đang giữ
          nỗi sợ, chứ không phải cái đầu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-y-2 border-[#C9A84C]/40 py-7 px-4 text-center"
        >
          <p className="font-serif text-lg md:text-xl text-[#F5D78E] leading-relaxed">
            Rồi mọi thứ thay đổi khi bạn hiểu ra một điều: nỗi bất an không nằm ở suy nghĩ — nó nằm
            trong <span className="italic">hệ thần kinh</span>. Cơ thể bạn vẫn đang phản ứng như thể
            đang gặp nguy hiểm sinh tồn, dù trên lý trí bạn biết mình an toàn.
          </p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Những học viên đã hiểu và thực hành theo phương pháp này chia sẻ rằng: lần đầu tiên họ
          ngủ lại được trọn giấc, lần đầu tiên họ không còn giật mình mỗi khi điện thoại reo vì hóa
          đơn — không phải vì hoàn cảnh đã thay đổi, mà vì bên trong họ đã vững hơn.
        </motion.p>

        <div>
          <p className="font-semibold text-white mb-4">Điều khiến nhiều người bất ngờ:</p>
          <p className="mb-4">
            Theo Polyvagal Theory (Dr. Stephen Porges) và các công trình về sang chấn của Peter
            Levine, Bessel van der Kolk: phần lớn phản ứng khi bị đe dọa mất an toàn được hình
            thành từ những trải nghiệm rất sớm — không phải điều bạn "chọn", mà là điều hệ thần
            kinh của bạn đã học để sinh tồn.
          </p>
          <ul className="space-y-2.5 pl-1">
            {insights.map((s, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A84C] mt-1">•</span>
                <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white">
          Và điều đáng lo nhất: phần lớn người 35-48 tuổi đang vô tình làm trầm trọng thêm khủng
          hoảng của chính mình — bằng cách cố "suy nghĩ tích cực hơn" hoặc "làm việc chăm hơn"
          trong khi hệ thần kinh vẫn đang trong trạng thái sinh tồn.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Phương pháp <span className="font-semibold text-[#F5D78E]">Inner Safety Method™</span> được
          hệ thống hóa lại thành một lộ trình 7 ngày dễ thực hành, kết hợp điều hòa hệ thần kinh,
          chữa lành cảm xúc, tái lập trình tiềm thức và thực hành tâm linh — không cần nền tảng tâm
          lý học trước đó.
        </motion.p>

        <div>
          <p className="font-semibold text-white mb-4">Nhờ vậy, học viên có thể:</p>
          <ul className="space-y-2.5 pl-1">
            {outcomes.map((s, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A84C] mt-1">•</span>
                <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center pt-4">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A84C] text-[#140728] hover:bg-[#E8C96A] rounded-none px-10 py-5" data-testid="button-cta-mechanism">
            TÔI MUỐN BẮT ĐẦU NGAY HÔM NAY — CHỈ 444.000Đ
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
