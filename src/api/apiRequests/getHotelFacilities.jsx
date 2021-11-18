import axios from "axios";

const getHotelFacilities = async (hotelId, payload) => {
    console.log(payload);
    return await axios.get(`https://localhost:44382/Hotels/${hotelId}/GetFacilities`, {params: {hotelId, ...payload }}).then(response => response.data).catch(error => console.log(error));
}

export default getHotelFacilities;