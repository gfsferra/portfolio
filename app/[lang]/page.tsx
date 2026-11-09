import { notFound } from 'next/navigation'
import { profile } from '@/content/profile'
import { hasLocale } from '@/lib/i18n'

// Página provisória da Fase 3: confirma fontes, cores e idioma. As seções entram na Fase 4.
export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <main id="main" tabIndex={-1} className="mx-auto max-w-page px-4 py-24 outline-none sm:px-6">
      <h1 className="text-display">{profile.name}</h1>
      <p className="mt-4 font-bold text-brand">{profile.role[lang]}</p>
      <p className="mt-3 max-w-prose text-lede text-muted-foreground">{profile.headline[lang]}</p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {profile.skills[0].items.map((item) => (
          <li key={item} className="rounded-sm border px-2 py-0.5 font-mono text-meta text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </main>
  )
}
