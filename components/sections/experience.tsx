import { profile } from '@/content/profile'
import type { YearMonth } from '@/content/types'
import { ui } from '@/content/ui'
import { formatDuration, formatYearMonth, monthsBetween } from '@/lib/dates'
import type { Locale } from '@/lib/i18n'
import { sectionId } from '@/lib/sections'
import { cn } from '@/lib/utils'

function Period({ start, end, lang, withDuration }: { start: YearMonth; end: YearMonth | null; lang: Locale; withDuration?: boolean }) {
  // O emprego atual não mostra duração: calculada no build, ficaria desatualizada até o próximo deploy.
  const duration = withDuration && end ? formatDuration(monthsBetween(start, end), lang) : null
  return (
    <p className="font-mono text-meta text-muted-foreground">
      <time dateTime={start}>{formatYearMonth(start, lang)}</time>
      {' – '}
      {end ? <time dateTime={end}>{formatYearMonth(end, lang)}</time> : ui.experience.present[lang]}
      {duration && <span className="sr-only">, </span>}
      {duration && <span className="before:mx-2 before:content-['/'] before:text-border">{duration}</span>}
    </p>
  )
}

export function Experience({ lang }: { lang: Locale }) {
  return (
    <section
      id={sectionId('experiencia', lang)}
      aria-labelledby="experience-title"
      className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:py-16"
    >
      <h2 id="experience-title" className="text-section">
        {ui.experience.title[lang]}
      </h2>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <h3 className="text-sm font-bold text-muted-foreground">{ui.experience.work[lang]}</h3>
          <ol className="mt-5 grid gap-8 border-l pl-6">
            {profile.experience.map((job) => (
              <li key={job.company} className="relative grid gap-1.5">
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-1.5 -left-[1.85rem] size-2.5 rounded-full ring-4 ring-background',
                    job.end ? 'bg-border' : 'bg-brand',
                  )}
                />
                <Period start={job.start} end={job.end} lang={lang} withDuration />
                <h4 className="text-lg font-bold">{job.role[lang]}</h4>
                <p className="-mt-1 font-medium">
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                      {job.company}
                      <span className="sr-only"> {ui.projects.newTab[lang]}</span>
                    </a>
                  ) : (
                    job.company
                  )}
                </p>
                <p className="max-w-prose text-muted-foreground">{job.summary[lang]}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-sm font-bold text-muted-foreground">{ui.experience.education[lang]}</h3>
          <ol className="mt-5 grid gap-6">
            {profile.education.map((item) => (
              <li key={item.institution} className="grid gap-1 rounded-lg border bg-card p-4">
                <Period start={item.start} end={item.end} lang={lang} />
                <h4 className="font-bold">{item.course[lang]}</h4>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
