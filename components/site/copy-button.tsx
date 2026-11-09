'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface CopyButtonProps {
  value: string
  labels: { copy: string; copied: string }
  className?: string
}

/** Copia um texto e confirma por 2 segundos. Sem permissão de área de transferência, não faz nada. */
export function CopyButton({ value, labels, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // O texto continua visível e selecionável ao lado do botão.
    }
  }

  return (
    <Button type="button" variant="ghost" size="icon-lg" onClick={copy} aria-label={labels.copy} className={className}>
      {copied ? <CheckIcon aria-hidden="true" /> : <CopyIcon aria-hidden="true" />}
      <span role="status" className="sr-only">
        {copied ? labels.copied : ''}
      </span>
    </Button>
  )
}
