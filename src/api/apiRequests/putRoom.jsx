import axios from "axios";
import baseURL from "../consts";

const putRoom = async (roomId, photos) => {
    const payload = {
        id: Number(roomId),
        roomPhotos: photos,
    }
    console.log(payload);
    return await axios.put(`${baseURL}Hotel/Room/Edit/${roomId}`, payload).then(response => response.data).catch(error => console.log(error));
}

export default putRoom;