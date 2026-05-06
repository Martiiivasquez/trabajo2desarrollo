import React, { useState, useEffect } from 'react';

function Listado() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results));
  }, []);

  const personajesFiltrados = personajes.filter((p) =>
    p.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Listado de Personajes</h2>
      
      <input 
        type="text" 
        placeholder="Buscar personaje..." 
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {personajesFiltrados.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <img src={p.image} alt={p.name} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listado;