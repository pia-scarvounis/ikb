import { MapPin } from 'lucide-react'
import type { Translation } from '../types'
import akebergImg from '../assets/akeberg.png'
import enebakkImg from '../assets/enebakk.png'

interface Props {
  t: Translation
}

export default function Departments({ t }: Props) {
  const cards = [
    {
      badge: t.departments.enebakkBadge,
      badgeClass: 'bg-[#fef3e0] text-[#7a5a10]',
      title: t.departments.enebakkTitle,
      desc: t.departments.enebakkDesc,
      chips: t.departments.chips.enebakk,
      address: t.departments.addresses.enebakk,
      mapsUrl: 'https://maps.google.com/?q=Enebakkveien+22+Oslo',
      img: enebakkImg,
      imgAlt: t.departments.imageAlts.enebakk,
    },
    {
      badge: t.departments.akebergBadge,
      badgeClass: 'bg-[#e8f2ec] text-[#1d3d2f]',
      title: t.departments.akebergTitle,
      desc: t.departments.akebergDesc,
      chips: t.departments.chips.akeberg,
      address: t.departments.addresses.akeberg,
      mapsUrl: 'https://maps.google.com/?q=Åkebergveien+23+Oslo',
      img: akebergImg,
      imgAlt: t.departments.imageAlts.akeberg,
    },
  ]

  return (
    <section id="avdelinger" className="py-24 px-5 sm:px-8 bg-[#fcfbf8]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a7a25] mb-3">
          {t.departments.tag}
        </p>

        <h2 className="font-serif text-[clamp(1.9rem,3.8vw,3rem)] font-normal text-[#1f2f27] mb-4 leading-tight">
          {t.departments.title}
        </h2>

        <p className="text-[#5f675f] text-[16px] sm:text-[17px] max-w-2xl mb-14 leading-[1.8] font-light">
          {t.departments.lead}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[28px] border border-[#e7dccb] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_38px_rgba(0,0,0,0.06)]"
            >
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src={card.img}
                  alt={card.imgAlt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 sm:p-7">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4 ${card.badgeClass}`}
                >
                  {card.badge}
                </span>

                <h3 className="font-serif text-[1.45rem] text-[#1f2f27] leading-tight mb-3">
                  {card.title}
                </h3>

                <p className="text-[#677067] text-[14px] sm:text-[15px] leading-[1.8] font-light mb-5">
                  {card.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {card.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-[#e7dccb] bg-[#faf6ef] px-3 py-1 text-[12px] font-medium text-[#5f675f]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <a
                  href={card.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[#5d8068] hover:text-[#1f2f27] transition-colors"
                >
                  <MapPin size={15} />
                  {card.address}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}