import React from 'react';
import { NavLink } from 'react-router-dom';

const HotelListItems = (props) => {
    const content = props.content;
    const listItems = content.map((content) =>
        <NavLink to={`/Hotels/${content.id}`}>
            <li key={content.id}>
                <h3>{content.name}</h3>
                <p>{content.city}, {content.country}, {content.address}</p>
            </li>
        </NavLink>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default HotelListItems;