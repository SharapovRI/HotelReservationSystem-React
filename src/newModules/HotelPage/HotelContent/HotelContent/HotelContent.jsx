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

    // useEffect(() => {
    //     async function fetchHotelRooms(){
    //         const data = await getHotelRooms(params.hotelId, { ...filter, index: 0});
    //         setRooms(data.result);
    //         console.log(data.result);
    //         setHotel(data.hotel);
    //         setPageCount(data.pageCount);
    //     }

    //     {filter && params.hotelId && fetchHotelRooms()}
    // }, [filter])
    return (
        <>
        <h2>{hotel?.name}</h2>
        <h4>{hotel?.address}</h4>
        <h5>Ссылка на карту</h5>
        <div className='hotelPhotosArea'>
            <PhotosTable photos={hotel?.photos} />
            <PhotosCarousel photos={hotel?.photos} />
        </div>
        </>
    )
}

export default HotelContent;