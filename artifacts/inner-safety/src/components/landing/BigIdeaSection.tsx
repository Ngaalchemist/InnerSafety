<div className="mb-5 flex items-center gap-3 text-[#f2c879] lg:mb-[1.25cqw] lg:gap-[.8cqw]">
              <span aria-hidden className="h-px w-10 bg-[#f2c879] lg:w-[4cqw]" />
              <Flower2 className="h-6 w-6 lg:h-[2cqw] lg:w-[2cqw]" strokeWidth={1.4} />
              <span className="text-xs font-semibold tracking-[.28em] lg:text-[.92cqw]">BEYOND FEAR</span>
              <span aria-hidden className="h-px w-10 bg-[#f2c879] lg:w-[4cqw]" />
            </div>

            <h2 className="max-w-[680px] font-serif text-[clamp(2.65rem,5.7vw,5.8rem)] leading-[.98] tracking-[-.035em] text-[#fff3dc] lg:text-[3.35cqw]">
              Bạn không thiếu<br />kiến thức.
            </h2>
            <div aria-hidden className="my-4 h-[2px] w-[96%] bg-gradient-to-r from-[#f2c879] via-[#fff0ce] to-transparent shadow-[0_0_12px_#f2c879] lg:my-[.9cqw]" />

            <p className="mb-2 text-base font-semibold text-white lg:text-[1.35cqw]">Có thể bạn đã đọc rất nhiều.</p>
            <ul className="mb-4 space-y-1.5 pl-2 text-base leading-snug text-white/95 lg:space-y-[.35cqw] lg:text-[1.28cqw]">
              {facts.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 lg:gap-[1cqw]">
                  <Icon className="h-7 w-7 shrink-0 text-[#ffc27e] drop-shadow-[0_0_6px_#ff9366]" strokeWidth={1.7} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="mb-3 border-l-2 border-[#f2c879] py-0.5 pl-4 lg:mb-[.8cqw] lg:pl-[1.1cqw]">
              <p className="text-base leading-snug text-white lg:text-[1.3cqw]">Nhưng đôi khi...</p>
              <p className="text-base font-bold leading-snug text-[#ffc64d] lg:text-[1.3cqw]">
                biết mình cần làm gì không đồng nghĩa với việc mình có thể làm được điều đó một cách tự nhiên.
              </p>
            </div>

            <p className="mb-3 max-w-[650px] text-sm leading-snug text-white/95 lg:mb-[.75cqw] lg:text-[1.14cqw]">
              Bởi vì dưới những gì bạn hiểu bằng lý trí vẫn có thể tồn tại những cách phản ứng cũ:
            </p>
          </div>

          <div className="mt-auto pt-8 lg:pt-0">
            <div className="mx-auto flex max-w-[1320px] flex-wrap justify-center gap-2 sm:gap-3 lg:gap-[.8cqw]">
              {traits.map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex min-h-[62px] min-w-[92px] flex-col items-center justify-center rounded-full border border-[#e88bca]/70 bg-[#1b0b26]/70 px-3 py-2 text-center text-sm leading-tight text-white shadow-[0_0_14px_#d75caf33] sm:min-w-[112px] lg:min-h-[4.2cqw] lg:min-w-[7.3cqw] lg:px-[.7cqw] lg:py-[.35cqw] lg:text-[1.02cqw]">
                  <Icon className="mb-1 h-5 w-5 text-[#ffc27e] lg:h-[1.7cqw] lg:w-[1.7cqw]" strokeWidth={1.6} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center lg:mt-[.8cqw] lg:gap-[.55cqw]">
              <span className="text-sm text-white/90 lg:text-[1.05cqw]">Tôi gọi đó là:</span>
              <span className="inline-flex rounded-full border border-[#f2c879] bg-[#170b20]/80 px-5 py-2 shadow-[0_0_18px_#f2c87955,inset_0_0_12px_#f2c87922] lg:px-[1.5cqw] lg:py-[.35cqw]">
                <span className="whitespace-nowrap font-serif text-xl font-bold tracking-wide text-[#fff3dc] lg:text-[1.85cqw]">SINH TỒN CHẠY NGẦM</span>
              </span>
            </div>

            <p className="mx-auto mt-3 max-w-[1200px] text-sm italic leading-snug text-white/90 lg:mt-[.65cqw] lg:text-[1.05cqw]">
              Không phải lúc nào nó cũng trông như khủng hoảng.<br />
              Đôi khi nó trông giống một người vẫn làm việc, vẫn học hỏi, vẫn chăm sóc mọi thứ…<br className="hidden xl:block" />
              nhưng bên trong chưa thật sự cảm thấy đủ vững để bước vào điều mới.
            </p>

            <div className="mx-auto mt-5 flex w-full max-w-[1100px] items-center gap-3 lg:mt-[1.05cqw] lg:gap-[1cqw]">
              <span aria-hidden className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-[#f2c879] sm:block" />
              <div className="w-full rounded-full border border-[#f2c879] bg-[#12091c]/85 px-5 py-4 text-center shadow-[0_0_26px_#f2c87944] sm:w-auto sm:px-12 lg:px-[4.2cqw] lg:py-[.72cqw]">
                <span className="block font-serif text-lg italic leading-snug text-white sm:text-xl lg:text-[1.7cqw]">Có thể vấn đề không phải bạn cần học thêm.</span>
                <span className="block font-serif text-lg font-bold italic leading-snug text-[#ffc04d] sm:text-xl lg:text-[1.72cqw]">
                  Có thể nền bên trong của bạn chưa theo kịp những gì bạn đã hiểu.
                </span>
              </div>
              <span aria-hidden className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-[#f2c879] sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
