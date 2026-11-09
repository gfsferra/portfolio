import { JetBrains_Mono, Schibsted_Grotesk } from 'next/font/google'

/** Títulos e texto. Fonte variável: os pesos usados são 400, 500, 700 e 800. */
export const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
})

/** Código, caminhos de arquivo, tecnologias e datas. */
export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})
