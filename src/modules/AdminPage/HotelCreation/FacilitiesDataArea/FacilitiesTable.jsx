import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { convertingToDataGridData } from './convertingToDataGridData';
import { getFacilityTableColumns } from './getFacilityTableColumns';

const FacilitiesTable = ({ facilities, setFacilities }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        { facilities && convertingToDataGridData(facilities, setData) }
    }, [facilities])

    
    function removeFacility(index) {
        const newSource = Array.from(facilities);
        newSource.splice(index, 1);
        setFacilities(newSource);
    }
    
    const columns = getFacilityTableColumns(removeFacility)
    return (
        <>
            <DataGrid style={{ height: 520, width: 520 }}
                hideFooterPagination={true}
                hideFooterSelectedRowCount={true}
                rows={data}
                columns={columns}
            />
        </>
    )
}

export default FacilitiesTable;