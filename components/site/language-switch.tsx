import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ui } from '@/content/ui'
import { htmlLang, locales, type Locale } from '@/lib/i18n'

/** PT | EN. O idioma atual fica marcado com `aria-current`; o outro leva à mesma página traduzida. */
export function LanguageSwitch({ lang, className }: { lang: Locale; className?: string }) {
  return (
    <nav aria-label={ui.language.label[lang]} className={cn('flex items-center rounded-md border p-0.5', className)}>
      {locales.map((locale) => {
        const current = locale === lang
        return (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={htmlLang[locale]}
            lang={htmlLang[locale]}
            aria-current={current ? 'page' : undefined}
            className={cn(
              'rounded-[5px] px-2 py-1 font-mono text-meta transition-colors duration-(--duration-fast)',
              current ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <span className="sr-only">{ui.language.names[locale]}</span>
            <span aria-hidden="true">{locale.toUpperCase()}</span>
          </Link>
        )
      })}
    </nav>
  )
}
