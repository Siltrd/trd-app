import React from 'react';
import './home.css';

const productos = [
  {
    titulo: 'PDF – Estilo Pausa',
    descripcion: 'Guía descargable con puntos clave para salir del patrón de inercia comunicacional.',
    precio: '$5 USD',
    disponible: false
  },
  {
    titulo: 'Workbook + Audio – Estilo Acción',
    descripcion: 'Incluye un audio simbólico + ejercicios prácticos para reordenar tu discurso sin ansiedad.',
    precio: '$15 USD',
    disponible: false
  },
  {
    titulo: 'Mini Plantilla – Ajuste rápido de presentación',
    descripcion: 'Una estructura mínima para revisar cómo hablás de lo que hacés. Clara, editable, directa.',
    precio: 'Gratis',
    disponible: false
  }
];

const Productos = () => {
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
              <button disabled>
                Disponible próximamente
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Productos;
