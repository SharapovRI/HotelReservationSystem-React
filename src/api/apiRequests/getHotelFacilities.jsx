import axios from "axios";
import baseURL from "../consts";

const getHotelFacilities = async (hotelId, payload) => {
    return await axios.get(`${baseURL}Hotels/${hotelId}/GetFacilities`, {params: {hotelId, ...payload }}).then(response => response.data).catch(error => console.log(error));
}

export default getHotelFacilities;