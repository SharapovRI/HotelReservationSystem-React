import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getHotelRooms from '../../../api/apiRequests/getHotelRooms';
import InfoBlock from './InfoBlock';
import RoomList from './RoomList';

const HotelPage = ({filter}) => {
    const params = useParams();
    const hotelId = params.id;
    const [rooms, setRooms] = useState([]);
    const [hotel, setHotel] = useState();
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        async function fetchHotelRooms(){
            const data = await getHotelRooms(hotelId, { ...filter, index: 0});
            setRooms(data.result);
            setHotel(data.hotel);
            setPageCount(data.pageCount);
        }

        fetchHotelRooms();
    }, [])

    return(
        <div>
            <div>
                <InfoBlock hotel={hotel}/>
            </div>
            <div>
                <RoomList 
                    rooms={rooms} 
                    pageCount={pageCount} 
                    filter={filter}
                    hotelId={hotelId}
                    setRooms={setRooms}
                />
            </div>
        </div>
    )
}

export default HotelPage;