
function getFacilityTableColumns(removeFacility) {
    const columns = [
        {
            field: 'id',
            hide: true,
        },
        {
            field: 'facilityName',
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
                    {params.row &&
                        <button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ marginLeft: 16 }}
                            onClick={() => {
                                removeFacility(params.row.id);
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

export {getFacilityTableColumns}