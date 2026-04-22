import { useState } from 'react'
import {
  Clock,
  BookOpen,
  UtensilsCrossed,
  Trees,
  Users,
  X,
} from 'lucide-react'
import type { Translation } from '../types'

interface Props {
  t: Translation
}

export default function DailySchedule({ t }: Props) {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)

  const aboutIcons = [BookOpen, UtensilsCrossed, Trees, Users]

  return (
    <>
      <section id="hverdagen" className="py-24 px-5 sm:px-8 bg-[#f7f4ee]">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[30px] border border-[#e7dccb] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a7a25] mb-3">
              {t.dailySchedule.tag}
            </p>

            <h2 className="font-serif text-[clamp(2rem,3.6vw,2.9rem)] text-[#1f2f27] leading-tight mb-4">
              {t.dailySchedule.title}
            </h2>

            <p className="text-[#677067] text-[15px] sm:text-[16px] leading-[1.8] font-light mb-10 max-w-3xl">
              {t.dailySchedule.lead}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
              {t.dailySchedule.aboutItems.map((item, i) => {
                const Icon = aboutIcons[i]

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#f3eee4] flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#6f8a74]" strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#1f2f27] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] leading-[1.75] text-[#677067]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="rounded-[24px] border border-[#ece3d6] bg-[#fcfaf6] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f3eee4] flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#6f8a74]" strokeWidth={1.8} />
                </div>

                <div className="flex-1">
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#1f2f27] mb-2">
                    {t.dailySchedule.previewTitle}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] leading-[1.75] text-[#677067] mb-4 max-w-2xl">
                    {t.dailySchedule.previewText}
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsScheduleOpen(true)}
                    className="inline-flex items-center justify-center rounded-full border border-[#d9ccb8] bg-white px-5 py-2.5 text-[14px] font-medium text-[#1f2f27] hover:bg-[#f8f2e8] transition-colors"
                  >
                    {t.dailySchedule.openSchedule}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isScheduleOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[28px] border border-[#e7dccb] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[#ece3d6] bg-white px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f3eee4] flex items-center justify-center shrink-0">
                  <Clock size={17} className="text-[#6f8a74]" strokeWidth={1.8} />
                </div>

                <h3 className="font-serif text-[1.35rem] text-[#1f2f27]">
                  {t.dailySchedule.scheduleTitle}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsScheduleOpen(false)}
                aria-label={t.dailySchedule.closeSchedule}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7dccb] bg-white text-[#5f675f] hover:bg-[#f8f2e8] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <div className="divide-y divide-[#efe7da]">
                {t.dailySchedule.schedule.map((item, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[78px_1fr] sm:grid-cols-[96px_1fr] gap-4 py-3.5"
                  >
                    <div className="text-[13px] font-semibold text-[#9a7a25] tabular-nums">
                      {item.time}
                    </div>

                    <div>
                      <p className="text-[14px] sm:text-[15px] font-medium text-[#1f2f27] mb-0.5">
                        {item.title}
                      </p>

                      {item.text && (
                        <p className="text-[13px] sm:text-[14px] text-[#6a716a] leading-[1.6]">
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-[#efe7da]">
                <p className="text-[12.5px] sm:text-[13px] text-[#6a716a] italic leading-[1.6]">
                  {t.dailySchedule.scheduleNote}
                </p>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsScheduleOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-[#d9ccb8] bg-white px-5 py-2.5 text-[14px] font-medium text-[#1f2f27] hover:bg-[#f8f2e8] transition-colors"
                >
                  {t.dailySchedule.closeSchedule}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}