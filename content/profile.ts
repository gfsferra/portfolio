import type { Profile } from './types'

/*
 * Fontes: perfil e README do GitHub, portfólio antigo (gfsferra.github.io), currículo de 2022,
 * prints do LinkedIn e respostas do Gabriel (todos de 09/11/2026).
 */
export const profile: Profile = {
  name: 'Gabriel Sferra',
  role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
  headline: {
    pt: 'Construo produtos web e mobile de ponta a ponta, do banco de dados à interface.',
    en: 'I build web and mobile products end to end, from the database to the interface.',
  },
  location: { pt: 'Marília, SP · Brasil', en: 'Marília, SP · Brazil' },
  about: {
    pt: [
      'Sou desenvolvedor full stack em Marília, SP. Comecei no front-end, criando lojas virtuais para clientes da Agência Auaha, e hoje trabalho na Tray como Analista de Testes, validando features das integrações com marketplaces.',
      'A experiência com testes de software mudou meu jeito de construir: prefiro modelar os dados para que o banco recuse um estado inválido, gosto de tipos que atravessam do servidor ao cliente e concentro os testes onde um erro custaria caro.',
      'Fora do trabalho, construo meus próprios produtos: um app de finanças que roda no iPhone, no Android e na web, e um PWA de treino e dieta que uso no dia a dia com amigos.',
    ],
    en: [
      'I am a full stack developer based in Marília, Brazil. I started in front-end, building online stores for clients of Auaha Agency, and today I work at Tray as a Test Analyst, validating features in marketplace integrations.',
      'Working in software testing changed how I build: I model data so the database rejects invalid states, I like types that flow from server to client, and I focus tests where a bug would be costly.',
      'Outside work, I build my own products: a personal finance app that runs on iPhone, Android and the web, and a training and diet PWA that I use in my daily routine with friends.',
    ],
  },
  // Recortada de IMG_7207.HEIC (09/11/2026), sem metadados. Também há a versão 1:1 em /images/gabriel-sferra-square.jpg.
  photo: {
    src: '/images/gabriel-sferra.jpg',
    width: 864,
    height: 1080,
    alt: {
      pt: 'Gabriel Sferra de terno azul-marinho e gravata',
      en: 'Gabriel Sferra wearing a navy suit and tie',
    },
  },
  contacts: [
    {
      kind: 'linkedin',
      label: 'linkedin.com/in/gabriel-sferra-b3449021a',
      href: 'https://www.linkedin.com/in/gabriel-sferra-b3449021a/',
    },
    { kind: 'email', label: 'gfsferra35@gmail.com', href: 'mailto:gfsferra35@gmail.com' },
    { kind: 'whatsapp', label: '+55 14 99635-7444', href: 'https://wa.me/5514996357444' },
  ],
  experience: [
    {
      company: 'Tray',
      companyUrl: 'https://www.tray.com.br',
      role: { pt: 'Analista de Testes', en: 'Test Analyst' },
      start: '2024-02',
      end: null,
      summary: {
        pt: 'Validação de features nas integrações com marketplaces do ecossistema Tray, com planejamento de testes e automação.',
        en: 'Feature validation for marketplace integrations in the Tray ecosystem, including test planning and automation.',
      },
    },
    {
      company: 'Agência Auaha',
      role: { pt: 'Desenvolvedor Front-End', en: 'Front-End Developer' },
      start: '2022-02',
      end: '2024-02',
      summary: {
        pt: 'Entrei como estagiário e segui como desenvolvedor front-end, criando lojas virtuais para clientes como Mãe Terra, Spilpack, Defitness, RS Air Filter, ABC da Construção e Suggar, nas plataformas TrayCorp, Wake e MercadoShops. Time ágil, com Scrum.',
        en: 'I joined as an intern and stayed on as a front-end developer, building online stores for clients such as Mãe Terra, Spilpack, Defitness, RS Air Filter, ABC da Construção and Suggar, on the TrayCorp, Wake and MercadoShops platforms. Agile team using Scrum.',
      },
    },
  ],
  education: [
    {
      institution: 'PUCRS (Pontifícia Universidade Católica do Rio Grande do Sul)',
      course: { pt: 'Pós-graduação em Desenvolvimento Full Stack', en: 'Postgraduate degree in Full Stack Development' },
      start: '2024-02',
      end: '2025-02',
    },
    {
      institution: 'Univem (Centro Universitário Eurípides de Marília)',
      course: { pt: 'Bacharelado em Ciência da Computação', en: 'B.Sc. in Computer Science' },
      start: '2021-02',
      end: '2024-12',
    },
  ],
  highlights: {
    pt: ['Inglês fluente'],
    en: ['Fluent in English'],
  },
  skills: [
    {
      area: { pt: 'Front-end', en: 'Front-end' },
      items: [
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Vue 3', icon: 'vuedotjs' },
        { name: 'React', icon: 'react' },
        { name: 'React Native (Expo)', icon: 'expo' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'SCSS', icon: 'sass' },
      ],
    },
    {
      area: { pt: 'Back-end', en: 'Back-end' },
      items: [
        { name: 'Node.js (Hono)', icon: 'hono' },
        { name: 'PHP (Laravel)', icon: 'laravel' },
        // O Simple Icons não tem o logo do C#; o do .NET representa a plataforma.
        { name: 'C# (ASP.NET Core MVC)', icon: 'dotnet' },
      ],
    },
    {
      area: { pt: 'Dados e infra', en: 'Data & infra' },
      items: [
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'Redis', icon: 'redis' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Cloudflare Workers', icon: 'cloudflareworkers' },
        { name: 'Netlify', icon: 'netlify' },
      ],
    },
    {
      area: { pt: 'Qualidade', en: 'Quality' },
      items: [
        { name: 'PHPUnit' },
        { name: 'Vitest', icon: 'vitest' },
        { name: 'node:test', icon: 'nodedotjs' },
        { name: 'ESLint', icon: 'eslint' },
        { name: { pt: 'Testes manuais e exploratórios', en: 'Manual and exploratory testing' } },
      ],
    },
    {
      area: { pt: 'E-commerce', en: 'E-commerce' },
      items: [{ name: 'TrayCorp' }, { name: 'Wake' }, { name: 'MercadoShops' }],
    },
  ],
  // Gerados na Fase 4 a partir deste conteúdo, sem endereço residencial.
  cv: { pt: '/cv/gabriel-sferra-cv-pt.pdf', en: '/cv/gabriel-sferra-cv-en.pdf' },
}
