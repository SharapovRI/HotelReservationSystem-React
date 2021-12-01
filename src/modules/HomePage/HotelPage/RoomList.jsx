import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import getHotelRooms from '../../../api/apiRequests/getHotelRooms';
import RoomListItems from './RoomListItems';

const RoomList = ({ rooms, pageCount, filter, hotelId, setRooms}) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
      async function fetchHotelRooms(){
        if (filter) {
          const data = await getHotelRooms(hotelId, { ...filter, index: page - 1 });
          setRooms(data.result);
        }
      }
      fetchHotelRooms();
    }, [page])

    const handleChange = (event, value) => {
        setPage(value);
      };

    return(
        <Stack spacing={2}>
            <RoomListItems content={rooms} hotelId={hotelId}/>
            <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Stack>
    )
}

export default RoomList