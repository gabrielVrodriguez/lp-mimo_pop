"use client"

import { Sparkles } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export function CtaSection() {
    return (
        <section
            id="contato"
            className="relative py-24 overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #F43F5E 0%, #EC4899 25%, #F97316 50%, #F59E0B 75%, #F43F5E 100%)",
                backgroundSize: "300% 300%",
                animation: "ctaGradient 8s ease infinite",
            }}
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating circles */}
                <div
                    className="absolute top-10 left-[10%] w-20 h-20 rounded-full opacity-20"
                    style={{
                        background: "rgba(255,255,255,0.3)",
                        animation: "float 6s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute top-[40%] right-[8%] w-32 h-32 rounded-full opacity-15"
                    style={{
                        background: "rgba(255,255,255,0.2)",
                        animation: "float 8s ease-in-out infinite 1s",
                    }}
                />
                <div
                    className="absolute bottom-10 left-[25%] w-16 h-16 rounded-full opacity-20"
                    style={{
                        background: "rgba(255,255,255,0.25)",
                        animation: "float 7s ease-in-out infinite 2s",
                    }}
                />
                <div
                    className="absolute top-[60%] left-[60%] w-24 h-24 rounded-full opacity-10"
                    style={{
                        background: "rgba(255,255,255,0.2)",
                        animation: "float 9s ease-in-out infinite 0.5s",
                    }}
                />

                {/* Sparkle dots */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white/40"
                        style={{
                            top: `${15 + i * 15}%`,
                            left: `${10 + i * 16}%`,
                            animation: `sparkle 3s ease-in-out infinite ${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                {/* Sparkle icon */}
                <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
                    style={{
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    }}
                >
                    <Sparkles className="w-10 h-10 text-white" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                    Pronto para criar
                    <br />
                    <span
                        style={{
                            textShadow: "0 2px 20px rgba(0,0,0,0.15)",
                        }}
                    >
                        seu mimo? ✨
                    </span>
                </h2>

                <p
                    className="text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                >
                    Entre em contato agora e transforme suas ideias em presentes inesquecíveis!
                    Resposta em até 24h.
                </p>

                {/* CTA Button */}
                <a
                    href="https://wa.me/13997567987"
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 no-underline"
                    style={{
                        background: "white",
                        color: "#F43F5E",
                        boxShadow: "0 8px 0 rgba(0,0,0,0.15), 0 15px 40px rgba(0,0,0,0.2)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)"
                        e.currentTarget.style.boxShadow =
                            "0 12px 0 rgba(0,0,0,0.15), 0 20px 50px rgba(0,0,0,0.25)"
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)"
                        e.currentTarget.style.boxShadow =
                            "0 8px 0 rgba(0,0,0,0.15), 0 15px 40px rgba(0,0,0,0.2)"
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = "translateY(4px)"
                        e.currentTarget.style.boxShadow =
                            "0 2px 0 rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.15)"
                    }}
                    onMouseUp={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)"
                        e.currentTarget.style.boxShadow =
                            "0 12px 0 rgba(0,0,0,0.15), 0 20px 50px rgba(0,0,0,0.25)"
                    }}
                >
                    <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ width: "28px", height: "28px" }}
                    />
                    Falar no WhatsApp
                </a>

                {/* Trust signals */}
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                    {[
                        "📦 Envio para todo Brasil",
                        "💎 Qualidade garantida",
                        "💬 Suporte humanizado",
                    ].map((item) => (
                        <span
                            key={item}
                            className="text-sm font-medium px-4 py-2 rounded-full"
                            style={{
                                color: "rgba(255,255,255,0.95)",
                                background: "rgba(255,255,255,0.15)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes ctaGradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes sparkle {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.5); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            `}</style>
        </section>
    )
}
