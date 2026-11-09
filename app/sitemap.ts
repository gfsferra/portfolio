import type { MetadataRoute } from 'next'
import { htmlLang, locales } from '@/lib/i18n'
import { siteUrl } from '@/lib/site'

/** Uma entrada por idioma, cada uma apontando para a versão no outro idioma (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, siteUrl).toString()
  const languages = Object.fromEntries(locales.map((l) => [htmlLang[l], url(`/${l}`)]))
  return locales.map((lang) => ({ url: url(`/${lang}`), alternates: { languages } }))
}
