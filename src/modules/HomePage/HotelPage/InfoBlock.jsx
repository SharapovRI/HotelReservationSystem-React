import React from 'react';

import './InfoBlock.scss';
import InfoBlockPhotos from './InfoBlockPhotos/InfoBlockPhotos';

const InfoBlock = ({hotel}) => {
    const listPhoto = () => {
        const list = [];
        const photos = hotel.photos;
        photos.map((item) => {
            list.push(<img src={`data:${item.extension};base64,${item.data}`} />);
        })

        console.log(list);
        return list;
    }

    console.log(hotel?.photos);
    return(
        <>
        <div>
            <h3>{hotel !== undefined && hotel.name}</h3> 
            <h5>{hotel !== undefined && `${hotel.country}, ${hotel.city}`}</h5> 
            <h5>{hotel !== undefined && hotel.address}</h5> 
        </div>
        <div className='hotelPhotos'>        
            {hotel?.photos && <InfoBlockPhotos photos={hotel?.photos}/>}
        </div>
        </>
    )
}

export default InfoBlock;