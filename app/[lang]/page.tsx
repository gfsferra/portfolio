import { notFound } from 'next/navigation'
import { About } from '@/components/sections/about'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { hasLocale } from '@/lib/i18n'

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero lang={lang} />
      <Projects lang={lang} />
      <About lang={lang} />
    </main>
  )
}
