import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import './PhotoListItem.scss';

const PhotoListItem = ({ item, index, removePhoto }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <li key={index} onClick={handleOpen}>
                <img src={`data:${item.extension};base64,${item.data}`} />
            </li>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className='modalRoomPhoto'>
                        <div>
                            <img src={`data:${item.extension};base64,${item.data}`} width="400" height="400" />
                        </div>
                        <div className='modelRoomsButtons'>
                            <div className='modalCancelButtonDiv'>
                                <button onClick={handleClose}>Back</button>
                            </div>
                            <div className='modalDeleteButtonDiv'>
                                <button onClick={() => {
                                    removePhoto(index)
                                    handleClose()
                                }}>Delete</button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
export default PhotoListItem;