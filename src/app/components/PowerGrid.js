'use client'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const PowerGrid = ({ DraftValue, characters, setShowPowerGrid }) => {

    const columns = Object.keys(characters[0]).map((key) => ({
        field: key,
        headerName: key,
        width: 70,
    }));

    // Add `id` to each row (required by DataGrid)
    const rows = characters.map((char, idx) => ({
        id: idx,
        ...char,
    }));

    return (
        <main className='fixed rounded-xl w-fit bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
            <div className='flex w-full'>
                <button
                    onClick={() => setShowPowerGrid(false)}
                    className='ml-auto bg-MarvelRed hover:bg-white text-white hover:text-MarvelRed px-4 rounded-sm'
                >
                    close
                </button>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10]}
            />
        </main>
    );
}

export default PowerGrid;