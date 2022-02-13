import axios from "axios";
import axiosInterceptor from "../../services/API/API";
import baseURL from "../consts";

const putRoom = async (roomId, hotelId, typeName, seatsCount, cost, photos) => {
    const payload = {
        id: Number(roomId),
        hotelId: Number(hotelId),
        typeName: typeName,
        seatsCount: Number(seatsCount),
        cost: Number(cost),
        roomPhotos: photos,
    }
    return await axiosInterceptor.put(`${baseURL}Hotel/Room/Edit/${roomId}`, payload).then(response => response.data).catch(error => console.log(error));
}

export default putRoom;