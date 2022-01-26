import { useEffect, useState } from 'react';
import CreatedRoomsTable from '../CreatedRoomsTable/CreatedRoomsTable/CreatedRoomsTable';
import CreatingRoomModal from '../CreatingRoomModal/CreatingRoomModal/CreatingRoomModal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './RoomCreationArea.scss';
import { useSelector } from 'react-redux';

const RoomCreationArea = ({ setRoomPayload }) => {
    const roomSt = useSelector((state) => state.roomReducer?.createdRooms)
    const [createdRooms, setCreatedRooms] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const rooms = {
            rooms: createdRooms,
        }
        setRoomPayload(rooms);
    }, [createdRooms])

    useEffect(() => {
        console.log('change');
    }, [roomSt])

    return (
        <div className='roomCreationArea'>
            <CreatedRoomsTable createdRooms={roomSt} />
            <div className='addRoomBtn' onClick={handleOpen}>
                <AddCircleIcon />
            </div>
            <CreatingRoomModal open={open} handleClose={handleClose} rooms={createdRooms} setRooms={setCreatedRooms} />
            <button onClick={() => console.log(roomSt)}>fffffffffffffffff</button>
        </div>
    )
}

export default RoomCreationArea;