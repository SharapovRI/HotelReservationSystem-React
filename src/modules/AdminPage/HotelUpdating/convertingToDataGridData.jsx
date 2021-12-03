function convertingToDataGridData(facilities, setData) {
    const list = [];
    console.log(facilities);
    facilities.map((facility, index) =>
        list.push({
            id:facility.id,
            name: facility.name,
            cost:facility.cost
        })
    );

    setData(list);
}

export {convertingToDataGridData};