import postOrder from "../../api/apiRequests/postOrder";

const createOrder = (roomId, userId, checkInDate, checkOutDate, cost, facilitiesIds, checkInTime) => {
    const hours = new Date(checkInTime).getHours();
    const min = new Date(checkInTime).getMinutes();
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    checkIn.setHours(hours);
    checkIn.setMinutes(min);

    const payload = {
        RoomId:Number(roomId),
        PersonId:Number(userId),
        CheckInTime: checkIn.toJSON(),
        CheckOutTime: checkOut.toJSON(),
        Cost:Number(cost),
        AdditionalFacilities:facilitiesIds,
    };

    postOrder(payload);
}

export default createOrder;