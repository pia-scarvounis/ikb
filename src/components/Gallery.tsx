import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Translation } from '../types'

import g1 from '../assets/galleri1.jpg'
import g2 from '../assets/galleri2.jpg'
import g3 from '../assets/galleri3.jpg'
import g4 from '../assets/galleri4.jpg'
import g5 from '../assets/galleri5.jpg'
import g6 from '../assets/galleri6.jpg'
import g7 from '../assets/galleri7.jpg'
import g8 from '../assets/galleri8.jpg'
import g9 from '../assets/galleri9.jpg'
import g10 from '../assets/galleri10.jpg'
import g11 from '../assets/galleri11.jpg'
import g12 from '../assets/galleri12.jpg'

interface Props {
  t: Translation
}

const images = [
  { src: g10, alt: 'Galleri bilde 10' },
  { src: g11, alt: 'Galleri bilde 11' },
  { src: g12, alt: 'Galleri bilde 12' },
  { src: g1, alt: 'Galleri bilde 1' },
  { src: g2, alt: 'Galleri bilde 2' },
  { src: g3, alt: 'Galleri bilde 3' },
  { src: g4, alt: 'Galleri bilde 4' },
  { src: g5, alt: 'Galleri bilde 5' },
  { src: g6, alt: 'Galleri bilde 6' },
  { src: g7, alt: 'Galleri bilde 7' },
  { src: g8, alt: 'Galleri bilde 8' },
  { src: g9, alt: 'Galleri bilde 9' },
]

export default function Gallery({ t }: Props) {
  const [desktopPage, setDesktopPage] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  const mobileScrollRef = useRef<HTMLDivElement | null>(null)

  const desktopPages = useMemo(() => {
    const pages: typeof images[] = []
    for (let i = 0; i < images.length; i += 2) {
      pages.push(images.slice(i, i + 2))
    }
    return pages
  }, [])

  const prevDesktop = () => {
    setDesktopPage((prev) => Math.max(prev - 1, 0))
  }

  const nextDesktop = () => {
    setDesktopPage((prev) => Math.min(prev + 1, desktopPages.length - 1))
  }

  const scrollMobileTo = (index: number) => {
    const container = mobileScrollRef.current
    if (!container) return

    const slide = container.children[index] as HTMLElement | undefined
    if (!slide) return

    slide.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }

  useEffect(() => {
    const container = mobileScrollRef.current
    if (!container) return

    const handleScroll = () => {
      const slides = Array.from(container.children) as HTMLElement[]
      const containerCenter = container.scrollLeft + container.clientWidth / 2

      let closestIndex = 0
      let closestDistance = Infinity

      slides.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2
        const distance = Math.abs(containerCenter - slideCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setMobileIndex(closestIndex)
    }

    handleScroll()

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="galleri" className="bg-[#fcfbf8] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a7a25]">
            {t.gallery.tag}
          </p>

          <h2 className="mb-4 font-serif text-[clamp(2rem,3.8vw,3rem)] font-normal leading-tight text-[#1f2f27]">
            {t.gallery.title}
          </h2>

          <p className="max-w-2xl text-[16px] font-light leading-[1.8] text-[#5f675f] sm:text-[17px]">
            {t.gallery.lead}
          </p>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <div
            ref={mobileScrollRef}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 no-scrollbar"
          >
            {images.map((image) => (
              <div
                key={image.alt}
                className="w-[84vw] shrink-0 snap-center overflow-hidden rounded-[26px] border border-[#e7dccb] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.05)]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollMobileTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  mobileIndex === index
                    ? 'w-8 bg-[#b28a2f]'
                    : 'w-2.5 bg-[#d9cfbe] hover:bg-[#cbbba0]'
                }`}
                aria-label={`Gå til bilde ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP/TABLET */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {desktopPages[desktopPage].map((image) => (
                <div
                  key={image.alt}
                  className="overflow-hidden rounded-[30px] border border-[#e7dccb] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.05)]"
                >
                  <div className="aspect-[5/4] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={prevDesktop}
              disabled={desktopPage === 0}
              className="absolute left-[-22px] top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#e2d9ca] bg-white text-[#1f2f27] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:bg-[#f8f4ec] disabled:cursor-not-allowed disabled:opacity-35 lg:inline-flex"
              aria-label="Forrige bilder"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={nextDesktop}
              disabled={desktopPage === desktopPages.length - 1}
              className="absolute right-[-22px] top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#e2d9ca] bg-white text-[#1f2f27] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:bg-[#f8f4ec] disabled:cursor-not-allowed disabled:opacity-35 lg:inline-flex"
              aria-label="Neste bilder"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {desktopPages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setDesktopPage(index)}
                className={`h-2.5 rounded-full transition-all ${
                  desktopPage === index
                    ? 'w-8 bg-[#b28a2f]'
                    : 'w-2.5 bg-[#d9cfbe] hover:bg-[#cbbba0]'
                }`}
                aria-label={`Gå til side ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}