import { Badge } from "@/components/ui/badge"
import { steps } from "@/data/steps"
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
          <Badge
            variant="secondary"
            className="mb-8 px-5 py-4 text-sm font-semibold shadow-lg border-0 bg-amber-500/15 text-amber-700"
          >
            ✨ Como Funciona ✨
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight text-stone-900">
            Simples e{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-500 to-orange-500">
              descomplicado
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium text-stone-500">
            Em apenas 4 passos, seu mimo personalizado sai do papel e vira realidade.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop */}
          <div className="hidden md:block relative">
            <div className="absolute top-[52px] left-[10%] right-[10%] h-[3px] bg-linear-to-r from-amber-200 via-orange-300 to-violet-200" />
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {steps.map((item) => (
                <StepCardDesktop key={item.step} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-6">
            {steps.map((item, index) => (
              <StepCardMobile
                key={item.step}
                item={item}
                showArrow={index < steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
