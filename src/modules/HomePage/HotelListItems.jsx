import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HotelListItems = (props) => {
    const content = props.content;
    
    const [image, setImage] = useState('');
    //console.log(content);
    const extension = "";
    //const photo = JSON.parse(content.photos.data);
    const listItems = content.map((content) =>
        <NavLink to={`/Hotels/${content.id}`}>
            {/* {content && content[0] && content[0].photos && content[0].photos[0] && setImage(`data:${extension};base64,${content[0].photos[0].data}`)} */}
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