import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { profile } from '@/content/profile'
import { getSnippet } from '@/content/snippets'
import { hasLocale, locales } from '@/lib/i18n'

/** Imagem de compartilhamento (1200×630) por idioma: nome, cargo, frase e três linhas reais do Orbital. */
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = profile.name

/** Gerada no build para cada idioma, não a cada acesso. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

/** Fontes lidas do disco uma vez e guardadas em cache (com Cache Components, I/O sem cache torna a rota dinâmica). */
async function loadFonts() {
  'use cache'
  const read = async (file: string) => {
    const buffer = await readFile(join(process.cwd(), 'assets/fonts', file))
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer
  }
  return Promise.all([
    read('SchibstedGrotesk-Regular.ttf'),
    read('SchibstedGrotesk-ExtraBold.ttf'),
    read('JetBrainsMono-Regular.ttf'),
  ])
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang = hasLocale(raw) ? raw : 'pt'
  const snippet = getSnippet('orbital-category-kind-fk')
  // As linhas da chave composta, sem os comentários de cima.
  const code = snippet.code.split('\n').slice(2, 5)
  const [regular, extraBold, mono] = await loadFonts()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#1B1F3B',
          color: '#E8EAF5',
          fontFamily: 'Schibsted',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ marginTop: 20, fontSize: 36, color: '#8FA5FF' }}>{profile.role[lang]}</div>
          <div style={{ marginTop: 16, fontSize: 30, color: '#A3A8C7', maxWidth: 900 }}>{profile.headline[lang]}</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 28px',
            borderRadius: 16,
            border: '2px solid #2C3260',
            background: '#14172E',
            fontFamily: 'JetBrains Mono',
            fontSize: 24,
          }}
        >
          <div style={{ color: '#8A90B5', fontSize: 20, marginBottom: 10 }}>{snippet.source.path}</div>
          {code.map((line, i) => (
            <div key={i} style={{ display: 'flex', whiteSpace: 'pre', color: i === 0 ? '#FFD08A' : '#E6E8F5' }}>
              {line}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Schibsted', data: regular, weight: 400, style: 'normal' },
        { name: 'Schibsted', data: extraBold, weight: 800, style: 'normal' },
        { name: 'JetBrains Mono', data: mono, weight: 400, style: 'normal' },
      ],
    },
  )
}
