import React from 'react';
import { useSelector } from 'react-redux'; // Importamos el hook para leer datos

function Home() {
  // Leemos el nombre que guardamos en el store
  const nombre = useSelector((state) => state.user.nombre);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Página de Inicio</h1>
      <p>Bienvenido/a, <strong>{nombre}</strong> al catálogo de Rick and Morty.</p>
    </div>
  );
}

export default Home;