import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import getHotelRooms from '../../../api/apiRequests/getHotelRooms';
import HotelContent from '../HotelContent/HotelContent/HotelContent';
import RoomTable from '../RoomTable/RoomTable/RoomTable';
import SearchingArea from '../SearchingArea/SearchingArea/SearchingArea';
import SearchingParams from '../SearchingParams/SearchingParams/SearchingParams';
import TextareaAutosize from '@mui/material/TextareaAutosize';
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
            setHotel(data.hotel);
            setPageCount(data.pageCount);
            setSearchParams(filter);
        }

        { filter && params.hotelId && fetchHotelRooms() }
    }, [filter])

    useEffect(() => {
        let checkIn = new Date(searchParams.get('checkIn')).toJSON();
        let checkOut = new Date(searchParams.get('checkOut')).toJSON();

        if (getNumberOfDays(checkIn, checkOut) < 1) {
            checkOut = (new Date()).setDate(new Date(checkIn).getDate() + 1);
        }

        let seats = Number(searchParams.get('freeSeatsCount'));
        if (seats < 1) {
            seats = 1;
        }

        const payload = {
            cityId: Number(searchParams.get('cityId')),
            countryId: Number(searchParams.get('countryId')),
            checkIn: new Date(checkIn).toJSON(),
            checkOut: new Date(checkOut).toJSON(),
            freeSeatsCount: seats,
            size: 5,
        };
        setFilter(payload)
    }, [searchParams]);

    function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = Math.round(diffInTime / oneDay);
        return diffInDays;
    }

    return (
        <div className='hotelPageContainer'>
            <div className='searchingHotelsArea'>
                <SearchingArea filter={filter} setFilter={setFilter} setContent={setContent} setPageCount={setPageCount} />
            </div>
            <div className='hotelArea'>
                <HotelContent hotel={hotel} />
            </div>
            <div className='hotelDescription'>
                <span className='textArea'>{hotel?.discription}</span>
            </div>
            <div className='searchingParams'>
                <SearchingParams filter={filter} setFilter={setFilter}/>
            </div>
            <div className='roomTable'>
                <RoomTable rooms={rooms} filter={filter} />
            </div>
        </div>
    )
}

export default HotelPage