import {
  siCloudflareworkers,
  siDocker,
  siDotnet,
  siEslint,
  siExpo,
  siHono,
  siJavascript,
  siLaravel,
  siMysql,
  siNetlify,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedis,
  siSass,
  siTailwindcss,
  siTypescript,
  siVitest,
  siVuedotjs,
  type SimpleIcon,
} from 'simple-icons'

/**
 * Ícones de tecnologias (Simple Icons, CC0), em uma cor só: herdam a cor do texto nos dois temas.
 * Importados um a um para o build levar só os usados.
 */
export const techIcons = {
  cloudflareworkers: siCloudflareworkers,
  docker: siDocker,
  dotnet: siDotnet,
  eslint: siEslint,
  expo: siExpo,
  hono: siHono,
  javascript: siJavascript,
  laravel: siLaravel,
  mysql: siMysql,
  netlify: siNetlify,
  nodedotjs: siNodedotjs,
  postgresql: siPostgresql,
  react: siReact,
  redis: siRedis,
  sass: siSass,
  tailwindcss: siTailwindcss,
  typescript: siTypescript,
  vitest: siVitest,
  vuedotjs: siVuedotjs,
} satisfies Record<string, SimpleIcon>

export type TechIconKey = keyof typeof techIcons
