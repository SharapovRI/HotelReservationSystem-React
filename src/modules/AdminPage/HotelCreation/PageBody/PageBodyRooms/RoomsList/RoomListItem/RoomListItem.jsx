import { useState } from "react";
import ModalUpdateRoom from './ModalUpdateRoom/ModalUpdateRoom'
import Box from '@mui/material/Box';

import './RoomListItem.scss';

const RoomListItem = ({ item, index, removeRoomType, rooms, setRooms }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function updateRoom(index, updatedRoom) {
        const newSource = Array.from(rooms);
        newSource[index] = updatedRoom;
        setRooms(newSource);
    }

    const action = (item) => {
        updateRoom(index, item);
    }

    return (
        <>
            <li key={index} onClick={handleOpen}>
                <Box sx={
                    {
                        width: 'auto',
                        height: 'auto',
                        border: '1px solid grey',
                        borderRadius: '5px',
                        borderWidth: '5px',
                        padding: '15px',
                        margin: '15px',
                    }}>
                    <div className='roomItemInfo'>
                        <div className='infoItem'>
                            {item.typeName}
                        </div>
                        <div className='infoItem'>
                            Seats count: {item.seatsCount}
                        </div>
                        <div className='infoItem'>
                            Cost: {item.cost}
                        </div>
                        <div className='infoItem'>
                            Room count: {item.roomCount}
                        </div>
                    </div>
                </Box>
            </li>
            <ModalUpdateRoom item={item} open={open} handleClose={handleClose} rooms={rooms} 
            setRooms={setRooms} action={action} removeRoomType={removeRoomType} index={index}/>
        </>
    )
}
export default RoomListItem;