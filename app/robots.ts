import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

/** Tudo liberado. As páginas do currículo saem dos resultados pela meta tag `noindex`, não por bloqueio aqui. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', siteUrl).toString(),
  }
}
