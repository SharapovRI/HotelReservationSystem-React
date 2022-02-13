import axios from "axios";
import axiosInterceptor from "../../services/API/API";
import baseURL from "../consts";

const getUserOrders = async (filter) => {
    return await axiosInterceptor.get(`${baseURL}Hotels/GetMyOrders`, {params: {...filter }}).then(response => response.data).catch(error => console.log(error));
}

export default getUserOrders;