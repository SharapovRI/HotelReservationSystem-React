import axios from "axios";
import baseURL from "../consts";

const postOrder = async (payload) => {
    console.log(payload);
    return await axios.post(`${baseURL}Order/Create`, payload).then(response => response.data).catch(error => console.log(error));
}

export default postOrder;