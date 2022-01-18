import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './HotelListItems.scss'

const HotelListItems = (props) => {
    const content = props.content;

    const [image, setImage] = useState('');
    const extension = "";
    const listItems = content.map((content) =>
        <NavLink to={`/Hotels/${content.id}`}>
            <li key={content.id}>
                <div className='hotelListItems'>
                    <div className='hotelListItemsPhoto'>
                        {content?.photos[0] && <img src={`data:${extension};base64,${content.photos[0].data}`} />}
                    </div>
                    <div>
                        <h3>{content.name}</h3>
                        <p>{content.city}, {content.country}, {content.address}</p>
                    </div>
                </div>
            </li>
        </NavLink>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default HotelListItems;