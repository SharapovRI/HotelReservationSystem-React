import React from 'react';
import { BrowserRouter as Router, Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import AdminPage from './modules/AdminPage/AdminPage/AdminPage';
import Header from './modules/Shared/Header/Header/Header'
import HomePage from './modules/HomePage/HomePage/HomePage';
import HotelCreationPage from './modules/HotelCreationPage/HotelCreationPage/HotelCreationPage';
import HotelPage from './modules/HotelPage/HotelPage/HotelPage';
import HotelUpdatingPage from './modules/HotelUpdatingPage/HotelUpdatingPage/HotelUpdatingPage';
import LoginPage from './modules/LoginPage/LoginPage';
import MyOrdersPage from './modules/MyOrdersPage/MyOrdersPage/MyOrdersPage';
import OrderPage from './modules/OrderPage/OrderPage/OrderPage';
import SearchingResultsPage from './modules/SearchingResultsPage/SearchingResultsPage/SearchingResultsPage';
import RegistrationPage from './modules/RegistrationPage/RegistrationPage/RegistrationPage';

function NewApp() {
  return (
    <>
      <Router>
            <Header/>
            <Routes>
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Registration" element={<RegistrationPage />} />
              <Route path="/Home" element={<HomePage />} />
              <Route path="/Hotels" element={<SearchingResultsPage />} />
              <Route path="/Hotels/:hotelId" element={<HotelPage />} />
              <Route path="/Admin" element={<AdminPage />} />
              <Route path="/Admin/HotelCreation" element={<HotelCreationPage />} />
              <Route path="/Admin/HotelUpdating/:hotelId" element={<HotelUpdatingPage />} />
              <Route path="/OrderPage" element={<OrderPage />} />
              <Route path="/MyOrders" element={<MyOrdersPage />} />
              <Route path="/" element={<Navigate to="/Home" replace={true} />} />
            </Routes>
      </Router>
    </>
  );
}

export default NewApp;
