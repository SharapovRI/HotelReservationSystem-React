import axios from "axios";
import baseURL from "../consts";

const putHotel = async (hotelId, payload) => {
    payload.id = Number(hotelId);
    return await axios.put(`${baseURL}Hotel/Edit/${Number(hotelId)}`, payload).then(response => response.data).catch(error => console.log(error));
}

export default putHotel;