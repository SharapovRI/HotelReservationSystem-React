function convertingToDataGridData(facilities, room, setData, setCost, setFacilitiesIds) {
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

    const idList = {};
    const result = {};
    const costList = {};
    for (let i = facilities.length - 1; i > -1; --i) {
        const a = facilities[i];
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

    for (let key in result) {
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

export {convertingToDataGridData};