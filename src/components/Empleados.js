import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/empleado');
        setEmpleados(response.data);
      } catch (error) {
        console.error('Error al obtener empleados', error);
      }
    };

    fetchEmpleados();
  }, []);

  const handleEditar = (id) => {
    // Lógica para redirigir a la página de edición del empleado con el ID específico
    console.log(`Editar empleado con ID: ${id}`);
  };

  const handleEliminar = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/empleado/${id}`);
      // Actualizar la lista de empleados después de eliminar
      const response = await axios.get('http://localhost:9000/api/empleado');
      setEmpleados(response.data);
      console.log(`Empleado con ID ${id} eliminado correctamente`);
    } catch (error) {
      console.error(`Error al eliminar empleado con ID ${id}`, error);
    }
  };

  return (
    <div>
      <h1>Empleados</h1>
      <ul>
        {empleados.map((empleado) => (
          <li key={empleado._id}>
            <strong>{empleado.nombre}</strong> - Salario: {empleado.salario}
            <button onClick={() => handleEditar(empleado._id)}>Editar</button>
            <button onClick={() => handleEliminar(empleado._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Empleados;
