import EditFacilityButton from "./Buttons/ActionFacilityButton";

function getFacilityListColumns(updateFacility, removeFacility) {
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
            field: 'cost',
            headerName: 'Cost',
        },
        {
            field: 'action',
            headerName: '',
            width: 150,
            renderCell: (params) => (
                <strong>
                    <EditFacilityButton facility={params.row} actionFacility={updateFacility} buttonName='Edit'/>
                </strong>
            ),
        },
        {
            field: 'action2',
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
                            console.log(params.row);
                            removeFacility(params.row.id);
                        }}
                    >
                        Delete
                    </button>
                </strong>
            ),
        },
    ];

    return columns;
}

export {getFacilityListColumns}