import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getRoom from '../../../api/apiRequests/getRoom';
import RoomInfo from './RoomInfo';

const RoomPage = () => {
    const [room, setRoom] = useState();
    const params = useParams();
    const roomId = params.roomId;
    const hotelId = params.id;

    useEffect(() => {
        async function fetchRoom()
        {
            const data = await getRoom(roomId, hotelId);
            setRoom(data);
        }

        fetchRoom();
    }, [])

    return(
        <div>
            <div>
                {room !== undefined && room !== null && <RoomInfo room={room}/>}
            </div>
            <div>
                <button>Book</button>
            </div>
        </div>
    )
}

export default RoomPage;