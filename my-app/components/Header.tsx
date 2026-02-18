"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { MobileNav } from "./MobileNav";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const textStyle = `text-sm font-medium ${isScrolled ? 'text-black' : 'text-muted-foreground'} hover:text-orange-500 transition-colors`
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "sticky top-0 z-50 w-full transition-all duration-300  border-b border-border/40 ",
            isScrolled
                ? " md:bg-amber-500/20  backdrop-blur-lg shadow-sm"
                : "bg-zinc-50/80"
        )}>
            <div className="w-full max-w-7xl mx-auto flex h-16 items-center px-6 justify-between">


                <Image src="./mimo-pop.svg" alt="Logo" width={70} height={70} />

                {/* Desktop Nav - Continua Server Side e estático */}
                <nav className="hidden md:flex items-center gap-8 transition-all duration-100">
                    <Link href="#produtos" className={textStyle}>Produtos</Link>
                    <Link href="#precos" className={textStyle}>Preços</Link>
                    <Link href="#como-funciona" className={textStyle}>Como Funciona</Link>
                    <Link href="#contato" className={textStyle}>Contato</Link>
                </nav>

                <div className="hidden md:flex  items-center gap-4">
                    <Button asChild className="hidden md:flex  bg-orange-500 hover:bg-orange-600 cursor-pointer text-white shadow-lg shadow-orange-500/25">
                        <a href="https://wa.me/13997567987" target="_blank" rel="noopener noreferrer">
                            Orçamento
                        </a>
                    </Button>
                </div>

                <MobileNav />

            </div>
        </header>
    );
}