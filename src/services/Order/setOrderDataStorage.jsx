const setOrderDataStorage = (orderData) => {
    localStorage.setItem("hotelId", orderData.hotelId);
    localStorage.setItem("roomId", orderData.roomId)
    localStorage.setItem("cost", orderData.cost)
}

export default setOrderDataStorage;
