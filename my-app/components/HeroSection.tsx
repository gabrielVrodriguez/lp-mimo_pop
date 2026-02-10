import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Sparkles, MessageCircle, Mouse } from "lucide-react";



export function HeroSection() {

    return (
        <section className="relative overflow-hidden">
            {/* Background Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-200/60 to-purple-200/60 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-40 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/60 to-cyan-200/60 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-200/60 to-orange-200/60 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            <div className="container mx-auto px-4 py-24 relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    {/* Badge */}
                    <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-white/80 backdrop-blur border border-border/50 shadow-sm">
                        <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
                        Presentes que viram memórias
                    </Badge>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                            Mimo Pop
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-foreground mb-2">
                        Seu personagem favorito,{" "}
                        <span className="text-orange-500 font-medium">do seu jeito</span>
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                        Funkos personalizados, action figures e presentes únicos feitos com amor e criatividade ✨
                    </p>

                    {/* CTA Button */}
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-8 py-6 h-auto shadow-xl shadow-green-500/30 transition-all hover:scale-105"
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Pedir orçamento no WhatsApp
                    </Button>

                    {/* Scroll Indicator */}
                    <div className="mt-16 animate-bounce">
                        <Mouse className="w-6 h-6 text-muted-foreground" />
                    </div>
                </div>
            </div>
        </section>
    )
}