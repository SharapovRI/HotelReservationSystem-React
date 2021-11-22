import axios from "axios";
import baseURL from "../consts";

const postRegistrate = async (login, password, repeatedPassword) => {

    const payload = { 
        Username: login,
        Password: password,
        PasswordRepeat: repeatedPassword
    };
    return await axios.post(`${baseURL}Authorization/registrate`, payload).then(response => response.data).catch(error => console.log(error));
}

export default postRegistrate;