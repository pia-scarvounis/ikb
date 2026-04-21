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

function translateCategoryLabel(label: string, t: Translation) {
  const map: Record<string, string> = {
    Tilfredshet: t.survey.categories[0],
    'Barnets utvikling': t.survey.categories[1],
    'Barnets trivsel': t.survey.categories[2],
    Informasjon: t.survey.categories[3],
    'Ute- og innemiljø': t.survey.categories[4],
  }

  return map[label] ?? label
}

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
    <article className="rounded-[24px] border border-[#e6dccb] bg-white/75 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:p-6">
      <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="max-w-[420px]">
          <h3 className="text-[clamp(1.5rem,2.6vw,2.05rem)] font-semibold leading-[1.08] text-[#1f2a24]">
            {kindergarten.name}
          </h3>

          <p className="mt-3 text-[14px] text-[#747a74] sm:text-[15px]">
            {t.survey.responsesLabel}: {kindergarten.responseRate}
          </p>
        </div>

        <div className="shrink-0 md:text-right">
          <div className="font-serif text-[3.2rem] leading-none text-[#1f2a24] sm:text-[3.8rem]">
            {kindergarten.totalScore.toFixed(1)}
          </div>

          <div className="mt-1 text-[14px] text-[#7b817b]">
            {t.survey.outOf}
          </div>

          <div className="mt-3 flex gap-1 md:justify-end">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={17}
                strokeWidth={1.7}
                className={
                  i <= Math.round(kindergarten.totalScore)
                    ? 'fill-[#d4a338] text-[#d4a338]'
                    : 'text-[#e5ddd1]'
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {visibleCategories.map((item) => (
          <div
            key={item.label}
            className="rounded-[20px] border border-[#eadfce] bg-[#fbf8f3] p-4 sm:p-5"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <h4 className="text-[15px] font-semibold text-[#1f2a24] sm:text-[16px]">
                  {translateCategoryLabel(item.label, t)}
                </h4>

                <p className="mt-1 text-[13px] text-[#7a807a] sm:text-[14px]">
                  {t.survey.nationalAverage}: {item.national.toFixed(1)} / 5,0
                </p>
              </div>

              <div className="shrink-0 text-right leading-tight">
                <div className="text-[1.05rem] font-semibold text-[#1f2a24] sm:text-[1.15rem]">
                  {item.score.toFixed(1)}
                </div>
                <div className="mt-1 text-[12px] text-[#7a807a] sm:text-[13px]">
                  / 5,0
                </div>
              </div>
            </div>

            <div className="h-2 rounded-full overflow-hidden bg-[#e7dcc9]">
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
          className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-[#6f755f] transition-colors hover:text-[#1f2a24]"
        >
          {expanded ? t.survey.showLess : t.survey.showMore}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      )}

      <div className="mt-5 border-t border-[#ece2d3] pt-4">
        <a
          href={kindergarten.link}
          target="_blank"
          rel="noreferrer"
          className="text-[13px] text-[#6f755f] underline underline-offset-4 transition-colors hover:text-[#1f2a24]"
        >
          {t.survey.source} · barnehagefakta.no
        </a>
      </div>
    </article>
  )
}

export default function Survey({ t }: Props) {
  return (
    <section id="undersokelse" className="bg-[#f7f3eb] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b8983a]">
          {t.survey.tag}
        </p>

        <h2 className="mb-4 font-serif text-[clamp(1.9rem,3.5vw,2.6rem)] font-normal leading-tight text-[#1f2a24]">
          {t.survey.title}
        </h2>

        <p className="mb-10 max-w-2xl text-[14px] leading-7 text-[#5f655f] sm:mb-12 sm:text-[15px]">
          {t.survey.lead}
        </p>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6">
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