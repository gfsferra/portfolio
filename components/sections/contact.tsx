import { BriefcaseBusinessIcon, DownloadIcon, MailIcon, MessageCircleIcon, type LucideIcon } from 'lucide-react'
import { CopyButton } from '@/components/site/copy-button'
import { Button } from '@/components/ui/button'
import { profile } from '@/content/profile'
import type { ContactKind } from '@/content/types'
import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'
import { sectionId } from '@/lib/sections'

const icons: Record<ContactKind, LucideIcon> = {
  linkedin: BriefcaseBusinessIcon,
  email: MailIcon,
  whatsapp: MessageCircleIcon,
}

export function Contact({ lang }: { lang: Locale }) {
  const t = ui.contact

  return (
    <section
      id={sectionId('contato', lang)}
      aria-labelledby="contact-title"
      className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:py-16"
    >
      <div className="grid gap-10 rounded-xl border border-code-border bg-code px-6 py-10 text-code-foreground shadow-code sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:py-14">
        <div>
          <h2 id="contact-title" className="text-section">
            {t.title[lang]}
          </h2>
          <p className="mt-3 max-w-prose text-lede opacity-80">{t.intro[lang]}</p>
          <Button asChild variant="secondary" size="lg" className="mt-8 h-11 px-5 text-base">
            <a href={profile.cv[lang]} download>
              <DownloadIcon aria-hidden="true" />
              {t.cv[lang]}
            </a>
          </Button>
        </div>

        <ul className="grid gap-3">
          {profile.contacts.map((contact) => {
            const Icon = icons[contact.kind]
            const external = contact.kind !== 'email'
            return (
              <li
                key={contact.kind}
                className="flex items-center gap-3 rounded-lg bg-code-foreground/5 py-2 pr-2 pl-4 ring-1 ring-code-border"
              >
                <Icon aria-hidden="true" className="size-5 shrink-0 opacity-80" />
                <a
                  href={contact.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="grid min-w-0 flex-1 py-1 underline-offset-4 hover:underline"
                >
                  <span className="text-sm opacity-70">{t.channels[contact.kind][lang]}</span>
                  <span className="truncate font-mono text-sm">{contact.label}</span>
                </a>
                {contact.kind === 'email' && (
                  <CopyButton
                    value={contact.label}
                    labels={{ copy: t.copyEmail[lang], copied: t.copied[lang] }}
                    className="text-code-foreground hover:bg-code-foreground/10 hover:text-code-foreground"
                  />
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
