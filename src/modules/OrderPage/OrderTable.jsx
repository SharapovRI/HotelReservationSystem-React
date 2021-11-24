import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { removeFacility } from '../../redux/Reducers/OrderReducer';
import { DataGrid } from '@mui/x-data-grid';

const OrderTable = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const facilities = useSelector((state) => state.orderReducer?.facilities);

    useEffect(() => {
        function converting() {
            const list = [];
            var result = {};
            var costList = {};
            for (var i = 0; i < facilities.length; ++i) {
                var a = facilities[i];
                if (result[a.name] != undefined) {
                    ++result[a.name];
                    ++costList[a.cost];
                }
                else {
                    result[a.name] = 1;
                    costList[a.name] = a.cost;
                }
            }

            for (var key in result) {
                list.push(
                    {
                        name: key,
                        number: result[key],
                        cost: costList[key] * result[key]
                    },
                )
            }

            setData(list);
        }
        { facilities && converting() }
        console.log(facilities);
    }, [facilities])

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
            field:'action',
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
                      //dispatch(removeFacility(params.row));
                  }}
                >
                  -
                </button>
              </strong>
            ),
        },
    ];
    function deleteFacility( {row} )
    {
        dispatch(removeFacility(row))
    }

    return (
        <></>
        // <DataGrid
        //       data={data}
        //       columns={columns}
        //       />
    )
}

export default OrderTable;