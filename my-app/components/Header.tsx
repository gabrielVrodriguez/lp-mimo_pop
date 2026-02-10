import Link from "next/link";
import { Button } from "./ui/button";
import { MobileNav } from "./MobileNav";
import Image from "next/image";

export function Header() {
    return (
        <header className="sticky top-0 z-50  max-w-7xl mx-auto border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className=" w-full flex h-16 items-center px-6  justify-between">
                {/* TODO: Adicionar logo */}
                {/* <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold bg-linear-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
                        Mimo Pop
                    </span>
                </Link> */}

                <Image src="./mimo-pop.svg" alt="Logo" width={70} height={70} />

                {/* Desktop Nav - Continua Server Side e estático */}
                <nav className="hidden md:flex items-center gap-8 transition-all duration-100">
                    <Link href="#produtos" className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors">Produtos</Link>
                    <Link href="#precos" className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors">Preços</Link>
                    <Link href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors">Como Funciona</Link>
                    <Link href="#contato" className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors">Contato</Link>
                </nav>

                <div className="hidden md:flex  items-center gap-4">
                    <Button className="hidden md:flex  bg-orange-500 hover:bg-orange-600 cursor-pointer text-white shadow-lg shadow-orange-500/25">
                        Orçamento
                    </Button>
                </div>

                <MobileNav />

            </div>
        </header>
    );
}