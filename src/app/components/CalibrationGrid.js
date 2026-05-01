'use client'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { calibrationData, calibrationGroups } from '../db/calibrationData'
import CalibrationCurve from './CalibrationCurve'
import { calibrationCurveData } from '../db/calibrationCurveData'

const CalibrationGrid = ({ setShowCalibration }) => {
    const [selected, setSelected] = useState(calibrationData[0])
    const [showCurve, setShowCurve] = useState(false)

    const columns = [
        { field: 'rating', headerName: 'Rating', width: 90 },
        ...(selected.extraColumns || []),
        { field: 'description', headerName: 'Description', width: 280, flex: 1 },
        { field: 'examples', headerName: 'Example Characters', width: 320, flex: 1 },
    ]

    return (
        <main className='fixed w-11/12 bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-6 pb-6 pt-3 rounded-md shadow-2xl flex flex-col max-h-[85vh]'>

            {/* Header */}
            <div className='flex w-full pb-2 items-center'>
                <h1 className='text-lg font-semibold text-ThemeA5'>Stat Calibration Guide</h1>
                <button
                    onClick={() => setShowCalibration(false)}
                    className='ml-auto bg-ThemeB1 hover:bg-white text-white hover:text-ThemeB1 border border-ThemeB1 px-4 rounded-sm transition-colors'
                >
                    close
                </button>
            </div>

            <div className='bg-ThemeGradient1 h-[2px] w-full mb-4' />

            <div className='flex gap-4 flex-1 overflow-hidden'>

                {/* Sidebar */}
                <div className='w-56 shrink-0 overflow-y-auto pr-2 flex flex-col gap-4'>
                    {calibrationGroups.map(group => (
                        <div key={group}>
                            <p className='text-xs font-bold uppercase tracking-widest text-ThemeB2 mb-1 px-1'>
                                {group}
                            </p>
                            {calibrationData
                                .filter(cat => cat.group === group)
                                .map(cat => (
                                    <button
                                        key={cat.category}
                                        onClick={() => { setSelected(cat); setShowCurve(false) }}
                                        className={`w-full text-left text-sm px-3 py-1.5 rounded transition-colors ${
                                            selected.category === cat.category
                                                ? 'bg-ThemeB5 text-white font-medium'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {cat.category}
                                    </button>
                                ))
                            }
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className='w-[1px] bg-gray-200 shrink-0' />

                {/* Content Panel */}
                <div className='flex-1 flex flex-col overflow-hidden'>
                    <div className='mb-3 flex items-start justify-between gap-2'>
                        <div>
                            <h2 className='text-xl font-bold text-ThemeA5'>{selected.category}</h2>
                            <p className='text-sm text-gray-500 mt-1'>{selected.description}</p>
                            <p className='text-xs text-ThemeB2 mt-2 font-medium'>
                                Scale: 0 = Ability absent &nbsp;·&nbsp; 1–10 Standard range &nbsp;·&nbsp; 1 is the average human baseline while 3 is the average superhero baseline &nbsp;·&nbsp; Above 10 reserved for characters who break the ceiling
                            </p>
                        </div>
                        {calibrationCurveData[selected.category] && (
                            <button
                                onClick={() => setShowCurve(v => !v)}
                                className={`shrink-0 text-xs px-3 py-1.5 rounded border transition-colors ${
                                    showCurve
                                        ? 'bg-ThemeB5 text-white border-ThemeB5'
                                        : 'border-ThemeB5 text-ThemeB5 hover:bg-ThemeB5 hover:text-white'
                                }`}
                            >
                                {showCurve ? 'View Table' : 'View Curve'}
                            </button>
                        )}
                    </div>
                    <div className='flex-1 overflow-auto'>
                        {showCurve
                            ? <CalibrationCurve config={calibrationCurveData[selected.category]} />
                            : <DataGrid
                                rows={selected.anchors}
                                columns={columns}
                                hideFooter
                                disableRowSelectionOnClick
                                sx={{
                                    border: 'none',
                                    '& .MuiDataGrid-columnHeaders': {
                                        backgroundColor: '#E40985',
                                        color: 'white',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                    },
                                    '& .MuiDataGrid-columnHeader': {
                                        backgroundColor: '#E40985',
                                    },
                                    '& .MuiDataGrid-row:nth-of-type(even)': {
                                        backgroundColor: '#f9f9f9',
                                    },
                                    '& .MuiDataGrid-cell': {
                                        fontSize: '0.85rem',
                                    },
                                }}
                            />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CalibrationGrid
