import React, { useState } from 'react';
import ContentBlock from './Contentik';
import SearchArea from './SearchArea';
import './styles/HomePage.css'

import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HotelPage from './HotelPage/HotelPage';
import RoomPage from './RoomPage/RoomPage';


const HomePage = () => {
  const [filter, setFilter] = useState(null);
  const [content, setContent] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  return (
    <div className='homePage'>
      <h1>Home Page</h1>
        <div className='header'>
            <div className='menuBar'></div>
            <div className='siteBar'></div>
        </div>
        <div className='homeBody'>
              <SearchArea setFilter={setFilter} setContent={setContent} setPageCount={setPageCount}/>
            <div className='resultArea'>
              <Routes>
                <Route path="/" element={<ContentBlock pageCount={pageCount} content={content} filter={filter} setContent={setContent}/>}/>
                <Route path="/:hotelId" element={<HotelPage filter={filter}/>}/>
                <Route path="/:hotelId/Rooms/:roomId" element={<RoomPage/>}/>
              </Routes>
            </div>
        </div>
    </div>
  )
};

export default HomePage;