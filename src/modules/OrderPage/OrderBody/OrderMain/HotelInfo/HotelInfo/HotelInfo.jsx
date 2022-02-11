import './HotelInfo.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import getHotels from '../../../../../../api/apiRequests/getHotels';

const HotelInfo = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [hotel, setHotel] = useState();

    useEffect(() => {
        async function getHotel() {
            const hotelId = searchParams.get('hotelId');
            const payload = {
                id: hotelId,
            }
            const data = await getHotels(payload); 
            setHotel(data.result[0]);
        }
        getHotel();
    }, [setHotel]);

    return(
        <div className="order_hotel_info">
            <div className='hotel_info_photo'>
                <img className='hotel_photo' src={`data:${hotel?.photos[0]?.extension};base64,${hotel?.photos[0]?.data}`}/>
            </div>
            <div className="hotel_info_text">
                <div className="hotel_name">
                    <h3>{hotel?.name}</h3>
                </div>
                <div className="hotel_address">
                    <address>{hotel?.address}</address>
                </div>
            </div>
        </div>
    )
}

export default HotelInfo;