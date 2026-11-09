import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { profile } from '@/content/profile'
import { jetbrains, schibsted } from '@/lib/fonts'
import { hasLocale, htmlLang, locales } from '@/lib/i18n'
import { siteUrl } from '@/lib/site'
import { themeScript } from '@/lib/theme'
import '../globals.css'

/**
 * /pt e /en são gerados no build. Com Cache Components não existe `dynamicParams`:
 * qualquer outro idioma na URL chega ao layout e recebe `notFound()`.
 */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return {
    metadataBase: siteUrl,
    title: `${profile.name} | ${profile.role[lang]}`,
    description: profile.headline[lang],
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])),
    },
  }
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html
      lang={htmlLang[lang]}
      className={`${schibsted.variable} ${jetbrains.variable}`}
      // O script do tema liga a classe `dark` antes do React hidratar.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  )
}
