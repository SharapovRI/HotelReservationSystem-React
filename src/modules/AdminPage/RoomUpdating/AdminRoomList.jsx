import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import getHotelRooms from '../../../api/apiRequests/getHotelRooms';
import AdminRoomListItems from './AdminRoomListItems';
import { useParams } from 'react-router';
import AdminRoomListHeader from './AdminRoomListHeader/AdminRoomListHeader';

const AdminRoomList = () => {
    const [page, setPage] = useState(1);
    const [rooms, setRooms] = useState();
    const [pageCount, setPageCount] = useState(1);

    const { hotelId } = useParams();

    useEffect(() => {
        async function fetchHotelRooms() {
            const data = await getHotelRooms(hotelId, { size: 2, index: page - 1 });
            setRooms(data.result);
            setPageCount(data.pageCount);
        }
        fetchHotelRooms();
    }, [page])

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <AdminRoomListHeader />
            <div>
                {rooms && <AdminRoomListItems content={rooms} hotelId={hotelId} />}
                <Pagination count={pageCount} page={page} onChange={handleChange} />
            </div>
        </>
    )
}

export default AdminRoomList;