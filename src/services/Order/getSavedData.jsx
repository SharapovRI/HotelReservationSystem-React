import { getId } from "../TokenService/getId";
import getFilterStorage from "./getFilterStorage";
import getOrderDataStorage from "./getOrderDataStorage";

const getSavedData = (setUserId, setHotelId, setRoomId, setCost, setCityId, setCheckInDate, setCheckOutDate) => {
    const data = getOrderDataStorage();
    const filter = getFilterStorage();

    const { hotelId: hotelData, roomId: roomData, cost: costData } = data;

    const { id: cityId, checkIn: checkInDate, checkOut: checkOutDate } = filter;

    const id = getId(localStorage.getItem("jwtToken"));

    if (hotelData && roomData && costData && id && cityId && checkInDate && checkOutDate) {
        setHotelId(hotelData);
        setRoomId(roomData);
        setCost(costData);
        setCityId(cityId);
        setCheckInDate(checkInDate);
        setCheckOutDate(checkOutDate);
        setUserId(id);
    }
}

export default getSavedData;