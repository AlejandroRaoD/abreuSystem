// src/Personal.js
import React from 'react';
import './App.css';
import { FormProvider } from './FormContext';
import InputField from './InputField';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Personal() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <FormProvider>
          <div className="Datos">
            <form name="RegistData" className="Datos">
              <h1>Registro del Personal</h1>
              {/* Aquí van los campos del formulario de personal */}
              <InputField label="Nombre" name="nombre" />
              <InputField label="Apellido" name="apellido" />
              <InputField label="C.I." name="ci" />
              <InputField label="Género" name="genero" />
              <InputField label="Teléfono" name="telefono" />
              <InputField label="Dirección" name="direccion" />
              <InputField label="Correo" name="correo" />
              <InputField label="Cargo" name="cargo" />
              <InputField label="Rol" name="rol" />
              <InputField label="Programa" name="programa" />
              <InputField label="Lugar de Trabajo" name="lugar_trabajo" />
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

export default Personal;
