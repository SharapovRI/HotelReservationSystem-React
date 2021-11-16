import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RoomList from '../HotelPage/RoomList';

const RoomInfo = ( { room } ) => {
    return(
        <div>
            {room !== undefined && <h2>{room.type}</h2>}
        </div>
    )
}

export default RoomInfo;
