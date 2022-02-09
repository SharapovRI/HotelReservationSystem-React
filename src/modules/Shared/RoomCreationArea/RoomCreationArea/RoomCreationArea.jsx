import './RoomCreationArea.scss';

import { useEffect, useState } from 'react';
import CreatedRoomsTable from '../CreatedRoomsTable/CreatedRoomsTable/CreatedRoomsTable';
import CreatingRoomModal from '../CreatingRoomModal/CreatingRoomModal/CreatingRoomModal';
import { useDispatch, useSelector } from 'react-redux';
import { clearCreatedRooms } from '../../../../redux/Reducers/RoomReducer';
import Button from '@mui/material/Button';

const RoomCreationArea = ({ setRoomPayload }) => {
    const roomSt = useSelector((state) => state.roomReducer?.createdRooms)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCreatedRooms());
    }, [setOpen])

    useEffect(() => {
        const rooms = {
            rooms: roomSt,
        }
        setRoomPayload(rooms);
    }, [roomSt])

    return (
        <>
            <div className='room_creation_area'>
                <CreatedRoomsTable createdRooms={roomSt} />
                <CreatingRoomModal open={open} handleClose={handleClose} />
            </div>
            <div className='addRoomBtn'>
                <Button variant="contained" onClick={handleOpen}>Create room</Button>
            </div>
        </>
    )
}

export default RoomCreationArea;