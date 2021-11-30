import axios from "axios";
import baseURL from "../consts";

const getUserOrders = async (filter) => {
    return await axios.get(`${baseURL}Hotels/GetMyOrders`, {params: {...filter }}).then(response => response.data).catch(error => console.log(error));
}

export default getUserOrders;