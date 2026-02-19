"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Package, Star, Sparkles, Heart, Zap, PawPrint, GraduationCap } from "lucide-react"


import { useState, useCallback } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel"

// --- Tipagem e Dados (Mantidos) ---

type Category = "todos" | "funkos" | "casais" | "action" | "pets" | "profissoes"

interface Product {
    id: number
    name: string
    price: string
    image: string
    category: Category
    tag?: string
    tagColor?: string
    rating: number
    description: string
}

const products: Product[] = [
    { id: 1, name: "Funko Solo Personalizado", price: "R$ 150", image: "/funko-single.png", category: "funkos", tag: "Mais vendido", tagColor: "amber", rating: 5, description: "Seu rosto em formato Funko Pop!" },
    { id: 2, name: "Casal Apaixonado", price: "R$ 280", image: "/funko-couple.png", category: "casais", tag: "Presente perfeito", tagColor: "rose", rating: 5, description: "Eternize o amor em miniatura" },
    { id: 3, name: "Action Figure Custom", price: "R$ 200", image: "/action-figure.png", category: "action", tag: "Novidade", tagColor: "violet", rating: 4, description: "Seu herói favorito, do seu jeito" },
    { id: 4, name: "Funko Profissão", price: "R$ 170", image: "/funko-single.png", category: "profissoes", tag: "Exclusivo", tagColor: "emerald", rating: 5, description: "Homenageie quem você admira" },
    { id: 5, name: "Funko Pet", price: "R$ 160", image: "/funko-single.png", category: "pets", tag: "Fofo demais", tagColor: "sky", rating: 5, description: "Seu bichinho em versão Funko" },
    { id: 6, name: "Casal Noivos", price: "R$ 320", image: "/funko-couple.png", category: "casais", rating: 5, description: "Topo de bolo inesquecível" },
    { id: 7, name: "Action Hero Premium", price: "R$ 250", image: "/action-figure.png", category: "action", rating: 4, description: "Qualidade premium e detalhes incríveis" },
    { id: 8, name: "Funko Família", price: "R$ 450", image: "/funko-couple.png", category: "funkos", tag: "Especial", tagColor: "orange", rating: 5, description: "Toda a família reunida em miniatura" },
]

const categories = [
    { key: "todos", label: "Todos", icon: Sparkles },
    { key: "funkos", label: "Funkos", icon: Package },
    { key: "casais", label: "Casais", icon: Heart },
    { key: "action", label: "Action Figures", icon: Zap },
    { key: "pets", label: "Pets", icon: PawPrint },
    { key: "profissoes", label: "Profissões", icon: GraduationCap },
]

// Map de cores simplificado para Tailwind
const tagColorMap: Record<string, string> = {
    amber: "from-amber-400 to-orange-500",
    rose: "from-rose-400 to-pink-500",
    violet: "from-violet-400 to-purple-600",
    emerald: "from-emerald-400 to-teal-500",
    sky: "from-sky-400 to-blue-500",
    orange: "from-orange-400 to-orange-600",
}
export function ProductCarrousel() {
    const [activeCategory, setActiveCategory] = useState<Category>("todos")
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const filteredProducts = activeCategory === "todos"
        ? products
        : products.filter(p => p.category === activeCategory)

    const onApiChange = useCallback((newApi: CarouselApi) => {
        if (!newApi) return
        setApi(newApi)
        setCount(newApi.scrollSnapList().length)
        setCurrent(newApi.selectedScrollSnap())
        newApi.on("select", () => setCurrent(newApi.selectedScrollSnap()))
    }, [])

    return (
        <section id="produtos" className="relative overflow-hidden bg-linear-to-b from-[#FFFBF5] via-[#FFF7ED] to-[#FFECD2] py-24">

            {/* Background Blobs - Simplificado */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="mb-12 text-center">


                    <h2 className="mb-5 text-4xl font-black tracking-tight md:text-6xl">
                        Nossas <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">criações</span> incríveis
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg font-medium text-stone-500 md:text-xl">
                        Cada peça é única, feita à mão com amor.
                    </p>
                </div>

                {/* Filter Pills */}
                <div className="mb-10 flex flex-wrap justify-center gap-3">
                    {categories.map(({ key, label, icon: Icon }) => (
                        <button
                            key={key}
                            onClick={() => { setActiveCategory(key as Category); api?.scrollTo(0); }}
                            className={`flex items-center rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 shadow-sm
                                ${activeCategory === key
                                    ? "bg-linear-to-br from-orange-500 to-orange-600 text-white shadow-orange-200 scale-105"
                                    : "bg-white/70 text-stone-600 hover:bg-white backdrop-blur-md"}`}
                        >
                            <Icon fill="currentColor" className=" mr-2 h-4 w-4" />
                            {label}
                        </button>
                    ))}
                </div>

                <Carousel setApi={onApiChange} opts={{ align: "start", loop: true }} className="mx-auto w-full max-w-7xl">
                    <CarouselContent className="-ml-4">
                        {filteredProducts.map((product) => (
                            <CarouselItem key={product.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">

                                {/* Product Card - Uso de GROUP para hover effects */}
                                <div className="group h-full rounded-3xl border border-white/60 bg-white/80 p-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/15 backdrop-blur-xl">

                                    {/* Image Area */}
                                    <div className="relative aspect-square overflow-hidden rounded-t-3xl bg-linear-to-br from-amber-100 via-amber-200 to-amber-400">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-6 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                                        />
                                        {product.tag && (
                                            <div className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg bg-gradient-to-br ${tagColorMap[product.tagColor || "orange"]}`}>
                                                {product.tag}
                                            </div>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="p-5">
                                        {/* <div className="mb-2 flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`h-4 w-4 ${i < product.rating ? "fill-amber-400 text-amber-400" : "text-stone-300"}`} />
                                            ))}
                                            <span className="ml-1 text-xs font-medium text-stone-400">({product.rating}.0)</span>
                                        </div> */}
                                        <h3 className="mb-1 text-lg font-bold text-stone-900">{product.name}</h3>
                                        <p className="mb-4 text-sm leading-relaxed text-stone-500">{product.description}</p>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="block text-xs font-medium text-stone-400">A partir de</span>
                                                <span className="bg-linear-to-br from-orange-500 to-orange-600 bg-clip-text text-xl font-black text-transparent">
                                                    {product.price}
                                                </span>
                                            </div>
                                            <Button size="sm" className="cursor-pointer rounded-full bg-linear-to-br from-orange-500 to-orange-600 font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-orange-500/50">
                                                <Package className="mr-1.5 h-4 w-4" /> Quero!
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-6 bg-white/90 border-0 shadow-xl" />
                    <CarouselNext className="hidden md:flex -right-6 bg-white/90 border-0 shadow-xl" />
                </Carousel>

                {/* Dots - Simplificado com classes */}
                <div className="mt-8 flex justify-center gap-2">
                    {[...Array(count)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            className={`h-2.5 rounded-full transition-all duration-300 
                                ${current === i ? "w-8 bg-gradient-to-r from-orange-500 to-orange-600 shadow-md" : "w-2.5 bg-stone-300"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}