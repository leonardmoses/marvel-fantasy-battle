'use client'

const CURVE = [
    { score: 1,  tons: 0.15, label: 'Punisher',  gap: false },
    { score: 2,  tons: 0.3,  label: 'Blk Widow', gap: false },
    { score: 3,  tons: 0.5,  label: 'Cyclops',   gap: false },
    { score: 4,  tons: 1,    label: 'Cap',        gap: false },
    { score: 5,  tons: 4,    label: '—',          gap: true  },
    { score: 6,  tons: 10,   label: 'Beast',      gap: false },
    { score: 7,  tons: 25,   label: '—',          gap: true  },
    { score: 8,  tons: 50,   label: 'Spider-Man', gap: false },
    { score: 9,  tons: 75,   label: 'Iron Man',   gap: false },
    { score: 10, tons: 100,  label: 'Thor',       gap: false },
]

const W = 310, H = 230
const ML = 46, MR = 14, MT = 18, MB = 70
const PW = W - ML - MR
const PH = H - MT - MB

function buildPoints(yFn) {
    return CURVE.map((pt, i) => ({
        ...pt,
        x: ML + (i / 9) * PW,
        y: MT + (1 - yFn(pt.tons)) * PH,
    }))
}

function toPath(pts) {
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
}

function SVGChart({ pts, gridLines, yFn, title }) {
    const linePath = toPath(pts)
    const bottom = MT + PH
    const areaPath = `${linePath} L${pts[9].x.toFixed(1)},${bottom} L${pts[0].x.toFixed(1)},${bottom} Z`

    return (
        <div>
            <p style={{ textAlign: 'center', fontSize: 10, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
                {title}
            </p>
            <svg width={W} height={H}>
                {/* Grid lines */}
                {gridLines.map(({ label, val }) => {
                    const y = MT + (1 - yFn(val)) * PH
                    if (y < MT - 1 || y > bottom + 1) return null
                    return (
                        <g key={label}>
                            <line x1={ML} y1={y} x2={ML + PW} y2={y} stroke="#f3f4f6" strokeWidth={1} />
                            <text x={ML - 5} y={y + 4} textAnchor="end" fontSize={8.5} fill="#c4c4c4">{label}</text>
                        </g>
                    )
                })}

                {/* Axes */}
                <line x1={ML} y1={MT} x2={ML} y2={bottom} stroke="#e5e7eb" strokeWidth={1.5} />
                <line x1={ML} y1={bottom} x2={ML + PW} y2={bottom} stroke="#e5e7eb" strokeWidth={1.5} />

                {/* Filled area under curve */}
                <path d={areaPath} fill="rgba(230,36,41,0.07)" />

                {/* Curve line */}
                <path d={linePath} fill="none" stroke="#e62429" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />

                {/* Data points + labels */}
                {pts.map((p, i) => (
                    <g key={i}>
                        <circle
                            cx={p.x} cy={p.y}
                            r={p.gap ? 3 : 5}
                            fill={p.gap ? '#d1d5db' : '#e62429'}
                            stroke="white"
                            strokeWidth={1.5}
                        />
                        <text x={p.x} y={bottom + 14} textAnchor="middle" fontSize={10} fill={p.gap ? '#d1d5db' : '#6b7280'} fontWeight="700">
                            {p.score}
                        </text>
                        <g transform={`translate(${p.x}, ${bottom + 22})`}>
                            <text transform="rotate(-38)" textAnchor="end" fontSize={8} fill={p.gap ? '#e5e7eb' : '#9ca3af'}>
                                {p.label}
                            </text>
                        </g>
                    </g>
                ))}

                {/* Y axis label */}
                <g transform={`translate(11, ${MT + PH / 2})`}>
                    <text transform="rotate(-90)" textAnchor="middle" fontSize={9} fill="#d1d5db">Tons</text>
                </g>
            </svg>
        </div>
    )
}

const MeleeStrengthCurve = () => {
    const yLin = (t) => Math.min(t, 100) / 100

    const LOG_MIN = Math.log10(0.1)
    const LOG_RANGE = Math.log10(100) - LOG_MIN
    const yLog = (t) => (Math.log10(Math.max(t, 0.09)) - LOG_MIN) / LOG_RANGE

    const linGrid = [
        { label: '25t',  val: 25  },
        { label: '50t',  val: 50  },
        { label: '75t',  val: 75  },
        { label: '100t', val: 100 },
    ]
    const logGrid = [
        { label: '0.1t', val: 0.1 },
        { label: '1t',   val: 1   },
        { label: '10t',  val: 10  },
        { label: '100t', val: 100 },
    ]

    const linPts = buildPoints(yLin)
    const logPts = buildPoints(yLog)

    return (
        <div className="py-2">
            <div className="flex gap-6 justify-center flex-wrap">
                <SVGChart pts={linPts} gridLines={linGrid} yFn={yLin} title="Linear — curve shape" />
                <SVGChart pts={logPts} gridLines={logGrid} yFn={yLog} title="Log — tier spacing" />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                    <svg width={12} height={12}><circle cx={6} cy={6} r={5} fill="#e62429" /></svg>
                    Placed character
                </span>
                <span className="flex items-center gap-1.5">
                    <svg width={12} height={12}><circle cx={6} cy={6} r={4} fill="#d1d5db" /></svg>
                    Unassigned tier (scores 5 &amp; 7)
                </span>
                <span className="text-gray-300">|</span>
                <span>Ceiling breakers: Apocalypse (~13–15) · Hulk (20, unlimited)</span>
            </div>
        </div>
    )
}

export default MeleeStrengthCurve
