"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"
import { navLinks } from "@/data/navigation"
import { CtaButton } from "@/components/common/CtaButton"
import { MobileNav } from "./MobileNav"

export function Header() {
  const isScrolled = useScroll(50)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 backdrop-blur-xl",
        isScrolled
          ? "py-2 bg-amber-50/85 border-b border-orange-500/10 shadow-sm shadow-orange-500/10"
          : "py-3 bg-amber-50/60 border-b border-transparent"
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex h-14 items-center px-6 justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="./mimo-pop.svg" alt="Logo" width={60} height={60} />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-semibold rounded-xl text-stone-600
                hover:text-orange-500 hover:bg-orange-500/10
                transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <CtaButton text="Orçamento" variant="section" />
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
