import Link from 'next/link'
import { profile } from '@/content/profile'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'
import { LanguageSwitch } from './language-switch'
import { MobileNav } from './mobile-nav'
import { ThemeToggle } from './theme-toggle'

export function Header({ lang }: { lang: Locale }) {
  const links = ui.nav.items.map((item) => ({ href: `#${item.id[lang]}`, label: item.label[lang] }))
  const themeLabels = { toDark: ui.theme.toDark[lang], toLight: ui.theme.toLight[lang] }

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${lang}`} className="text-base font-bold tracking-tight">
          {profile.name}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label={ui.nav.label[lang]}>
            <ul className="flex items-center gap-6 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors duration-(--duration-fast) hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2 border-l pl-4">
            <LanguageSwitch lang={lang} />
            <ThemeToggle labels={themeLabels} />
          </div>
        </div>

        <MobileNav
          links={links}
          labels={{
            open: ui.nav.openMenu[lang],
            close: ui.nav.closeMenu[lang],
            title: ui.nav.menuTitle[lang],
            nav: ui.nav.label[lang],
          }}
          footer={
            <>
              <LanguageSwitch lang={lang} />
              <ThemeToggle labels={themeLabels} />
            </>
          }
        />
      </div>
    </header>
  )
}
