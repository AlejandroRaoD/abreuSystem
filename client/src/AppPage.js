import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './AppPage.css';

function AppPage() {
  const [selectedTable, setSelectedTable] = useState('Estudiantes');
  const [filters, setFilters] = useState({});
  const [dataList, setDataList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Guarda el estudiante o empleado seleccionado para el modal

  const handleTableChange = (table) => {
    setSelectedTable(table);
    setFilters({});
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const handleViewMore = (item) => {
    setSelectedItem(item); // Guarda el estudiante o empleado seleccionado en el estado
  };

  const closeModal = () => {
    setSelectedItem(null); // Cierra el modal
  };

  useEffect(() => {
    // Cambia los datos según la tabla seleccionada
    if (selectedTable === 'Estudiantes') {
      setDataList([
        { id: 1, nombre: 'John', apellido: 'Doe', programa: 'Música Clásica', catedra: 'Piano', inscrito: 'Inscrito', edad: 12, sexo: 'M', ci: 'V-12345678', fechaInscripcion: '2023-01-01' },
        { id: 2, nombre: 'Jane', apellido: 'Doe', programa: 'Orquesta Juvenil', catedra: 'Violín', inscrito: 'Reinscrito', edad: 15, sexo: 'F', ci: 'V-87654321', fechaInscripcion: '2022-12-01' },
      ]);
    } else if (selectedTable === 'Empleados') {
      setDataList([
        { id: 1, nombre: 'Carlos', apellido: 'Perez', ci: 'V-23456789', genero: 'M', cargo: 'Profesor', telefono: '0414-1234567', programa: 'Orquesta Juvenil' },
        { id: 2, nombre: 'Ana', apellido: 'Gomez', ci: 'V-34567890', genero: 'F', cargo: 'Coordinadora', telefono: '0424-9876543', programa: 'Coro Infantil' },
      ]);
    }
  }, [selectedTable, filters]);

  const renderFilters = () => {
    switch (selectedTable) {
      case 'Estudiantes':
        return (
          <div className="filters">
            <input type="text" placeholder="Nombre" onChange={(e) => handleFilterChange('nombre', e.target.value)} />
            <input type="text" placeholder="Apellido" onChange={(e) => handleFilterChange('apellido', e.target.value)} />
            <select onChange={(e) => handleFilterChange('programa', e.target.value)}>
              <option value="">Seleccione un Programa</option>
              <option value="Música Clásica">Música Clásica</option>
              <option value="Orquesta Juvenil">Orquesta Juvenil</option>
              <option value="Coro Infantil">Coro Infantil</option>
            </select>
            <select onChange={(e) => handleFilterChange('catedra', e.target.value)}>
              <option value="">Seleccione una Cátedra</option>
              <option value="Piano">Piano</option>
              <option value="Violín">Violín</option>
              <option value="Percusión">Percusión</option>
            </select>
            <select onChange={(e) => handleFilterChange('sexo', e.target.value)}>
              <option value="">Seleccione el Género</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
            <input type="number" placeholder="Edad" onChange={(e) => handleFilterChange('edad', e.target.value)} />
            <input type="text" placeholder="Cédula de Identidad (C.I.)" onChange={(e) => handleFilterChange('ci', e.target.value)} />
            <input type="date" placeholder="Fecha de Inscripción" onChange={(e) => handleFilterChange('fechaInscripcion', e.target.value)} />
          </div>
        );
      case 'Empleados':
        return (
          <div className="filters">
            <input type="text" placeholder="Nombre" onChange={(e) => handleFilterChange('nombre', e.target.value)} />
            <input type="text" placeholder="Apellido" onChange={(e) => handleFilterChange('apellido', e.target.value)} />
            <input type="text" placeholder="Cédula de Identidad (C.I.)" onChange={(e) => handleFilterChange('ci', e.target.value)} />
            <select onChange={(e) => handleFilterChange('genero', e.target.value)}>
              <option value="">Seleccione el Género</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
            <select onChange={(e) => handleFilterChange('cargo', e.target.value)}>
              <option value="">Seleccione un Cargo</option>
              <option value="Profesor">Profesor</option>
              <option value="Coordinador">Coordinador</option>
            </select>
            <input type="text" placeholder="Teléfono" onChange={(e) => handleFilterChange('telefono', e.target.value)} />
            <select onChange={(e) => handleFilterChange('programa', e.target.value)}>
              <option value="">Seleccione un Programa</option>
              <option value="Orquesta Juvenil">Orquesta Juvenil</option>
              <option value="Coro Infantil">Coro Infantil</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  const renderDataBox = (item) => (
    <div key={item.id} className="student-box">
      <div className="student-info">
        <div className="student-row">
          <div className="student-column">
            <p><strong>Nombre:</strong></p>
            <p>{item.nombre}</p>
          </div>
          <div className="student-column">
            <p><strong>Apellido:</strong></p>
            <p>{item.apellido}</p>
          </div>
        </div>
        <div className="student-row">
          <div className="student-column">
            <p><strong>C.I.:</strong></p>
            <p>{item.ci}</p>
          </div>
          <div className="student-column">
            <p><strong>Programa:</strong></p>
            <p>{item.programa}</p>
          </div>
        </div>
        {selectedTable === 'Estudiantes' ? (
          <>
            <div className="student-row">
              <div className="student-column">
                <p><strong>Cátedra:</strong></p>
                <p>{item.catedra}</p>
              </div>
              <div className="student-column">
                <p><strong>Inscripción:</strong></p>
                <p>{item.inscrito}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="student-row">
              <div className="student-column">
                <p><strong>Cargo:</strong></p>
                <p>{item.cargo}</p>
              </div>
              <div className="student-column">
                <p><strong>Teléfono:</strong></p>
                <p>{item.telefono}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <button className="view-more-btn" onClick={() => handleViewMore(item)}>Ver más</button>
    </div>
  );

  const renderDataList = () => {
    if (dataList.length === 0) {
      return <p>No hay datos para mostrar.</p>;
    }
    return (
      <div className="data-list">
        {dataList.map((item) => renderDataBox(item))}
      </div>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <h1>Resumen General</h1>

        <div className="content-wrapper">
          <div className="table-selector">
            <button className="custom-btn" onClick={() => handleTableChange('Estudiantes')}>Estudiantes</button>
            <button className="custom-btn" onClick={() => handleTableChange('Bienes')}>Bienes</button>
            <button className="custom-btn" onClick={() => handleTableChange('Empleados')}>Empleados</button>
          </div>
          <div className="filters-container">
            <h3>Filtros</h3>
            {renderFilters()}
          </div>
          <div className="data-container">
            <h3>Datos</h3>
            {renderDataList()}
          </div>
        </div>
      </div>

      {/* Modal para mostrar más detalles */}
      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>×</span>
            <h2>Detalles de {selectedItem.nombre} {selectedItem.apellido}</h2>
            <div className="student-info">
              <div className="student-row">
                <div className="student-column">
                  <p><strong>Nombre:</strong> {selectedItem.nombre}</p>
                </div>
                <div className="student-column">
                  <p><strong>Apellido:</strong> {selectedItem.apellido}</p>
                </div>
              </div>
              <div className="student-row">
                <div className="student-column">
                  <p><strong>C.I.:</strong> {selectedItem.ci}</p>
                </div>
                <div className="student-column">
                  <p><strong>Programa:</strong> {selectedItem.programa}</p>
                </div>
              </div>
              {selectedTable === 'Estudiantes' ? (
                <>
                  <div className="student-row">
                    <div className="student-column">
                      <p><strong>Cátedra:</strong> {selectedItem.catedra}</p>
                    </div>
                    <div className="student-column">
                      <p><strong>Inscripción:</strong> {selectedItem.inscrito}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="student-row">
                    <div className="student-column">
                      <p><strong>Cargo:</strong> {selectedItem.cargo}</p>
                    </div>
                    <div className="student-column">
                      <p><strong>Teléfono:</strong> {selectedItem.telefono}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppPage;
