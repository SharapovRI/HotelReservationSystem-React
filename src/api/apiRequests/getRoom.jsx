import axios from "axios";

const getRoom = async (roomId, hotelId) => {
    return await axios.get(`https://localhost:44382/Hotels/${hotelId}/Rooms/${roomId}`).then(response => response.data).catch(error => console.log(error));
}

export default getRoom;