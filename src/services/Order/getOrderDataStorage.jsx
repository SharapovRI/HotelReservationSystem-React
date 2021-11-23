const getOrderDataStorage = () => {
    const orderData = {
        hotelId: localStorage.getItem("hotelId"),
        roomId: localStorage.getItem("roomId"),
        cost: localStorage.getItem("cost")
    }

    return orderData;
}

export default getOrderDataStorage;

