import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

const struggles = [
  "Luôn bất an, không biết tương lai sẽ ra sao, sợ mất tất cả lần nữa",
  "Overthinking đến mức không ngủ được — về tiền, về con cái, về những quyết định đã qua",
  "Tim đập nhanh, ngực nghẹn lại mỗi khi nghĩ đến tài chính hoặc tương lai",
  "Tự trách bản thân: \"Giá như ngày đó...\", \"Tại mình...\"",
  "Cảm thấy cô độc — không dám kể với ai vì luôn phải là người mạnh mẽ",
];

const tried = [
  { label: "Đọc sách self-help, nghe podcast truyền động lực", note: "hiểu lý thuyết, nhưng gặp chuyện lại phản ứng y hệt cũ" },
  { label: "Tự nhủ phải tích cực hơn, mạnh mẽ hơn", note: "càng cố càng kiệt sức" },
  { label: "Thiền tự học qua app", note: "đầu óc vẫn chạy ngay khi vừa nhắm mắt" },
  { label: "Làm việc nhiều hơn để quên đi", note: "đó là né tránh, không phải chữa lành" },
  { label: "Đi trị liệu vài buổi rồi dừng", note: "vì chưa đủ thời gian, chi phí, hoặc chưa thấy đổi thay rõ ràng" },
];

const insights = [
  "Overthinking không phải \"suy nghĩ nhiều quá\" — đó là hệ thần kinh đang cố kiểm soát một điều nó cảm thấy không an toàn",
  "Nỗi sợ mất tiền thường không chỉ vì thiếu tiền — mà vì \"mất tiền = mình thất bại\", một cú sốc về danh tính",
  "Cảm giác \"mình không đủ\" thường không đến từ hiện tại — mà là một niềm tin cũ được kích hoạt lại bởi biến cố",
  "Một bộ não đang ở chế độ sinh tồn không thể tiếp nhận niềm tin mới, dù bạn cố \"nghĩ tích cực\" bao nhiêu",
];

const outcomes = [
  "Điều hòa hệ thần kinh mỗi khi lo âu chỉ trong vài phút, bằng một bộ công cụ thực hành cụ thể",
  "Hiểu và bắt đầu chuyển hóa những nỗi sợ cốt lõi, thay vì bị chúng điều khiển",
  "Giảm overthinking, biết cách đưa sự chú ý trở về hiện tại",
  "Thay thế niềm tin \"Tôi không đủ\" bằng nền tảng tự trọng và lòng tự từ bi",
  "Chữa lành mối quan hệ với tiền theo hướng chủ động, không còn né tránh hay ám ảnh",
  "Có một quy trình cụ thể để tiếp tục nuôi dưỡng sự bình an sau khi khóa học kết thúc",
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
          Phương pháp đang giúp nhiều người vượt qua khủng hoảng tuổi trung niên chuyển từ<br className="hidden md:block" />
          "sống để sinh tồn" sang "sống để kiến tạo" — chỉ trong 7 ngày
        </motion.h2>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-l-2 border-[#C9A84C]/50 pl-5 italic text-gray-300"
        >
          "Điều khiến mình đau nhất không phải là những gì đã mất. Mà là mình không còn biết mình
          là ai, nếu không còn những thứ đó."
        </motion.blockquote>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Có một khoảnh khắc mà gần như ai bước vào tuổi trung niên cũng sẽ trải qua. Không ai nói
          về nó. Không ai chuẩn bị cho nó. Và khi nó đến, chúng ta thường nghĩ: "Có điều gì đó đã sai
          với mình."
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Có người gặp nó sau một cuộc ly hôn. Có người sau khi mất công ty, mất một khoản tiền lớn.
          Có người khi cha mẹ qua đời, khi con cái rời khỏi nhà. Có người không có biến cố gì cả —
          nhưng một buổi sáng thức dậy, họ không còn nhận ra chính mình.
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

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-y-2 border-[#C9A84C]/40 py-7 px-4 text-center"
        >
          <p className="font-serif text-lg md:text-xl text-[#F5D78E] leading-relaxed">
            Bạn không cần chữa lành vì bạn bị hỏng. <br className="hidden md:block" />
            Bạn cần chữa lành vì hệ thần kinh của bạn đã <span className="italic">quên mất cảm giác an toàn.</span>
          </p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Khi một con người mất đi những cột trụ bên ngoài — tiền bạc, sự nghiệp, một mối quan hệ,
          một vai trò — não bộ hiểu rằng "mình không còn an toàn", và hệ thần kinh tự động chuyển
          sang chế độ sinh tồn. Nó không quan tâm bạn từng thành công đến đâu hay đã đọc bao nhiêu
          cuốn sách chữa lành. Nó chỉ làm đúng một việc: cố giữ bạn sống sót.
        </motion.p>

        <div>
          <p className="font-semibold text-white mb-4">Điều khiến nhiều người bất ngờ:</p>
          <p className="mb-4">
            Theo lý thuyết Đa Phế Vị (Polyvagal Theory) trong khoa học thần kinh, phần lớn phản ứng lo
            âu, mất ngủ và overthinking khi gặp biến cố lớn không phải là dấu hiệu của sự yếu đuối —
            mà là cách hệ thần kinh cố gắng bảo vệ bạn theo bản năng sinh tồn.
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
          Và điều đáng lo nhất: phần lớn người đang khủng hoảng tuổi trung niên đang cố "giải quyết
          bằng lý trí" một vấn đề nằm ở hệ thần kinh — nên càng cố, càng kiệt sức. Chưa ai chỉ cho họ
          cách nói chuyện trực tiếp với hệ thần kinh của chính mình.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Đó là lý do <span className="font-semibold text-[#F5D78E]">Inner Safety Method™</span> ra
          đời — không bắt đầu từ suy nghĩ, không bắt đầu từ khẳng định tích cực, không bắt đầu từ ép
          bản thân phải mạnh mẽ. Phương pháp đi qua 7 tầng chuyển hóa:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-center py-2"
        >
          {["Understand", "Regulate", "Release", "Reframe", "Recode", "Reconnect", "Recreate"].map((step, i, arr) => (
            <span key={step} className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full border border-[#C9A84C]/40 text-[#F5D78E] text-xs md:text-sm font-semibold tracking-wide">
                {step}
              </span>
              {i < arr.length - 1 && <span className="text-[#C9A84C]/50">→</span>}
            </span>
          ))}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Hiểu — điều hòa — giải phóng — tìm ý nghĩa — cài đặt lại niềm tin — kết nối — và tích hợp
          vào đời sống thực. Kết hợp điều hòa hệ thần kinh, thôi miên trị liệu để tiếp cận trực tiếp
          tiềm thức, và tái lập trình niềm tin cốt lõi.
        </motion.p>

        <div>
          <p className="font-semibold text-white mb-4">Sau 7 ngày, bạn có thể:</p>
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
            TÔI MUỐN BẮT ĐẦU NGAY HÔM NAY — CHỈ 1.990.000Đ
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
