'use client'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import ButtonClose from './ButtonClose';

const PowerGrid = ({ DraftValue, characters, setShowPowerGrid }) => {

    const columns = Object.keys(characters[0]).map((key) => ({
        field: key,
        headerName: key,
        width: 150,
    }));

    // Add `id` to each row (required by DataGrid)
    const rows = characters.map((char, idx) => ({
        id: idx,
        ...char,
    }));

    return (
        <main className='fixed w-11/12 bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-10 pb-6 pt-3 rounded-md shadow-2xl flex flex-col max-h-[85vh]'>
            <div className='flex w-full pb-2 items-center'>
                <h1 className='bg-ThemeB2 text-center rounded-t-sm flex-1'>Power Grid</h1>
                <ButtonClose setShowPowerGrid={setShowPowerGrid} />
            </div>
            <div className='flex-1 overflow-hidden min-h-0'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10]}
                />
            </div>
        </main>
    );
}

export default PowerGrid;