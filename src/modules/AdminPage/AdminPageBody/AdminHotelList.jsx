import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import AdminHotelListItems from './AdminHotelListItems';
import getHotels from '../../../api/apiRequests/getHotels';

const AdminHotelList = ({ pageCount, content, filter, setContent }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchHotels() {
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
    <>
      <AdminHotelListItems content={content} />
      <Pagination count={pageCount} page={page} onChange={handleChange} />
    </>
  );
}

export default AdminHotelList;
