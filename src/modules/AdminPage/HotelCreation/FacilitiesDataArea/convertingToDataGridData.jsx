function convertingToDataGridData(facilities, setData) {
    const list = [];
    facilities.map((facility, index) =>
        list.push({
            id:index,
            facilityName: facility.facilityName,
            cost:facility.cost
        })
    );

    setData(list);
}

export {convertingToDataGridData};