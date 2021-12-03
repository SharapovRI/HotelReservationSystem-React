import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const PhotoListItem = ({ item, index, removePhoto }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    return (
        <>
            <li key={index} onClick={handleOpen}>
                <img src={`data:${item.extension};base64,${item.data}`} width="100" height="100" />
                </li>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div>
                            <img src={`data:${item.extension};base64,${item.data}`} width="400" height="400" />
                        </div>
                        <div>
                            <button onClick={() => {
                                removePhoto(index) 
                                handleClose()
                                }}>Delete</button>
                            <button onClick={handleClose}>No</button>
                        </div>
                    </Box>
                </Modal>
        </>
    )
}
export default PhotoListItem;