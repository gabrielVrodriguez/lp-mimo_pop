"use client"

import Link from "next/link"
import { MobileNav } from "./MobileNav"
import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const navLinks = [
    { href: "#produtos", label: "Produtos" },
    { href: "#precos", label: "Preços" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#contato", label: "Contato" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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
                    <a
                        href="https://wa.me/13997567987"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white no-underline
                            bg-linear-to-r from-orange-500 to-orange-600
                            shadow-lg shadow-orange-500/30
                            hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40
                            transition-all duration-300"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                        Orçamento
                    </a>
                </div>

                <MobileNav />
            </div>
        </header>
    )
}