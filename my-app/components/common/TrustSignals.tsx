import { heroTrustSignals } from "@/data/trust-signals"

interface TrustSignalsProps {
  signals?: string[]
}

export function TrustSignals({ signals = heroTrustSignals }: TrustSignalsProps) {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10">
            {signals.map((item) => (
                <span
                    key={item}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-white/60 backdrop-blur-lg text-stone-500 border border-white/80"
                >
                    {item}
                </span>
            ))}
        </div>
    )
}
