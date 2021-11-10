import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './modules/HomePage/HomePage';
import LoginPage from './modules/LoginPage/LoginPage';
import RegistrationPage from './modules/RegistrationPage/RegistrationPage';

function App() {
  return (
    <Router>
      <div>
          <Routes>
              <Route path="/Login" element={<LoginPage />} /> 
              <Route path="/Registration" element={<RegistrationPage />} />             
              <Route path="/" element={<HomePage />} /> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;
