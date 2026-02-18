"use client"

import { Star, Zap, Package, Check, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const pricingPlans = [
    {
        id: 1,
        name: "Funko Personalizado",
        price: "150",
        description: "Perfeito para presentear alguém especial",
        icon: Star,
        gradient: "linear-gradient(135deg, #FEF3C7, #FDE68A)",
        iconGradient: "linear-gradient(135deg, #F59E0B, #D97706)",
        features: [
            "1 boneco personalizado",
            "Baseado em foto",
            "Caixa decorativa",
            "Entrega em até 15 dias",
        ],
        popular: false,
    },
    {
        id: 2,
        name: "Action Figure",
        price: "200",
        description: "Para os fãs de super-heróis e personagens",
        icon: Zap,
        gradient: "linear-gradient(135deg, #FFEDD5, #FED7AA)",
        iconGradient: "linear-gradient(135deg, #F97316, #EA580C)",
        features: [
            "1 figure articulado",
            "Alta qualidade",
            "Pose personalizada",
            "Base decorativa inclusa",
        ],
        popular: true,
    },
    {
        id: 3,
        name: "Sob Encomenda",
        price: "Consulte",
        description: "Projetos especiais e complexos",
        icon: Package,
        gradient: "linear-gradient(135deg, #FCE7F3, #FBCFE8)",
        iconGradient: "linear-gradient(135deg, #EC4899, #DB2777)",
        features: [
            "Projetos únicos",
            "Múltiplos personagens",
            "Cenários e dioramas",
            "Orçamento personalizado",
        ],
        popular: false,
    },
]

export function Prices() {
    return (
        <section
            id="precos"
            className="relative py-24 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #FFECD2 0%, #FFF7ED 30%, #FEF3C7 70%, #FFFBEB 100%)",
            }}
        >
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-25 blur-3xl"
                    style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
                />
                <div
                    className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full opacity-20 blur-3xl"
                    style={{ background: "radial-gradient(circle, #EC4899 0%, transparent 70%)" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
                    style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge
                        variant="secondary"
                        className="mb-5 px-5 py-2.5 text-sm font-semibold shadow-lg border-0"
                        style={{
                            background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(249,115,22,0.15))",
                            color: "#B45309",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                        💰 Investimento
                    </Badge>

                    <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
                        Preços que{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: "linear-gradient(135deg, #F97316, #F59E0B, #EAB308)",
                            }}
                        >
                            cabem no bolso
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium" style={{ color: "#78716C" }}>
                        Valores acessíveis para presentes inesquecíveis. Consulte para projetos especiais!
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
                    {pricingPlans.map((plan) => {
                        const IconComponent = plan.icon
                        return (
                            <div
                                key={plan.id}
                                className="relative transition-all duration-500"
                                style={{
                                    transform: plan.popular ? "scale(1.05)" : "scale(1)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = plan.popular
                                        ? "scale(1.08) translateY(-8px)"
                                        : "scale(1.03) translateY(-8px)"
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = plan.popular
                                        ? "scale(1.05)"
                                        : "scale(1)"
                                }}
                            >
                                {/* Popular Glow Ring */}
                                {plan.popular && (
                                    <div
                                        className="absolute -inset-[2px] rounded-3xl z-0"
                                        style={{
                                            background: "linear-gradient(135deg, #F97316, #EC4899, #8B5CF6, #F97316)",
                                            backgroundSize: "300% 300%",
                                            animation: "gradientShift 4s ease infinite",
                                        }}
                                    />
                                )}

                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                        <span
                                            className="px-5 py-2 rounded-full text-white text-xs font-bold shadow-xl whitespace-nowrap"
                                            style={{
                                                background: "linear-gradient(135deg, #F97316, #EA580C)",
                                                boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
                                            }}
                                        >
                                            ⭐ Mais pedido
                                        </span>
                                    </div>
                                )}

                                {/* Card */}
                                <div
                                    className="relative z-10 rounded-3xl overflow-hidden h-full"
                                    style={{
                                        background: "rgba(255,255,255,0.85)",
                                        backdropFilter: "blur(20px)",
                                        border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.6)",
                                        boxShadow: plan.popular
                                            ? "0 20px 60px rgba(249,115,22,0.15), 0 8px 20px rgba(0,0,0,0.06)"
                                            : "0 4px 20px rgba(0,0,0,0.06)",
                                    }}
                                >
                                    {/* Header */}
                                    <div className="text-center pt-10 pb-6 px-6">
                                        {/* Icon */}
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg"
                                            style={{
                                                background: plan.iconGradient,
                                                boxShadow: `0 8px 25px ${plan.popular ? "rgba(249,115,22,0.3)" : "rgba(0,0,0,0.1)"}`,
                                            }}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold mb-2" style={{ color: "#1C1917" }}>
                                            {plan.name}
                                        </h3>

                                        {/* Price */}
                                        <div className="mb-2">
                                            <span className="text-sm font-medium" style={{ color: "#A8A29E" }}>
                                                A partir de
                                            </span>
                                            <div className="mt-1">
                                                {plan.price !== "Consulte" && (
                                                    <span className="text-lg font-medium" style={{ color: "#78716C" }}>
                                                        R${" "}
                                                    </span>
                                                )}
                                                <span
                                                    className="text-4xl font-black bg-clip-text text-transparent"
                                                    style={{
                                                        backgroundImage: plan.iconGradient,
                                                    }}
                                                >
                                                    {plan.price}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-sm font-medium" style={{ color: "#A8A29E" }}>
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="mx-6">
                                        <div
                                            className="h-px"
                                            style={{
                                                background: "linear-gradient(to right, transparent, rgba(0,0,0,0.08), transparent)",
                                            }}
                                        />
                                    </div>

                                    {/* Features */}
                                    <div className="px-6 py-6">
                                        <ul className="space-y-3.5">
                                            {plan.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-3">
                                                    <div
                                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                                        style={{
                                                            background: "linear-gradient(135deg, #D1FAE5, #A7F3D0)",
                                                        }}
                                                    >
                                                        <Check className="w-3.5 h-3.5" style={{ color: "#059669" }} />
                                                    </div>
                                                    <span className="text-sm font-medium" style={{ color: "#57534E" }}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="px-6 pb-8">
                                        <button
                                            className="w-full py-3.5 rounded-2xl font-bold text-base transition-all duration-300 cursor-pointer border-0 outline-none flex items-center justify-center gap-2"
                                            style={
                                                plan.popular
                                                    ? {
                                                        background: "linear-gradient(135deg, #F97316, #EA580C)",
                                                        color: "white",
                                                        boxShadow: "0 4px 20px rgba(249,115,22,0.35)",
                                                    }
                                                    : {
                                                        background: "transparent",
                                                        color: "#F97316",
                                                        border: "2px solid #FDBA74",
                                                    }
                                            }
                                            onMouseEnter={(e) => {
                                                if (plan.popular) {
                                                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(249,115,22,0.5)"
                                                    e.currentTarget.style.transform = "scale(1.02)"
                                                } else {
                                                    e.currentTarget.style.background = "linear-gradient(135deg, #F97316, #EA580C)"
                                                    e.currentTarget.style.color = "white"
                                                    e.currentTarget.style.borderColor = "transparent"
                                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(249,115,22,0.35)"
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (plan.popular) {
                                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(249,115,22,0.35)"
                                                    e.currentTarget.style.transform = "scale(1)"
                                                } else {
                                                    e.currentTarget.style.background = "transparent"
                                                    e.currentTarget.style.color = "#F97316"
                                                    e.currentTarget.style.borderColor = "#FDBA74"
                                                    e.currentTarget.style.boxShadow = "none"
                                                }
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faWhatsapp}
                                                style={{ width: "18px", height: "18px" }}
                                            />
                                            Quero esse!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom note */}
                <p className="text-center mt-10 text-sm font-medium" style={{ color: "#A8A29E" }}>
                    💡 Valores podem variar de acordo com a complexidade do projeto.{" "}
                    <a
                        href="https://wa.me/13997567987"
                        className="underline decoration-dotted transition-colors duration-200"
                        style={{ color: "#F97316" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#EA580C" }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#F97316" }}
                    >
                        Fale conosco!
                    </a>
                </p>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    )
}