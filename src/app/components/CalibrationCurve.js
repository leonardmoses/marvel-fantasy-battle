'use client'

const VW = 840, VH = 580
const ML = 80, MR = 28, MT = 34, MB = 108
const PW = VW - ML - MR
const PH = VH - MT - MB

function computePoints(config) {
    const scores = config.points.map(p => p.score)
    const minScore = Math.min(...scores)
    const maxScore = Math.max(...scores)
    return config.points.map(pt => ({
        ...pt,
        x: ML + ((pt.score - minScore) / (maxScore - minScore)) * PW,
        y: MT + (1 - pt.value / config.maxValue) * PH,
    }))
}

function toPath(pts) {
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
}

const CalibrationCurve = ({ config }) => {
    if (!config) return null

    const pts = computePoints(config)
    const bottom = MT + PH
    const linePath = toPath(pts)
    const areaPath = `${linePath} L${pts[pts.length - 1].x.toFixed(1)},${bottom} L${pts[0].x.toFixed(1)},${bottom} Z`

    const gridLines = Array.from({ length: 10 }, (_, i) => {
        const val = config.maxValue * (i + 1) / 10
        return { val, label: config.formatGridLabel(val) }
    })

    return (
        <div className="w-full">
            <svg viewBox={`0 0 ${VW} ${VH}`} width="100%" style={{ display: 'block' }}>

                {/* Dashed grid lines — 10 evenly spaced steps */}
                {gridLines.map(({ label, val }) => {
                    const y = MT + (1 - val / config.maxValue) * PH
                    if (y < MT - 2 || y > bottom + 2) return null
                    return (
                        <g key={label}>
                            <line x1={ML} y1={y} x2={ML + PW} y2={y} stroke="#ebebeb" strokeWidth={1} strokeDasharray="5,5" />
                            <text x={ML - 10} y={y + 4} textAnchor="end" fontSize={12} fill="#c0c0c0">{label}</text>
                        </g>
                    )
                })}

                {/* Axes */}
                <line x1={ML} y1={MT} x2={ML} y2={bottom} stroke="#e0e0e0" strokeWidth={1.5} />
                <line x1={ML} y1={bottom} x2={ML + PW} y2={bottom} stroke="#e0e0e0" strokeWidth={1.5} />

                {/* Y-axis title */}
                <g transform={`translate(16, ${MT + PH / 2})`}>
                    <text transform="rotate(-90)" textAnchor="middle" fontSize={13} fill="#c8c8c8">
                        {config.yLabel}
                    </text>
                </g>

                {/* X-axis title */}
                <text x={ML + PW / 2} y={VH - 8} textAnchor="middle" fontSize={13} fill="#c8c8c8">
                    Rating
                </text>

                {/* Area fill */}
                <path d={areaPath} fill="rgba(230,36,41,0.08)" />

                {/* Curve line */}
                <path d={linePath} fill="none" stroke="#e62429" strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" />

                {/* Data points */}
                {pts.map((p, i) => {
                    const isGap = p.char === null
                    const showValueLabel = p.value / config.maxValue >= 0.15

                    return (
                        <g key={i}>
                            {/* Transparent hover target for tooltip */}
                            <circle cx={p.x} cy={p.y} r={22} fill="transparent">
                                <title>{`Score ${p.score}: ${p.display}${p.char ? ` — ${p.char}` : ''}`}</title>
                            </circle>

                            {/* X-axis tick */}
                            <line x1={p.x} y1={bottom} x2={p.x} y2={bottom + 7} stroke="#ddd" strokeWidth={1.5} />

                            {/* Score number */}
                            <text x={p.x} y={bottom + 22} textAnchor="middle" fontSize={14} fill={isGap ? '#ccc' : '#555'} fontWeight="700">
                                {p.score}
                            </text>

                            {/* Character name (rotated) */}
                            {p.char && (
                                <g transform={`translate(${p.x}, ${bottom + 36})`}>
                                    <text transform="rotate(-38)" textAnchor="end" fontSize={11} fill="#a0aec0">
                                        {p.char}
                                    </text>
                                </g>
                            )}

                            {/* Value label above dot */}
                            {showValueLabel && !isGap && (
                                <text x={p.x} y={p.y - 15} textAnchor="middle" fontSize={11} fill="#b0b8c8">
                                    {p.display}
                                </text>
                            )}

                            {/* Dot */}
                            <circle
                                cx={p.x} cy={p.y}
                                r={isGap ? 6 : 9}
                                fill={isGap ? '#e5e7eb' : '#e62429'}
                                stroke="white"
                                strokeWidth={2.5}
                            />
                        </g>
                    )
                })}
            </svg>

            {config.note && (
                <p className="text-center text-xs text-gray-400 mt-1 px-6">{config.note}</p>
            )}
        </div>
    )
}

export default CalibrationCurve
