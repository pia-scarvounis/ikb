import { useEffect, useState } from 'react'
import {
  School,
  MessageCircle,
  Heart,
  FileText,
  Smartphone,
  CreditCard,
  Shirt,
  Plus,
  ArrowUpRight,
  X,
} from 'lucide-react'
import type { Translation } from '../types'

interface Props {
  t: Translation
}

const icons = [
  School,
  MessageCircle,
  Heart,
  FileText,
  Smartphone,
  CreditCard,
  Shirt,
  Plus,
]

export default function Parents({ t }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedCard =
    selectedIndex !== null ? t.parents.cards[selectedIndex] : null

  const closeModal = () => {
    setSelectedIndex(null)
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [selectedIndex])

  return (
    <>
      <section id="foreldre" className="bg-[#f3f7f4] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4a8c60]">
            {t.parents.tag}
          </p>

          <h2 className="mb-4 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight text-[#1d3d2f]">
            {t.parents.title}
          </h2>

          <p className="mb-10 max-w-2xl text-[15px] font-light leading-[1.8] text-[#5a5a5a] sm:mb-12 sm:text-[16px]">
            {t.parents.lead}
          </p>

          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:gap-5">
            {t.parents.cards.map((card, i) => {
              const Icon = icons[i]

              return (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  className="flex h-full flex-col rounded-2xl border border-[#e0ebe4] bg-white p-5 text-left transition-all hover:-translate-y-[2px] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a8c60]/30 sm:p-6"
                  aria-label={`${card.title} - ${t.parents.readMore}`}
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f2ec] sm:h-11 sm:w-11">
                      <Icon
                        size={18}
                        className="text-[#4a8c60]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="pt-0.5 text-[17px] font-semibold leading-snug text-[#1d3d2f] sm:text-[18px]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="mb-6 text-[14px] leading-[1.7] text-[#4f5b54] sm:text-[15px]">
                    {card.text}
                  </p>

                  <div className="mt-auto inline-flex items-center gap-2 text-[14px] font-medium text-[#4a8c60]">
                    {t.parents.readMore}
                    <ArrowUpRight size={15} />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {selectedCard && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4 py-6"
          onClick={closeModal}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#edf2ee] bg-white px-5 py-4 sm:px-8 sm:py-5">
              <div className="flex items-center gap-4 pr-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f2ec] sm:h-11 sm:w-11">
                  {(() => {
                    const Icon = icons[selectedIndex]
                    return (
                      <Icon
                        size={18}
                        className="text-[#4a8c60]"
                        strokeWidth={1.8}
                      />
                    )
                  })()}
                </div>

                <h3 className="text-[18px] font-semibold leading-snug text-[#1d3d2f] sm:text-[24px]">
                  {selectedCard.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeModal}
                aria-label={t.parents.close}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3f7f4] text-[#1d3d2f] transition-colors hover:bg-[#e8f2ec]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-6 px-5 py-6 sm:px-8 sm:py-8">
              <p className="text-[15px] leading-[1.85] text-[#4f5b54] sm:text-[16px] sm:leading-[1.9]">
                {selectedCard.text}
              </p>

              {selectedCard.bullets && selectedCard.bullets.length > 0 && (
                <ul className="list-disc space-y-3 pl-5 marker:text-[#4a8c60]">
                  {selectedCard.bullets.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[14px] leading-[1.8] text-[#5f675f] sm:text-[15px] sm:leading-[1.9]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {selectedCard.details && selectedCard.details.length > 0 && (
                <ul className="list-disc space-y-3 pl-5 marker:text-[#4a8c60]">
                  {selectedCard.details.map((line, idx) => (
                    <li
                      key={idx}
                      className="text-[14px] leading-[1.8] text-[#5f675f] sm:text-[15px] sm:leading-[1.9]"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              )}

              {selectedCard.sections && selectedCard.sections.length > 0 && (
                <div className="space-y-6">
                  {selectedCard.sections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="mb-3 text-[14px] font-semibold text-[#1d3d2f] sm:text-[16px]">
                        {section.heading}
                      </h4>

                      <ul className="list-disc space-y-3 pl-5 marker:text-[#4a8c60]">
                        {section.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="text-[14px] leading-[1.8] text-[#5f675f] sm:text-[15px] sm:leading-[1.9]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {selectedCard.links && selectedCard.links.length > 0 && (
                <div className="flex flex-col gap-3 pt-1">
                  {selectedCard.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-[#4a8c60] hover:underline sm:text-[15px]"
                    >
                      {link.label}
                      <ArrowUpRight size={16} />
                    </a>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center rounded-full bg-[#1f5b3a] px-5 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
                >
                  {t.parents.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}