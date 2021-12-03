import { useState } from "react";
import RoomAccordeonList from "./RoomAccordeonList";
import RoomTypeCreation from "./RoomTypeCreation";
import Stack from '@mui/material/Stack';

const RoomDataArea = ({createdRooms, setCreatedRooms}) => {
    const [rooms, setRooms] = useState([]);

    function removeRoomType(index) {
        const newSourceRooms = Array.from(rooms);
        const newSourceCreatedRooms = Array.from(createdRooms);
        newSourceRooms.splice(index, 1);
        newSourceCreatedRooms.splice(index, 1);
        setRooms(newSourceRooms);
        setCreatedRooms(newSourceCreatedRooms);
    }

    return (
        <div>
            <div style={{ float: 'left' }}>
                <Stack spacing={2}>
                    <RoomAccordeonList content={rooms} createdRooms={createdRooms} setCreatedRooms={setCreatedRooms} removeRoomType={removeRoomType}/>
                </Stack>
            </div>
            <div style={{ float: 'right' }}>
                <RoomTypeCreation rooms={rooms} setRooms={setRooms} />
            </div>
        </div>
    )
}

export default RoomDataArea;