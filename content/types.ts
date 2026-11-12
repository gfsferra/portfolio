import type { TechIconKey } from '@/lib/tech-icons'

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

export interface Skill {
  /** Nome próprio de tecnologia fica igual nos dois idiomas; o resto é traduzido. */
  name: string | Localized
  /** Ícone do Simple Icons (ver lib/tech-icons.ts); sem ícone, aparece só o nome. */
  icon?: TechIconKey
}

export interface SkillGroup {
  area: Localized
  items: Skill[]
}

export interface Profile {
  name: string
  role: Localized
  /** Posicionamento em uma frase, usado no hero e na meta description. */
  headline: Localized
  location: Localized
  /** Parágrafos da seção "Sobre". */
  about: Localized<string[]>
  photo: { src: string; alt: Localized; width: number; height: number } | null
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

export interface CodeNote {
  /** Linha do trecho (1 = primeira linha exibida) que recebe o marca-texto. */
  line: number
  text: Localized
}

export interface Project {
  slug: string
  title: Localized
  /** Estado curto: no ar, em desenvolvimento, código aberto. */
  status: Localized
  /** Trecho anotado no painel do projeto (id em snippets.ts). */
  code?: { snippet: string; notes: CodeNote[] }
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
  /** Telas reais do app, na ordem em que aparecem; vazio quando não há. */
  images: ProjectImage[]
  featured: boolean
}

export interface SnippetSource {
  /** `dono/repositório` no GitHub. */
  repo: string
  /** Commit fixo de onde o trecho foi extraído. */
  sha: string
  path: string
  /** Faixas de linhas do arquivo original, inclusivas. */
  ranges: [number, number][]
  /** Linhas omitidas depois da última faixa (o trecho termina em `/* … *\/`). */
  trailingEllipsis: boolean
  /** Repositório privado: o site mostra o caminho, mas não o link. */
  private: boolean
}

export interface Snippet {
  id: string
  /** `slug` do projeto em projects.ts. */
  project: string
  lang: 'ts' | 'js' | 'php' | 'sql'
  source: SnippetSource
  /** Link fixo para as linhas no GitHub; ausente em repositório privado. */
  href?: string
  code: string
}
