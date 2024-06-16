import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [nombre, setNombre] = useState('');
  const [salario, setSalario] = useState('');
  const [fecha_ingreso, setFecha_ingreso] = useState('');

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/empleados');
        setEmpleados(response.data);
      } catch (error) {
        console.error('Error al obtener empleados', error);
      }
    };

    fetchEmpleados();
  }, []);

  const handleAddEmpleado = async () => {
    try {
      const newEmpleado = { nombre, salario, fecha_ingreso };
      await axios.post('http://localhost:9000/api/empleados', newEmpleado);
      setEmpleados([...empleados, newEmpleado]);
    } catch (error) {
      console.error('Error al agregar empleado', error);
    }
  };

  return (
    <div>
      <h1>Empleados</h1>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" placeholder="Salario" value={salario} onChange={(e) => setSalario(e.target.value)} />
      <input type="text" placeholder="Fecha de Ingreso" value={fecha_ingreso} onChange={(e) => setFecha_ingreso(e.target.value)} />
      <button onClick={handleAddEmpleado}>Agregar Empleado</button>
      <ul>
        {empleados.map((empleado) => (
          <li key={empleado._id}>
            <strong>{empleado.nombre}</strong> - Salario: {empleado.salario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Empleados;
