import { Sparkles } from "lucide-react"
import { CtaBackground } from "@/components/common/CtaBackground"
import { CtaButton } from "@/components/common/CtaButton"
import { ctaTrustSignals } from "@/data/trust-signals"

export function CtaSection() {
  return (
    <section
      id="contato"
      className="relative py-24 overflow-hidden bg-[linear-gradient(135deg,var(--color-accent-rose)_0%,var(--color-accent-pink)_25%,var(--color-primary)_50%,var(--color-accent-amber)_75%,var(--color-accent-rose)_100%)] [background-size:300%_300%] animate-cta-gradient"
    >
      <CtaBackground />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Sparkle icon */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 bg-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
          <Sparkles className="w-10 h-10 text-white animate-cta-pulse" />
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          Pronto para criar
          <br />
          <span className="[text-shadow:0_2px_20px_rgba(0,0,0,0.15)]">seu mimo? ✨</span>
        </h2>

        <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium leading-relaxed text-white/90">
          Entre em contato agora e transforme suas ideias em presentes inesquecíveis! Resposta em até
          24h.
        </p>

        <CtaButton text="Falar no WhatsApp" variant="inverse" />

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {ctaTrustSignals.map((item) => (
            <span
              key={item}
              className="text-sm font-medium px-4 py-2 rounded-full text-white/95 bg-white/15 backdrop-blur-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
