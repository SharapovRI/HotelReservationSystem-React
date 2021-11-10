import axios from "axios";

const postRegistrate = async (login, password, repeatedPassword) => {

    const payload = { 
        Username: login,
        Password: password,
        PasswordRepeat: repeatedPassword
    };
    return await axios.post('https://localhost:44382/Authorization/registrate', payload).then(response => response.data).catch(error => console.log(error));
}

export default postRegistrate;