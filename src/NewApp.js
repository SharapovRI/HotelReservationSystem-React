import React from 'react';
import { BrowserRouter as Router, Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import AdminPage from './newModules/AdminPage/AdminPage/AdminPage';
import Header from './newModules/Header/Header';
import HomePage from './newModules/HomePage/HomePage/HomePage';
import HotelCreationPage from './newModules/HotelCreationPage/HotelCreationPage/HotelCreationPage';
import HotelPage from './newModules/HotelPage/HotelPage/HotelPage';
import HotelUpdatingPage from './newModules/HotelUpdatingPage/HotelUpdatingPage/HotelUpdatingPage';
import LoginPage from './newModules/LoginPage/LoginPage';
import OrderPage from './newModules/OrderPage/OrderPage/OrderPage';
import SearchingResultsPage from './newModules/SearchingResultsPage/SearchingResultsPage/SearchingResultsPage';

function NewApp() {
  return (
    <>
      <Router>
            <Header/>
            <Routes>
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Home" element={<HomePage />} />
              <Route path="/Hotels" element={<SearchingResultsPage />} />
              <Route path="/Hotels/:hotelId" element={<HotelPage />} />
              <Route path="/Admin" element={<AdminPage />} />
              <Route path="/Admin/HotelCreation" element={<HotelCreationPage />} />
              <Route path="/Admin/HotelUpdating/:hotelId" element={<HotelUpdatingPage />} />
              <Route path="/OrderPage" element={<OrderPage />} />
              <Route path="/" element={<Navigate to="/Home" replace={true} />} />
            </Routes>
      </Router>
    </>
  );
}

export default NewApp;
