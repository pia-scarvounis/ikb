import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { Translation, Lang } from '../types'
import logo from '../assets/IKB-logo.jpeg'

interface Props {
  t: Translation
  lang: Lang
  toggleLang: () => void
}

export default function Header({ t, lang, toggleLang }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: t.nav.departments, href: '#avdelinger' },
    { label: t.nav.everyday, href: '#hverdagen' },
    { label: t.nav.gallery, href: '#galleri' },
    { label: t.nav.parents, href: '#foreldre' },
    { label: t.nav.contact, href: '#kontakt' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e8dfd1] shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[84px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img
            src={logo}
            alt="IKB logo"
            className="h-12 w-auto shrink-0 object-contain"
          />

          <div className="hidden sm:block leading-tight min-w-0">
            <p className="font-serif text-[#1f2f27] text-[16px] font-normal tracking-[-0.01em]">
              Internasjonal Kulturbarnehage
            </p>
            <p className="text-[11px] text-[#6f756f] tracking-[0.18em] uppercase font-medium mt-1">
              Gamle Oslo · Siden 2003
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-medium tracking-[0.015em] text-[#4e5651] hover:text-[#1f2f27] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleLang}
            className="inline-flex items-center rounded-full border border-[#ddd5c7] bg-[#faf8f3] p-1 transition-colors hover:border-[#cdbfa6]"
            aria-label="Bytt språk"
          >
            <span
              className={`inline-flex h-8 min-w-[38px] items-center justify-center rounded-full px-3 text-[12px] font-semibold transition-all ${
                lang === 'no'
                  ? 'bg-[#1f2f27] text-white'
                  : 'text-[#6f756f]'
              }`}
            >
              NO
            </span>
            <span
              className={`inline-flex h-8 min-w-[38px] items-center justify-center rounded-full px-3 text-[12px] font-semibold transition-all ${
                lang === 'en'
                  ? 'bg-[#1f2f27] text-white'
                  : 'text-[#6f756f]'
              }`}
            >
              EN
            </span>
          </button>
        </nav>

        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="inline-flex items-center rounded-full border border-[#ddd5c7] bg-[#faf8f3] p-1"
            aria-label="Bytt språk"
          >
            <span
              className={`inline-flex h-7 min-w-[34px] items-center justify-center rounded-full px-2.5 text-[11px] font-semibold ${
                lang === 'no'
                  ? 'bg-[#1f2f27] text-white'
                  : 'text-[#6f756f]'
              }`}
            >
              NO
            </span>
            <span
              className={`inline-flex h-7 min-w-[34px] items-center justify-center rounded-full px-2.5 text-[11px] font-semibold ${
                lang === 'en'
                  ? 'bg-[#1f2f27] text-white'
                  : 'text-[#6f756f]'
              }`}
            >
              EN
            </span>
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#e6ddd0] text-[#1f2f27]"
            aria-label="Meny"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#eee5d8] px-5 py-5">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] font-medium text-[#4e5651] hover:text-[#1f2f27] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}