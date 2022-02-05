const createOrder = (room, checkInDate, checkOutDate, checkInTime) => {
    const hours = new Date(checkInTime).getHours();
    const min = new Date(checkInTime).getMinutes();
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    checkIn.setHours(hours);
    checkIn.setMinutes(min);
    const facilitiesIds = room.facilities?.map(facil => facil.id);

    const payload = {
        RoomId:Number(room.id),
        CheckInTime: checkIn.toJSON(),
        CheckOutTime: checkOut.toJSON(),
        Cost:Number(room.cost),
        AdditionalFacilities:facilitiesIds,
    };

    return(payload);
}

export default createOrder;