import type { Translation } from '../types'

interface Props { t: Translation }

export default function Footer({ t }: Props) {
  const columns = [
    {
      heading: t.footer.departmentsHeading,
      links: [
        { label: t.footer.links.akeberg, href: '#avdelinger' },
        { label: t.footer.links.enebakk, href: '#avdelinger' },
        { label: t.footer.links.mykid, href: 'https://mykid.no/nb/logg_inn' },
      ],
    },
    {
      heading: t.footer.infoHeading,
      links: [
        { label: t.footer.links.apply, href: 'https://www.oslo.kommune.no/barnehage/' },
        { label: t.footer.links.pricing, href: 'https://www.oslo.kommune.no/barnehage/pris-og-betaling' },
        { label: t.footer.links.facts, href: 'https://barnehagefakta.no/barnehage/987146192' },
      ],
    },
    {
      heading: t.footer.contactHeading,
      links: [
        { label: '22 67 10 10', href: 'tel:22671010' },
        { label: 'ikb.styrer@gmail.com', href: 'mailto:ikb.styrer@gmail.com' },
        { label: 'Enebakkveien 22', href: 'https://maps.google.com/?q=Enebakkveien+22+Oslo' },
        { label: 'Åkebergveien 23', href: 'https://maps.google.com/?q=Åkebergveien+23+Oslo' },
      ],
    },
  ]

  return (
    <footer className="bg-[#152e22] text-white">

      <div className="overflow-hidden">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-16 block">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,10 1440,35 L1440,70 L0,70 Z" fill="#152e22" />
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,10 1440,35 L1440,0 L0,0 Z" fill="#faf8f3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-8 pb-14">

        <div className="flex justify-center mb-12 opacity-15">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="5" fill="#e8d68a" />
            <ellipse cx="20" cy="7" rx="3.5" ry="5.5" fill="#e8d68a" opacity="0.9" />
            <ellipse cx="20" cy="33" rx="3.5" ry="5.5" fill="#e8d68a" opacity="0.9" />
            <ellipse cx="7" cy="20" rx="5.5" ry="3.5" fill="#e8d68a" opacity="0.9" />
            <ellipse cx="33" cy="20" rx="5.5" ry="3.5" fill="#e8d68a" opacity="0.9" />
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-white/45 text-[13px] leading-[1.8] max-w-[240px] font-light">
              {t.footer.tagline}
            </p>
          </div>

          {columns.map(col => (
            <div key={col.heading}>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-white/55 hover:text-white text-[13.5px] transition-colors font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row justify-between gap-2 text-white/25 text-[12px] font-light">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.orgNo}</span>
        </div>

      </div>
    </footer>
  )
}
