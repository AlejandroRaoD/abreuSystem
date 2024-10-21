// src/Estudiantes.js
import React from 'react';
import './App.css';
import { FormProvider } from './FormContext';
import InputField from './InputField';
import Navbar from './Navbar';
import Sidebar from './Sidebar'; // Importa el Sidebar

function Estudiantes() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Sidebar añadido */}
      <div className="main-content">
        <FormProvider>
          <div className="Datos">
            <form name="RegistData" className="Datos">
              <h1>Registro de Estudiantes</h1> {/* Encabezado */}
              
              {/* Barra desplegable Inscrito/Reinscrito */}
              <div className="input-group">
                <label htmlFor="insReins">Inscrito/Reinscrito</label>
                <select name="ins/reins" id="insReins">
                  <option value="inscrito">Inscrito</option>
                  <option value="reinscrito">Reinscrito</option>
                </select>
              </div>

              <InputField label="Nombres" type="text" name="nombre" />
              <InputField label="Apellidos" name="apellidos" />
              <InputField label="Edad" name="edad" type="number" />
              <InputField label="Género" name="genero" />
              <InputField label="Fecha de Nacimiento" name="fechan" type="date" />
              <InputField label="C.I" name="ci" type="number" />
              <InputField label="Fecha de Inscripción" name="fechai" type="date" />
              <InputField label="Programa" name="program" />
              <InputField label="Catedra" name="catedra" />
              <InputField label="Sede" name="sede" />
              <InputField label="Instrumento" name="instru" />
              <InputField label="Representante" name="repres" />
              <InputField label="C.I (Representante)" name="cir" type="number" />
              <InputField label="Teléfono (Representante)" name="tlfnor" type="number" />
              <InputField label="Dirección" name="direccion" />
              <InputField label="Ocupación (Representante)" name="ocupacionr" />
              <InputField label="Correo (Representante)" name="correor" type="email" />
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

export default Estudiantes;
