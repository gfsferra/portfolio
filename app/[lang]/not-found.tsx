import Link from 'next/link'
import { lang as rootLang } from 'next/root-params'
import { ui } from '@/content/ui'
import { defaultLocale, hasLocale } from '@/lib/i18n'

/**
 * 404 de qualquer endereço: idioma inválido (/xx) ou página inexistente (/pt/qualquer-coisa).
 * Fica dentro do layout, com cabeçalho e rodapé. O idioma vem da URL; se não for válido, português.
 */
export default async function NotFound() {
  const raw = await rootLang()
  const lang = hasLocale(raw) ? raw : defaultLocale
  const t = ui.notFound

  return (
    <main id="main" className="mx-auto grid max-w-page gap-4 px-4 py-24 sm:px-6">
      <title>{`404 | ${t.title[lang]}`}</title>
      <p className="font-mono text-meta text-muted-foreground">404</p>
      <h1 className="text-title">{t.title[lang]}</h1>
      <p className="max-w-prose text-lede text-muted-foreground">{t.body[lang]}</p>
      <p className="mt-4">
        <Link href={`/${lang}`} className="font-bold text-brand underline underline-offset-4 hover:no-underline">
          {t.back[lang]}
        </Link>
      </p>
    </main>
  )
}
