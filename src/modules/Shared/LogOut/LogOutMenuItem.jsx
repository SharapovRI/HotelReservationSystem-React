import './LogOutMenuItem.scss';
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router"
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { removeJwt } from "../../../redux/Reducers/JWTreducer";
import { removeRefresh } from "../../../redux/Reducers/RefreshReducer";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';

const LogOutMenuItem = ({ handleMenuClose }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(removeJwt());
        dispatch(removeRefresh());
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("refreshToken");
        localStorage.getItem("LastPath");
        handleClose();
        handleMenuClose();
        navigate('/Login');
    }

    return (
        <>
            <MenuItem onClick={handleOpen}>Log Out</MenuItem>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="logout_container">
                    <div className="logout_header">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Are you sure you want to exit?
                        </Typography>
                    </div>
                    <div className="logout_buttons">
                        <Button variant="contained" type="submit" className='submitButton' onClick={logOut}>Yes</Button>
                        <Button variant="contained" type="submit" className='submitButton' onClick={handleClose}>No</Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default LogOutMenuItem;