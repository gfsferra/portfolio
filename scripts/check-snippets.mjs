// Confere cada trecho público de content/snippets.ts contra o arquivo no GitHub, no commit fixado.
// Uso: npm run check:snippets   (sai com código 1 se algum trecho divergir)
import { snippets } from '../content/snippets.ts'

function dedent(lines) {
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length)
  const min = Math.min(...indents)
  return lines.map((l) => l.slice(min))
}

let failed = 0
for (const { id, source, code } of snippets) {
  if (source.private) {
    console.log(`-  ${id}: repositório privado, conferido só na extração`)
    continue
  }
  const url = `https://raw.githubusercontent.com/${source.repo}/${source.sha}/${source.path}`
  const res = await fetch(url)
  if (!res.ok) {
    console.log(`✗  ${id}: ${url} respondeu ${res.status}`)
    failed++
    continue
  }
  const all = (await res.text()).split('\n')
  const parts = source.ranges.map(([a, b]) => all.slice(a - 1, b))
  const expected = dedent(parts.flatMap((p, i) => (i === 0 ? p : ['/* … */', ...p]))).join('\n')
  if (expected === code) {
    console.log(`✓  ${id}`)
  } else {
    console.log(`✗  ${id}: o trecho não bate com ${source.path} no commit ${source.sha.slice(0, 7)}`)
    failed++
  }
}
process.exit(failed ? 1 : 0)
