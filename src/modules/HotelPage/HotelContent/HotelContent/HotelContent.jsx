import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getHotelRooms from '../../../../api/apiRequests/getHotelRooms';
import PhotosCarousel from '../PhotosCarousel/PhotosCarousel/PhotosCarousel';
import PhotosTable from '../PhotosTable/PhotosTable/PhotosTable';
import './HotelContent.scss';

const HotelContent = ( { hotel } ) => {
    const params = useParams();
    const [rooms, setRooms] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    return (
        <>
        <div className="hotel_content_header">
            <h2>{hotel?.name}</h2>
        </div>
        <div className="hotel_content_address">
            <span className='hca_address'>{hotel?.address}, {hotel?.city}, {hotel?.country}</span>
            <h5>Ссылка на карту</h5>
        </div>
        <div className='hotelPhotosArea'>
            <PhotosTable photos={hotel?.photos} />
            <PhotosCarousel photos={hotel?.photos} />
        </div>
        </>
    )
}

export default HotelContent;