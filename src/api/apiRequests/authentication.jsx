import axios from "axios";
import baseURL from "../consts";

const postAuthenticate = async (login, password) => {
    const payload = { Username:login, Password:password };
    return await axios.post(`${baseURL}Authorization/authenticate`, payload).then(response => response.data).catch(error => console.log(error));
}

export default postAuthenticate;