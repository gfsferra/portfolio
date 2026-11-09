import type { Locale, Localized } from './types'

export interface NavItem {
  /** Âncora da seção na página inicial; também é o `id` da seção. */
  id: Localized
  label: Localized
}

/** Textos da interface que não pertencem ao perfil nem aos projetos. */
export const ui = {
  skipToContent: { pt: 'Pular para o conteúdo', en: 'Skip to content' },

  nav: {
    label: { pt: 'Navegação principal', en: 'Main navigation' },
    items: [
      { id: { pt: 'projetos', en: 'projects' }, label: { pt: 'Projetos', en: 'Projects' } },
      { id: { pt: 'sobre', en: 'about' }, label: { pt: 'Sobre', en: 'About' } },
      { id: { pt: 'experiencia', en: 'experience' }, label: { pt: 'Experiência', en: 'Experience' } },
      { id: { pt: 'contato', en: 'contact' }, label: { pt: 'Contato', en: 'Contact' } },
    ] satisfies NavItem[],
    openMenu: { pt: 'Abrir menu', en: 'Open menu' },
    closeMenu: { pt: 'Fechar menu', en: 'Close menu' },
    menuTitle: { pt: 'Menu', en: 'Menu' },
  },

  language: {
    label: { pt: 'Idioma', en: 'Language' },
    /** Cada idioma pelo próprio nome, como os leitores de tela devem anunciar. */
    names: { pt: 'Português', en: 'English' } satisfies Record<Locale, string>,
  },

  theme: {
    toDark: { pt: 'Ativar tema escuro', en: 'Switch to dark theme' },
    toLight: { pt: 'Ativar tema claro', en: 'Switch to light theme' },
  },

  hero: {
    ctaProjects: { pt: 'Ver projetos', en: 'See projects' },
    ctaContact: { pt: 'Falar comigo', en: 'Get in touch' },
    codeLabel: { pt: 'Trechos reais do meu código', en: 'Real excerpts from my code' },
  },

  code: {
    viewSource: { pt: 'ver no GitHub (abre em nova aba)', en: 'view on GitHub (opens in a new tab)' },
    privateRepo: { pt: 'repositório privado', en: 'private repository' },
    line: { pt: 'Linha', en: 'Line' },
    notes: { pt: 'Notas sobre o trecho', en: 'Notes on the excerpt' },
  },

  projects: {
    title: { pt: 'Projetos', en: 'Projects' },
    intro: {
      pt: 'O que eu construí, com o código por trás de cada decisão.',
      en: 'What I have built, with the code behind each decision.',
    },
    problem: { pt: 'O problema', en: 'The problem' },
    role: { pt: 'O que eu fiz', en: 'What I did' },
    highlights: { pt: 'Decisões técnicas', en: 'Technical decisions' },
    stack: { pt: 'Tecnologias', en: 'Stack' },
    repo: { pt: 'Ver o código', en: 'View the code' },
    demo: { pt: 'Abrir o app', en: 'Open the app' },
    newTab: { pt: '(abre em nova aba)', en: '(opens in a new tab)' },
  },

  notFound: {
    title: { pt: 'Página não encontrada', en: 'Page not found' },
    body: {
      pt: 'O endereço pode ter mudado ou estar digitado errado.',
      en: 'The address may have changed or been mistyped.',
    },
    back: { pt: 'Ir para a página inicial', en: 'Go to the home page' },
  },
}
