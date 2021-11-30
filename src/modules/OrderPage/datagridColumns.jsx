import { removeFacility } from "../../redux/Reducers/OrderReducer";

function getDatagridColumns(dispatch) {
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

    return columns;
}

export {getDatagridColumns}