import axios from "axios";

const postAuthenticate = async (login, password) => {

    const payload = { Username:login, Password:password };
    return await axios.post('https://localhost:44382/Authorization/authenticate', payload).then(response => response.data).catch(error => console.log(error));
}

export default postAuthenticate;