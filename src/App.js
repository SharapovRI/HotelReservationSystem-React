import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './modules/HomePage/HomePage';
import LoginPage from './modules/LoginPage/LoginPage';
import OrderPage from './modules/OrderPage/OrderPage';
import RegistrationPage from './modules/RegistrationPage/RegistrationPage';
import Footer from './modules/Shared/Footer/Footer';
import Header from './modules/Shared/Header/Header';
import AllOrdersPage from './modules/AllOrdersPage/AllOrdersPage';
import AdminPage from './modules/AdminPage/AdminPage';
import HotelCreationPage from './modules/AdminPage/HotelCreation/HotelCreationPage';
import HotelUpdatingPage from './modules/AdminPage/HotelUpdating/HotelUpdatingPage';
import AdminRoomList from './modules/AdminPage/RoomUpdating/AdminRoomList';
import AdminRoomPage from './modules/AdminPage/RoomUpdating/AdminRoomPage';

import {styles} from './modules/HomePage/styles/styles'

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='bodyArea' style={styles.BodyArea}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Registration" element={<RegistrationPage />} />
            <Route path="/Hotels/*" element={<HomePage />} />
            <Route path="/Order" element={<OrderPage />} />
            <Route path="/AllOrders" element={<AllOrdersPage />} />
            <Route path="/Admin" element={<AdminPage />} />
            <Route path="/Admin/Hotels/:hotelId" element={<AdminRoomList />} />
            <Route path="/Admin/Hotels/:hotelId/Rooms/:roomId" element={<AdminRoomPage />} />
            <Route path="/HotelCreation" element={<HotelCreationPage/>} />
            <Route path="/HotelUpdating/:hotelId" element={<HotelUpdatingPage />} />
          </Routes>
        </div>
        <Footer/> 
      </Router>
    </>
  );
}

export default App;
