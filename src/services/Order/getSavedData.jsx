import { getId } from "../TokenService/getId";
import getFilterStorage from "./getFilterStorage";
import getOrderDataStorage from "./getOrderDataStorage";

const getSavedData = (setUserId, setHotelId, setRoomId, setCost, setCityId, setCheckInDate, setCheckOutDate) => {
    const data = getOrderDataStorage();
    const filter = getFilterStorage();

    const hotelData = data.hotelId
    const roomData = data.roomId
    const costData = data.cost

    const cityId = filter.id
    const checkInDate = filter.checkIn
    const checkOutDate = filter.checkOut

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