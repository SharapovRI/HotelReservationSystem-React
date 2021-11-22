const getFilterStorage = () => {
    const filter = {
        id: localStorage.getItem("cityId"),
        checkIn: localStorage.getItem("checkIn"),
        checkOut: localStorage.getItem("checkOut"),
        freeSeatsCount: localStorage.getItem("freeSeatsCount"),
        size: localStorage.getItem("size")
    };

    return filter
}

export default getFilterStorage;
