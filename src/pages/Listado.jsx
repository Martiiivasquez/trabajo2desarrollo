import { useEffect, useState } from "react";
import { getCharacters } from "../services/apiService";

export default function Listado() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState(""); // Nuevo estado para el buscador
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await getCharacters();
        setPersonajes(data);
      } catch (err) {
        setError("Error al cargar datos");
      } finally {
        setCargando(false);
      }
    };
    cargarDatos();
  }, []); // Carga inicial

  // Lógica de filtrado: filtramos los personajes según lo que escriba el usuario
  const personajesFiltrados = personajes.filter((p) =>
    p.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Listado de Personajes</h1>
      
      {/* Buscador: Ejercicio 3[cite: 1] */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ padding: '10px', width: '100%', maxWidth: '400px' }}
        />
        <p>Resultados para: {busqueda}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {personajesFiltrados.length > 0 ? (
          personajesFiltrados.map((p) => (
            <div key={p.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
              <img src={p.image} alt={p.name} style={{ width: '100%' }} />
              <h3>{p.name}</h3>
            </div>
          ))
        ) : (
          <p>No se encontraron personajes.</p> // Estado de lista vacía[cite: 1]
        )}
      </div>
    </div>
  );
}