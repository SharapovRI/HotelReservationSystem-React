import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import getHotels from '../../api/apiRequests/getHotels';
import AdminHotelListItems from './AdminHotelListItems';

const AdminHotelList = ({ pageCount, content, filter, setContent }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchHotels(){
      if (filter) {
        const data = await getHotels({ ...filter, index: page - 1 });
        setContent(data.result);
      }
    } 

    fetchHotels();
  }, [page])

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <AdminHotelListItems content={content} />
      <Pagination count={pageCount} page={page} onChange={handleChange} />
    </Stack>
  );
}

export default AdminHotelList;
