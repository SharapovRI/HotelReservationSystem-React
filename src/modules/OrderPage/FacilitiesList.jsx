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
                <strong>
                    <button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 16 }}
                        onClick={() => {
                            delete params.row.button;
                            dispatch(addFacilities(params.row));
                        }}
                    >
                        +
                    </button>
                </strong>
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
        <div style={{ height: 520, width: 330 }}>
            <DataGridPro
                columns={columns}
                rows={facilities}
                rowHeght={38}
            />
        </div>
    );
}

export default FacilitiesList;