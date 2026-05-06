import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Listado from './pages/Listado';

function App() {
  console.log("App cargada correctamente"); // Esto saldrá en la consola (F12)

  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '20px', backgroundColor: '#282c34', display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
          <Link to="/listado" style={{ color: 'white', textDecoration: 'none' }}>Ver Personajes</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listado" element={<Listado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;