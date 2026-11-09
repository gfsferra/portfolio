import type { Snippet } from './types'

/*
 * Trechos reais de código exibidos no site, extraídos por script dos arquivos de origem nos commits
 * indicados em `source`. Não edite o código à mão: `npm run check:snippets` confere os públicos no GitHub.
 * `/* … *\/` marca linhas omitidas: entre faixas não contíguas (`source.ranges`) ou no fim (`trailingEllipsis`).
 */
export const snippets = [
  {
    "id": "orbital-category-kind-fk",
    "project": "orbital",
    "lang": "ts",
    "source": {
      "repo": "gfsferra/orbital",
      "sha": "d7805fb450d65c88854f027fb94c53b7b955a5d0",
      "path": "apps/api/src/db/schema.ts",
      "ranges": [
        [
          182,
          188
        ]
      ],
      "trailingEllipsis": false,
      "private": false
    },
    "href": "https://github.com/gfsferra/orbital/blob/d7805fb450d65c88854f027fb94c53b7b955a5d0/apps/api/src/db/schema.ts#L182-L188",
    "code": "// O banco recusa vincular um gasto a uma categoria de receita. A coerência\n// deixa de depender de lembrarmos de validar em cada rota.\nforeignKey({\n  columns: [t.categoryId, t.kind],\n  foreignColumns: [categories.id, categories.kind],\n  name: 'transactions_category_kind_fk',\n}),"
  },
  {
    "id": "grit-conditional-upsert",
    "project": "grit",
    "lang": "js",
    "source": {
      "repo": "gfsferra/grit",
      "sha": "8178cbca753215aeead73407a1ba8ed794b59060",
      "path": "netlify/functions/state.mjs",
      "ranges": [
        [
          35,
          36
        ],
        [
          43,
          43
        ]
      ],
      "trailingEllipsis": false,
      "private": true
    },
    "code": "const SAVE_STATE = `insert into states (user_id, doc) values ($1, $2::jsonb)\n  on conflict (user_id) do update set doc = excluded.doc, saved_at = now()`;\n/* … */\nconst SAVE_STATE_IF_NOT_OLDER = `${SAVE_STATE} where states.updated_at <= excluded.updated_at returning user_id`;"
  },
  {
    "id": "cadastro-cpf-check-digit",
    "project": "cadastro-full-stack",
    "lang": "php",
    "source": {
      "repo": "gfsferra/fullstack",
      "sha": "177e86c3933bf7d4e182778457759c0bfab0ad2e",
      "path": "backend/app/Services/RegistrationService.php",
      "ranges": [
        [
          199,
          208
        ]
      ],
      "trailingEllipsis": false,
      "private": false
    },
    "href": "https://github.com/gfsferra/fullstack/blob/177e86c3933bf7d4e182778457759c0bfab0ad2e/backend/app/Services/RegistrationService.php#L199-L208",
    "code": "if (preg_match('/^(\\d)\\1{10}$/', $cpf)) {\n    return false;\n}\n\n$sum = 0;\nfor ($i = 0; $i < 9; $i++) {\n    $sum += intval($cpf[$i]) * (10 - $i);\n}\n$remainder = $sum % 11;\n$digit1 = ($remainder < 2) ? 0 : 11 - $remainder;"
  },
  {
    "id": "orbital-typed-client",
    "project": "orbital",
    "lang": "ts",
    "source": {
      "repo": "gfsferra/orbital",
      "sha": "d7805fb450d65c88854f027fb94c53b7b955a5d0",
      "path": "apps/app/lib/api.ts",
      "ranges": [
        [
          3,
          5
        ],
        [
          9,
          9
        ]
      ],
      "trailingEllipsis": true,
      "private": false
    },
    "href": "https://github.com/gfsferra/orbital/blob/d7805fb450d65c88854f027fb94c53b7b955a5d0/apps/app/lib/api.ts#L3-L9",
    "code": "// Só o TIPO cruza a fronteira: o TypeScript enxerga cada rota e cada resposta,\n// mas o Metro não empacota uma linha do servidor dentro do app.\nimport type { AppType } from '@financas/api'\n/* … */\nconst rpc = hc<AppType>(API_URL, {\n  /* … */"
  },
  {
    "id": "grit-check-proposal",
    "project": "grit",
    "lang": "js",
    "source": {
      "repo": "gfsferra/grit",
      "sha": "8178cbca753215aeead73407a1ba8ed794b59060",
      "path": "src/lib/diet-plan.js",
      "ranges": [
        [
          239,
          239
        ],
        [
          251,
          252
        ],
        [
          257,
          258
        ]
      ],
      "trailingEllipsis": false,
      "private": true
    },
    "code": "export function checkProposal(proposal, { targets, customFoods = [] }) {\n  /* … */\n  if (errors.length) return refused(errors);\n  const totals = roundMacros(sumMacros(planMeals.flatMap(meal => meal.foods))), items = targetItems(totals, targets);\n  /* … */\n  return { errors, plan, items, ok: items.every(item => item.ok) };\n}"
  },
  {
    "id": "cadastro-repository-queue",
    "project": "cadastro-full-stack",
    "lang": "php",
    "source": {
      "repo": "gfsferra/fullstack",
      "sha": "177e86c3933bf7d4e182778457759c0bfab0ad2e",
      "path": "backend/app/Services/RegistrationService.php",
      "ranges": [
        [
          74,
          79
        ],
        [
          88,
          88
        ]
      ],
      "trailingEllipsis": false,
      "private": false
    },
    "href": "https://github.com/gfsferra/fullstack/blob/177e86c3933bf7d4e182778457759c0bfab0ad2e/backend/app/Services/RegistrationService.php#L74-L88",
    "code": "$user = $this->userRepository->update($userId, [\n    'name' => $data['name'],\n    'birth_date' => $data['birth_date'],\n    'cpf' => $data['cpf'],\n    'registration_completed' => true,\n]);\n/* … */\nSendRegistrationEmail::dispatch($user, $email);"
  }
] satisfies Snippet[]

export function getSnippet(id: string): Snippet {
  const snippet = snippets.find((s) => s.id === id)
  if (!snippet) throw new Error(`Trecho inexistente: ${id}`)
  return snippet
}
