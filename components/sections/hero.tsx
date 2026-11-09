import { DownloadIcon, MapPinIcon } from 'lucide-react'
import { CodeCard } from '@/components/code/code-card'
import { Button } from '@/components/ui/button'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { getSnippet } from '@/content/snippets'
import { ui } from '@/content/ui'
import { highlight } from '@/lib/highlight'
import type { Locale } from '@/lib/i18n'
import { sectionId } from '@/lib/sections'

/** De trás para a frente na pilha: o último cartão fica por cima, inteiro à vista. */
const HERO_SNIPPETS = ['orbital-category-kind-fk', 'grit-conditional-upsert', 'cadastro-cpf-check-digit']

export async function Hero({ lang }: { lang: Locale }) {
  const cards = await Promise.all(
    HERO_SNIPPETS.map(async (id) => {
      const snippet = getSnippet(id)
      const html = await highlight(snippet.code, snippet.lang, { wrap: true })
      const project = projects.find((p) => p.slug === snippet.project)
      return { snippet, html, projectName: project ? project.title[lang] : snippet.project }
    }),
  )
  const codeLabels = { viewSource: ui.code.viewSource[lang], privateRepo: ui.code.privateRepo[lang] }

  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid max-w-page items-center gap-12 px-4 pt-14 pb-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:pt-20 lg:pb-12"
    >
      <div>
        <h1 id="hero-title" className="text-display">
          {profile.name}
        </h1>
        <p className="mt-5 text-lg font-bold text-brand">{profile.role[lang]}</p>
        <p className="mt-3 max-w-[44ch] text-lede text-muted-foreground">{profile.headline[lang]}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-11 px-5 text-base">
            <a href={`#${sectionId('projetos', lang)}`}>{ui.hero.ctaProjects[lang]}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 px-5 text-base">
            <a href={`#${sectionId('contato', lang)}`}>{ui.hero.ctaContact[lang]}</a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="h-11 px-3 text-base">
            <a href={profile.cv[lang]} download>
              <DownloadIcon aria-hidden="true" />
              {ui.contact.cv[lang]}
            </a>
          </Button>
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPinIcon aria-hidden="true" className="size-4" />
          {profile.location[lang]}
        </p>
      </div>

      <div role="group" aria-label={ui.hero.codeLabel[lang]} className="code-stack">
        {cards.map(({ snippet, html, projectName }) => (
          <CodeCard key={snippet.id} snippet={snippet} html={html} projectName={projectName} labels={codeLabels} />
        ))}
      </div>
    </section>
  )
}
