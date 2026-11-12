import { ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import { AnnotatedCode } from '@/components/code/annotated-code'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Project, ProjectImage } from '@/content/types'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'

/** Painel de um projeto: texto à esquerda; tela do app (quando houver) e trecho anotado à direita. */
export function ProjectPanel({ project, lang }: { project: Project; lang: Locale }) {
  const t = ui.projects
  const titleId = `projeto-${project.slug}`
  const external = (label: string) => (
    <>
      {label}
      <span className="sr-only"> {t.newTab[lang]}</span>
      <ArrowUpRightIcon aria-hidden="true" />
    </>
  )

  return (
    <article aria-labelledby={titleId}>
      <Card className="grid gap-10 overflow-visible rounded-xl border p-6 ring-0 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
        <div className="grid content-start gap-6">
          <header className="grid justify-items-start gap-2">
            <Badge variant="secondary" className="rounded-sm font-mono text-meta font-normal">
              {project.status[lang]}
            </Badge>
            <h3 id={titleId} className="text-project">
              {project.title[lang]}
            </h3>
            <p className="max-w-prose text-muted-foreground">{project.tagline[lang]}</p>
          </header>

          <dl className="grid gap-4">
            <div>
              <dt className="text-sm font-bold">{t.problem[lang]}</dt>
              <dd className="mt-1 max-w-prose text-muted-foreground">{project.problem[lang]}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold">{t.role[lang]}</dt>
              <dd className="mt-1 max-w-prose text-muted-foreground">{project.role[lang]}</dd>
            </div>
          </dl>

          <div>
            <h4 className="text-sm font-bold">{t.highlights[lang]}</h4>
            <ul className="mt-2 grid max-w-prose gap-2 text-sm">
              {project.highlights[lang].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="max-w-prose border-l-2 border-brand pl-3 text-sm">{project.outcome[lang]}</p>

          <ul aria-label={t.stack[lang]} translate="no" className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Badge variant="outline" className="rounded-sm font-mono text-meta font-normal">
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {project.links.repo && (
              <Button asChild variant="outline" size="lg" className="h-10 px-4">
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                  {external(t.repo[lang])}
                </a>
              </Button>
            )}
            {project.links.demo && (
              <Button asChild size="lg" className="h-10 px-4">
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  {external(t.demo[lang])}
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="grid min-w-0 content-start gap-8 lg:sticky lg:top-24 lg:self-start">
          {project.images.length === 1 && (
            <figure className="mx-auto w-[200px]">
              <Phone image={project.images[0]} lang={lang} sizes="188px" />
            </figure>
          )}
          {project.images.length > 1 && (
            // Lado a lado; no celular, uma fileira que rola na horizontal em vez de encolher as telas.
            <ul
              aria-label={t.screens[lang]}
              className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pt-1 pb-8 sm:mx-0 sm:justify-center sm:overflow-visible sm:px-0 sm:pb-2"
            >
              {project.images.map((image) => (
                <li key={image.src} className="w-[156px] shrink-0 snap-center sm:w-auto sm:max-w-[176px] sm:flex-1">
                  <Phone image={image} lang={lang} sizes="(min-width: 640px) 164px, 144px" />
                </li>
              ))}
            </ul>
          )}
          {project.code && (
            <AnnotatedCode
              snippetId={project.code.snippet}
              notes={project.code.notes}
              projectName={project.title[lang]}
              lang={lang}
            />
          )}
        </div>
      </Card>
    </article>
  )
}

/** Captura de tela do app numa moldura de celular. */
function Phone({ image, lang, sizes }: { image: ProjectImage; lang: Locale; sizes: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border-[6px] border-code bg-code shadow-code">
      <Image src={image.src} alt={image.alt[lang]} width={image.width} height={image.height} sizes={sizes} />
    </div>
  )
}
