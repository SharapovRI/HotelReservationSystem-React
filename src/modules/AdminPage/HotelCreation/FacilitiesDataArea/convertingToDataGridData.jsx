function convertingToDataGridData(facilities, setData) {
    const list = [];
    facilities.map((facility, index) =>
        list.push({
            id:index,
            name: facility.name,
            cost:facility.cost
        })
    );

    setData(list);
}

export {convertingToDataGridData};