import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { ui } from '@/content/ui'
import { formatYearMonth } from '@/lib/dates'
import { hasLocale, type Locale } from '@/lib/i18n'
import { siteUrl } from '@/lib/site'

/*
 * Currículo em uma página A4, montado do mesmo conteúdo do site. É a fonte dos PDFs em public/cv/
 * (`npm run cv`). Sem endereço residencial. Fora dos buscadores: o PDF é o formato para baixar.
 */

export async function generateMetadata({ params }: PageProps<'/[lang]/cv'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return { title: `${ui.cv.title[lang]} | ${profile.name}`, robots: { index: false } }
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid content-start gap-2 break-inside-avoid">
      <h2 className="border-b pb-1 text-[0.8rem] font-bold tracking-wide text-brand">{title}</h2>
      {children}
    </section>
  )
}

function period(start: Parameters<typeof formatYearMonth>[0], end: Parameters<typeof formatYearMonth>[0] | null, lang: Locale) {
  return `${formatYearMonth(start, lang)} – ${end ? formatYearMonth(end, lang) : ui.experience.present[lang]}`
}

export default async function CvPage({ params }: PageProps<'/[lang]/cv'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  // Sem endereço público configurado (desenvolvimento), o link do portfólio fica de fora do PDF.
  const portfolioUrl = siteUrl.hostname === 'localhost' ? null : new URL(`/${lang}`, siteUrl).toString()

  return (
    <main
      id="main"
      className="mx-auto my-8 grid max-w-[210mm] gap-5 bg-card px-[14mm] py-[12mm] text-[0.8rem] leading-snug text-card-foreground shadow-code print:my-0 print:shadow-none"
    >
      <header className="grid gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight">{profile.name}</h1>
        <p className="text-sm font-bold text-brand">{profile.role[lang]}</p>
        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 font-mono text-[0.7rem] text-muted-foreground">
          <li>{profile.location[lang]}</li>
          {profile.contacts.map((c) => (
            <li key={c.kind}>
              <a href={c.href}>{c.label}</a>
            </li>
          ))}
          {portfolioUrl && (
            <li>
              <a href={portfolioUrl}>
                {ui.cv.portfolio[lang]}: {portfolioUrl.replace(/^https?:\/\//, '')}
              </a>
            </li>
          )}
        </ul>
      </header>

      <Block title={ui.cv.summary[lang]}>
        <p>{profile.about[lang][0]}</p>
        <p>{profile.about[lang][1]}</p>
      </Block>

      <Block title={ui.cv.experience[lang]}>
        {profile.experience.map((job) => (
          <div key={job.company} className="grid gap-0.5 break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-bold">
                {job.role[lang]}, {job.company}
              </h3>
              <p className="font-mono text-[0.7rem] text-muted-foreground">{period(job.start, job.end, lang)}</p>
            </div>
            <p className="text-muted-foreground">{job.summary[lang]}</p>
          </div>
        ))}
      </Block>

      <Block title={ui.cv.projects[lang]}>
        {projects
          .filter((p) => p.featured)
          .map((p) => {
            const link = p.links.repo ?? p.links.demo
            return (
              <div key={p.slug} className="grid gap-0.5 break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-bold">{p.title[lang]}</h3>
                  {link && (
                    <a href={link} className="font-mono text-[0.7rem] text-muted-foreground">
                      {link.replace(/^https?:\/\//, '')}
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {p.tagline[lang]} {p.outcome[lang]}
                </p>
                <p className="font-mono text-[0.7rem]">{p.stack.join(', ')}</p>
              </div>
            )
          })}
      </Block>

      <div className="grid gap-5 sm:grid-cols-2 print:grid-cols-2">
        <Block title={ui.cv.education[lang]}>
          {profile.education.map((item) => (
            <div key={item.institution} className="grid gap-0.5">
              <h3 className="font-bold">{item.course[lang]}</h3>
              <p className="text-muted-foreground">{item.institution}</p>
              <p className="font-mono text-[0.7rem] text-muted-foreground">{period(item.start, item.end, lang)}</p>
            </div>
          ))}
        </Block>

        <div className="grid content-start gap-5">
          <Block title={ui.cv.skills[lang]}>
            <dl className="grid gap-1">
              {profile.skills.map((group) => (
                <div key={group.area.pt}>
                  <dt className="inline font-bold">{group.area[lang]}: </dt>
                  <dd className="inline text-muted-foreground">
                    {group.items.map((s) => (typeof s.name === 'string' ? s.name : s.name[lang])).join(', ')}
                  </dd>
                </div>
              ))}
            </dl>
          </Block>
          <Block title={ui.cv.languages[lang]}>
            <p>{profile.highlights[lang].join(', ')}</p>
          </Block>
        </div>
      </div>
    </main>
  )
}
