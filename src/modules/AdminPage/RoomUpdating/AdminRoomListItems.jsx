import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminRoomListItems = ({ content, hotelId }) => {
    const navigate = useNavigate();

    const listItems = content.map((content) =>
        <li key={content.id}>
            <div>
                <h3>{content.type}</h3>
                <p>Seats count: {content.seatsCount}, Cost: {content.cost}</p>
            </div>
            <div>
                <button onClick={() => navigate(`/Admin/Hotels/${hotelId}/Rooms/${content.id}`)}>Edit</button>
                <button>Delete</button>
            </div>
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default AdminRoomListItems;