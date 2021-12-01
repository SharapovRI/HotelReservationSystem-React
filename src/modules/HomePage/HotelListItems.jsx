import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HotelListItems = (props) => {
    const content = props.content;
    
    const [image, setImage] = useState('');
    const extension = "";
    const listItems = content.map((content) =>
        <NavLink to={`/Hotels/${content.id}`}>
            <li key={content.id}>
                <h3>{content.name}</h3>
                {console.log(content.photos[0])}
                {content?.photos[0] && <img src={`data:${extension};base64,${content.photos[0].data}`} />}
                <p>{content.city}, {content.country}, {content.address}</p>
            </li>
        </NavLink>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default HotelListItems;