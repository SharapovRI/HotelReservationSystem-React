import React, { useEffect, useState } from 'react';
import InfoBlockPhotos from '../HotelPage/InfoBlockPhotos/InfoBlockPhotos';

import './RoomInfo.scss'

const RoomInfo = ({ room }) => {
    return (
        <div className='roomInfo'>
            <div className='roomName'>
                {room && <h2>{room.type}</h2>}
                {room && <h5>Count of seats: {room.seatsCount}</h5>}
                <div className='classInfoPhotos'>
                    {room?.photos && <InfoBlockPhotos photos={room.photos} />}
                </div>
            </div>
            <div className='roomCost'>
            {room && <h5>Cost: {room.cost}</h5>}
            </div>
        </div>
    )
}

export default RoomInfo;
