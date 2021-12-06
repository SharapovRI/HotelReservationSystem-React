import React, { useState } from 'react';
import HotelList from './HotelList';
import SearchArea from './SearchArea';
import './styles/HomePage.css'

import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HotelPage from './HotelPage/HotelPage';
import RoomPage from './RoomPage/RoomPage';

import {styles} from './styles/styles'


const HomePage = () => {
  const [filter, setFilter] = useState(null);
  const [content, setContent] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  return (
    <div className='homePage' style={styles.HomePage}>
      <div style={styles.HeaderDiv}>
        <h1 style={styles.Header}>Home Page</h1>
      </div>
      <div className='homeBody'>
        <SearchArea setFilter={setFilter} setContent={setContent} setPageCount={setPageCount} />
        <div className='resultArea' style={styles.ResultArea}>
          <Routes>
            <Route path="/" element={<HotelList pageCount={pageCount} content={content} filter={filter} setContent={setContent} />} />
            <Route path="/:hotelId" element={<HotelPage filter={filter} />} />
            <Route path="/:hotelId/Rooms/:roomId" element={<RoomPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
};

export default HomePage;