import { useState } from 'react'
import { Star, ChevronDown, ChevronUp } from 'lucide-react'
import type { Translation } from '../types'

interface Props {
  t: Translation
}

type CategoryScore = {
  label: string
  score: number
  national: number
}

type KindergartenSurvey = {
  id: string
  name: string
  totalScore: number
  responseRate: string
  link: string
  categories: CategoryScore[]
}

const surveyData: KindergartenSurvey[] = [
  {
    id: 'enebakk',
    name: 'Internasjonal kulturbarnehage Enebakkveien',
    totalScore: 4.7,
    responseRate: '74,1 %',
    link: 'https://barnehagefakta.no/barnehage/985865086',
    categories: [
      { label: 'Tilfredshet', score: 5.0, national: 4.5 },
      { label: 'Barnets utvikling', score: 4.9, national: 4.7 },
      { label: 'Barnets trivsel', score: 4.9, national: 4.8 },
      { label: 'Informasjon', score: 4.5, national: 4.3 },
      { label: 'Ute- og innemiljø', score: 4.4, national: 4.2 },
    ],
  },
  {
    id: 'akeberg',
    name: 'Internasjonal kulturbarnehage Åkeberg',
    totalScore: 4.6,
    responseRate: '66,7 %',
    link: 'https://barnehagefakta.no/barnehage/987146192',
    categories: [
      { label: 'Barnets utvikling', score: 4.8, national: 4.7 },
      { label: 'Barnets trivsel', score: 4.8, national: 4.8 },
      { label: 'Tilfredshet', score: 4.7, national: 4.5 },
      { label: 'Informasjon', score: 4.5, national: 4.3 },
      { label: 'Ute- og innemiljø', score: 4.4, national: 4.2 },
    ],
  },
]

function SurveyCard({
  kindergarten,
  t,
}: {
  kindergarten: KindergartenSurvey
  t: Translation
}) {
  const [expanded, setExpanded] = useState(false)

  const visibleCategories = expanded
    ? kindergarten.categories
    : kindergarten.categories.slice(0, 3)

  return (
    <article className="rounded-[28px] border border-[#e6dccb] bg-white/75 backdrop-blur-sm p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between mb-8">
        <div className="max-w-xl">
          <h3 className="text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.08] font-semibold text-[#1f2a24]">
            {kindergarten.name}
          </h3>
          <p className="text-[15px] text-[#747a74] mt-4">
            Svarprosent: {kindergarten.responseRate}
          </p>
        </div>

        <div className="shrink-0 md:text-right">
          <div className="text-[4rem] sm:text-[4.6rem] leading-none font-serif text-[#1f2a24]">
            {kindergarten.totalScore.toFixed(1)}
          </div>
          <div className="text-[15px] text-[#7b817b] mt-1">av 5,0</div>

          <div className="flex gap-1 mt-4 md:justify-end">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={18}
                strokeWidth={1.7}
                className={
                  i <= Math.round(kindergarten.totalScore)
                    ? 'text-[#d4a338] fill-[#d4a338]'
                    : 'text-[#e5ddd1]'
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {visibleCategories.map((item) => (
          <div
            key={item.label}
            className="rounded-[22px] border border-[#eadfce] bg-[#fbf8f3] p-5"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h4 className="text-[15px] sm:text-[16px] font-semibold text-[#1f2a24]">
                  {item.label}
                </h4>
                <p className="text-[13px] sm:text-[14px] text-[#7a807a] mt-1">
                  Nasjonalt gjennomsnitt: {item.national.toFixed(1)} / 5,0
                </p>
              </div>

              <div className="text-right shrink-0 leading-tight">
                <div className="text-[1.1rem] sm:text-[1.2rem] font-semibold text-[#1f2a24]">
                  {item.score.toFixed(1)}
                </div>
                <div className="text-[13px] text-[#7a807a] mt-1">/ 5,0</div>
              </div>
            </div>

            <div className="h-2.5 rounded-full bg-[#e7dcc9] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#d29b2f] transition-all duration-500"
                style={{ width: `${(item.score / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {kindergarten.categories.length > 3 && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-[#6f755f] hover:text-[#1f2a24] transition-colors"
        >
          {expanded ? 'Se mindre' : 'Se mer'}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      )}

      <div className="mt-6 pt-5 border-t border-[#ece2d3]">
        <a
          href={kindergarten.link}
          target="_blank"
          rel="noreferrer"
          className="text-[13px] text-[#6f755f] underline underline-offset-4 hover:text-[#1f2a24] transition-colors"
        >
          {t.survey.source} · barnehagefakta.no
        </a>
      </div>
    </article>
  )
}

export default function Survey({ t }: Props) {
  return (
    <section id="undersokelse" className="py-24 px-5 sm:px-8 bg-[#f7f3eb]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b8983a] mb-3">
          {t.survey.tag}
        </p>

        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-normal text-[#1f2a24] mb-4 leading-tight">
          {t.survey.title}
        </h2>

        <p className="max-w-2xl text-[15px] leading-7 text-[#5f655f] mb-12">
          Resultater fra foreldreundersøkelsen for våre barnehager.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {surveyData.map((kindergarten) => (
            <SurveyCard
              key={kindergarten.id}
              kindergarten={kindergarten}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  )
}