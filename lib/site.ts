/**
 * Endereço público do site, usado em metadados (canonical, hreflang, Open Graph, sitemap) e no PDF do currículo.
 *
 * 1. NEXT_PUBLIC_SITE_URL, se definida (ex.: para gerar os PDFs localmente com o endereço de produção).
 * 2. Na Vercel, VERCEL_PROJECT_PRODUCTION_URL: o domínio de produção do projeto, que passa a ser o domínio
 *    próprio assim que ele for adicionado. Vale também nos previews, para o canonical apontar para produção.
 * 3. Em desenvolvimento, localhost.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  return 'http://localhost:3000'
}

export const siteUrl = new URL(resolveSiteUrl())
