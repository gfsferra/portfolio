/**
 * Endereço público do site, usado em metadados (canonical, hreflang, Open Graph).
 * Defina NEXT_PUBLIC_SITE_URL no deploy; em desenvolvimento cai no localhost.
 */
export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')
