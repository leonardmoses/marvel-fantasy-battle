'use client'
import { useState } from 'react'

const VW = 840, VH = 580
const ML = 80, MR = 28, MT = 34, MB = 108
const PW = VW - ML - MR
const PH = VH - MT - MB

function computePoints(config, zoomMax) {
    const visible = config.points.filter(p => p.score <= 10)
    const scores = visible.map(p => p.score)
    const minScore = Math.min(...scores)
    const maxScore = Math.max(...scores)
    return visible.map(pt => ({
        ...pt,
        x: ML + ((pt.score - minScore) / (maxScore - minScore)) * PW,
        y: MT + (1 - pt.value / zoomMax) * PH,
    }))
}

function toPath(pts) {
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
}

const CalibrationCurve = ({ config }) => {
    if (!config) return null

    const effectiveMax = Math.max(...config.points.filter(p => p.score <= 10).map(p => p.value))
    const minZoom = Math.max(1, Math.round(effectiveMax * 0.001))
    const step = Math.max(1, Math.round(effectiveMax / 200))
    const [zoomMax, setZoomMax] = useState(effectiveMax)

    const pts = computePoints(config, zoomMax)
    const bottom = MT + PH
    const linePath = toPath(pts)
    const areaPath = `${linePath} L${pts[pts.length - 1].x.toFixed(1)},${bottom} L${pts[0].x.toFixed(1)},${bottom} Z`

    const gridLines = Array.from({ length: 10 }, (_, i) => {
        const val = zoomMax * (i + 1) / 10
        return { val, label: config.formatGridLabel(val) }
    })

    return (
        <div className="flex flex-col h-full min-h-0">
            <svg viewBox={`0 0 ${VW} ${VH}`} width="100%" height="100%" style={{ display: 'block', flex: 1, minHeight: 0 }}>
                <defs>
                    <clipPath id="chart-clip">
                        <rect x={ML} y={MT} width={PW} height={PH} />
                    </clipPath>
                </defs>

                {/* Dashed grid lines — 10 evenly spaced steps */}
                {gridLines.map(({ label, val }) => {
                    const y = MT + (1 - val / zoomMax) * PH
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

                {/* Area fill — clipped to chart bounds */}
                <path d={areaPath} fill="rgba(230,36,41,0.08)" clipPath="url(#chart-clip)" />

                {/* Curve line — clipped to chart bounds */}
                <path d={linePath} fill="none" stroke="#e62429" strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" clipPath="url(#chart-clip)" />

                {/* Data points — clipped to chart bounds */}
                <g clipPath="url(#chart-clip)">
                    {pts.map((p, i) => {
                        const isGap = p.char === null
                        const showValueLabel = p.value / zoomMax >= 0.15

                        return (
                            <g key={i}>
                                {/* Transparent hover target for tooltip */}
                                <circle cx={p.x} cy={p.y} r={22} fill="transparent">
                                    <title>{`Score ${p.score}: ${p.display}${p.char ? ` — ${p.char}` : ''}`}</title>
                                </circle>

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
                </g>

                {/* X-axis ticks and labels — always below chart, not clipped */}
                {pts.map((p, i) => {
                    const isGap = p.char === null
                    return (
                        <g key={`label-${i}`}>
                            <line x1={p.x} y1={bottom} x2={p.x} y2={bottom + 7} stroke="#ddd" strokeWidth={1.5} />
                            <text x={p.x} y={bottom + 22} textAnchor="middle" fontSize={14} fill={isGap ? '#ccc' : '#555'} fontWeight="700">
                                {p.score}
                            </text>
                            {p.char && (
                                <g transform={`translate(${p.x}, ${bottom + 36})`}>
                                    <text transform="rotate(-38)" textAnchor="end" fontSize={11} fill="#a0aec0">
                                        {p.char}
                                    </text>
                                </g>
                            )}
                        </g>
                    )
                })}
            </svg>

            {/* Y-axis zoom slider */}
            <div className="flex items-center gap-3 px-6 mt-2 mb-1">
                <span className="text-xs text-gray-400 whitespace-nowrap">Zoom Y</span>
                <input
                    type="range"
                    min={minZoom}
                    max={effectiveMax}
                    step={step}
                    value={zoomMax}
                    onChange={e => setZoomMax(Number(e.target.value))}
                    className="flex-1 accent-red-600"
                />
                <span className="text-xs text-gray-400 whitespace-nowrap w-20 text-right">
                    {config.formatGridLabel(zoomMax)}
                </span>
            </div>

            {config.note && (
                <p className="text-center text-xs text-gray-400 mt-1 px-6">{config.note}</p>
            )}
        </div>
    )
}

export default CalibrationCurve
