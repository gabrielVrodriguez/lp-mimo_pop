interface Particle {
    position: string
    size: string
    color: string
    delay?: string
    duration?: string
}

const defaultParticles: Particle[] = [
    {
        position: "top-[15%] left-[12%]",
        size: "w-16 h-16",
        color: "bg-amber-500/25",
        duration: "6s",
    },
    {
        position: "top-[60%] right-[10%]",
        size: "w-24 h-24",
        color: "bg-pink-500/25",
        delay: "1s",
        duration: "8s",
    },
    {
        position: "bottom-[20%] left-[30%]",
        size: "w-12 h-12",
        color: "bg-orange-500/25",
        delay: "2s",
        duration: "7s",
    },
]

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
