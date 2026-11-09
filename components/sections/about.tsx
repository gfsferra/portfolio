import { LanguagesIcon } from 'lucide-react'
import Image from 'next/image'
import { TechIcon } from '@/components/site/tech-icon'
import { Badge } from '@/components/ui/badge'
import { profile } from '@/content/profile'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'
import { sectionId } from '@/lib/sections'

export function About({ lang }: { lang: Locale }) {
  const photo = profile.photo

  return (
    <section
      id={sectionId('sobre', lang)}
      aria-labelledby="about-title"
      className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:py-16"
    >
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-16">
        {photo && (
          <Image
            src={photo.src}
            alt={photo.alt[lang]}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 15rem, 50vw"
            className="w-1/2 max-w-48 rounded-xl border object-cover md:w-full md:max-w-none"
          />
        )}
        <div className="grid gap-5">
          <h2 id="about-title" className="text-section">
            {ui.about.title[lang]}
          </h2>
          {profile.about[lang].map((paragraph) => (
            <p key={paragraph} className="max-w-prose text-muted-foreground first-of-type:text-lede first-of-type:text-foreground">
              {paragraph}
            </p>
          ))}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {profile.highlights[lang].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <LanguagesIcon aria-hidden="true" className="size-4 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 grid gap-6">
        <header>
          <h3 className="text-project">{ui.about.skills[lang]}</h3>
          <p className="mt-1 text-muted-foreground">{ui.about.skillsIntro[lang]}</p>
        </header>
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group) => (
            <div key={group.area.pt}>
              <h4 className="border-b pb-2 text-sm font-bold">{group.area[lang]}</h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((skill) => {
                  const name = typeof skill.name === 'string' ? skill.name : skill.name[lang]
                  return (
                    // Nomes próprios de tecnologia não passam pelo tradutor automático do navegador.
                    <li key={name} translate={typeof skill.name === 'string' ? 'no' : undefined}>
                      <Badge variant="outline" className="h-auto gap-1.5 rounded-sm py-1 font-mono text-meta font-normal">
                        {skill.icon && <TechIcon icon={skill.icon} />}
                        {name}
                      </Badge>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
