# Portfólio de Gabriel Sferra

Site pessoal em português e inglês: projetos com trechos reais de código, experiência, tecnologias,
contato e currículo em PDF.

> O endereço público entra aqui no deploy.

## O que tem de diferente

- **Código real, conferível.** Cada trecho exibido foi extraído de um repositório num commit fixo e leva às
  linhas exatas no GitHub. `npm run check:snippets` compara os trechos públicos com a origem.
- **Dois idiomas.** `/pt` e `/en`, gerados no build; a raiz escolhe o idioma pelo navegador.
- **Currículo gerado do mesmo conteúdo.** `/pt/cv` e `/en/cv` viram PDFs em A4 com `npm run cv`.
- **Leve.** Páginas estáticas, realce de sintaxe feito no build (Shiki) e quase nenhum JavaScript no navegador.
  Lighthouse 100 em performance, acessibilidade, boas práticas e SEO, no celular e no desktop.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components) e TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) e [shadcn/ui](https://ui.shadcn.com) (base Radix)
- [Shiki](https://shiki.style) para realce de código; ícones de marcas do [Simple Icons](https://simpleicons.org) (CC0)
- Fontes Schibsted Grotesk e JetBrains Mono (OFL) via `next/font`

## Rodando localmente

```bash
npm install
npm run dev              # http://localhost:3000 (redireciona para /pt ou /en)
npm run lint
npm run build
npm run check:snippets   # confere os trechos de código contra o GitHub
npm run cv               # depois do build: gera public/cv/*.pdf
```

Variável de ambiente no deploy:

| Variável | Para quê |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Endereço público: canonical, hreflang, Open Graph, sitemap e o link no PDF do currículo |

## Onde fica cada coisa

| Caminho | Conteúdo |
|---|---|
| `app/[lang]/` | Página inicial, currículo e imagem de compartilhamento, por idioma |
| `content/` | Todo o texto do site, tipado, em PT e EN; trechos de código em `snippets.ts` |
| `components/sections/` | Seções da página inicial |
| `components/code/` | Cartão de código e trecho anotado |
| `components/ui/` | Componentes do shadcn/ui |
| `lib/` | Idiomas, tema, datas, realce de código, ícones e fontes |
| `scripts/` | Conferência dos trechos e geração do currículo em PDF |
| `docs/design.md` | Direção visual: tipografia, cores, espaço e animação |
| `proxy.ts` | Escolhe o idioma pelo navegador quando alguém abre `/` |
