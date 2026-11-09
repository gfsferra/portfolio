'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

interface MobileNavProps {
  links: { href: string; label: string }[]
  labels: { open: string; close: string; title: string; nav: string }
  /** Seletor de idioma e botão de tema, renderizados no servidor e passados prontos. */
  footer: ReactNode
}

/** Menu lateral do celular. Cada link fecha o menu antes de rolar até a seção. */
export function MobileNav({ links, labels, footer }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button type="button" variant="ghost" size="icon-lg" className="md:hidden">
          <MenuIcon aria-hidden="true" />
          <span className="sr-only">{labels.open}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" showCloseButton={false} aria-describedby={undefined} className="w-[min(20rem,85vw)] overscroll-contain">
        <SheetHeader className="flex-row items-center justify-between border-b">
          <SheetTitle className="font-bold">{labels.title}</SheetTitle>
          <SheetClose asChild>
            <Button type="button" variant="ghost" size="icon-lg">
              <XIcon aria-hidden="true" />
              <span className="sr-only">{labels.close}</span>
            </Button>
          </SheetClose>
        </SheetHeader>
        <nav aria-label={labels.nav} className="px-4">
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <SheetClose asChild>
                  <a href={link.href} className="block rounded-md px-2 py-3 text-lg font-medium hover:bg-muted">
                    {link.label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter className="flex-row items-center justify-between border-t">{footer}</SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
