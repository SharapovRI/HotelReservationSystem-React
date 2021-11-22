const setFilterStorage = (filter) => {
    localStorage.setItem("cityId", filter.id);
    localStorage.setItem("checkIn", filter.checkIn)
    localStorage.setItem("checkOut", filter.checkOut)
    localStorage.setItem("freeSeatsCount", filter.freeSeatsCount)
    localStorage.setItem("size", filter.size)
}

export default setFilterStorage;
