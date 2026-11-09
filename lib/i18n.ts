import { locales, type Locale } from '@/content/types'

export { locales, type Locale }

/** Idioma de quem não manda preferência (ou manda uma que o site não tem). */
export const defaultLocale: Locale = 'pt'

/** Valor do atributo `lang` do <html> e das tags hreflang. */
export const htmlLang: Record<Locale, string> = { pt: 'pt-BR', en: 'en' }

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/**
 * Escolhe o idioma a partir do cabeçalho `Accept-Language`, respeitando os pesos `q`.
 * `pt-BR`, `pt-PT` e `pt` viram `pt`; `en-US` e `en` viram `en`.
 */
export function negotiateLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale
  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(';')
      const q = params.find((p) => p.trim().startsWith('q='))
      return { base: tag.split('-')[0], q: q ? Number(q.trim().slice(2)) : 1 }
    })
    .filter(({ q }) => Number.isFinite(q) && q > 0)
    .sort((a, b) => b.q - a.q)
  return ranked.find(({ base }) => hasLocale(base))?.base as Locale | undefined ?? defaultLocale
}
