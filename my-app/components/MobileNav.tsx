"use client"

import { useState } from "react"
import { Menu, Package, DollarSign, Phone, FileQuestion, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

const navLinks = [
    { href: "#produtos", label: "Produtos", icon: Package, emoji: "🛍️" },
    { href: "#precos", label: "Preços", icon: DollarSign, emoji: "💰" },
    { href: "#como-funciona", label: "Como Funciona", icon: FileQuestion, emoji: "✨" },
    { href: "#contato", label: "Contato", icon: Phone, emoji: "💬" },
]

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
                                    <link.icon className="h-4 w-4 text-orange-500 group-hover:text-white transition-colors duration-200" />
                                </span>
                                {link.label}
                            </Link>
                        ))}

                        <div className="h-px bg-linear-to-r from-transparent via-orange-200 to-transparent my-2" />

                        <a
                            href="https://wa.me/13997567987"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white no-underline
                                bg-linear-to-r from-orange-500 to-orange-600
                                shadow-lg shadow-orange-500/30
                                hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5
                                active:translate-y-0.5 active:shadow-sm
                                transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                            Orçamento
                        </a>
                    </nav>
                </PopoverContent>
            </Popover>
        </div>
    )
}