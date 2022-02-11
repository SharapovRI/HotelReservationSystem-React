import axios from "axios";
import axiosInterceptor from "../../services/API/API";
import baseURL from "../consts";

const postHotel = async (payload) => {
    return await axiosInterceptor.post(`${baseURL}Hotel/Create`, payload).then(response => response.data).catch(error => console.log(error));
}

export default postHotel;