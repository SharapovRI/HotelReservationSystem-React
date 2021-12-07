import React, { useState, useEffect } from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { addFacilities } from '../../redux/Reducers/OrderReducer';
import { useDispatch } from 'react-redux';

import {styles} from '../HomePage/styles/styles'

const FacilitiesList = ({ facilities }) => {
    const dispatch = useDispatch();

    const columns = [
        {
            field: 'action',
            headerName: '',
            width: 150,
            renderCell: (params) => (
                
                    <button
                        style={{ fontSize: 16, paddingLeft: 10, paddingRight:10}}
                        onClick={() => {
                            delete params.row.button;
                            dispatch(addFacilities(params.row));
                        }}
                    >
                        +
                    </button>
            ),
        },
        {
            field: 'id',
            hide: true,
        },
        {
            field: 'name',
            headerName: 'Name',
        },
        {
            field: 'cost',
            headerName: 'Cost',
        },
    ];


    return (
            <DataGridPro
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