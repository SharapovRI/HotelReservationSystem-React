import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import getHotelRooms from '../../../api/apiRequests/getHotelRooms';
import HotelContent from '../HotelContent/HotelContent/HotelContent';
import RoomTable from '../RoomTable/RoomTable/RoomTable';
import SearchingArea from '../SearchingArea/SearchingArea/SearchingArea';
import SearchingParams from '../SearchingParams/SearchingParams/SearchingParams';
import './HotelPage.scss';

const HotelPage = () => {
    const [filter, setFilter] = useState(null);
    const [content, setContent] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();

    const params = useParams();
    const [rooms, setRooms] = useState([]);
    const [hotel, setHotel] = useState();

    useEffect(() => {
        async function fetchHotelRooms() {
            const data = await getHotelRooms(params.hotelId, { ...filter, index: 0 });
            setRooms(data.result);
            console.log(data.result);
            setHotel(data.hotel);
            setPageCount(data.pageCount);
        }

        { filter && params.hotelId && fetchHotelRooms() }
    }, [filter])

    useEffect(() => {
        const payload = {
            cityId: Number(searchParams.get('cityId')),
            countryId: Number(searchParams.get('countryId')),
            checkIn: new Date(searchParams.get('checkIn')).toJSON(),
            checkOut: new Date(searchParams.get('checkOut')).toJSON(),
            freeSeatsCount: Number(searchParams.get('freeSeatsCount')),
            size: 5,
        };
        setFilter(payload)
    }, []);

    return (
        <div className='hotelPageContainer'>
            <div className='searchingHotelsArea'>
                <SearchingArea filter={filter} setFilter={setFilter} setContent={setContent} setPageCount={setPageCount} />
            </div>
            <div className='hotelArea'>
                <HotelContent hotel={hotel} />
            </div>
            <div className='hotelDescription'>
                ------------------------------------------------------
                <br />
                dada
                <br />
                ------------------------------------------------------
            </div>
            <div className='searchingParams'>
                <SearchingParams filter={filter} />
            </div>
            <div className='roomTable'>
                <RoomTable rooms={rooms}/>
            </div>
        </div>
    )
}

export default HotelPage