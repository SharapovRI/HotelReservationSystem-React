import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { removeJwt } from "../../../redux/Reducers/JWTreducer";
import { removeRefresh } from "../../../redux/Reducers/RefreshReducer";
import { useDispatch } from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const LogOutMenuItem = ( {handleMenuClose} ) => {
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
                <Box sx={style}>
                    <div>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Are you sure you want to exit?
                        </Typography>
                    </div>
                    <div>
                        <button onClick={logOut}>Yes</button>
                        <button onClick={handleClose}>No</button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default LogOutMenuItem;