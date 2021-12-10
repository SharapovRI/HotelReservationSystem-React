import React, { useState, useEffect } from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { addFacilities } from '../../redux/Reducers/OrderReducer';
import { useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import './FacilitiesList.scss'

const FacilitiesList = ({ facilities }) => {
    const dispatch = useDispatch();

    const columns = [
        {
            field: 'action',
            headerName: '',
            width: 150,
            editable: false,
            align:"center",
            renderCell: (params) => (
                <strong style={{ marginLeft: 16, width: '100%', height: '100%', borderRadius: '10px', display: 'block'}}>
                    <button
                        style={{ width: 'auto', height: '80%', marginTop: '4%', alignContent: 'stretch', borderRadius: '10px', display: 'block' }}
                        onClick={() => {
                            delete params.row.button;
                            dispatch(addFacilities(params.row));
                        }}
                    >
                        Add
                    </button>
                </strong>
            ),
        },
        {
            field: 'id',
            hide: true,
            width: 150,
            editable: false,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: false,
        },
        {
            field: 'cost',
            headerName: 'Cost',
            width: 150,
            editable: false,
        },
    ];


    return (
            <DataGrid
                hideFooterPagination={true}
                hideFooterRowCount={true}
                hideFooterSelectedRowCount={true}
                disableColumnFilter={true}
                disableColumnMenu={true}
                disableColumnReorder={true}
                disableChildrenSorting={true}
                columns={columns}
                rows={facilities}
                rowHeght={38}
            />
    );
}

export default FacilitiesList;