import axios from "axios";

const getHotels = async (payload) => {
    return await axios.get('https://localhost:44382/Hotels', {params: {...payload}}).then(response => response.data).catch(error => console.log(error));
}

export default getHotels;