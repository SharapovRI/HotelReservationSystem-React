import React from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';

const FacilitiesList = ( {facilities} ) => {

    return (        
        <div style={{ height: 520, width: '100%' }}>
            <DataGridPro
                columns={[{ field: 'name' }, { field: 'cost' }]}
                rows={facilities}
                rowHeght={38}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}

export default FacilitiesList;