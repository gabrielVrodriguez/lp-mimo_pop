"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const steps = [
    {
        step: "01",
        title: "Escolha",
        description: "Navegue pela nossa galeria e selecione o tipo de produto que deseja.",
        icon: "🎯",
        color: "bg-amber-500",
        gradient: "from-amber-100 to-amber-200",
        shadow: "shadow-amber-500/20"
    },
    {
        step: "02",
        title: "Envie fotos",
        description: "Mande as fotos de referência pelo WhatsApp. Quanto mais detalhes, melhor!",
        icon: "📸",
        color: "bg-orange-500",
        gradient: "from-orange-100 to-orange-200",
        shadow: "shadow-orange-500/20"
    },
    {
        step: "03",
        title: "Aprovação",
        description: "Receba o esboço digital. Ajustes ilimitados até ficar perfeito.",
        icon: "✅",
        color: "bg-pink-500",
        gradient: "from-pink-100 to-pink-200",
        shadow: "shadow-pink-500/20"
    },
    {
        step: "04",
        title: "Receba em casa",
        description: "Seu mimo é entregue em embalagem especial, direto na sua porta.",
        icon: "🎁",
        color: "bg-violet-500",
        gradient: "from-violet-100 to-violet-200",
        shadow: "shadow-violet-500/20"
    },
]

export function HowItWorks() {
    return (
        <section id="como-funciona" className="relative py-24 overflow-hidden bg-linear-to-b from-amber-50 via-orange-50 to-orange-100">
            <div className="container mx-auto px-4 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-8 px-5 py-4 text-sm font-semibold shadow-lg border-0 bg-amber-500/15 text-amber-700">
                        ✨ Como Funciona ✨
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight text-stone-900">
                        Simples e <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-500 to-orange-500">descomplicado</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium text-stone-500">
                        Em apenas 4 passos, seu mimo personalizado sai do papel e vira realidade.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="hidden md:block relative">
                        <div className="absolute top-[52px] left-[10%] right-[10%] h-[3px] bg-linear-to-r
                         from-amber-200 via-orange-300 to-violet-200" />

                        <div className="grid grid-cols-4 gap-6 relative z-10">
                            {steps.map((item) => (
                                <div key={item.step} className="flex flex-col items-center text-center group
                                 animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both">
                                    
                                    <div className={`relative w-24 h-24 rounded-full flex items-center justify-center mb-6 
                                        transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 
                                        bg-linear-to-br ${item.gradient} ${item.shadow} shadow-2xl cursor-default`}>
                                        
                                        <span className="text-4xl">{item.icon}</span>

                                        <span className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center 
                                            text-xs font-black text-white shadow-lg ${item.color}`}>
                                            {item.step}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-xl mb-2 text-stone-900">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-stone-500 max-w-[200px]">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden space-y-6">
                        {steps.map((item, index) => (
                            <div key={item.step} className="relative flex gap-5 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-sm hover:translate-x-2 transition-transform duration-300">
                                <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-full ${item.color}`} />
                                
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-linear-to-br ${item.gradient}`}>
                                    <span className="text-2xl">{item.icon}</span>
                                </div>

                                <div className="flex-1">
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full text-white uppercase ${item.color}`}>
                                        Passo {item.step}
                                    </span>
                                    <h3 className="font-bold text-lg text-stone-900 mt-1">{item.title}</h3>
                                    <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-stone-300">
                                        <ArrowRight className="w-4 h-4 rotate-90" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}