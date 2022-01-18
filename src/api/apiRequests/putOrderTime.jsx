import axios from "axios";
import baseURL from "../consts";

const putOrderTime = async (updOrderTime) => {
    return await axios.put(`${baseURL}Order/UpdateTime`, updOrderTime).then(response => response.data).catch(error => console.log(error));
}

export default putOrderTime;