export const locales = ['pt', 'en'] as const
export type Locale = (typeof locales)[number]

/** Texto com uma versão por idioma. */
export type Localized<T = string> = Record<Locale, T>

/** Mês e ano no formato `AAAA-MM`, ou só o ano (`AAAA`) quando o mês não importa. */
export type YearMonth = `${number}-${number}` | `${number}`

export type ContactKind = 'linkedin' | 'email' | 'whatsapp'

export interface Contact {
  kind: ContactKind
  label: string
  href: string
}

export interface Experience {
  company: string
  companyUrl?: string
  role: Localized
  start: YearMonth
  /** `null` = emprego atual. */
  end: YearMonth | null
  summary: Localized
}

export interface Education {
  institution: string
  course: Localized
  start: YearMonth
  end: YearMonth | null
}

export interface SkillGroup {
  area: Localized
  items: string[]
}

export interface Profile {
  name: string
  role: Localized
  /** Posicionamento em uma frase, usado no hero e na meta description. */
  headline: Localized
  location: Localized
  /** Parágrafos da seção "Sobre". */
  about: Localized<string[]>
  photo: { src: string; alt: Localized } | null
  contacts: Contact[]
  experience: Experience[]
  education: Education[]
  highlights: Localized<string[]>
  skills: SkillGroup[]
  cv: Localized
}

export interface ProjectImage {
  src: string
  alt: Localized
  width: number
  height: number
}

export interface Project {
  slug: string
  title: Localized
  /** Uma linha: o que é. */
  tagline: Localized
  /** Que problema resolve. */
  problem: Localized
  /** O que o Gabriel fez. */
  role: Localized
  /** Decisões técnicas que valem destacar. */
  highlights: Localized<string[]>
  stack: string[]
  /** Estado atual e resultado mensurável. */
  outcome: Localized
  links: { repo?: string; demo?: string }
  image: ProjectImage | null
  featured: boolean
}
