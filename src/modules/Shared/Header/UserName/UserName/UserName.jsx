import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { getName } from "../../../../../services/TokenService/getName";
import { useSelector, useDispatch } from "react-redux";
import './UserName.scss';

const UserName = () => {
    const token = useSelector((state) => state.jwtReducer?.token);
    const dispatch = useDispatch();

    const [userLogin, setUserLogin] = useState('');
    const [role, setRole] = useState('User');

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