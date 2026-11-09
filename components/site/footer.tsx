import { profile } from '@/content/profile'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'

/** Ano do build, em cache: com Cache Components, ler a hora atual fora de cache tornaria a página dinâmica. */
async function buildYear() {
  'use cache'
  return new Date().getFullYear()
}

export async function Footer({ lang }: { lang: Locale }) {
  const year = await buildYear()
  return (
    <footer className="border-t print:hidden">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6">
        <p>
          © {year} {profile.name}
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com/gfsferra/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            {ui.footer.source[lang]}
            <span className="sr-only"> {ui.projects.newTab[lang]}</span>
          </a>
          <a href="#main" className="underline-offset-4 hover:text-foreground hover:underline">
            {ui.footer.backToTop[lang]}
          </a>
        </div>
      </div>
    </footer>
  )
}
