// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppPage from './AppPage';
import Estudiantes from './Estudiantes';
import Profile from './Profile';
import HelPag from './HelPag';
import Tablas from './Tablas';
import Bienes from './Bienes';
import Personal from './Personal';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppPage />} />
          <Route path="/estudiantes" element={<Estudiantes />} /> 
          <Route path="/bienes" element={<Bienes />} /> 
          <Route path="/personal" element={<Personal />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/help" element={<HelPag />} /> 
          <Route path="/tablas" element={<Tablas />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
