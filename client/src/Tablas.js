// src/Tablas.js
import React from 'react';
import './App.css';
import { FormProvider } from './FormContext';
import InputField from './InputField';
import Navbar from './Navbar';
import Sidebar from './Sidebar'; // Importa el Sidebar

function Tablas() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Sidebar añadido */}
      <div className="main-content">
        <FormProvider>
          <div className="Datos">
            <h1>Modificacion de Tablas</h1> {/* Encabezado */}

            {/* Formulario para Cátedra */}
            <form name="Catedra" className="Datos">
              <h2>Cátedra</h2>
              <InputField label="Nombre" type="text" name="nombre_catedra" />
              <InputField label="Descripción" type="text" name="descripcion_catedra" />
              <InputField label="FIAM" type="text" name="fiam" />
              <button type="submit" onClick={() => alert('Datos de Cátedra registrados!')}>
                Registrar Cátedra
              </button>
            </form>

            {/* Formulario para Programa */}
            <form name="Programa" className="Datos">
              <h2>Programa</h2>
              <InputField label="Nombre" type="text" name="nombre_programa" />
              <InputField label="Director-Encargado" type="text" name="director_programa" />
              <InputField label="Descripción" type="text" name="descripcion_programa" />
              <button type="submit" onClick={() => alert('Datos de Programa registrados!')}>
                Registrar Programa
              </button>
            </form>

            {/* Formulario para Cargo */}
            <form name="Cargo" className="Datos">
              <h2>Cargo</h2>
              <InputField label="Nombre" type="text" name="nombre_cargo" />
              <InputField label="Descripción" type="text" name="descripcion_cargo" />
              <button type="submit" onClick={() => alert('Datos de Cargo registrados!')}>
                Registrar Cargo
              </button>
            </form>

            {/* Formulario para Sede */}
            <form name="Sede" className="Datos">
              <h2>Sede</h2>
              <InputField label="Nombre" type="text" name="nombre_sede" />
              <InputField label="Dirección" type="text" name="direccion_sede" />
              <InputField label="Teléfono" type="text" name="telefono_sede" />
              <button type="submit" onClick={() => alert('Datos de Sede registrados!')}>
                Registrar Sede
              </button>
            </form>

            {/* Formulario para Rol */}
            <form name="Rol" className="Datos">
              <h2>Rol</h2>
              <InputField label="Nombre" type="text" name="nombre_rol" />
              <InputField label="Descripción" type="text" name="descripcion_rol" />
              <InputField label="Cátedra" type="text" name="catedra_rol" />
              <button type="submit" onClick={() => alert('Datos de Rol registrados!')}>
                Registrar Rol
              </button>
            </form>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}

export default Tablas;
