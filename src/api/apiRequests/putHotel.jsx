import axiosInterceptor from "../../services/API/API";
import baseURL from "../consts";

const putHotel = async (hotelId, payload) => {
    payload.id = Number(hotelId);
    return await axiosInterceptor.put(`${baseURL}Hotel/Edit/${Number(hotelId)}`, payload).then(response => response.data).catch(error => console.log(error));
}

export default putHotel;