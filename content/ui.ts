import type { Localized } from './types'

/** Textos da interface que não pertencem ao perfil nem aos projetos. */
export const ui = {
  skipToContent: { pt: 'Pular para o conteúdo', en: 'Skip to content' },
  notFound: {
    title: { pt: 'Página não encontrada', en: 'Page not found' },
    body: {
      pt: 'O endereço pode ter mudado ou estar digitado errado.',
      en: 'The address may have changed or been mistyped.',
    },
    back: { pt: 'Ir para a página inicial', en: 'Go to the home page' },
  },
} satisfies Record<string, Localized | Record<string, Localized>>
