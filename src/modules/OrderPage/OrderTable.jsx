import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { getDatagridColumns } from './datagridColumns';
import { convertingToDataGridData } from './convertingToDataGridData';

import { styled } from '@mui/material/styles';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';

import './OrderTable.scss'
import DataGridDemo from './DataGridDemo';
const OrderTable = ({ room, cost, setCost, setFacilitiesIds }) => {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const facilities = useSelector((state) => state.orderReducer?.facilities);

    useEffect(() => {
        { facilities && convertingToDataGridData(facilities, room, setData, setCost, setFacilitiesIds) }
    }, [facilities, room])

    const columns = getDatagridColumns(dispatch)

    const AntDesignStyledDataGridPro = styled(DataGridPro)(({ theme }) => ({
        border: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`,
        color:
          theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        WebkitFontSmoothing: 'auto',
        letterSpacing: 'normal',
        '& .MuiDataGrid-columnsContainer': {
          backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
        },
        '& .MuiDataGrid-iconSeparator': {
          display: 'none',
        },
        '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
          borderRight: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
          }`,
        },
        '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
          borderBottom: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
          }`,
        },
        '& .MuiDataGrid-cell': {
          color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          WebkitFontSmoothing: 'auto',
          letterSpacing: 'normal',
          '& .MuiDataGrid-columnsContainer': {
            backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
          },
          '& .MuiDataGrid-iconSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-colCell, .MuiDataGrid-cell': {
            borderRight: `1px solid ${
              theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
          },
          '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
            borderBottom: `1px solid ${
              theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
          },
          '& .MuiDataGrid-cell': {
            color:
              theme.palette.mode === 'light'
                ? 'rgba(0,0,0,.85)'
                : 'rgba(255,255,255,0.65)',
          },
          '& .MuiPaginationItem-root': {
            borderRadius: 0,
          },
          '& .MuiCheckbox-root svg': {
            width: 16,
            height: 16,
            backgroundColor: 'transparent',
            border: `1px solid ${
              theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
            }`,
            borderRadius: 2,
          },
          '& .MuiCheckbox-root svg path': {
            display: 'none',
          },
          '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
            backgroundColor: '#1890ff',
            borderColor: '#1890ff',
          },
          '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
            position: 'absolute',
            display: 'table',
            border: '2px solid #fff',
            borderTop: 0,
            borderLeft: 0,
            transform: 'rotate(45deg) translate(-50%,-50%)',
            opacity: 1,
            transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
            content: '""',
            top: '50%',
            left: '39%',
            width: 5.71428571,
            height: 9.14285714,
          },
          '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
            width: 8,
            height: 8,
            backgroundColor: '#1890ff',
            transform: 'none',
            top: '39%',
            border: 0,
          },
        },
      }));

    return (
        <div className='orderTableDiv'>
            <DataGrid theme={AntDesignStyledDataGridPro}
                hideFooterPagination={true}
                hideFooterSelectedRowCount={true}
                disableColumnFilter={true}
                disableColumnMenu={true}
                disableColumnSelector={true}
                disableDensitySelector={true}
                disableColumnReorder={true}
                disableChildrenSorting={true}
                showColumnRightBorder={true}
                showCellRightBorder={true}
                rows={data}
                columns={columns}
            />
            {/* <DataGridDemo/> */}
            <div className='totalCost'>
                Total cost: {cost}
            </div>
        </div>
    )
}

export default OrderTable;