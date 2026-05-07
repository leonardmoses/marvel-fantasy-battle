'use client'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import ButtonClose from './ButtonClose'
import CharacterModal from './CharacterModal'

const PowerGrid = ({ DraftValue, characters, setShowPowerGrid }) => {
    const [selectedCharacter, setSelectedCharacter] = useState(null)

    const columns = Object.keys(characters[0]).map((key) => {
        const col = { field: key, headerName: key, width: key === 'Character' ? 160 : 130 }
        if (key === 'Character') {
            col.renderCell = (params) => (
                <button
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-left w-full truncate"
                    onClick={(e) => {
                        e.stopPropagation()
                        const char = characters.find(c => c.Character === params.value)
                        setSelectedCharacter(char)
                    }}
                >
                    {params.value}
                </button>
            )
        }
        return col
    })

    const rows = characters.map((char, idx) => ({ id: idx, ...char }))

    return (
        <>
            <main className='fixed w-[96vw] sm:w-11/12 bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-3 sm:px-10 pb-4 sm:pb-6 pt-3 rounded-md shadow-2xl flex flex-col max-h-[88vh] sm:max-h-[85vh] z-40'>
                <div className='flex w-full pb-2 items-center'>
                    <h1 className='bg-ThemeB2 text-center rounded-t-sm flex-1 text-sm sm:text-base'>Power Grid</h1>
                    <ButtonClose setShowPowerGrid={setShowPowerGrid} />
                </div>
                <div className='flex-1 overflow-hidden min-h-0' style={{ WebkitOverflowScrolling: 'touch' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5, 10]}
                    />
                </div>
            </main>

            {selectedCharacter && (
                <CharacterModal
                    character={selectedCharacter}
                    onClose={() => setSelectedCharacter(null)}
                />
            )}
        </>
    )
}

export default PowerGrid
