import axios from "axios";
import baseURL from "../consts";

const postHotel = async (hotelData, createdRooms, facilities) => {
    const payload = {
        cityId: hotelData.cityId,
        countryId: hotelData.countryId,
        address: hotelData.address,
        name: hotelData.name,
        rooms: createdRooms,
        facilities: facilities,
        hotelPhotos: hotelData.hotelPhotos,
    }
    console.log(payload);
    return await axios.post(`${baseURL}Hotel/Create`, payload).then(response => response.data).catch(error => console.log(error));
}

export default postHotel;