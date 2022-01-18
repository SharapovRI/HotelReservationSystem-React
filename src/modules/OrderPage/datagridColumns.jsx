import { removeFacility } from "../../redux/Reducers/OrderReducer";

function getDatagridColumns(dispatch) {
    const columns = [
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
            field: 'number',
            headerName: 'Number',
            width: 150,
            editable: false,
        },
        {
            field: 'cost',
            headerName: 'Cost',
            width: 150,
            editable: false,
        },
        {
            field: 'action',
            headerName: '',
            width: 150,
            editable: false,
            renderCell: (params) => (
                <strong style={{ marginLeft: 16, width: '100%', height: '100%', borderRadius: '10px', display: 'block'}}>
                    {params.row.number &&
                        <button
                            style={{ width: 'auto', height: '80%', marginTop: '4%', alignContent: 'stretch', borderRadius: '10px', display: 'block' }}
                            onClick={() => {
                                delete params.row.button;
                                dispatch(removeFacility(params.row));
                            }}
                        >
                            <p>Delete</p>
                        </button>}
                </strong>
            ),
        },
    ];

    return columns;
}

export {getDatagridColumns}