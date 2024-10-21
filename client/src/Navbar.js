import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import './Navbar.css';
import systemNavbarImage from './imagenes/system-navbar.png';
import imagotipoImage from './imagenes/IMAGOTIPO.jpg'; // Asegúrate de que la ruta sea correcta

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-circle">
          <img src={imagotipoImage} alt="Logo" className="logo-image" />
        </div>
        <Link to="/" className="home-button-link">
          <button className="home-button">Inicio</button>
        </Link>
      </div>
      <div className="navbar-center">
        <img src={systemNavbarImage} alt="Centered Image" className="center-image" />
      </div>
      <div className="navbar-right">
        <Link to="/profile">
          <button className="profile-button">Perfil</button>
        </Link>
        <Link to="/help">
          <button className="help-button">Ayuda</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
