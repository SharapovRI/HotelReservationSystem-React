import axios from "axios";
import baseURL from "../consts";

const putHotel = async (hotelId, hotelData, hotelPhotos, facilities) => {
    const payload = {
        id: Number(hotelId),
        cityId: hotelData.cityId,
        countryId: hotelData.countryId,
        address: hotelData.address,
        name: hotelData.name,
        hotelPhotos: hotelPhotos,
        facilities: facilities,
    }
    console.log(payload);
    return await axios.put(`${baseURL}Hotel/Edit/${Number(hotelId)}`, payload).then(response => response.data).catch(error => console.log(error));
}

export default putHotel;