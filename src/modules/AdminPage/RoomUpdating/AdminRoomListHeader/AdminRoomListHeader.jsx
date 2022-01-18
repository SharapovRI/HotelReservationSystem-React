import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getHotels from '../../../../api/apiRequests/getHotels';
import './AdminRoomListHeader.scss'

const AdminRoomListHeader = () => {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState();

    useEffect(() => {
        async function getData() {
            const payload = {
                id: hotelId,
                size: -1,
                index: 0,
            };

            const data = await getHotels({ ...payload });

            setHotel(data?.result[0]);
        }
        getData();
    }, [hotelId])

    return(
        
        <div className='adminRoomListHeader'>
            <h2>{hotel?.name}</h2>
        </div>
    )
}

export default AdminRoomListHeader;