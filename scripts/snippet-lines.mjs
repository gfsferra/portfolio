// Monta o texto de um trecho a partir das linhas do arquivo de origem.
// Usado pela extração e por `npm run check:snippets`, para que as duas pontas montem igual.

const ELLIPSIS = '/* … */'
const indentOf = (line) => line.match(/^ */)[0]

/**
 * @param {string[]} fileLines linhas do arquivo inteiro
 * @param {[number, number][]} ranges faixas inclusivas, começando em 1
 * @param {boolean} trailingEllipsis se o trecho termina com linhas omitidas
 */
export function buildSnippet(fileLines, ranges, trailingEllipsis = false) {
  const parts = ranges.map(([a, b]) => fileLines.slice(a - 1, b))
  const real = parts.flat().filter((line) => line.trim())
  const min = Math.min(...real.map((line) => indentOf(line).length))
  const dedented = parts.map((part) => part.map((line) => line.slice(min)))

  const out = []
  dedented.forEach((part, i) => {
    // A omissão entre faixas fica no recuo da linha que vem depois dela.
    if (i > 0) out.push(indentOf(part.find((l) => l.trim()) ?? '') + ELLIPSIS)
    out.push(...part)
  })
  if (trailingEllipsis) {
    // No fim, fica um nível dentro se a última linha abre um bloco.
    const last = out.at(-1)
    out.push(indentOf(last) + (/[{[(]\s*$/.test(last) ? '  ' : '') + ELLIPSIS)
  }
  return out.join('\n')
}
