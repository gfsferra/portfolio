/** Chave do localStorage com a escolha da pessoa: "light", "dark" ou ausente (segue o sistema). */
export const THEME_STORAGE_KEY = 'theme'

/**
 * Script do <head>: roda antes da primeira pintura e liga a classe `dark` no <html>
 * conforme a escolha salva ou, sem escolha, conforme o sistema. Evita o "piscar" de tema.
 * Padrão do guia "Preventing flash before hydration" do Next.js 16.
 */
export const themeScript = `(function(){var t=null;try{t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})}catch(e){}var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d)})()`
