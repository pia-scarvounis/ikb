import type { Translation } from '../types'

interface Props {
  t: Translation
}

export default function Staff({ t }: Props) {
  return (
    <section id="personale" className="py-24 px-5 sm:px-8 bg-[#fcfbf8]">
      <div className="max-w-4xl mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a7a25] mb-3">
          {t.staff.tag}
        </p>

        <h2 className="font-serif text-[clamp(2rem,3.8vw,3rem)] font-normal text-[#1f2f27] mb-6 leading-tight">
          {t.staff.title}
        </h2>

        <div className="space-y-5">
          {[t.staff.p1, t.staff.p2, t.staff.p3].map((paragraph, i) => (
            <p
              key={i}
              className="text-[#677067] text-[15px] sm:text-[16px] leading-[1.9] font-light"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[#e7dccb]">
          <p className="text-[13px] sm:text-[14px] text-[#5f675f] leading-[1.8]">
            {t.staff.note}
          </p>
        </div>
      </div>
    </section>
  )
}
