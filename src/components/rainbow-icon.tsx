export default function RainbowIcon ({ iconId }: { iconId: string }) {
    return (
        <svg width="0" height="0" className="invisible hover:visible">
            <defs>
                <linearGradient id={`rainbow-gradient-${iconId}`} x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop stopColor="#ff3399" offset="90%">
                        <animate attributeName="stop-color" values="#9d174d;#ff3399,#9f2e65;#9d174d;" dur="2s" repeatCount="indefinite"></animate>
                    </stop>
                    <stop stopColor="#9f2e65" offset="100%">
                        <animate attributeName="stop-color" values="#9d174d;#ff3399,#9f2e65;#9d174d;" dur="2s" repeatCount="indefinite"></animate>
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    )
}