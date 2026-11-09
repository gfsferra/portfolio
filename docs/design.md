# Direção visual: Código em destaque

Aprovada em 09/11/2026, depois de duas rodadas de propostas
(comparativo: https://claude.ai/artifact/ScM3vjR7g4WZTxco5HnE1u).

## A ideia

O código do Gabriel é a peça principal da página. O topo mostra trechos reais dos projetos em cartões
empilhados, e cada projeto destaca a sua linha mais importante com notas ao lado. O texto em volta traduz
cada trecho para quem não programa.

**Regra de ouro:** todo trecho de código vem de um repositório real, com o caminho do arquivo no cabeçalho
do cartão. Trecho encurtado usa `/* … */` no lugar do que foi omitido; nunca se escreve código que não existe.

## Tipografia

| Papel | Fonte | Uso |
|---|---|---|
| Títulos e texto | Schibsted Grotesk (400, 500, 700, 800) | Tudo que é leitura |
| Código e dados técnicos | JetBrains Mono (400, 600) | Código, caminhos de arquivo, nomes de tecnologias, datas |

A JetBrains Mono não entra em navegação, botões ou rótulos genéricos: ela marca o que é técnico.

| Token | Tamanho | Entrelinha | Espaçamento | Peso | Onde |
|---|---|---|---|---|---|
| `text-display` | 44 a 76px | 0,92 | -0,035em | 800 | Nome no hero |
| `text-title` | 36 a 52px | 1,0 | -0,03em | 800 | Título da página de projeto |
| `text-section` | 28 a 36px | 1,1 | -0,02em | 700 | Título de seção |
| `text-project` | 24px | 1,2 | -0,015em | 700 | Nome do projeto no cartão |
| `text-lede` | 18px | 1,6 | | 400 | Frase de apresentação |
| `text-base` | 16px | 1,6 | | 400 | Texto corrido |
| `text-sm` | 14px | 1,5 | | 400 | Notas e legendas |
| `text-code` | 13px | 1,7 | | 400 | Blocos de código |
| `text-meta` | 12px | 1,4 | | 400 | Caminho de arquivo, chips de tecnologia |

- Texto corrido com no máximo 65 caracteres por linha (`max-w-prose`).
- Títulos com `text-wrap: balance`.
- Nada de caixa-alta em rótulos e nada de destacar uma palavra isolada no título.

## Cores

Os valores estão em `design/theme.css`, nos dois temas. Os papéis:

| Token | Claro | Escuro | Papel |
|---|---|---|---|
| `background` | `#F5F6FA` | `#14172E` | Fundo da página |
| `foreground` | `#1B1F3B` | `#E8EAF5` | Texto |
| `muted-foreground` | `#5D6382` | `#A3A8C7` | Texto de apoio |
| `brand` | `#3B5BDB` | `#8FA5FF` | Links, foco, cargo no hero |
| `code` | `#1B1F3B` | `#0F1226` | Fundo dos cartões de código |
| `marker` | `#FFD08A` | `#FFD08A` | Marca-texto: linha anotada e notas |

O marca-texto é a única cor quente da página e só aparece ligado a código: a linha anotada e as notas
que a explicam. Não vira cor de botão nem de decoração.

## Espaço e forma

- Escala de 4px do Tailwind. Entre seções: 96px no desktop (`py-24`) e 64px no celular (`py-16`).
- Conteúdo com no máximo 1120px (`max-w-page`) e margem lateral de pelo menos 16px.
- Raios por papel: 6px nos chips, 8px nos botões, 12px nos cartões de código, 14px no painel de projeto.
- Sombra só nos cartões de código (`shadow-code`). O resto da página é plano, separado por borda.

## Animação

1. **Nada se mexe sozinho.** Sem animação de entrada nas seções: o conteúdo aparece pronto, o que também
   ajuda o LCP.
2. **Toda animação responde a uma ação.** A principal: os cartões de código se abrem em leque no hover
   e no foco do teclado (`focus-within`), em `--duration-slow` (350ms) com `ease-out-soft`.
3. **Durações:** 150ms para cor e borda, 250ms para menus e sheets, 350ms para o leque.
4. **Só `transform` e `opacity`** são animados.
5. **`prefers-reduced-motion`:** as durações viram 0 e os cartões já aparecem afastados, sem leque.
6. **No celular** não há hover: os cartões ficam empilhados em coluna, um abaixo do outro, sem sobreposição.

## Componentes do shadcn previstos

Button, Badge (chips de tecnologia), Card (painel de projeto), Sheet (menu no celular), Tabs (trocar o
arquivo de um projeto com mais de um trecho) e Tooltip (nota de uma linha marcada). O idioma é um par de
links PT | EN, sem menu suspenso: com só dois idiomas, os dois ficam visíveis e a um clique.
O bloco de código é um componente próprio: o realce de sintaxe é gerado no build com Shiki e um tema
montado a partir dos tokens `syntax-*`.
