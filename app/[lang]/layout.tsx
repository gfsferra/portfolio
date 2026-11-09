import type { Metadata, Viewport } from 'next'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { profile } from '@/content/profile'
import { ui } from '@/content/ui'
import { jetbrains, schibsted } from '@/lib/fonts'
import { defaultLocale, hasLocale, htmlLang, locales } from '@/lib/i18n'
import { siteUrl } from '@/lib/site'
import { themeScript } from '@/lib/theme'
import '../globals.css'

/**
 * /pt e /en são gerados no build. Com Cache Components não existe `dynamicParams`: qualquer outro
 * primeiro segmento (/xx) chega aqui. O layout não lança 404 (não haveria página de erro acima dele);
 * renderiza em português e a página chama `notFound()`, que cai em app/[lang]/not-found.tsx.
 */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

/** Cor da barra do navegador no celular, igual ao fundo de cada tema. */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F6FA' },
    { media: '(prefers-color-scheme: dark)', color: '#14172E' },
  ],
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const title = `${profile.name} | ${profile.role[lang]}`
  const description = profile.headline[lang]
  const ogLocale = (l: string) => htmlLang[l as typeof lang].replace('-', '_')
  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])),
        // A raiz escolhe o idioma pelo navegador.
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'profile',
      siteName: profile.name,
      title,
      description,
      url: `/${lang}`,
      locale: ogLocale(lang),
      alternateLocale: locales.filter((l) => l !== lang).map(ogLocale),
      firstName: 'Gabriel',
      lastName: 'Sferra',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang: raw } = await params
  const lang = hasLocale(raw) ? raw : defaultLocale

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
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only print:hidden focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          {ui.skipToContent[lang]}
        </a>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  )
}
