import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AdminHotelListItems = (props) => {
    const content = props.content;

    const [image, setImage] = useState('');
    const extension = "";
    const listItems = content.map((content) =>
        <li key={content.id}>
            <NavLink to={`/Hotels/${content.id}`}>
                <div>
                    <h3>{content.name}</h3>
                    {console.log(content.photos[0])}
                    {content?.photos[0] && <img src={`data:${extension};base64,${content.photos[0].data}`} />}
                    <p>{content.city}, {content.country}, {content.address}</p>
                </div>
            </NavLink>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default AdminHotelListItems;