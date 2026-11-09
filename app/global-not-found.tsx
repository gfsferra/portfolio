import type { Metadata } from 'next'
import Link from 'next/link'
import { ui } from '@/content/ui'
import { jetbrains, schibsted } from '@/lib/fonts'
import { themeScript } from '@/lib/theme'
import './globals.css'

export const metadata: Metadata = {
  title: `404 | ${ui.notFound.title.pt}`,
}

/** 404 de qualquer endereço fora de /pt e /en. Sem idioma na URL, mostra os dois. */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={`${schibsted.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        <main className="mx-auto grid max-w-page gap-10 px-4 py-24 sm:px-6">
          <p className="font-mono text-meta text-muted-foreground">404</p>
          <section className="grid gap-3">
            <h1 className="text-title">{ui.notFound.title.pt}</h1>
            <p className="max-w-prose text-muted-foreground">{ui.notFound.body.pt}</p>
            <Link className="font-bold text-brand underline underline-offset-4" href="/pt">
              {ui.notFound.back.pt}
            </Link>
          </section>
          <section lang="en" className="grid gap-3">
            <h2 className="text-section">{ui.notFound.title.en}</h2>
            <p className="max-w-prose text-muted-foreground">{ui.notFound.body.en}</p>
            <Link className="font-bold text-brand underline underline-offset-4" href="/en">
              {ui.notFound.back.en}
            </Link>
          </section>
        </main>
      </body>
    </html>
  )
}
