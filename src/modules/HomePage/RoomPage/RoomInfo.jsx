import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RoomList from '../HotelPage/RoomList';

const RoomInfo = ( { room } ) => {
    return(
        <div>
            {console.log(room)}
            {room !== undefined && <h2>{room.type}</h2>}
            photos
            <br/>
            {room && <h5>Count of seats: {room.seatsCount}</h5>}
            {room && <h5>Cost: {room.cost}</h5>}
        </div>
    )
}

export default RoomInfo;
