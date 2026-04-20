import { ArrowRight, ExternalLink, Clock, MapPin, Phone } from 'lucide-react'
import type { Translation } from '../types'

interface Props {
  t: Translation
}

export default function Hero({ t }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] text-[#1f2f27]">
      
      {/* subtle background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#ebe6d8] blur-3xl opacity-70" />
        <div className="absolute top-16 right-[-60px] h-80 w-80 rounded-full bg-[#f1e3b8] blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-24 lg:pt-28 lg:pb-28">
        <div className="max-w-3xl">

    
          {/* title */}
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.4rem)] font-normal leading-[1.05] text-[#1f2f27] mb-6">
            {t.hero.title}
            <br />
            <em className="not-italic text-[#b28a2f]">{t.hero.titleEm}</em>
          </h1>

          {/* subtitle */}
          <p className="max-w-2xl text-[#58645d] text-[17px] sm:text-[18px] leading-[1.8] mb-10 font-light">
            {t.hero.subtitle}
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.oslo.kommune.no/barnehage/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#c8a33c] px-6 py-3.5 text-[15px] font-semibold tracking-wide text-[#1f2f27] transition-colors hover:bg-[#b7922d]"
            >
              {t.hero.applyBtn}
              <ArrowRight size={16} />
            </a>

            <a
              href="https://mykid.no/nb/logg_inn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#d8d4c9] bg-white/65 px-6 py-3.5 text-[15px] font-semibold tracking-wide text-[#1f2f27] transition-colors hover:bg-white"
            >
              MyKid
              <ExternalLink size={15} />
            </a>
          </div>

          {/* ✨ NEW: subtle info row */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-[#5f675f]">
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-[#1f2f27]/40" />
              <span>07:30–17:00</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#1f2f27]/40" />
              <span>Enebakkveien 22 · Åkebergveien 23</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={15} className="text-[#1f2f27]/40" />
              <span>22 67 10 10</span>
            </div>
          </div>

        </div>
      </div>

      {/* wave bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="block h-[60px] w-full sm:h-[78px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,18 C170,66 360,6 540,24 C720,42 900,74 1080,50 C1235,30 1342,24 1440,34 L1440,120 L0,120 Z"
            fill="#fcfbf8"
          />
        </svg>
      </div>
    </section>
  )
}