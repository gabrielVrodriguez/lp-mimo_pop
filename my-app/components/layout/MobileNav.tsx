"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"
import { navLinks } from "@/data/navigation"
import { CtaButton } from "@/components/common/CtaButton"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button className="p-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 transition-colors duration-300">
            {isOpen ? (
              <X className="h-5 w-5 text-orange-500 animate-in fade-in zoom-in duration-300" />
            ) : (
              <Menu className="h-5 w-5 text-orange-500 animate-in fade-in zoom-in duration-300" />
            )}
          </button>
        </PopoverTrigger>

        <PopoverContent
          className="w-72 mx-4 p-3 mt-3 rounded-2xl border-0 bg-white/90 backdrop-blur-xl shadow-xl shadow-orange-500/10 ring-1 ring-orange-500/10"
          align="end"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl
                  text-stone-600 font-semibold text-sm no-underline
                  hover:bg-orange-500/10 hover:text-orange-600
                  transition-all duration-200 group"
              >
                <span className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center
                  group-hover:bg-linear-to-br group-hover:from-orange-500 group-hover:to-orange-600
                  transition-all duration-200">
                  {link.icon && (
                    <link.icon className="h-4 w-4 text-orange-500 group-hover:text-white transition-colors duration-200" />
                  )}
                </span>
                {link.label}
              </Link>
            ))}

            <div className="h-px bg-linear-to-r from-transparent via-orange-200 to-transparent my-2" />

            <CtaButton text="Orçamento" variant="compact" />
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  )
}
