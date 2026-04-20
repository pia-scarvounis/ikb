import { Phone, Clock, MapPin, Mail, Hash } from 'lucide-react'
import type { Translation } from '../types'

interface Props { t: Translation }

export default function Contact({ t }: Props) {
  const people = [
    { initial: 'T', name: 'Therese Sjursæther Kofler', role: t.contact.director, email: 'ikb.styrer@gmail.com' },
    { initial: 'I', name: 'Ingeborg Helene Aanonsen', role: t.contact.owner, email: 'eieringeborghelene@gmail.com' },
  ]

  const items = [
    { Icon: Phone, text: '22 67 10 10', href: 'tel:22671010' },
    { Icon: Clock, text: `${t.contact.hours} ${t.contact.hoursVal}`, href: undefined },
    { Icon: MapPin, text: t.contact.address, href: undefined },
    { Icon: Mail, text: 'ikb.styrer@gmail.com', href: 'mailto:ikb.styrer@gmail.com' },
    { Icon: Hash, text: t.contact.orgNo, href: undefined },
  ]

  return (
    <section id="kontakt" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4a8c60] mb-3">
          {t.contact.tag}
        </p>
        <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal text-[#1d3d2f] mb-4 leading-tight">
          {t.contact.title}
        </h2>
        <p className="text-[#5a5a5a] text-[16px] max-w-xl mb-14 leading-[1.8] font-light">
          {t.contact.lead}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="space-y-4">
            {people.map(person => (
              <div key={person.name} className="flex items-center gap-4 bg-[#f3f7f4] border border-[#dde8e2] rounded-2xl p-5">
                <div className="w-12 h-12 rounded-full bg-[#1d3d2f] text-white flex items-center justify-center font-serif text-[1.3rem] flex-shrink-0">
                  {person.initial}
                </div>
                <div>
                  <p className="font-semibold text-[#1d3d2f] text-[14px]">{person.name}</p>
                  <p className="text-[13px] text-[#5a5a5a] font-light">{person.role}</p>
                  <a href={`mailto:${person.email}`} className="text-[13px] font-semibold text-[#4a8c60] hover:underline">
                    {person.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-serif text-[1.15rem] font-normal text-[#1d3d2f] mb-6">
              {t.contact.practical}
            </h3>
            <ul className="space-y-4">
              {items.map(({ Icon, text, href }, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-[#5a5a5a]">
                  <Icon size={15} className="text-[#4a8c60] mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                  {href ? (
                    <a href={href} className="font-semibold text-[#1d3d2f] hover:underline">{text}</a>
                  ) : (
                    <span className="font-light">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
