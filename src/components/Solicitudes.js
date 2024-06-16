import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Solicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [resumen, setResumen] = useState('');
  const [id_empleado, setId_empleado] = useState('');

  useEffect(() => {
    const fetchSolicitudes = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:9000/api/solicitud',{
          headers: { Authorization: `Bearer ${token}` }
          }         
        );
        setSolicitudes(response.data);
      } catch (error) {
        console.error('Error al obtener solicitudes', error);
      }
    };

    fetchSolicitudes();
  }, []);

  const handleAddSolicitud = async () => {
    try {
      const newSolicitud = { codigo, descripcion, resumen, id_empleado };
      await axios.post('http://localhost:9000/api/solicitud', newSolicitud);
      setSolicitudes([...solicitudes, newSolicitud]);
    } catch (error) {
      console.error('Error al agregar solicitud', error);
    }
  };

  return (
    <div>
      <h1>Solicitudes</h1>
      <input type="text" placeholder="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
      <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <input type="text" placeholder="Resumen" value={resumen} onChange={(e) => setResumen(e.target.value)} />
      <input type="text" placeholder="ID Empleado" value={id_empleado} onChange={(e) => setId_empleado(e.target.value)} />
      <button onClick={handleAddSolicitud}>Agregar Solicitud</button>
      <ul>
        {solicitudes.map((solicitud) => (
          <li key={solicitud._id}>
            <strong>{solicitud.codigo}</strong> - {solicitud.descripcion} - {solicitud.resumen} - Empleado: {solicitud.id_empleado.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Solicitudes;
