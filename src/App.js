import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './modules/HomePage/HomePage';
import LoginPage from './modules/LoginPage/LoginPage';
import OrderPage from './modules/OrderPage/OrderPage';
import RegistrationPage from './modules/RegistrationPage/RegistrationPage';

function App() {
  return (
    <Router>
      <div>
          <Routes>
              <Route path="/" element={<LoginPage />} /> 
              <Route path="/Registration" element={<RegistrationPage />} />             
              <Route path="/Hotels/*" element={<HomePage />}/>
              <Route path="/Order" element={<OrderPage />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
