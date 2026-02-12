

export function BackgroundEffect() {

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* <div
                className="absolute inset-[-50%] opacity-[0.03] animate-[spin_20s_linear_infinite]"
                style={{
                    background: `conic-gradient(from 0deg, 
                            #f43f5e 0deg, transparent 15deg, 
                            #8b5cf6 45deg, transparent 60deg, 
                            #f59e0b 90deg, transparent 105deg, 
                            #3b82f6 135deg, transparent 150deg,
                            #f43f5e 180deg, transparent 195deg,
                            #8b5cf6 225deg, transparent 240deg,
                            #f59e0b 270deg, transparent 285deg,
                            #3b82f6 315deg, transparent 330deg)`,
                }}
            /> */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />
        </div>
    )
}