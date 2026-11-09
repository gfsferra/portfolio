import { ProjectPanel } from '@/components/projects/project-panel'
import { projects } from '@/content/projects'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'
import { sectionId } from '@/lib/sections'

export function Projects({ lang }: { lang: Locale }) {
  return (
    <section
      id={sectionId('projetos', lang)}
      aria-labelledby="projects-title"
      className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-24"
    >
      <header className="max-w-prose">
        <h2 id="projects-title" className="text-section">
          {ui.projects.title[lang]}
        </h2>
        <p className="mt-3 text-lede text-muted-foreground">{ui.projects.intro[lang]}</p>
      </header>
      <div className="mt-10 grid gap-8">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <ProjectPanel key={project.slug} project={project} lang={lang} />
          ))}
      </div>
    </section>
  )
}
