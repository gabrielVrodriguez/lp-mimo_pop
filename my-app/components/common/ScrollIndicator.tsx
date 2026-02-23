import { ArrowDown } from "lucide-react"

export function ScrollIndicator() {
    return (
        <div className="flex justify-center mt-12 animate-[heroBounce_2s_ease-in-out_infinite]">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-lg border border-white/80">
                <ArrowDown className="w-5 h-5 text-amber-800" />
            </div>
        </div>
    )
}
