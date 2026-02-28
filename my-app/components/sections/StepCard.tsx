import type { Step } from "@/types"

interface StepCardDesktopProps {
  item: Step
}

export function StepCardDesktop({ item }: StepCardDesktopProps) {
  return (
    <div className="flex flex-col items-center text-center group animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both">
      <div
        className={`relative w-24 h-24 rounded-full flex items-center justify-center mb-6 
          transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 
          bg-linear-to-br ${item.gradient} ${item.shadow} shadow-2xl cursor-default`}
      >
        <span className="text-4xl">{item.icon}</span>
        <span
          className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center 
            text-xs font-black text-white shadow-lg ${item.color}`}
        >
          {item.step}
        </span>
      </div>
      <h3 className="font-bold text-xl mb-2 text-stone-900">{item.title}</h3>
      <p className="text-sm leading-relaxed text-stone-500 max-w-50">{item.description}</p>
    </div>
  )
}

interface StepCardMobileProps {
  item: Step
  showArrow: boolean
}

export function StepCardMobile({ item, showArrow }: StepCardMobileProps) {
  return (
    <div className="relative flex gap-5 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-sm hover:translate-x-2 transition-transform duration-300">
      <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-full ${item.color}`} />

      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-linear-to-br ${item.gradient}`}>
        <span className="text-2xl">{item.icon}</span>
      </div>

      <div className="flex-1">
        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full text-white uppercase ${item.color}`}>
          Passo {item.step}
        </span>
        <h3 className="font-bold text-lg text-stone-900 mt-1">{item.title}</h3>
        <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
      </div>

      {showArrow && (
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-stone-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rotate-90"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  )
}
