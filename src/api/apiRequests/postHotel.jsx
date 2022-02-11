import axios from "axios";
import baseURL from "../consts";

const postHotel = async (payload) => {
    console.log(payload);
    return await axios.post(`${baseURL}Hotel/Create`, payload).then(response => response.data).catch(error => console.log(error));
}

export default postHotel;