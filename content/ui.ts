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

  notFound: {
    title: { pt: 'Página não encontrada', en: 'Page not found' },
    body: {
      pt: 'O endereço pode ter mudado ou estar digitado errado.',
      en: 'The address may have changed or been mistyped.',
    },
    back: { pt: 'Ir para a página inicial', en: 'Go to the home page' },
  },
}
