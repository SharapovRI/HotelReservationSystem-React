import axios from "axios";
import baseURL from "../consts";

const getFacilitiesRange = async (payload) => {
    return await axios.get(`${baseURL}AdditionalFacilities/GetFacilitiesRange`, {params: payload}).then(response => response.data).catch(error => console.log(error));
}

export default getFacilitiesRange;