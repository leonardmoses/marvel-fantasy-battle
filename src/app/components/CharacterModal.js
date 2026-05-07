'use client'
import SpiderChart, { computeAxes } from './SpiderChart'

const CharacterModal = ({ character, onClose }) => {
    const axes = computeAxes(character)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/65" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden"
                style={{ width: '85vw', height: '85vh' }}>

                {/* Header */}
                <div className="flex-shrink-0 bg-MarvelBlack px-6 py-3 flex items-center justify-between">
                    <h2 className="text-white text-lg font-bold tracking-wide uppercase">
                        {character.Character}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-white/60 hover:text-white text-3xl font-light leading-none"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                {/* Body */}
                <div className="flex flex-1 min-h-0">

                    {/* Spider chart — 75% width */}
                    <div className="flex items-center justify-center p-6" style={{ width: '75%' }}>
                        <SpiderChart character={character} />
                    </div>

                    {/* Axis breakdown — 25% width */}
                    <div className="border-l border-gray-100 overflow-y-auto p-4 space-y-3" style={{ width: '25%' }}>
                        {axes.map((axis) => (
                            <div key={axis.label}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                        {axis.label}
                                    </span>
                                    <span className="text-sm font-black text-MarvelRed">
                                        {axis.score.toFixed(1)}
                                        <span className="text-gray-300 font-light"> /10</span>
                                    </span>
                                </div>

                                {/* Mini score bar */}
                                <div className="h-1 bg-gray-100 rounded-full mb-1.5 overflow-hidden">
                                    <div
                                        className="h-full bg-MarvelRed rounded-full"
                                        style={{ width: `${(axis.score / 10) * 100}%` }}
                                    />
                                </div>

                                {/* Component stats */}
                                <div className="space-y-0.5">
                                    {axis.keys.map((key) => {
                                        const raw = axis.raws[axis.keys.indexOf(key)]
                                        const isCeilingBreaker = raw > 10
                                        return (
                                            <div key={key} className="flex items-center justify-between text-xs text-gray-400 pl-1">
                                                <span>{key}</span>
                                                <span className={isCeilingBreaker ? 'text-MarvelRed font-bold' : 'text-gray-500 font-medium'}>
                                                    {raw}{isCeilingBreaker ? '*' : ''}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}

                        <p className="text-xs text-gray-300 italic pt-1 border-t border-gray-100">
                            * Ceiling breaker — capped at 10 for chart display.
                            Axis scores are averaged placeholders; weighted formulas pending full calibration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterModal
