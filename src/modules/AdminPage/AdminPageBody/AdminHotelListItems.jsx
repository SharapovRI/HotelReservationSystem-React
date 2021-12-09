import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


import './AdminHotelListItems.scss';

const AdminHotelListItems = (props) => {
    const content = props.content;

    const navigate = useNavigate();

    const extension = "";
    const listItems = content.map((content) =>
        <li key={content.id}>
            <div className='hotelListItemContent'>
                <NavLink to={`/Admin/Hotels/${content.id}`}>
                    <div className='hotelListItemInfo'>
                        <div className='hotelListItemPhoto'>
                            {content?.photos[0] && <img src={`data:${extension};base64,${content.photos[0].data}`} />}
                        </div>
                        <div>
                            <h3>{content.name}</h3>
                            <p>{content.city}, {content.country}, {content.address}</p>
                        </div>
                    </div>
                </NavLink>
                <div>
                    <button onClick={() => navigate(`/HotelUpdating/${content.id}`)}>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </li>
    );
    return (
        <ul className='hotelListUl'>{listItems}</ul>
    );
}

export default AdminHotelListItems;