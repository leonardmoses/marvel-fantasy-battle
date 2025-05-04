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
        <main className='fixed w-11/12 bg-white left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/3 px-10 pb-10 pt-3'>
            <div className='flex w-full pb-2'>
                <ButtonClose setShowPowerGrid={setShowPowerGrid} />
            </div>
            <div>
                <h1 className='bg-ThemeB2 text-center rounded-t-sm'>Power Grid</h1>
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