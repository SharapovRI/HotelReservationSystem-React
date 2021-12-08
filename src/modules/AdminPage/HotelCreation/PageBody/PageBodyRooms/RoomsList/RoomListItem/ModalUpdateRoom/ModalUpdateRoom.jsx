import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

import './ModalUpdateRoom.scss'
import RoomInfoArea from '../../../../../../../Shared/RoomModal/RoomInfoArea/RoomInfoArea';
import RoomPhotoArea from '../../../../../../../Shared/RoomModal/RoomPhotoArea/RoomPhotoArea';

const ModalUpdateRoom = ({ item, open, handleClose, action, removeRoomType, index }) => {
    const [typeName, setTypeName] = useState('');
    const [seatsCount, setSeatsCount] = useState(1);
    const [cost, setCost] = useState(1);
    const [roomPhotos, setRoomPhotos] = useState([]);
    const [roomCount, setRoomCount] = useState(1);

    useEffect(() => {
        setTypeName(item.typeName);
        setSeatsCount(item.seatsCount);
        setCost(item.cost);
        setRoomPhotos(item.roomPhotos);
        setRoomCount(item.roomCount);
    }, [item])

    const addRoom = () => {
        const room = {
            cost: Number(cost),
            seatsCount: Number(seatsCount),
            typeName: typeName,
            roomPhotos: roomPhotos,
            roomCount: Number(roomCount),
        }

        action(room);

        setTypeName('');
        setSeatsCount(1);
        setCost(1);
        setRoomPhotos([]);
        setRoomCount(1);
        handleClose();
    }

    const removeRooms = () => {
        removeRoomType(index);
        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '15px',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='modalBody'>
                    <RoomInfoArea typeName={typeName} setTypeName={setTypeName} seatsCount={seatsCount}
                        setSeatsCount={setSeatsCount} cost={cost} setCost={setCost}
                        roomCount={roomCount} setRoomCount={setRoomCount} />
                    <RoomPhotoArea roomPhotos={roomPhotos} setRoomPhotos={setRoomPhotos} />
                    <div className='modelUpdateButtons'>
                        <div className='cancelButtonDiv'>
                            <button onClick={() => handleClose()}>Cancel</button>
                        </div>
                        <div className='deleteButtonDiv'>
                        <button onClick={() => removeRooms()}>Delete</button>
                            </div>
                        <div className='updateButtonDiv'>
                            <button onClick={() => addRoom()}>Update</button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default ModalUpdateRoom;
