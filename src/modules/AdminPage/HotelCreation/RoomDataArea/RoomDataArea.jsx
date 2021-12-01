import { useState } from "react";
import AddPhotoItem from "./AddPhotoItem";
import RoomAccordeonList from "./RoomAccordeonList";
import RoomTypeCreation from "./RoomTypeCreation";

const RoomDataArea = () => {
    const [rooms, setRooms] = useState([]);

    return (
        <div>
            <div style={{ float: 'left' }}>
                <RoomAccordeonList rooms={rooms} />
            </div>
            <div style={{ float: 'right' }}>
                <RoomTypeCreation rooms={rooms} setRooms={setRooms} />
            </div>
        </div>
    )
}

export default RoomDataArea;