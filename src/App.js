import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Empleados from './components/Empleados';
import Solicitudes from './components/Solicitudes';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/empleados" element={authenticated ? <Empleados /> : <Navigate to="/login" />} />
          <Route path="/solicitudes" element={authenticated ? <Solicitudes /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
