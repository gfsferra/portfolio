// Gera public/cv/gabriel-sferra-cv-{pt,en}.pdf imprimindo /pt/cv e /en/cv com o Chrome headless.
// Uso: npm run build && npm run cv   (defina NEXT_PUBLIC_SITE_URL no build para o PDF levar o link do portfólio)
import { spawn, execFileSync } from 'node:child_process'
import { mkdirSync, statSync, readFileSync } from 'node:fs'

const PORT = 3999
const CHROME = process.env.CHROME_BIN ?? 'google-chrome'
const server = spawn('npx', ['next', 'start', '-p', String(PORT)], { stdio: 'ignore', detached: true })

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://localhost:${PORT}/pt/cv`)
      if (res.ok) return
    } catch {}
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error('O servidor não respondeu em 30 s. Rodou `npm run build` antes?')
}

try {
  await waitForServer()
  mkdirSync('public/cv', { recursive: true })
  for (const lang of ['pt', 'en']) {
    const out = `public/cv/gabriel-sferra-cv-${lang}.pdf`
    execFileSync(CHROME, [
      '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=5000',
      `--print-to-pdf=${out}`, `http://localhost:${PORT}/${lang}/cv`,
    ], { stdio: 'ignore' })
    const pages = (readFileSync(out, 'latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length
    console.log(`✓ ${out}: ${Math.round(statSync(out).size / 1024)} KB, ${pages} página(s)`)
  }
} finally {
  process.kill(-server.pid)
}
