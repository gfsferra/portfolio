import { codeToHtml, createCssVariablesTheme } from 'shiki'
import type { Snippet } from '@/content/types'

/** Tema do Shiki que só emite variáveis CSS; as cores vêm dos tokens `syntax-*` em globals.css. */
const theme = createCssVariablesTheme({
  name: 'portfolio',
  variablePrefix: '--shiki-',
  fontStyle: true,
})

interface HighlightOptions {
  /** Linhas (1 = primeira do trecho) que recebem o marca-texto. */
  marked?: number[]
  /** Quebra linhas longas em vez de rolar. Sem rolagem, o <pre> não precisa entrar no Tab. */
  wrap?: boolean
}

/**
 * Realça um trecho no build (Server Component): nenhum JavaScript de realce vai para o navegador.
 * O resultado fica em cache porque depende só dos argumentos.
 */
export async function highlight(code: string, lang: Snippet['lang'], options: HighlightOptions = {}) {
  'use cache'
  const { marked = [], wrap = false } = options
  return codeToHtml(code, {
    lang,
    theme,
    transformers: [
      {
        pre(node) {
          if (wrap) {
            delete node.properties.tabindex
            this.addClassToHast(node, 'wrap')
          }
        },
        line(node, line) {
          if (marked.includes(line)) this.addClassToHast(node, 'marked')
        },
      },
    ],
  })
}
