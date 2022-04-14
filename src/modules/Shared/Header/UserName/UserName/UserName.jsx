import { useEffect, useState } from "react";
import { getName } from "../../../../../services/TokenService/getName";
import { useSelector } from "react-redux";
import './UserName.scss';

const UserName = () => {
    const token = useSelector((state) => state.jwtReducer?.token);

    const [userLogin, setUserLogin] = useState('');

    useEffect(() => {
        setUserLogin(getName(token));
    }, [token]);

    return (
        <div className="user_name">
            {userLogin}
        </div>
    )
}

export default UserName;