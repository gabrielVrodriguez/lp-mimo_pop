"use client"

import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight } from "lucide-react"

const steps = [
    {
        step: "01",
        title: "Escolha",
        description: "Navegue pela nossa galeria e selecione o tipo de produto que deseja: Funko, Action Figure ou criação sob medida.",
        icon: "🎯",
        accentColor: "#F59E0B",
        bgGradient: "linear-gradient(135deg, #FEF3C7, #FDE68A)",
    },
    {
        step: "02",
        title: "Envie fotos",
        description: "Mande as fotos de referência pelo WhatsApp. Quanto mais detalhes, mais fiel fica a criação!",
        icon: "📸",
        accentColor: "#F97316",
        bgGradient: "linear-gradient(135deg, #FFEDD5, #FED7AA)",
    },
    {
        step: "03",
        title: "Aprovação",
        description: "Receba o esboço digital para aprovação. Ajustes ilimitados até ficar perfeito para você.",
        icon: "✅",
        accentColor: "#EC4899",
        bgGradient: "linear-gradient(135deg, #FCE7F3, #FBCFE8)",
    },
    {
        step: "04",
        title: "Receba em casa",
        description: "Seu mimo é produzido com carinho e entregue em embalagem especial, direto na sua porta.",
        icon: "🎁",
        accentColor: "#8B5CF6",
        bgGradient: "linear-gradient(135deg, #EDE9FE, #DDD6FE)",
    },
]

export function HowItWorks() {
    return (
        <section
            id="como-funciona"
            className="relative py-24 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 40%, #FFF7ED 100%)",
            }}
        >
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-20 -right-20 w-72 h-72 rounded-full opacity-15 blur-3xl"
                    style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
                />
                <div
                    className="absolute bottom-20 -left-20 w-72 h-72 rounded-full opacity-15 blur-3xl"
                    style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge
                        variant="secondary"
                        className="mb-5 px-5 py-2.5 text-sm font-semibold shadow-lg border-0"
                        style={{
                            background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(236,72,153,0.12))",
                            color: "#7C3AED",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                        ✨ Como Funciona
                    </Badge>

                    <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
                        Simples e{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: "linear-gradient(135deg, #8B5CF6, #EC4899, #F97316)",
                            }}
                        >
                            descomplicado
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium" style={{ color: "#78716C" }}>
                        Em apenas 4 passos, seu mimo personalizado sai do papel e vira realidade
                    </p>
                </div>

                {/* Steps - Desktop: horizontal timeline / Mobile: vertical cards */}
                <div className="max-w-6xl mx-auto">
                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                        {/* Connection line */}
                        <div className="relative">
                            <div
                                className="absolute top-[52px] left-[10%] right-[10%] h-[3px] z-0"
                                style={{
                                    background: "linear-gradient(to right, #FDE68A, #FDBA74, #FBCFE8, #DDD6FE)",
                                }}
                            />

                            <div className="grid grid-cols-4 gap-6 relative z-10">
                                {steps.map((item, index) => (
                                    <div
                                        key={item.step}
                                        className="flex flex-col items-center text-center group"
                                        style={{
                                            animation: `fadeSlideUp 0.6s ease-out ${index * 0.15}s both`,
                                        }}
                                    >
                                        {/* Step Circle */}
                                        <div
                                            className="relative w-[104px] h-[104px] rounded-full flex items-center justify-center mb-6 transition-all duration-500 cursor-default"
                                            style={{
                                                background: item.bgGradient,
                                                boxShadow: `0 8px 30px ${item.accentColor}20`,
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = "scale(1.12) rotate(5deg)"
                                                e.currentTarget.style.boxShadow = `0 12px 40px ${item.accentColor}35`
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "scale(1) rotate(0deg)"
                                                e.currentTarget.style.boxShadow = `0 8px 30px ${item.accentColor}20`
                                            }}
                                        >
                                            <span className="text-4xl">{item.icon}</span>

                                            {/* Step number badge */}
                                            <span
                                                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg"
                                                style={{
                                                    background: item.accentColor,
                                                    boxShadow: `0 3px 10px ${item.accentColor}50`,
                                                }}
                                            >
                                                {item.step}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="font-bold text-xl mb-2 transition-colors duration-300"
                                            style={{ color: "#1C1917" }}
                                        >
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm leading-relaxed max-w-[200px]"
                                            style={{ color: "#78716C" }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-4">
                        {steps.map((item, index) => (
                            <div
                                key={item.step}
                                className="relative flex gap-5 p-5 rounded-2xl transition-all duration-300"
                                style={{
                                    background: "rgba(255,255,255,0.7)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.8)",
                                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateX(4px)"
                                    e.currentTarget.style.boxShadow = `0 8px 30px ${item.accentColor}15`
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateX(0)"
                                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"
                                }}
                            >
                                {/* Left accent line */}
                                <div
                                    className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
                                    style={{ background: item.accentColor }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: item.bgGradient,
                                    }}
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span
                                            className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                                            style={{ background: item.accentColor }}
                                        >
                                            Passo {item.step}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-lg" style={{ color: "#1C1917" }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm mt-1 leading-relaxed" style={{ color: "#78716C" }}>
                                        {item.description}
                                    </p>
                                </div>

                                {/* Arrow for connection (except last) */}
                                {index < steps.length - 1 && (
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                                        <ArrowRight
                                            className="w-4 h-4 rotate-90"
                                            style={{ color: "#D6D3D1" }}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes fadeSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    )
}
