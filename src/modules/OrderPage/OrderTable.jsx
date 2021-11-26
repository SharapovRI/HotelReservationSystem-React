import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFacility } from '../../redux/Reducers/OrderReducer';
import { DataGrid } from '@mui/x-data-grid';

const OrderTable = ({ room, cost, setCost, setFacilitiesIds }) => {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const facilities = useSelector((state) => state.orderReducer?.facilities);

    useEffect(() => {
        function converting() {
            const list = [];
            const facilityIds = [];

            {
                room && list.push({
                    id: -1, //TODO change when guid
                    name: room.type,
                    number: null,
                    cost: room.cost,
                })
            }

            var idList = {};
            var result = {};
            var costList = {};
            for (var i = facilities.length - 1; i > -1; --i) {
                var a = facilities[i];
                if (result[a.name] != undefined) {
                    ++result[a.name];
                    ++costList[a.cost];
                }
                else {
                    idList[a.name] = a.id;
                    result[a.name] = 1;
                    costList[a.name] = a.cost;
                }
                facilityIds.push(a.id);
            }

            for (var key in result) {
                list.push(
                    {
                        id: idList[key],
                        name: key,
                        number: result[key],
                        cost: costList[key] * result[key]
                    },
                )
            }

            setData(list);
            setFacilitiesIds(facilityIds);

            const totalCost = list.reduce((prev, curr) => { return prev + curr.cost }, 0);
            setCost(totalCost);
        }
        { facilities && converting() }
    }, [facilities, room])

    const columns = [
        {
            field: 'id',
            hide: true,
        },
        {
            field: 'name',
            headerName: 'Name',
        },
        {
            field: 'number',
            headerName: 'Number',
        },
        {
            field: 'cost',
            headerName: 'Cost',
        },
        {
            field: 'action',
            headerName: '',
            width: 150,
            renderCell: (params) => (
                <strong>
                    {params.row.number &&
                        <button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ marginLeft: 16 }}
                            onClick={() => {
                                delete params.row.button;
                                dispatch(removeFacility(params.row));
                            }}
                        >
                            -
                        </button>}
                </strong>
            ),
        },
    ];

    return (
        <>
            <DataGrid style={{ height: 520, width: 520 }}
                hideFooterPagination={true}
                hideFooterSelectedRowCount={true}
                rows={data}
                columns={columns}
            />
            Total cost: {cost}
        </>
    )
}

export default OrderTable;