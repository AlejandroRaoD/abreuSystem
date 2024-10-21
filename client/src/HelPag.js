// src/HelPag.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Importa el componente Navbar
import './Navbar.css'; // Asegúrate de que los estilos sean aplicables

function HelPag() {
  return (
    <div>
      <Navbar /> {/* Agrega el Navbar aquí */}
      <div className="help-container">
        <h1>Página de Ayuda</h1>
        <p>Aquí puedes encontrar información y ayuda sobre la aplicación.</p>
      </div>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <button className="home-button">Inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HelPag;
