'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { THEME_STORAGE_KEY } from '@/lib/theme'

interface ThemeToggleProps {
  labels: { toDark: string; toLight: string }
  className?: string
}

function savedTheme(): string | null {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * Alterna entre claro e escuro e guarda a escolha. Sem escolha salva, acompanha o sistema
 * em tempo real. O ícone e o rótulo vêm do CSS (`dark:`), então servidor e cliente
 * renderizam o mesmo HTML e não há erro de hidratação.
 */
export function ThemeToggle({ labels, className }: ThemeToggleProps) {
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const follow = (event: MediaQueryListEvent) => {
      if (savedTheme() === null) document.documentElement.classList.toggle('dark', event.matches)
    }
    media.addEventListener('change', follow)
    return () => media.removeEventListener('change', follow)
  }, [])

  function toggle() {
    const dark = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, dark ? 'dark' : 'light')
    } catch {
      // Sem armazenamento (aba anônima, por exemplo): o tema vale só até recarregar.
    }
  }

  return (
    <Button type="button" variant="ghost" size="icon-lg" onClick={toggle} className={className}>
      <MoonIcon aria-hidden="true" className="dark:hidden" />
      <SunIcon aria-hidden="true" className="hidden dark:block" />
      <span className="sr-only dark:hidden">{labels.toDark}</span>
      <span className="sr-only hidden dark:inline">{labels.toLight}</span>
    </Button>
  )
}
