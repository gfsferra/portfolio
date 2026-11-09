import type { YearMonth } from '@/content/types'
import type { Locale } from '@/lib/i18n'

const intlLocale: Record<Locale, string> = { pt: 'pt-BR', en: 'en-US' }

function parse(value: YearMonth) {
  const [year, month = 1] = value.split('-').map(Number)
  return { year, month }
}

/** "fev. de 2024" em português, "Feb 2024" em inglês. Em UTC, para não depender do fuso do build. */
export function formatYearMonth(value: YearMonth, lang: Locale): string {
  const { year, month } = parse(value)
  return new Intl.DateTimeFormat(intlLocale[lang], { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    Date.UTC(year, month - 1, 1),
  )
}

/** Meses entre duas datas contando o mês de início e o de fim, como o LinkedIn conta. */
export function monthsBetween(start: YearMonth, end: YearMonth): number {
  const a = parse(start)
  const b = parse(end)
  return (b.year - a.year) * 12 + (b.month - a.month) + 1
}

/** "2 anos e 1 mês" / "2 years 1 month". */
export function formatDuration(months: number, lang: Locale): string {
  const years = Math.floor(months / 12)
  const rest = months % 12
  const parts =
    lang === 'pt'
      ? [years && `${years} ${years === 1 ? 'ano' : 'anos'}`, rest && `${rest} ${rest === 1 ? 'mês' : 'meses'}`]
      : [years && `${years} ${years === 1 ? 'year' : 'years'}`, rest && `${rest} ${rest === 1 ? 'month' : 'months'}`]
  return parts.filter(Boolean).join(lang === 'pt' ? ' e ' : ' ')
}
