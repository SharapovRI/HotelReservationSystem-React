import { useEffect, useState } from 'react';
import getHotels from '../../../../api/apiRequests/getHotels';
import './AdminRoomPageHeader';

const AdminRoomPageHeader = ({ hotelId }) => {
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

    return (
        <>
            <h2>{hotel?.name} {'>'} Room Updating</h2>
        </>
    )
}

export default AdminRoomPageHeader;