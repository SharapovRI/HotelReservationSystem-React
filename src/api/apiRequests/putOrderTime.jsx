import axios from "axios";
import axiosInterceptor from "../../services/API/API";
import baseURL from "../consts";

const putOrderTime = async (updOrderTime) => {
    return await axiosInterceptor.put(`${baseURL}Order/UpdateTime`, updOrderTime).then(response => response.data).catch(error => console.log(error));
}

export default putOrderTime;