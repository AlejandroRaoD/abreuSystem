// src/Estudiantes.js
import React, { useState } from 'react';
import './App.css';
import { FormProvider } from './FormContext';
import InputField from './InputField';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Estudiantes() {
  const [formData, setFormData] = useState({
    ins_reins: "inscrito",
    nombre: "",
    apellidos: "",
    edad: "",
    genero: "",
    fechan: "",
    ci: "",
    fechai: "",
    program: "",
    catedra: "",
    sede: "",
    instru: "",
    repres: "",
    cir: "",
    tlfnor: "",
    direccion: "",
    ocupacionr: "",
    correor: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejo del envío de datos de estudiante
  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    const studentData = {
      ins_reins: formData.ins_reins,
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      edad: formData.edad,
      genero: formData.genero,
      fechan: formData.fechan,
      ci: formData.ci,
      fechai: formData.fechai,
      program: formData.program,
      catedra: formData.catedra,
      sede: formData.sede,
      instru: formData.instru,
    };
    
    try {
      const response = await fetch("http://localhost:3001/api/estudiantes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(studentData)
      });
      
      if (response.ok) {
        alert("Estudiante registrado exitosamente");
        setFormData((prevData) => ({
          ...prevData,
          ins_reins: "inscrito",
          nombre: "",
          apellidos: "",
          edad: "",
          genero: "",
          fechan: "",
          ci: "",
          fechai: "",
          program: "",
          catedra: "",
          sede: "",
          instru: ""
        }));
      } else {
        alert("Error al registrar estudiante");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al registrar el estudiante");
    }
  };

  // Manejo del envío de datos del representante
  const handleRepresentativeSubmit = async (e) => {
    e.preventDefault();
    const representativeData = {
      repres: formData.repres,
      cir: formData.cir,
      tlfnor: formData.tlfnor,
      direccion: formData.direccion,
      ocupacionr: formData.ocupacionr,
      correor: formData.correor
    };

    try {
      const response = await fetch("http://localhost:3001/api/representantes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(representativeData)
      });

      if (response.ok) {
        alert("Representante registrado exitosamente");
        setFormData((prevData) => ({
          ...prevData,
          repres: "",
          cir: "",
          tlfnor: "",
          direccion: "",
          ocupacionr: "",
          correor: ""
        }));
      } else {
        alert("Error al registrar representante");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al registrar el representante");
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <FormProvider>
          <div className="Datos">
            <h1>Registro de Estudiantes</h1>
            <div className="form-columns">
              {/* Sección izquierda: Datos del Estudiante */}
              <div className="student-section">
                <h2>Datos del Estudiante</h2>
                <form onSubmit={handleStudentSubmit}>
                  <div className="input-group">
                    <label htmlFor="insReins">Inscrito/Reinscrito</label>
                    <select name="ins_reins" id="insReins" value={formData.ins_reins} onChange={handleChange}>
                      <option value="inscrito">Inscrito</option>
                      <option value="reinscrito">Reinscrito</option>
                    </select>
                  </div>
                  <InputField label="Nombres" type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                  <InputField label="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} />
                  <InputField label="Edad" name="edad" type="number" value={formData.edad} onChange={handleChange} />
                  <InputField label="Género" name="genero" value={formData.genero} onChange={handleChange} />
                  <InputField label="Fecha de Nacimiento" name="fechan" type="date" value={formData.fechan} onChange={handleChange} />
                  <InputField label="C.I" name="ci" type="number" value={formData.ci} onChange={handleChange} />
                  <InputField label="Fecha de Inscripción" name="fechai" type="date" value={formData.fechai} onChange={handleChange} />
                  <InputField label="Programa" name="program" value={formData.program} onChange={handleChange} />
                  <InputField label="Catedra" name="catedra" value={formData.catedra} onChange={handleChange} />
                  <InputField label="Sede" name="sede" value={formData.sede} onChange={handleChange} />
                  <InputField label="Instrumento" name="instru" value={formData.instru} onChange={handleChange} />
                  <button type="submit">Registrar Estudiante</button>
                </form>
              </div>

              {/* Sección derecha: Datos del Representante */}
              <div className="representative-section">
                <h2>Datos del Representante</h2>
                <form onSubmit={handleRepresentativeSubmit}>
                  <InputField label="Nombre del Representante" name="repres" value={formData.repres} onChange={handleChange} />
                  <InputField label="C.I (Representante)" name="cir" type="number" value={formData.cir} onChange={handleChange} />
                  <InputField label="Teléfono (Representante)" name="tlfnor" type="number" value={formData.tlfnor} onChange={handleChange} />
                  <InputField label="Dirección" name="direccion" value={formData.direccion} onChange={handleChange} />
                  <InputField label="Ocupación (Representante)" name="ocupacionr" value={formData.ocupacionr} onChange={handleChange} />
                  <InputField label="Correo (Representante)" name="correor" type="email" value={formData.correor} onChange={handleChange} />
                  <button type="submit">Registrar Representante</button>
                </form>
              </div>
            </div>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}

export default Estudiantes;
