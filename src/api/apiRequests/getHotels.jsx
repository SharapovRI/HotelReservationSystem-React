import axios from "axios";
import baseURL from "../consts";

const getHotels = async (payload) => {
    return await axios.get(`${baseURL}Hotels`, {params: {...payload}}).then(response => response.data).catch(error => console.log(error));
}

export default getHotels;