import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import getRoom from '../../../api/apiRequests/getRoom';
import setOrderDataStorage from '../../../services/Order/setOrderDataStorage';
import RoomInfo from './RoomInfo';

const RoomPage = () => {
    const [room, setRoom] = useState();
    const {roomId, hotelId} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchRoom()
        {
            const data = await getRoom(roomId, hotelId);
            setRoom(data);
        }

        fetchRoom();
    }, [roomId, hotelId, setRoom])

    function orderCreation() {
        const orderData = {
            hotelId: hotelId,
            roomId: roomId,
            cost: room.cost
        }
        
        setOrderDataStorage(orderData);
        navigate("/Order");
    }

    return(
        <div>
            <div>
                {room && room !== null && <RoomInfo room={room}/>}
            </div>
            <div>
                <button onClick={orderCreation}>Book</button>
            </div>
        </div>
    )
}

export default RoomPage;