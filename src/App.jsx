import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Listado from './pages/Listado';

function App() {
  return (
    <Router>
      <nav style={{ padding: '20px', backgroundColor: '#282c34', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/listado" style={{ color: 'white', textDecoration: 'none' }}>Ver Personajes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </Router>
  );
}

export default App;