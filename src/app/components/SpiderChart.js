'use client'

// 6 axis groups. Scores are currently plain averages (capped at 10 for ceiling breakers).
// Weighting formulas to be designed once all 25 stats are calibrated — see project memory.
export const AXIS_GROUPS = [
    { label: 'Melee',     keys: ['Melee Strength', 'H2H Skill'] },
    { label: 'Ranged',    keys: ['Proj Power', 'Proj Effective Range'] },
    { label: 'Mobility',  keys: ['Quickness', 'Flight Spd', 'Teleportation'] },
    { label: 'Durability',keys: ['Armor', 'Healing', 'Absorption'] },
    { label: 'Elem/Psi/Forces', keys: ['Telekinesis', 'Telepathy', 'Magnetism', 'Magic Cast', 'Sky Manip', 'Water Manip', 'Cold Manip', 'Heat Manip'] },
    { label: 'Tactical',  keys: ['Hunting/Tracking', 'Leadership', 'Stealth/Deception', 'Shield', 'Telepath Resist', 'Magic Resist'] },
]

const MAX_SCORE = 10
const N = 6
const CX = 210, CY = 192, R = 130, LABEL_PAD = 36
const GRID_STEPS = 5

function axisAngle(i) {
    return (Math.PI * 2 * i) / N - Math.PI / 2
}

function polar(angle, radius) {
    return [CX + radius * Math.cos(angle), CY + radius * Math.sin(angle)]
}

export function computeAxes(character) {
    return AXIS_GROUPS.map(({ label, keys }) => {
        const raws = keys.map(k => character[k] ?? 0)
        const capped = raws.map(v => Math.min(v, MAX_SCORE))
        const score = capped.reduce((a, b) => a + b, 0) / capped.length
        return { label, score, keys, raws }
    })
}

const SpiderChart = ({ character }) => {
    const axes = computeAxes(character)

    const rings = Array.from({ length: GRID_STEPS }, (_, step) => {
        const r = R * (step + 1) / GRID_STEPS
        return Array.from({ length: N }, (_, i) => {
            const [x, y] = polar(axisAngle(i), r)
            return `${x.toFixed(1)},${y.toFixed(1)}`
        }).join(' ')
    })

    const dataPts = axes.map((ax, i) => {
        const [x, y] = polar(axisAngle(i), (ax.score / MAX_SCORE) * R)
        return `${x.toFixed(1)},${y.toFixed(1)}`
    }).join(' ')

    const labelInfos = axes.map((ax, i) => {
        const angle = axisAngle(i)
        const [x, y] = polar(angle, R + LABEL_PAD)
        const anchor = Math.abs(Math.cos(angle)) < 0.15 ? 'middle' : Math.cos(angle) > 0 ? 'start' : 'end'
        const dy = Math.sin(angle) < -0.2 ? -4 : Math.sin(angle) > 0.2 ? 14 : 5
        return { label: ax.label, x: x.toFixed(1), y: (y + dy).toFixed(1), anchor }
    })

    return (
        <svg viewBox="0 0 420 388" width="100%" height="100%" style={{ display: 'block' }}>
            {/* Grid rings */}
            {rings.map((pts, i) => (
                <polygon key={i} points={pts} fill="none"
                    stroke={i === GRID_STEPS - 1 ? '#9ca3af' : '#e5e7eb'}
                    strokeWidth={i === GRID_STEPS - 1 ? 1.2 : 0.8} />
            ))}

            {/* Ring score labels on the right spoke (axis 2, bottom-right) */}
            {Array.from({ length: GRID_STEPS }, (_, i) => {
                const score = (i + 1) * 2
                const r = R * (i + 1) / GRID_STEPS
                const angle = axisAngle(2)
                const [x, y] = polar(angle, r)
                return (
                    <text key={i} x={(x + 4).toFixed(1)} y={(y - 3).toFixed(1)}
                        fontSize={9} fill="#9ca3af" textAnchor="start">
                        {score}
                    </text>
                )
            })}

            {/* Axis spokes */}
            {axes.map((_, i) => {
                const [x, y] = polar(axisAngle(i), R)
                return <line key={i} x1={CX} y1={CY}
                    x2={x.toFixed(1)} y2={y.toFixed(1)}
                    stroke="#e5e7eb" strokeWidth={1} />
            })}

            {/* Data area */}
            <polygon points={dataPts}
                fill="rgba(230,36,41,0.15)"
                stroke="#e62429"
                strokeWidth={1}
                strokeLinejoin="round" />

            {/* Axis labels */}
            {labelInfos.map((l, i) => (
                <text key={i} x={l.x} y={l.y}
                    textAnchor={l.anchor}
                    fontSize={13} fontWeight="700" fill="#111827">
                    {l.label}
                </text>
            ))}
        </svg>
    )
}

export default SpiderChart
