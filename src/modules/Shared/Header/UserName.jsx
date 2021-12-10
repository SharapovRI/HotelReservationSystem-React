import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { getName } from "../../../services/TokenService/getName";
import { useSelector, useDispatch } from "react-redux";


const UserName = () => {
    const token = useSelector((state) => state.jwtReducer?.token);
    const dispatch = useDispatch();

    const [userLogin, setUserLogin] = useState('');
    const [role, setRole] = useState('User');

    useEffect(() => {
        setUserLogin(getName(token));
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