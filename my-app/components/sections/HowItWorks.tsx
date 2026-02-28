import { Badge } from "@/components/ui/badge"
import { steps } from "@/data/steps"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { StepCardDesktop, StepCardMobile } from "./StepCard"

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-24 overflow-hidden bg-linear-to-b from-amber-50 via-orange-50 to-orange-100"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="down" duration={600} distance={20}>
            <Badge
              variant="secondary"
              className="mb-8 px-5 py-4 text-sm font-semibold shadow-lg border-0 bg-amber-500/15 text-amber-700"
            >
              ✨ Como Funciona ✨
            </Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150} duration={700}>
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight text-stone-900">
              Simples e{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-500 to-orange-500">
                descomplicado
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300} duration={700}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium text-stone-500">
              Em apenas 4 passos, seu mimo personalizado sai do papel e vira realidade.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop */}
          <div className="hidden md:block relative">
            <div className="absolute top-13 left-[10%] right-[10%] h-0.75 bg-linear-to-r from-amber-200 via-orange-300 to-violet-200" />
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {steps.map((item, index) => (
                <ScrollReveal key={item.step} direction="up" delay={index * 150} duration={700} distance={30}>
                  <StepCardDesktop item={item} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-6">
            {steps.map((item, index) => (
              <ScrollReveal key={item.step} direction="left" delay={index * 100} duration={600} distance={30}>
                <StepCardMobile
                  item={item}
                  showArrow={index < steps.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
