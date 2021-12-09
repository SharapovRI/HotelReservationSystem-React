import React, { useState } from 'react';
import HotelList from './HotelList';
import SearchArea from './SearchArea/SearchArea';


import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HotelPage from './HotelPage/HotelPage';
import RoomPage from './RoomPage/RoomPage';

import './HomePage.scss';


const HomePage = () => {
  const [filter, setFilter] = useState(null);
  const [content, setContent] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  return (
    <>
      <div className='homePageHeader'>
        <h2>Home Page</h2>
      </div>
      <div className='homeBody'>
        <SearchArea setFilter={setFilter} setContent={setContent} setPageCount={setPageCount} />
        <div className='resultArea'>
          <Routes>
            <Route path="/" element={<HotelList pageCount={pageCount} content={content} filter={filter} setContent={setContent} />} />
            <Route path="/:hotelId" element={<HotelPage filter={filter} />} />
            <Route path="/:hotelId/Rooms/:roomId" element={<RoomPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
};

export default HomePage;