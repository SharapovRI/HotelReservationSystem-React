import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { getDatagridColumns } from './datagridColumns';
import { convertingToDataGridData } from './convertingToDataGridData';

import {styles} from '../HomePage/styles/styles'

const OrderTable = ({ room, cost, setCost, setFacilitiesIds }) => {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const facilities = useSelector((state) => state.orderReducer?.facilities);

    useEffect(() => {
        { facilities && convertingToDataGridData(facilities, room, setData, setCost, setFacilitiesIds) }
    }, [facilities, room])

    const columns = getDatagridColumns(dispatch)

    return (
        <>
            <DataGrid style={styles.OrderTableGrid}
                hideFooterPagination={true}
                hideFooterSelectedRowCount={true}
                disableColumnFilter={true}
                disableColumnMenu={true}
                disableColumnReorder={true}
                disableChildrenSorting={true}
                rows={data}
                columns={columns}
            />
            <div className='totalCost' style={styles.TotalCost}>
            Total cost: {cost}
            </div>
        </>
    )
}

export default OrderTable;