import { Badge } from "./ui/badge"
import { Sparkles } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FloatingParticles } from "./common/FloatingParticles"
import { TrustSignals } from "./common/TrustSignals"
import { ScrollIndicator } from "./common/ScrollIndicator"



export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-linear-to-b from-amber-50 via-orange-50 to-orange-100">

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <FloatingParticles />
            </div>

            <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-[heroFadeUp_0.8s_ease-out]">
                    <Badge
                        variant="secondary"
                        className="mb-8 px-5 py-4 text-sm font-semibold shadow-lg border-0
                            bg-amber-500/15 text-amber-700 "
                    >
                        ✨
                        Presentes que viram memórias
                        ✨
                    </Badge>

                    <h1 className="text-6xl md:text-8xl  w-full font-black mb-6 tracking-tighter">
                        <span className="bg-linear-to-r px-1 from-orange-500 via-amber-500 to-yellow-500
                         bg-clip-text text-transparent">
                            Mimo Pop
                        </span>
                    </h1>

                    <p className="text-xl md:text-3xl font-bold mb-5 tracking-wide text-stone-900">
                        Seu personagem favorito,{" "}
                        <span className="inline-block px-3 py-1 rounded-lg text-white font-black bg-linear-to-r
                         from-pink-500 to-pink-700 -rotate-2 shadow-lg shadow-pink-500/30">
                            do seu jeito
                        </span>
                    </p>

                    <p className="text-lg md:text-xl mb-12 max-w-xl font-medium leading-relaxed text-stone-500">
                        Funkos personalizados, action figures e presentes únicos feitos com amor e criatividade.
                    </p>

                    <a
                        href="https://wa.me/13997567987"
                        className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-black text-xl text-white no-underline
                            bg-linear-to-r from-orange-500 to-orange-600
                            shadow-[0_8px_0_#C2410C,0_15px_40px_rgba(249,115,22,0.3)]
                            hover:-translate-y-1 hover:shadow-[0_12px_0_#C2410C,0_20px_50px_rgba(249,115,22,0.4)]
                            active:translate-y-1 active:shadow-[0_2px_0_#C2410C,0_5px_15px_rgba(249,115,22,0.2)]
                            transition-all duration-300"
                    >
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="w-8 h-8"
                        />
                        QUERO O MEU AGORA!
                    </a>

                    <TrustSignals />
                </div>

            </div>
        </section>
    )
}