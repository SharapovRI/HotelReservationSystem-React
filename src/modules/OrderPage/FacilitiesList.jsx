import React, { useEffect } from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';

const FacilitiesList = ( {facilities} ) => {

    const  data  = ({
        dataSet: facilities,
        rowLength: 1000,
        editable: false,
    });

    function get()
    {
        console.log(facilities);
    }

    return (
        <>
        <div style={{ height: 520, width: '100%' }}>
            <DataGridPro
                columns={[{ field: 'name' }, { field: 'cost' }]}
                rows={facilities}
                rowHeght={38}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
        <button onClick={get}>qqqqq</button>
        </>
    );
}

export default FacilitiesList;