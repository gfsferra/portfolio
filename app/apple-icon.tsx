import { ImageResponse } from 'next/og'

/** Ícone da tela inicial do iPhone (180×180): o mesmo desenho de app/icon.svg, em PNG. */
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1B1F3B' }}>
        <svg width="120" height="120" viewBox="0 0 32 32">
          <path
            d="M12.5 10 6.5 16l6 6M19.5 10l6 6-6 6"
            fill="none"
            stroke="#FFD08A"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  )
}
