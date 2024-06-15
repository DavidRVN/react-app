import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Empleados from './components/Empleados';
import Solicitudes from './components/Solicitudes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/empleados" />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;