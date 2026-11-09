import { cn } from '@/lib/utils'
import { techIcons, type TechIconKey } from '@/lib/tech-icons'

/** Logo da tecnologia em uma cor só (a do texto). Decorativo: o nome sempre aparece ao lado. */
export function TechIcon({ icon, className }: { icon: TechIconKey; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('size-3.5 shrink-0 fill-current', className)}>
      <path d={techIcons[icon].path} />
    </svg>
  )
}
