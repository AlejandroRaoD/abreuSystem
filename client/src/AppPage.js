import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './AppPage.css';

function AppPage() {
  const [selectedTable, setSelectedTable] = useState('Estudiantes');
  const [filters, setFilters] = useState({});
  const [dataList, setDataList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTableChange = (table) => {
    setSelectedTable(table);
    setFilters({});  // Reset filters when changing tables
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const handleViewMore = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  useEffect(() => {
    const studentData = [
      { id: 1, nombre: 'John', apellido: 'Doe', programa: 'Música Clásica', catedra: 'Piano', inscrito: 'Inscrito', edad: 12, sexo: 'M', ci: 'V-12345678', fechaInscripcion: '2023-01-01' },
      { id: 2, nombre: 'Jane', apellido: 'Doe', programa: 'Orquesta Juvenil', catedra: 'Violín', inscrito: 'Reinscrito', edad: 15, sexo: 'F', ci: 'V-87654321', fechaInscripcion: '2022-12-01' },
    ];

    const employeeData = [
      { id: 1, nombre: 'Carlos', apellido: 'Perez', ci: 'V-23456789', genero: 'M', cargo: 'Profesor', telefono: '0414-1234567', programa: 'Orquesta Juvenil' },
      { id: 2, nombre: 'Ana', apellido: 'Gomez', ci: 'V-34567890', genero: 'F', cargo: 'Coordinadora', telefono: '0424-9876543', programa: 'Coro Infantil' },
    ];

    const bienesData = [
      { id: 1, nombre: 'Piano', nroSerie: 'A123', serial: 'S001', marca: 'Yamaha', estado: 'Bueno' },
      { id: 2, nombre: 'Violín', nroSerie: 'B456', serial: 'S002', marca: 'Stradivarius', estado: 'Excelente' },
    ];

    // Filter data based on the selected filters
    const filteredData = (data) => {
      return data.filter((item) => {
        return Object.keys(filters).every((key) => {
          if (filters[key] === '') return true; // Skip if filter is empty
          return item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase());
        });
      });
    };

    switch (selectedTable) {
      case 'Estudiantes':
        setDataList(filteredData(studentData));
        break;
      case 'Empleados':
        setDataList(filteredData(employeeData));
        break;
      case 'Bienes':
        setDataList(filteredData(bienesData));
        break;
      default:
        setDataList([]);
    }
  }, [selectedTable, filters]);

  const renderFilters = () => {
    if (selectedTable === 'Estudiantes') {
      return (
        <>
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => handleFilterChange('nombre', e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            onChange={(e) => handleFilterChange('apellido', e.target.value)}
          />
          <input
            type="text"
            placeholder="C.I"
            onChange={(e) => handleFilterChange('ci', e.target.value)}
          />
          <select onChange={(e) => handleFilterChange('programa', e.target.value)}>
            <option value="">Seleccione Programa</option>
            <option value="Música Clásica">Música Clásica</option>
            <option value="Orquesta Juvenil">Orquesta Juvenil</option>
          </select>
          <select onChange={(e) => handleFilterChange('catedra', e.target.value)}>
            <option value="">Seleccione Cátedra</option>
            <option value="Piano">Piano</option>
            <option value="Violín">Violín</option>
          </select>
        </>
      );
    } else if (selectedTable === 'Bienes') {
      return (
        <>
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => handleFilterChange('nombre', e.target.value)}
          />
          <select onChange={(e) => handleFilterChange('estado', e.target.value)}>
            <option value="">Seleccione Estado</option>
            <option value="Bueno">Bueno</option>
            <option value="Excelente">Excelente</option>
          </select>
          <input
            type="text"
            placeholder="Marca"
            onChange={(e) => handleFilterChange('marca', e.target.value)}
          />
          <input
            type="text"
            placeholder="Serial"
            onChange={(e) => handleFilterChange('serial', e.target.value)}
          />
          <input
            type="text"
            placeholder="Nro de Serie"
            onChange={(e) => handleFilterChange('nroSerie', e.target.value)}
          />
        </>
      );
    } else if (selectedTable === 'Empleados') {
      return (
        <>
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => handleFilterChange('nombre', e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            onChange={(e) => handleFilterChange('apellido', e.target.value)}
          />
          <input
            type="text"
            placeholder="C.I"
            onChange={(e) => handleFilterChange('ci', e.target.value)}
          />
          <select onChange={(e) => handleFilterChange('programa', e.target.value)}>
            <option value="">Seleccione Programa</option>
            <option value="Orquesta Juvenil">Orquesta Juvenil</option>
            <option value="Coro Infantil">Coro Infantil</option>
          </select>
          <select onChange={(e) => handleFilterChange('cargo', e.target.value)}>
            <option value="">Seleccione Cargo</option>
            <option value="Profesor">Profesor</option>
            <option value="Coordinadora">Coordinadora</option>
          </select>
        </>
      );
    }
    return null;
  };

  const renderDataBox = (item) => {
    return (
      <div key={item.id} className="student-box">
        <div className="student-info">
          {selectedTable === 'Bienes' ? (
            <>
              <p><strong>Nombre:</strong> {item.nombre}</p>
              <p><strong>Nro de Serie:</strong> {item.nroSerie}</p>
              <p><strong>Serial:</strong> {item.serial}</p>
              <p><strong>Marca:</strong> {item.marca}</p>
              <p><strong>Estado:</strong> {item.estado}</p>
            </>
          ) : (
            <>
              <div className="student-row">
                <div className="student-column">
                  <p><strong>Nombre:</strong> {item.nombre}</p>
                </div>
                <div className="student-column">
                  <p><strong>Apellido:</strong> {item.apellido}</p>
                </div>
              </div>
              <div className="student-row">
                <div className="student-column">
                  <p><strong>C.I.:</strong> {item.ci}</p>
                </div>
                <div className="student-column">
                  <p><strong>Programa:</strong> {item.programa}</p>
                </div>
              </div>
              {selectedTable === 'Estudiantes' ? (
                <div className="student-row">
                  <div className="student-column">
                    <p><strong>Cátedra:</strong> {item.catedra}</p>
                  </div>
                  <div className="student-column">
                    <p><strong>Inscripción:</strong> {item.inscrito}</p>
                  </div>
                </div>
              ) : (
                <div className="student-row">
                  <div className="student-column">
                    <p><strong>Cargo:</strong> {item.cargo}</p>
                  </div>
                  <div className="student-column">
                    <p><strong>Teléfono:</strong> {item.telefono}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <button className="view-more-btn" onClick={() => handleViewMore(item)}>Ver más</button>
      </div>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <h1>Resumen General</h1>
        <div className="table-selector">
          <button onClick={() => handleTableChange('Estudiantes')}>Estudiantes</button>
          <button onClick={() => handleTableChange('Empleados')}>Empleados</button>
          <button onClick={() => handleTableChange('Bienes')}>Bienes</button>
        </div>
        <div className="filters">{renderFilters()}</div>
        <div className="data-container">
          {dataList.map(renderDataBox)}
        </div>
      </div>
      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>X</button>
            <h2>Detalles</h2>
            <div className="modal-content">
              {selectedTable === 'Estudiantes' ? (
                <>
                  <p><strong>Nombre:</strong> {selectedItem.nombre}</p>
                  <p><strong>Apellido:</strong> {selectedItem.apellido}</p>
                  <p><strong>Programa:</strong> {selectedItem.programa}</p>
                  <p><strong>Cátedra:</strong> {selectedItem.catedra}</p>
                  <p><strong>Inscripción:</strong> {selectedItem.inscrito}</p>
                  <p><strong>C.I.:</strong> {selectedItem.ci}</p>
                  <p><strong>Edad:</strong> {selectedItem.edad}</p>
                  <p><strong>Sexo:</strong> {selectedItem.sexo}</p>
                  <p><strong>Fecha de Inscripción:</strong> {selectedItem.fechaInscripcion}</p>
                </>
              ) : selectedTable === 'Empleados' ? (
                <>
                  <p><strong>Nombre:</strong> {selectedItem.nombre}</p>
                  <p><strong>Apellido:</strong> {selectedItem.apellido}</p>
                  <p><strong>C.I.:</strong> {selectedItem.ci}</p>
                  <p><strong>Teléfono:</strong> {selectedItem.telefono}</p>
                  <p><strong>Cargo:</strong> {selectedItem.cargo}</p>
                  <p><strong>Programa:</strong> {selectedItem.programa}</p>
                </>
              ) : selectedTable === 'Bienes' ? (
                <>
                  <p><strong>Nombre:</strong> {selectedItem.nombre}</p>
                  <p><strong>Marca:</strong> {selectedItem.marca}</p>
                  <p><strong>Estado:</strong> {selectedItem.estado}</p>
                  <p><strong>Serial:</strong> {selectedItem.serial}</p>
                  <p><strong>Nro de Serie:</strong> {selectedItem.nroSerie}</p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppPage;
