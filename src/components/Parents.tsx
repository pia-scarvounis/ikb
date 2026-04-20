import { School, MessageCircle, Heart, FileText, Smartphone, CreditCard } from 'lucide-react'
import type { Translation } from '../types'

interface Props { t: Translation }

const icons = [School, MessageCircle, Heart, FileText, Smartphone, CreditCard]

export default function Parents({ t }: Props) {
  return (
    <section id="foreldre" className="py-24 px-5 sm:px-8 bg-[#f3f7f4]">
      <div className="max-w-6xl mx-auto">

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4a8c60] mb-3">
          {t.parents.tag}
        </p>
        <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal text-[#1d3d2f] mb-4 leading-tight">
          {t.parents.title}
        </h2>
        <p className="text-[#5a5a5a] text-[16px] max-w-xl mb-14 leading-[1.8] font-light">
          {t.parents.lead}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.parents.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-[#e0ebe4] p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-11 h-11 bg-[#e8f2ec] rounded-xl flex items-center justify-center mb-5">
                  <Icon size={19} className="text-[#4a8c60]" strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-[#1d3d2f] text-[15px] mb-2">{card.title}</h3>
                <p className="text-[13.5px] text-[#5a5a5a] leading-[1.75] font-light">{card.text}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
