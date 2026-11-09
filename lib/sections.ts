import { ui } from '@/content/ui'
import type { Locale } from '@/lib/i18n'

/** Chave de cada seção da página inicial: o `id` em português, que também é a chave em ui.nav. */
export type SectionKey = 'projetos' | 'sobre' | 'experiencia' | 'contato'

/** `id` da seção no idioma da página (ex.: "projetos" em /pt, "projects" em /en). */
export function sectionId(key: SectionKey, lang: Locale): string {
  const item = ui.nav.items.find((i) => i.id.pt === key)
  if (!item) throw new Error(`Seção sem item na navegação: ${key}`)
  return item.id[lang]
}
