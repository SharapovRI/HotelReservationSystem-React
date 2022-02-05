import { useEffect, useState } from 'react';
import CreatedRoomsTable from '../CreatedRoomsTable/CreatedRoomsTable/CreatedRoomsTable';
import CreatingRoomModal from '../CreatingRoomModal/CreatingRoomModal/CreatingRoomModal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './RoomCreationArea.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearCreatedRooms } from '../../../../redux/Reducers/RoomReducer';

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
        <div className='roomCreationArea'>
            <CreatedRoomsTable createdRooms={roomSt} />
            <div className='addRoomBtn' onClick={handleOpen}>
                <AddCircleIcon />
            </div>
            <CreatingRoomModal open={open} handleClose={handleClose} />
        </div>
    )
}

export default RoomCreationArea;