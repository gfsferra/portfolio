import type { Project } from './types'

/*
 * Fontes: READMEs de gfsferra/nauri (ex-Orbital) e gfsferra/fullstack, CLAUDE.md e package.json do grit
 * (repositório privado) e os apps no ar em nauri.app e gfsolutions-grit.netlify.app.
 * Números conferidos em 09/11/2026 (Nauri: 11/11/2026, 74 testes em contracts + 129 na api).
 * Imagens: capturas reais dos apps (Grit no ar; Nauri com uma conta de demonstração).
 */
export const projects: Project[] = [
  {
    slug: 'nauri',
    title: { pt: 'Nauri', en: 'Nauri' },
    status: { pt: 'No ar, por convite', en: 'Live, invite-only' },
    code: {
      snippet: 'nauri-typed-client',
      notes: [
        {
          line: 3,
          text: {
            pt: 'Só o tipo da API entra no app. Nenhuma linha do servidor vai junto para o iPhone, o Android ou a web.',
            en: 'Only the API type enters the app. Not a single line of server code ships to iPhone, Android or the web.',
          },
        },
        {
          line: 5,
          text: {
            pt: 'O cliente conhece cada rota e cada resposta. Se a API mudar um formato, o app deixa de compilar na hora.',
            en: 'The client knows every route and response. If the API changes a shape, the app stops compiling right away.',
          },
        },
      ],
    },
    tagline: {
      pt: 'Controle financeiro pessoal para iPhone, Android e web, com o extrato do banco importado pelo Open Finance.',
      en: 'Personal finance app for iPhone, Android and the web, with bank transactions imported through Open Finance.',
    },
    problem: {
      pt: 'Controlar gastos numa planilha não acompanha a pessoa no celular, e digitar cada compra cansa. O Nauri importa os lançamentos do banco, mostra o mês com as contas fixas e a fatura previstas e acompanha os investimentos, no iPhone, no Android e na web, com as três telas falando com a mesma API.',
      en: 'Tracking expenses in a spreadsheet does not follow you on your phone, and typing in every purchase gets old. Nauri imports transactions from the bank, shows the month with fixed bills and the card statement forecast, and tracks investments on iPhone, Android and the web, with all three talking to the same API.',
    },
    role: {
      pt: 'Projeto pessoal em produção: modelagem do banco, API, integração com Open Finance, app multiplataforma, testes e deploy.',
      en: 'Personal project in production: database design, API, Open Finance integration, cross-platform app, tests and deployment.',
    },
    highlights: {
      pt: [
        'Monorepo com o contrato da API em schemas Zod compartilhados: se o formato de uma resposta muda, o TypeScript do app quebra na hora.',
        'Dinheiro sempre em centavos (bigint) e lançamentos como data de calendário; uma chave estrangeira composta faz o próprio banco recusar um gasto ligado a uma categoria de receita.',
        'Importação do Open Finance por um cron de hora em hora que processa uma janela por execução, para caber no limite de CPU do Workers; pagamento de fatura e transferência entre contas do titular ficam de fora, sem contar dinheiro duas vezes.',
        'Rendimento do mês calculado sem os aportes e resgates, com o percentual pelo método de Dietz modificado: cada aporte pesa pelos dias em que ficou aplicado.',
      ],
      en: [
        'Monorepo with the API contract in shared Zod schemas: if a response shape changes, the app fails to type-check immediately.',
        'Money is always stored in cents (bigint) and entries as calendar dates; a composite foreign key makes the database itself reject an expense linked to an income category.',
        'Open Finance import through an hourly cron that processes one window per run to stay within the Workers CPU limit; card bill payments and transfers between the owner’s own accounts are skipped, so no money is counted twice.',
        'Monthly yield excludes deposits and withdrawals, with the percentage computed by the Modified Dietz method: each deposit is weighted by the days it stayed invested.',
      ],
    },
    stack: ['TypeScript', 'Expo', 'React Native', 'Hono', 'Drizzle', 'Better Auth', 'Zod', 'Cloudflare Workers', 'PostgreSQL'],
    outcome: {
      pt: 'No ar em nauri.app, por convite, com 203 testes e deploy automático a cada push.',
      en: 'Live at nauri.app, invite-only, with 203 tests and automatic deploys on every push.',
    },
    links: { repo: 'https://github.com/gfsferra/nauri', demo: 'https://nauri.app' },
    // Capturadas em 11/11/2026 do app rodando local com uma conta de demonstração: pessoa, valores e
    // lançamentos são fictícios (nenhum dado do banco de verdade).
    images: [
      {
        src: '/images/projects/nauri-inicio.jpg',
        alt: {
          pt: 'Tela inicial do Nauri no celular: saldo de novembro, previsão do salário e das contas fixas, fatura do cartão e lançamentos',
          en: 'Nauri home screen on a phone: November balance, salary and fixed-bill forecast, card statement and transactions',
        },
        width: 780,
        height: 1688,
      },
      {
        src: '/images/projects/nauri-investimentos.jpg',
        alt: {
          pt: 'Aba de investimentos do Nauri: total investido, reserva em meses, taxa de poupança, rendimento do mês e gráfico da evolução',
          en: 'Nauri investments tab: total invested, emergency fund in months, savings rate, monthly yield and growth chart',
        },
        width: 780,
        height: 1688,
      },
      {
        src: '/images/projects/nauri-relatorios.jpg',
        alt: {
          pt: 'Relatórios do Nauri: gastos de outubro por categoria, com gráfico de rosca e comparação com setembro',
          en: 'Nauri reports: October spending by category, with a donut chart and comparison with September',
        },
        width: 780,
        height: 1688,
      },
    ],
    featured: true,
  },
  {
    slug: 'grit',
    title: { pt: 'Grit', en: 'Grit' },
    status: { pt: 'No ar', en: 'Live' },
    code: {
      snippet: 'grit-check-proposal',
      notes: [
        {
          line: 3,
          text: {
            pt: 'Uma proposta com formato errado é recusada antes de qualquer conta.',
            en: 'A malformed proposal is rejected before any math runs.',
          },
        },
        {
          line: 6,
          text: {
            pt: 'Só é aprovada se as calorias e cada macro ficarem dentro da faixa da meta da pessoa.',
            en: 'It is only approved if calories and every macro fall within the person’s target range.',
          },
        },
      ],
    },
    tagline: {
      pt: 'App de dieta e treino para iPhone, com checklist diário, que funciona offline.',
      en: 'Diet and training app for iPhone with a daily checklist that works offline.',
    },
    problem: {
      pt: 'Seguir uma dieta e uma ficha de treino exige registrar refeições, cargas e água ao longo do dia. O Grit faz isso no iPhone, funciona offline e sincroniza quando há conexão.',
      en: 'Following a diet and a training plan means logging meals, loads and water throughout the day. Grit does that on the iPhone, works offline and syncs when a connection is available.',
    },
    role: {
      pt: 'Projeto pessoal em produção: interface, banco, API, notificações e testes. Usado por mim e por amigos, cada um com sua conta.',
      en: 'Personal project in production: UI, database, API, notifications and tests. Used by me and by friends, each with their own account.',
    },
    highlights: {
      pt: [
        'Offline-first: os dados vivem no aparelho e sincronizam com o Postgres; um conflito é resolvido numa única escrita condicional, sem corrida.',
        'SQL escrito à mão e migrações versionadas, sem ORM.',
        'Notificações push no iPhone pelo padrão Web Push, sem app nativo nem conta de desenvolvedor da Apple.',
        'Dietas propostas por um agente de IA só chegam ao usuário depois de validadas pelas regras de calorias e macros do próprio app.',
      ],
      en: [
        'Offline-first: data lives on the device and syncs with Postgres; conflicts are settled in a single conditional write, with no race conditions.',
        'Hand-written SQL and versioned migrations, no ORM.',
        'Push notifications on the iPhone through standard Web Push, with no native app or Apple developer account.',
        'Diet plans proposed by an AI agent only reach the user after passing the app’s own calorie and macro rules.',
      ],
    },
    stack: ['JavaScript', 'Vite', 'Tailwind CSS', 'PWA', 'Netlify Functions', 'PostgreSQL (Neon)', 'Web Push', 'node:test'],
    outcome: {
      pt: 'No ar e em uso diário, com 274 testes automatizados, incluindo a API contra um Postgres real em Docker.',
      en: 'Live and in daily use, with 274 automated tests, including the API against a real Postgres in Docker.',
    },
    // Código privado: o repositório guarda dados pessoais.
    links: { demo: 'https://gfsolutions-grit.netlify.app' },
    // Capturada do app no ar em 09/11/2026, com o plano de exemplo (sem dados de ninguém).
    images: [
      {
        src: '/images/projects/grit-treino.jpg',
        alt: {
          pt: 'Tela de treino do Grit no iPhone: Treino A, peito e tríceps, com a lista de exercícios',
          en: 'Grit workout screen on iPhone: Workout A, chest and triceps, with the exercise list',
        },
        width: 780,
        height: 1688,
      },
    ],
    featured: true,
  },
  {
    slug: 'cadastro-full-stack',
    title: { pt: 'Cadastro Full Stack', en: 'Full Stack Sign-up' },
    status: { pt: 'Código aberto', en: 'Open source' },
    code: {
      snippet: 'cadastro-repository-queue',
      notes: [
        {
          line: 1,
          text: {
            pt: 'O serviço grava pelo repositório, não direto pelo Eloquent: a persistência pode mudar sem mexer na regra de negócio.',
            en: 'The service writes through the repository, not Eloquent directly: persistence can change without touching business rules.',
          },
        },
        {
          line: 8,
          text: {
            pt: 'O e-mail vai para uma fila no Redis, então a resposta ao usuário não espera o envio.',
            en: 'The email goes to a Redis queue, so the response does not wait for delivery.',
          },
        },
      ],
    },
    tagline: {
      pt: 'Sistema de cadastro de usuários com login Google OAuth 2.0.',
      en: 'User registration system with Google OAuth 2.0 sign-in.',
    },
    problem: {
      pt: 'Cadastrar e listar usuários com login social, validação de dados brasileiros e envio de e-mail, sem travar a interface.',
      en: 'Register and list users with social login, Brazilian data validation and email delivery, without blocking the interface.',
    },
    role: {
      pt: 'Back-end em Laravel, front-end em Vue, testes e ambiente em Docker.',
      en: 'Laravel back end, Vue front end, tests and Docker environment.',
    },
    highlights: {
      pt: [
        'Repository Pattern e camada de serviços, com injeção de dependência pelos Service Providers.',
        'Refresh token automático, validação de CPF e paginação com filtros feita no servidor.',
        'E-mails enviados de forma assíncrona por filas no Redis.',
        'Ambiente inteiro (API, front, MySQL e Redis) sobe com um docker compose.',
      ],
      en: [
        'Repository Pattern and a service layer, with dependency injection through Service Providers.',
        'Automatic token refresh, CPF (Brazilian ID) validation and server-side pagination with filters.',
        'Emails sent asynchronously through Redis queues.',
        'The whole environment (API, front end, MySQL and Redis) starts with one docker compose.',
      ],
    },
    stack: ['Laravel 11', 'PHP', 'Vue 3', 'TypeScript', 'MySQL', 'Redis', 'Docker'],
    outcome: {
      pt: 'Testes unitários e de API com PHPUnit no back-end e Vitest no front-end.',
      en: 'Unit and API tests with PHPUnit on the back end and Vitest on the front end.',
    },
    links: { repo: 'https://github.com/gfsferra/fullstack' },
    images: [],
    featured: true,
  },
]
