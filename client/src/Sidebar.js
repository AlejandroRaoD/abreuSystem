// src/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Archivo CSS para los estilos
import { FaUser, FaBox, FaUsers, FaTable } from 'react-icons/fa'; // Importa íconos de react-icons

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Inicializa la barra como plegada

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '←' : '→'}
      </button>
      <div className="sidebar-content">
        <Link to="/estudiantes" className="sidebar-link">
          <button className="sidebar-button">
            {isOpen ? <><FaUser /> <span> Estudiantes</span></> : <FaUser />}
          </button>
        </Link>
        <Link to="/bienes" className="sidebar-link">
          <button className="sidebar-button">
            {isOpen ? <><FaBox /> <span> Bienes</span></> : <FaBox />}
          </button>
        </Link>
        <Link to="/personal" className="sidebar-link">
          <button className="sidebar-button">
            {isOpen ? <><FaUsers /> <span> Personal</span></> : <FaUsers />}
          </button>
        </Link>
        <Link to="/tablas" className="sidebar-link">
          <button className="sidebar-button">
            {isOpen ? <><FaTable /> <span> Tablas</span></> : <FaTable />}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
