// src/Bienes.js
import React from 'react';
import './App.css';
import { FormProvider } from './FormContext';
import InputField from './InputField';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Bienes() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <FormProvider>
          <div className="Datos">
            <form name="RegistData" className="Datos">
              <h1>Registro de Bienes</h1>
              {/* Aquí van los campos del formulario de bienes */}
              <InputField label="Nombre" name="nombre" />
              <InputField label="Descripción" name="descripcion" />
              <InputField label="Nro. serie" name="nro_serie" />
              <InputField label="Serial" name="serial" />
              <InputField label="Marca" name="marca" />
              <InputField label="Modelo" name="modelo" />
              <InputField label="Estado" name="estado" />
              <InputField label="Ubicación" name="ubicacion" />
              <InputField label="Observación" name="observacion" />
              <InputField label="Responsable Comodato" name="responsable" />
              <InputField label="Estudiante" name="estudiante" />
              <InputField label="Fecha" type="date" name="fecha" />
              <InputField label="Nro Comodato" name="nro_comodato" />
              <button type="submit" onClick={() => alert('Datos registrados!')}>
                Registrar
              </button>
            </form>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}

export default Bienes;
