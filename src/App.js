import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './models/HomePage/HomePage';
import LoginPage from './models/LoginPage/LoginPage';
import RegistrationPage from './models/RegistrationPage/RegistrationPage';

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
