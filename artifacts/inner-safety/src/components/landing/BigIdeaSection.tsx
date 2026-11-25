import {
  BookOpen,
  Flower2,
  Hourglass,
  Brain,
  Settings,
  Users,
  ShieldHalf,
  RefreshCw,
  Infinity as InfinityIcon,
} from "lucide-react";

/**
 * Ảnh nền: lưu ảnh thứ 2 (nền tím, cô gái + rễ cây + cổng vòm, KHÔNG có chữ)
 * vào: artifacts/inner-safety/public/big-idea-bg.jpg
 */
const BG_SRC = "/big-idea-bg.jpg";

const facts = [
  { icon: BookOpen, text: "Đã thiền." },
  { icon: Flower2, text: "Đã chữa lành." },
  { icon: InfinityIcon, text: "Đã hiểu về niềm tin, tiềm thức, năng lượng, manifestation." },
];

const traits = [
  { icon: Hourglass, label: "trì hoãn" },
  { icon: Brain, label: "tự nghi ngờ" },
  { icon: Settings, label: "kiểm soát" },
  { icon: Users, label: "làm hài lòng" },
  { icon: ShieldHalf, label: "thu mình" },
  { icon: RefreshCw, label: "quay về\nđiều quen thuộc" },
];

export default function BigIdeaSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#12061c] text-white [container-type:inline-size] lg:aspect-video">
      {/* ===== Nền ===== */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_40%,#2a0f3d_0%,#14061f_60%,#0d0415_100%)]" />
      <img
        src={BG_SRC}
        alt=""
        aria-hidden
        className="absolute -z-10 h-full w-full object-cover opacity-40 lg:left-[13.5cqw] lg:top-[1cqw] lg:h-auto lg:w-[100cqw] lg:max-w-none lg:opacity-100"
      />
      {/* lớp tối bên trái để chữ dễ đọc */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#12061c]/90 via-[#12061c]/55 to-transparent lg:from-[#12061c]/70 lg:via-[#12061c]/25 lg:to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-gradient-to-t from-[#12061c]/70 to-transparent" />

      {/* ===== Nội dung ===== */}
      <div className="relative z-10 h-full">
        <div className="flex h-full flex-col px-6 py-10 lg:px-[6.3cqw] lg:py-[2cqw]">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[#f2c879] lg:mb-[1.1cqw] lg:gap-[.8cqw]">
              <span aria-hidden className="h-px w-10 bg-[#f2c879] lg:w-[3.9cqw]" />
              <Flower2 className="h-6 w-6 lg:h-[2cqw] lg:w-[2cqw]" strokeWidth={1.4} />
              <span className="text-xs font-semibold tracking-[.28em] lg:text-[1.1cqw]">BEYOND FEAR</span>
              <span aria-hidden className="h-px w-10 bg-[#f2c879] lg:w-[3.9cqw]" />
            </div>

            <h2 className="max-w-[680px] font-serif text-[clamp(2.65rem,9vw,4.2rem)] font-medium leading-[.96] tracking-[-.02em] text-[#fff3dc] lg:max-w-none lg:text-[3.7cqw]">
              Bạn không thiếu<br />kiến thức.
            </h2>
            <div aria-hidden className="mb-4 mt-2 h-[2px] w-[92%] bg-gradient-to-r from-[#f2c879] via-[#fff0ce] to-transparent shadow-[0_0_12px_#f2c879] lg:mb-[1.3cqw] lg:mt-[.3cqw] lg:w-[33cqw]" />

            <p className="mb-2 text-base font-semibold text-white lg:mb-[.6cqw] lg:text-[1.25cqw]">Có thể bạn đã đọc rất nhiều.</p>
            <ul className="mb-4 space-y-1.5 pl-2 text-base leading-snug text-white/95 lg:mb-[.9cqw] lg:space-y-[.25cqw] lg:pl-[.9cqw] lg:text-[1.25cqw]">
              {facts.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 lg:gap-[1.2cqw]">
                  <Icon className="h-7 w-7 shrink-0 text-[#ffd9a0] drop-shadow-[0_0_6px_#ff9366] lg:h-[2.7cqw] lg:w-[2.7cqw]" strokeWidth={1.4} />
                  <span className="lg:max-w-[20cqw]">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mb-3 border-l-2 border-[#f2c879]/80 py-0.5 pl-4 lg:mb-[.8cqw] lg:pl-[1.4cqw]">
              <p className="text-base leading-snug text-white lg:text-[1.25cqw]">Nhưng đôi khi...</p>
              <p className="text-base font-bold leading-snug text-[#ffc64d] lg:max-w-[34cqw] lg:text-[1.25cqw]">
                biết mình cần làm gì không đồng nghĩa với việc mình có thể làm được điều đó một cách tự nhiên.
              </p>
            </div>

            <p className="mb-3 max-w-[650px] text-sm leading-snug text-white/95 lg:mb-[.9cqw] lg:max-w-[35cqw] lg:text-[1.15cqw]">
              Bởi vì dưới những gì bạn hiểu bằng lý trí vẫn có thể tồn tại những cách phản ứng cũ:
            </p>
          </div>

          <div className="mt-auto pt-8 lg:pt-0">
            {/* 6 viên "phản ứng cũ" */}
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-[.6cqw]">
              {traits.map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className={`flex min-h-[72px] flex-col items-center justify-center rounded-full border border-[#e88bca]/60 bg-[#1b0b26]/60 px-3 py-2 text-center text-sm leading-tight text-white shadow-[0_0_14px_#d75caf44,inset_0_0_10px_#d75caf22] sm:min-w-[112px] lg:min-h-[4.7cqw] lg:px-[.7cqw] lg:py-[.3cqw] lg:text-[.95cqw] ${
                    i === traits.length - 1 ? "lg:min-w-[8.7cqw]" : "lg:min-w-[7.35cqw]"
                  }`}
                >
                  <Icon className="mb-1 h-5 w-5 text-[#ffd9a0] lg:mb-[.25cqw] lg:h-[1.7cqw] lg:w-[1.7cqw]" strokeWidth={1.4} />
                  <span className="whitespace-pre-line">{label}</span>
                </div>
              ))}
            </div>

            {/* Tôi gọi đó là */}
            <div className="mt-4 flex flex-wrap items-center gap-2 lg:mt-[1.1cqw] lg:gap-[1.2cqw]">
              <span className="text-sm text-white/90 lg:text-[1.1cqw]">Tôi gọi đó là:</span>
              <span className="relative inline-flex items-center">
                <span aria-hidden className="absolute right-full top-1/2 hidden h-px w-[2.6cqw] -translate-y-1/2 bg-gradient-to-r from-transparent to-[#f2c879] lg:block" />
                <span className="inline-flex rounded-full border border-[#f2c879] bg-[#170b20]/80 px-5 py-2 shadow-[0_0_18px_#f2c87966,inset_0_0_12px_#f2c87922] lg:px-[1.5cqw] lg:py-[.55cqw]">
                  <span className="whitespace-nowrap font-serif text-xl font-bold tracking-wide text-[#fff3dc] lg:text-[1.85cqw]">SINH TỒN CHẠY NGẦM</span>
                </span>
                <span aria-hidden className="absolute left-full top-1/2 hidden h-px w-[3.5cqw] -translate-y-1/2 bg-gradient-to-l from-transparent to-[#f2c879] lg:block" />
              </span>
            </div>

            <p className="mt-3 max-w-[1200px] text-sm italic leading-snug text-white/90 lg:ml-[1cqw] lg:mt-[.6cqw] lg:text-[1.07cqw] lg:leading-[1.4]">
              Không phải lúc nào nó cũng trông như khủng hoảng.<br />
              Đôi khi nó trông giống một người vẫn làm việc, vẫn học hỏi, vẫn chăm sóc mọi thứ…<br className="hidden lg:block" />
              nhưng bên trong chưa thật sự cảm thấy đủ vững để bước vào điều mới.
            </p>

            {/* Khung câu chốt */}
            <div className="mt-5 flex w-full items-center lg:ml-[-2.4cqw] lg:mt-[1.1cqw] lg:w-[calc(100%+2.4cqw)]">
              <div className="relative w-full rounded-full border border-[#f2c879] bg-[#12091c]/85 px-8 py-4 text-center shadow-[0_0_26px_#f2c87944,inset_0_0_14px_#f2c87922] lg:w-[65.8cqw] lg:px-[4.2cqw] lg:py-[.8cqw]">
                <span aria-hidden className="absolute left-[1.6rem] top-1/2 -translate-y-[40%] font-serif text-4xl font-bold leading-none text-[#ffc04d] lg:left-[3cqw] lg:text-[3.2cqw]">“</span>
                <span aria-hidden className="absolute right-[1.6rem] top-1/2 -translate-y-[40%] font-serif text-4xl font-bold leading-none text-[#ffc04d] lg:right-[3cqw] lg:text-[3.2cqw]">”</span>
                <span className="block font-serif text-lg italic leading-snug text-white sm:text-xl lg:text-[1.7cqw]">Có thể vấn đề không phải bạn cần học thêm.</span>
                <span className="block font-serif text-lg font-bold italic leading-snug text-[#ffc04d] sm:text-xl lg:text-[1.9cqw]">
                  Có thể nền bên trong của bạn chưa theo kịp những gì bạn đã hiểu.
                </span>
              </div>
              <span aria-hidden className="ml-[1cqw] hidden h-px flex-1 bg-gradient-to-l from-transparent to-[#f2c879]/70 lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
