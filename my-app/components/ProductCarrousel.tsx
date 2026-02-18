"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
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

const categories: { key: Category; label: string; emoji: React.ReactNode }[] = [
    { key: "todos", label: "Todos", emoji: <Sparkles /> },
    { key: "funkos", label: "Funkos", emoji: <Package /> },
    { key: "casais", label: "Casais", emoji: <Heart /> },
    { key: "action", label: "Action Figures", emoji: <Zap /> },
    { key: "pets", label: "Pets", emoji: <PawPrint /> },
    { key: "profissoes", label: "Profissões", emoji: <GraduationCap /> },
]

function getTagGradient(tagColor?: string): string {
    if (!tagColor) return "linear-gradient(135deg, #FB923C, #EA580C)"
    const map: Record<string, [string, string]> = {
        amber: ["#FBBF24", "#F97316"],
        rose: ["#FB7185", "#EC4899"],
        violet: ["#8B5CF6", "#7C3AED"],
        emerald: ["#34D399", "#14B8A6"],
        sky: ["#38BDF8", "#3B82F6"],
        orange: ["#FB923C", "#EA580C"],
    }
    const colors = map[tagColor] ?? ["#FB923C", "#EA580C"]
    return `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
}

export function ProductCarrousel() {
    const [activeCategory, setActiveCategory] = useState<Category>("todos")
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const filteredProducts = activeCategory === "todos"
        ? products
        : products.filter((p) => p.category === activeCategory)

    const onApiChange = useCallback((newApi: CarouselApi) => {
        setApi(newApi)
        if (!newApi) return

        setCount(newApi.scrollSnapList().length)
        setCurrent(newApi.selectedScrollSnap())

        newApi.on("select", () => {
            setCurrent(newApi.selectedScrollSnap())
        })
        newApi.on("reInit", () => {
            setCount(newApi.scrollSnapList().length)
            setCurrent(newApi.selectedScrollSnap())
        })
    }, [])

    // Reset carousel when category changes
    const handleCategoryChange = (cat: Category) => {
        setActiveCategory(cat)
        // Reset to first slide after category change
        setTimeout(() => {
            api?.scrollTo(0)
        }, 50)
    }

    return (
        <section
            id="produtos"
            className="relative py-24 overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, #FFFBF5 0%, #FFF7ED 30%, #FFF0E0 70%, #FFECD2 100%)",
            }}
        >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle, #FBBF24 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle, #F43F5E 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle, #FB923C 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <Badge
                        variant="secondary"
                        className="mb-5 px-5 py-2.5 text-sm font-semibold shadow-lg border-0"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,146,60,0.15))",
                            color: "#B45309",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                        🎨 Galeria de Criações
                    </Badge>

                    <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
                        Nossas{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #F97316, #EC4899, #8B5CF6)",
                            }}
                        >
                            criações
                        </span>{" "}
                        incríveis
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium" style={{ color: "#78716C" }}>
                        Cada peça é única, feita à mão com amor e dedicação.
                        Deslize para explorar! 👇
                    </p>
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => handleCategoryChange(cat.key)}
                            className="px-4 md:px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer border-0 outline-none"
                            style={
                                activeCategory === cat.key
                                    ? {
                                        background:
                                            "linear-gradient(135deg, #F97316, #EA580C)",
                                        color: "white",
                                        boxShadow:
                                            "0 4px 15px rgba(249,115,22,0.4), 0 0 0 3px rgba(249,115,22,0.1)",
                                        transform: "scale(1.05)",
                                    }
                                    : {
                                        background: "rgba(255,255,255,0.7)",
                                        color: "#57534E",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                                        backdropFilter: "blur(10px)",
                                    }
                            }
                        >
                            <span className="mr-1.5">{cat.emoji}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Shadcn Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    setApi={onApiChange}
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {filteredProducts.map((product, index) => (
                            <CarouselItem
                                key={product.id}
                                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                            >
                                <div
                                    className="group/card h-full"
                    
                                >
                                    <div
                                        className="relative rounded-3xl overflow-hidden transition-all duration-500 h-full"
                                        style={{
                                            background: "rgba(255,255,255,0.8)",
                                            backdropFilter: "blur(20px)",
                                            border: "1px solid rgba(255,255,255,0.6)",
                                            boxShadow:
                                                "0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"
                                            e.currentTarget.style.boxShadow =
                                                "0 20px 60px rgba(249,115,22,0.15), 0 8px 20px rgba(0,0,0,0.08)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0) scale(1)"
                                            e.currentTarget.style.boxShadow =
                                                "0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)"
                                        }}
                                    >
                                        {/* Image Area */}
                                        <div
                                            className="relative aspect-square overflow-hidden"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 30%, #FBBF24 100%)",
                                            }}
                                        >
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={320}
                                                height={320}
                                                className="object-contain w-full h-full p-6 transition-transform duration-700 ease-out"
                                                style={{ transform: "scale(1)" }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform =
                                                        "scale(1.15) rotate(3deg)"
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = "scale(1)"
                                                }}
                                            />

                                            {/* Tag Badge */}
                                            {product.tag && (
                                                <div
                                                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-lg"
                                                    style={{
                                                        background: getTagGradient(product.tagColor),
                                                    }}
                                                >
                                                    {product.tag}
                                                </div>
                                            )}

                                            {/* Bottom Gradient Overlay */}
                                            <div
                                                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                                                style={{
                                                    background:
                                                        "linear-gradient(to top, rgba(255,255,255,0.8), transparent)",
                                                }}
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-5">
                                            <div className="flex items-center gap-0.5 mb-2">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-4 h-4"
                                                        style={{
                                                            color:
                                                                i < product.rating
                                                                    ? "#FBBF24"
                                                                    : "#D6D3D1",
                                                            fill:
                                                                i < product.rating
                                                                    ? "#FBBF24"
                                                                    : "none",
                                                        }}
                                                    />
                                                ))}
                                                <span
                                                    className="text-xs ml-1.5 font-medium"
                                                    style={{ color: "#A8A29E" }}
                                                >
                                                    ({product.rating}.0)
                                                </span>
                                            </div>

                                            {/* Product Name */}
                                            <h3
                                                className="font-bold text-lg mb-1 tracking-tight"
                                                style={{ color: "#1C1917" }}
                                            >
                                                {product.name}
                                            </h3>

                                            {/* Description */}
                                            <p
                                                className="text-sm mb-4 leading-relaxed"
                                                style={{ color: "#78716C" }}
                                            >
                                                {product.description}
                                            </p>

                                            {/* Price + CTA */}
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span
                                                        className="text-xs font-medium block"
                                                        style={{ color: "#A8A29E" }}
                                                    >
                                                        A partir de
                                                    </span>
                                                    <span
                                                        className="text-xl font-black bg-clip-text text-transparent"
                                                        style={{
                                                            backgroundImage:
                                                                "linear-gradient(135deg, #F97316, #EA580C)",
                                                        }}
                                                    >
                                                        {product.price}
                                                    </span>
                                                </div>

                                                <Button
                                                    size="sm"
                                                    className="rounded-full px-5 font-bold text-white border-0 transition-all duration-300 cursor-pointer"
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, #F97316, #EA580C)",
                                                        boxShadow:
                                                            "0 4px 15px rgba(249,115,22,0.3)",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = "scale(1.05)"
                                                        e.currentTarget.style.boxShadow =
                                                            "0 6px 20px rgba(249,115,22,0.4)"
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = "scale(1)"
                                                        e.currentTarget.style.boxShadow =
                                                            "0 4px 15px rgba(249,115,22,0.3)"
                                                    }}
                                                >
                                                    <Package className="w-4 h-4 mr-1.5" />
                                                    Quero!
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Arrows */}
                    <CarouselPrevious
                        className="hidden md:flex -left-6 w-12 h-12 border-0 shadow-lg"
                        style={{
                            background: "rgba(255,255,255,0.95)",
                            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                        }}
                    />
                    <CarouselNext
                        className="hidden md:flex -right-6 w-12 h-12 border-0 shadow-lg"
                        style={{
                            background: "rgba(255,255,255,0.95)",
                            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                        }}
                    />
                </Carousel>

                {/* Dot Indicators */}
                {count > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className="transition-all duration-300 rounded-full cursor-pointer border-0 outline-none"
                                style={{
                                    width: current === index ? "32px" : "10px",
                                    height: "10px",
                                    background:
                                        current === index
                                            ? "linear-gradient(135deg, #F97316, #EA580C)"
                                            : "rgba(0,0,0,0.12)",
                                    boxShadow:
                                        current === index
                                            ? "0 2px 8px rgba(249,115,22,0.4)"
                                            : "none",
                                }}
                                aria-label={`Ir para slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Bottom Stats / Social Proof */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-14">
                    {[
                        { value: "500+", label: "Criações feitas", emoji: "🎨" },
                        { value: "4.9", label: "Avaliação média", emoji: "⭐" },
                        { value: "100%", label: "Clientes felizes", emoji: "😍" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center px-6 py-4 rounded-2xl transition-all duration-300"
                            style={{
                                background: "rgba(255,255,255,0.6)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.8)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)"
                                e.currentTarget.style.boxShadow =
                                    "0 8px 25px rgba(0,0,0,0.08)"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                        >
                            <span className="text-2xl mb-1 block">{stat.emoji}</span>
                            <span
                                className="text-2xl md:text-3xl font-black bg-clip-text text-transparent block"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(135deg, #F97316, #EA580C)",
                                }}
                            >
                                {stat.value}
                            </span>
                            <span
                                className="text-sm font-medium"
                                style={{ color: "#78716C" }}
                            >
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}