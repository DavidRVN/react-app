import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Solicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const fetchSolicitudes = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/solicitud');
        setSolicitudes(response.data);
      } catch (error) {
        console.error('Error al obtener solicitudes', error);
      }
    };

    fetchSolicitudes();
  }, []);

  return (
    <div>
      <h1>Solicitudes</h1>
      <ul>
        {solicitudes.map((solicitud) => (
          <li key={solicitud._id}>
            <strong>Código:</strong> {solicitud.codigo}<br />
            <strong>Descripción:</strong> {solicitud.descripcion}<br />
            <strong>Resumen:</strong> {solicitud.resumen}<br />
            <strong>ID Empleado:</strong> {solicitud.id_empleado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Solicitudes;
