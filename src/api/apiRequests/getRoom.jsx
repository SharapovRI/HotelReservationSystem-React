import axios from "axios";
import baseURL from "../consts";

const getRoom = async (roomId, hotelId) => {
    return await axios.get(`${baseURL}Hotels/${hotelId}/Rooms/${roomId}`).then(response => response.data).catch(error => console.log(error));
}

export default getRoom;