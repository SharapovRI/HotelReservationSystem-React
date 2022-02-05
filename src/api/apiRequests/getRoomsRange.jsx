import axios from "axios";
import baseURL from "../consts";

const getRoomsRange = async (payload) => {
    return await axios.get(`${baseURL}Rooms/GetRoomsRange`, {params: payload}).then(response => response.data).catch(error => console.log(error));
}

export default getRoomsRange;