import type { Particle } from "@/types"
import { defaultParticles } from "@/data/particles"

interface FloatingParticlesProps {
  particles?: Particle[]
}

export function FloatingParticles({ particles = defaultParticles }: FloatingParticlesProps) {
    return (
        <>
            {particles.map((p, i) => (
                <div
                    key={i}
                    className={`absolute rounded-full ${p.position} ${p.size} ${p.color}`}
                    style={{
                        animation: `heroFloat ${p.duration ?? "6s"} ease-in-out infinite ${p.delay ?? "0s"}`,
                    }}
                />
            ))}
        </>
    )
}
