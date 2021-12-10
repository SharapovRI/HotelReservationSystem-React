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
            width: '33%',
            align:"center",
            renderCell: (params) => (
                <strong>
                <div className='facilityCellButton'>
                    <button
                        style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10 }}
                        onClick={() => {
                            delete params.row.button;
                            dispatch(addFacilities(params.row));
                        }}
                    >
                        +
                    </button>
                </div>
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
            width: '33%',
        },
        {
            field: 'cost',
            headerName: 'Cost',
            width: '33%',
        },
    ];


    return (
        <Box
            sx={{
                height: '100%',
                width: '95%',
                borderBlockStyle: 'solid',
                borderBlockWidth: '3px',
                borderBlockColor: 'grey',
            }}
        >
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
        </Box>
    );
}

export default FacilitiesList;