

"use client";


import { useState } from "react";
import { Menu, Package, DollarSign, Phone, FileQuestion, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { Button } from "./ui/button";

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    
    const navLinks = [
        { href: "#produtos", label: "Produtos", icon: Package },
        { href: "#precos", label: "Preços", icon: DollarSign },
        { href: "#como-funciona", label: "Como Funciona", icon: FileQuestion },
        { href: "#contato", label: "Contato", icon: Phone }]

    // const closeMenu = () => setIsOpen(false);
   
    return (
        <div className="md:hidden ">
            <Popover open={isOpen} onOpenChange={setIsOpen}>

                <PopoverTrigger className="" asChild>
                    <button className="p-2">
                        {isOpen ? (
                            <X className="h-6 w-6 text-[#efa21e] animate-in fade-in zoom-in duration-300" />
                        ) : (
                            <Menu className="h-6 w-6 text-[#efa21e] animate-in fade-in zoom-in duration-300" />
                        )}
                    </button>
                </PopoverTrigger>

                <PopoverContent className="w-80 mx-5 p-2 mt-2" align="center">
                    <nav className="flex flex-col gap-6 px-2">

                        {navLinks.map((link) => (
                            <div key={link.href} className="flex items-center gap-2">
                                <link.icon className="h-5 w-5 text-[#efa21e]" />
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium">{link.label}</Link>
                            </div>
                        ))}

                        <div className="flex items-center w-full gap-2">
                            <Button className="flex w-full  bg-[#efa21e] hover:bg-[#efa21e] cursor-pointer text-white shadow-lg shadow-[#efa21e]/25">
                                Orçamento
                            </Button>
                        </div>
                    </nav>
                </PopoverContent>
            </Popover>
        </div>
    );
}