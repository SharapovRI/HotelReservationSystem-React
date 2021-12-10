import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import getRoom from '../../../api/apiRequests/getRoom';
import { addRoom } from '../../../redux/Reducers/OrderReducer';
import setOrderDataStorage from '../../../services/Order/setOrderDataStorage';
import RoomInfo from './RoomInfo';

import './RoomPage.scss'

const RoomPage = () => {
    const [room, setRoom] = useState();
    const { roomId, hotelId } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchRoom() {
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
        dispatch(addRoom(room));
        navigate("/Order");
    }

    return (
        <div className='roomPage'>
            {room && room !== null && <RoomInfo room={room} />}
            <div className='roomPageBookButton'>
                <button onClick={orderCreation}>Book</button>
            </div>
        </div>
    )
}

export default RoomPage;