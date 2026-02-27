import { Badge } from "@/components/ui/badge"
import { FloatingParticles } from "@/components/common/FloatingParticles"
import { TrustSignals } from "@/components/common/TrustSignals"
import { CtaButton } from "@/components/common/CtaButton"
import { heroTrustSignals } from "@/data/trust-signals"

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
            className="mb-8 px-5 py-4 text-sm font-semibold shadow-lg border-0 bg-amber-500/15 text-amber-700"
          >
            ✨ Presentes que viram memórias ✨
          </Badge>

          <h1 className="text-6xl md:text-8xl w-full font-black mb-6 tracking-tighter">
            <span className="bg-linear-to-r px-1 from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Mimo Pop
            </span>
          </h1>

          <p className="text-xl md:text-3xl font-bold mb-5 tracking-wide text-stone-900">
            Seu personagem favorito,{" "}
            <span className="inline-block px-3 py-1 rounded-lg text-white font-black bg-linear-to-r from-pink-500 to-pink-700 -rotate-2 shadow-lg shadow-pink-500/30">
              do seu jeito
            </span>
          </p>

          <p className="text-lg md:text-xl mb-12 max-w-xl font-medium leading-relaxed text-stone-500">
            Funkos personalizados, action figures e presentes únicos feitos com amor e criatividade.
          </p>

          <CtaButton text="QUERO O MEU AGORA!" variant="hero" />

          <TrustSignals signals={heroTrustSignals} />
        </div>
      </div>
    </section>
  )
}
