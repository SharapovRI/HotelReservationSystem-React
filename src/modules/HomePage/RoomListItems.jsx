import React from 'react';
import { NavLink } from 'react-router-dom';

const RoomListItems = (props) => {
    const content = props.content;
    const hotelId = props.hotelId;
    const listItems = content.map((content) =>
        <NavLink to={`/Hotels/${hotelId}/Rooms/${content.id}`}>
            <li key={content.id}>
                <h3>{content.type}</h3>
                <p>Seats count: {content.seatsCount}, Cost: {content.cost}</p>
            </li>
        </NavLink>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default RoomListItems