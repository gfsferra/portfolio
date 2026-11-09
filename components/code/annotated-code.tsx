import { CodeCard } from '@/components/code/code-card'
import { getSnippet } from '@/content/snippets'
import type { CodeNote } from '@/content/types'
import { ui } from '@/content/ui'
import { highlight } from '@/lib/highlight'
import type { Locale } from '@/lib/i18n'

interface AnnotatedCodeProps {
  snippetId: string
  notes: CodeNote[]
  projectName: string
  lang: Locale
}

/** Trecho com números de linha, as linhas comentadas no marca-texto e as notas logo abaixo. */
export async function AnnotatedCode({ snippetId, notes, projectName, lang }: AnnotatedCodeProps) {
  const snippet = getSnippet(snippetId)
  const html = await highlight(snippet.code, snippet.lang, {
    numbered: true,
    wrap: true,
    marked: notes.map((note) => note.line),
  })

  return (
    <div className="grid min-w-0 gap-4">
      <CodeCard
        snippet={snippet}
        html={html}
        projectName={projectName}
        labels={{ viewSource: ui.code.viewSource[lang], privateRepo: ui.code.privateRepo[lang] }}
      />
      <ol aria-label={ui.code.notes[lang]} className="grid gap-3">
        {notes.map((note) => (
          <li key={note.line} className="grid gap-0.5 border-l-[3px] border-marker pl-3">
            <span className="font-mono text-meta text-muted-foreground">
              {ui.code.line[lang]} {note.line}
            </span>
            <span className="text-sm">{note.text[lang]}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
