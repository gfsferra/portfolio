import { NextResponse, type NextRequest } from 'next/server'
import { negotiateLocale } from '@/lib/i18n'

/** Quem abre a raiz vai para /pt ou /en, conforme o idioma do navegador. */
export function proxy(request: NextRequest) {
  const locale = negotiateLocale(request.headers.get('accept-language'))
  const response = NextResponse.redirect(new URL(`/${locale}`, request.url))
  // A resposta depende do idioma pedido: caches não podem servir a mesma para todo mundo.
  response.headers.set('Vary', 'Accept-Language')
  return response
}

export const config = {
  matcher: '/',
}
