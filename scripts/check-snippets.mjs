// Confere cada trecho público de content/snippets.ts contra o arquivo no GitHub, no commit fixado.
// Uso: npm run check:snippets   (sai com código 1 se algum trecho divergir)
import { snippets } from '../content/snippets.ts'
import { buildSnippet } from './snippet-lines.mjs'


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
  const expected = buildSnippet(all, source.ranges, source.trailingEllipsis)
  if (expected === code) {
    console.log(`✓  ${id}`)
  } else {
    console.log(`✗  ${id}: o trecho não bate com ${source.path} no commit ${source.sha.slice(0, 7)}`)
    failed++
  }
}
process.exit(failed ? 1 : 0)
