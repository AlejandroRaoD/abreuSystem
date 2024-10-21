import React, { createContext, useState } from 'react';

// Crear el contexto
export const FormContext = createContext();

// Crear el proveedor del contexto
export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    genero: "",
    ci: 0,
    edad: 0,
    fechan: "",
    fechai: "",
    program: "",
    sede: "",
    instru: "",
    repres: "",
    cir: 0,
    tlfnor: 0,
    direccion: "",
    ocupacionr: "",
    correor: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <FormContext.Provider value={{ formData, handleChange }}>
      {children}
    </FormContext.Provider>
  );
}
