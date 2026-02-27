export function CtaBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Floating circles */}
            <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full bg-white/30 opacity-20 animate-float" />
            <div className="absolute top-[40%] right-[8%] w-32 h-32 rounded-full bg-white/20 opacity-[0.15] animate-float-slow" />
            <div className="absolute bottom-10 left-[25%] w-16 h-16 rounded-full bg-white/25 opacity-20 animate-float-slower" />
            <div className="absolute top-[60%] left-[60%] w-24 h-24 rounded-full bg-white/20 opacity-10 animate-float-slowest" />

            {/* Sparkle dots */}
            <div className="absolute w-2 h-2 rounded-full bg-white/40 top-[15%] left-[10%] animate-sparkle" />
            <div className="absolute w-2 h-2 rounded-full bg-white/40 top-[30%] left-[26%] animate-sparkle [animation-delay:0.5s]" />
            <div className="absolute w-2 h-2 rounded-full bg-white/40 top-[45%] left-[42%] animate-sparkle [animation-delay:1s]" />
            <div className="absolute w-2 h-2 rounded-full bg-white/40 top-[60%] left-[58%] animate-sparkle [animation-delay:1.5s]" />
            <div className="absolute w-2 h-2 rounded-full bg-white/40 top-[75%] left-[74%] animate-sparkle [animation-delay:2s]" />
            <div className="absolute w-2 h-2 rounded-full bg-white/40 top-[90%] left-[90%] animate-sparkle [animation-delay:2.5s]" />
        </div>
    )
}
