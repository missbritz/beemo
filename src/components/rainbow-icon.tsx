export default function RainbowIcon ({ iconId }: { iconId: string }) {
    return (
        <svg width="0" height="0" className="invisible hover:visible">
            <defs>
                <linearGradient id={`rainbow-gradient-${iconId}`} x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#ff0000" offset="90%">
                        <animate attributeName="stop-color" values="#ff0000;#ff9900;#ffff00;#33cc33;#0066ff;#cc33ff;#ff3399" dur="1s" repeatCount="indefinite"></animate>
                    </stop>
                    <stop stopColor="#ff3399" offset="100%">
                        <animate attributeName="stop-color" values="#ff3399;#cc33ff;#0066ff;#33cc33;#ff0000;#ff9900;#ffff00;" dur="1s" repeatCount="indefinite"></animate>
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    )
}