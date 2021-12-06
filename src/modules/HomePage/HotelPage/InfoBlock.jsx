import React from 'react';

const InfoBlock = ({hotel}) => {

    return(
        <div>
            <h2>Info</h2>
            {console.log(hotel)}
            <h3>{hotel !== undefined && hotel.name}</h3> 
            <h5>{hotel !== undefined && `${hotel.country}, ${hotel.city}`}</h5> 
            <h5>{hotel !== undefined && hotel.address}</h5> 
        </div>
    )
}

export default InfoBlock;