import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { getLogin } from "../../../services/TokenService/getLogin";
import { useSelector, useDispatch } from "react-redux";


const UserName = () => {
    const token = useSelector((state) => state.jwtReducer?.token);
    const dispatch = useDispatch();

    const [userLogin, setUserLogin] = useState('');
    const [role, setRole] = useState('User');

    useEffect(() => {
        setUserLogin(getLogin(token));
    }, [token]);

    return (
        <div>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            {userLogin}
        </Typography>
        </div>
    )
}

export default UserName;