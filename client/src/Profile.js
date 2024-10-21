import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.css'; // Asegúrate de que los estilos sean aplicables

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h1>Gestión del Perfil</h1>
        {/* Aquí iría el contenido de la página de perfil */}
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

export default Profile;
