import axiosInterceptor from "../../services/API/API";
import baseURL from "../consts";

const deleteHotel = async (hotelId) => {
    return await axiosInterceptor.delete(`${baseURL}Hotels/Delete/${Number(hotelId)}`).then(response => response.data).catch(error => console.log(error));
}

export default deleteHotel;