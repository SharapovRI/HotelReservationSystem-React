import axios from "axios";
import baseURL from "../consts";

const getHotelRooms = async (hotelId, payload) => {
    return await axios.get(`${baseURL}Hotels/${hotelId}`, {params: {hotelId, ...payload }}).then(response => response.data).catch(error => console.log(error));
}

export default getHotelRooms;