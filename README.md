# Portfólio de Gabriel Sferra

Site pessoal em português e inglês, com projetos, experiência e contato.

> Em construção. Este README ganha a versão final quando o site for publicado.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components) e TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) e [shadcn/ui](https://ui.shadcn.com) (base Radix)
- Fontes Schibsted Grotesk e JetBrains Mono via `next/font`

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3000 (redireciona para /pt ou /en)
npm run lint
npm run build
```

## Onde fica cada coisa

| Caminho | Conteúdo |
|---|---|
| `app/[lang]/` | Páginas em cada idioma (`/pt` e `/en`) |
| `content/` | Todo o texto do site, tipado, em PT e EN |
| `components/ui/` | Componentes do shadcn/ui |
| `components/sections/` | Seções da página inicial |
| `lib/` | Idiomas, tema, fontes e utilitários |
| `docs/design.md` | Direção visual: tipografia, cores, espaço e animação |
| `proxy.ts` | Escolhe o idioma pelo navegador quando alguém abre `/` |
