import React from 'react';

const InfoBlock = ({hotel}) => {

    return(
        <div>
            <h2>Info</h2>
            
            <h3>{hotel !== undefined && hotel.name}</h3> 
        </div>
    )
}

export default InfoBlock;