import { LockIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Snippet } from '@/content/types'

interface CodeCardProps {
  snippet: Snippet
  /** HTML já realçado por `highlight()`. */
  html: string
  projectName: string
  labels: { viewSource: string; privateRepo: string }
  className?: string
}

/** Cartão com um trecho real: caminho do arquivo (com link fixo para as linhas no GitHub) e o código. */
export function CodeCard({ snippet, html, projectName, labels, className }: CodeCardProps) {
  const { path } = snippet.source
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-lg border border-code-border bg-code text-code-foreground shadow-code',
        className,
      )}
    >
      <figcaption className="flex items-center justify-between gap-3 border-b border-code-border px-4 py-2 font-mono text-meta">
        {snippet.href ? (
          <a
            href={snippet.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${path}, ${labels.viewSource}`}
            className="min-w-0 truncate text-syntax-comment underline-offset-4 hover:text-code-foreground hover:underline"
          >
            {path}
          </a>
        ) : (
          <span className="flex min-w-0 items-center gap-1.5 text-syntax-comment">
            <LockIcon aria-hidden="true" className="size-3 shrink-0" />
            <span className="truncate">{path}</span>
            <span className="sr-only">({labels.privateRepo})</span>
          </span>
        )}
        <span className="shrink-0 text-marker">{projectName}</span>
      </figcaption>
      <div className="code-body" dangerouslySetInnerHTML={{ __html: html }} />
    </figure>
  )
}
