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

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Registration" element={<RegistrationPage />} />
            <Route path="/Hotels/*" element={<HomePage />} />
            <Route path="/Order" element={<OrderPage />} />
          </Routes>
        </div>
        <Footer/> 
      </Router>
    </>
  );
}

export default App;
