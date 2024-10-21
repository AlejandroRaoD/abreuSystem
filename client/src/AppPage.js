import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importar estilos del calendario
import './AppPage.css'; // Importar el archivo de estilos específico

function AppPage() {
  const [date, setDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]); // Estado para las fechas marcadas
  const [selectedDate, setSelectedDate] = useState(null); // Estado para la fecha seleccionada

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddDate = () => {
    const newDate = date.toDateString();
    if (!markedDates.some(d => d.date === newDate)) {
      // Permite agregar una notificación personalizada para cada fecha
      const notificationMessage = prompt(`Ingresa el mensaje para la fecha ${newDate}:`, "Tienes un evento importante.");
      setMarkedDates([...markedDates, { date: newDate, message: notificationMessage || "Fecha marcada." }]);
      setSelectedDate(date); // Establece la fecha seleccionada
      alert(`Fecha añadida: ${newDate}`); // Mensaje de confirmación
    } else {
      alert(`La fecha ${newDate} ya está añadida.`);
    }
  };

  const handleRemoveDate = (dateToRemove) => {
    setMarkedDates(markedDates.filter(markedDate => markedDate.date !== dateToRemove));
    alert(`Fecha eliminada: ${dateToRemove}`);
  };

  // Función para verificar la fecha actual y mostrar la notificación personalizada
  useEffect(() => {
    const intervalId = setInterval(() => {
      const today = new Date().toDateString();
      const markedDate = markedDates.find(d => d.date === today);
      if (markedDate) {
        alert(`¡Hoy es ${today}! ${markedDate.message}`); // Muestra el mensaje específico de esa fecha
        handleRemoveDate(today); // Elimina la fecha cuando llega para no repetir la notificación
      }
    }, 86400000); // Verifica una vez al día (86400000 ms = 1 día)

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, [markedDates]);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <h1>Página Principal</h1>
        <div className="content-wrapper">
          <div className="text-content">
            <p>Esta es la página principal vacía. Agrega aquí el contenido que desees en el futuro.</p>
          </div>
          <div className="calendar-container">
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="calendar"
              tileClassName={({ date }) => 
                markedDates.some(d => d.date === date.toDateString()) ? 'marked-date' : null
              } // Marca las fechas seleccionadas
            />
            <button onClick={handleAddDate} className="add-date-button">Añadir Fecha</button>
            {selectedDate && <p>Fecha añadida: {selectedDate.toDateString()}</p>}
            <div className="marked-dates-list">
              <h3>Fechas Marcadas:</h3>
              <ul>
                {markedDates.map((markedDate, index) => (
                  <li key={index}>
                    {markedDate.date} - {markedDate.message}
                    <button onClick={() => handleRemoveDate(markedDate.date)} className="remove-date-button">Eliminar</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppPage;
