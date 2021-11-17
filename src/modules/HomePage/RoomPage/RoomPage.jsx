import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import getRoom from '../../../api/apiRequests/getRoom';
import { getCheckInDate, setCost, setHotelId, setRoomId } from '../../../redux/CurrentOrder/OrderActions';
import RoomInfo from './RoomInfo';

const RoomPage = () => {
    const [room, setRoom] = useState();
    const params = useParams();
    const roomId = params.roomId;
    const hotelId = params.id;

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchRoom()
        {
            const data = await getRoom(roomId, hotelId);
            setRoom(data);
        }

        fetchRoom();
    }, [])

    function orderCreation(){
        setHotelId(hotelId);
        setRoomId(roomId);
        setCost(room.cost);
        navigate("/Order");
    }

    return(
        <div>
            <div>
                {room !== undefined && room !== null && <RoomInfo room={room}/>}
            </div>
            <div>
                <button onClick={orderCreation}>Book</button>
            </div>
        </div>
    )
}

export default RoomPage;