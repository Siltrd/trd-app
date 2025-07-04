// src/pages/productos/Productos.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/assets/styles/home.css'; // ✅

const productos = [
  {
    id: 'friccion',
    titulo: 'Guía TRD – Aprovechá tu fricción',
    descripcion: 'Una hoja editable con 3 focos + un ejemplo real + una pregunta que corta la inercia.',
    precio: '$9 USD',
    disponible: true
  },
  {
    id: 'pausa',
    titulo: 'PDF – Estilo Pausa',
    descripcion: 'Guía descargable con puntos clave para salir del patrón de inercia comunicacional.',
    precio: '$5 USD',
    disponible: false
  },
  {
    id: 'accion',
    titulo: 'Workbook + Audio – Estilo Acción',
    descripcion: 'Incluye un audio simbólico + ejercicios prácticos para reordenar tu discurso sin ansiedad.',
    precio: '$15 USD',
    disponible: false
  },
  {
    id: 'ajuste',
    titulo: 'Mini Plantilla – Ajuste rápido de presentación',
    descripcion: 'Una estructura mínima para revisar cómo hablás de lo que hacés. Clara, editable, directa.',
    precio: 'Gratis',
    disponible: false
  }
];

const Productos = () => {
  const navigate = useNavigate();

  return (
    <main className="home-container">
      <section className="productos-section">
        <h1>Recursos descargables</h1>
        <p>
          Cada producto está diseñado para complementar tu proceso simbólico o práctico.
          No son adornos. Son herramientas directas.
        </p>

        <div className="productos-grid">
          {productos.map((item, index) => (
            <div key={index} className="card" style={{ opacity: item.disponible ? 1 : 0.6 }}>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
              <p style={{ fontWeight: 'bold' }}>{item.precio}</p>
              {item.disponible ? (
                <button onClick={() => navigate(`/productos/${item.id}`)}>
                  Ver más
                </button>
              ) : (
                <button disabled>Disponible próximamente</button>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Productos;
