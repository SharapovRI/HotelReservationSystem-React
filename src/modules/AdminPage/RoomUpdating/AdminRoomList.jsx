import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import getHotelRooms from '../../../api/apiRequests/getHotelRooms';
import AdminRoomListItems from './AdminRoomListItems';
import { useParams } from 'react-router';

const AdminRoomList = () => {
    const [page, setPage] = useState(1);
    const [rooms, setRooms] = useState();
    const [pageCount, setPageCount] = useState(1);

    const {hotelId} = useParams();

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
        <Stack spacing={2}>
            {rooms && <AdminRoomListItems content={rooms} hotelId={hotelId} />}
            <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Stack>
    )
}

export default AdminRoomList;