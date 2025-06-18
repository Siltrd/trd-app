import React from 'react';
import './home.css';

const Guia = () => {
  return (
    <main className="home-wrapper">
      <section className="home-section guia-real">
        <div className="home-inner">
          <h1 className="titulo-principal">Guía REAL</h1>

          <p className="subtitulo-trd">
            No necesitás más motivación. Necesitás un mapa.
          </p>

          <p className="bloque-trd">
            La Guía REAL es un documento breve y directo con el que podés empezar a detectar si estás alineado o solo repitiendo un personaje.<br />
            No es lo que “tenés que hacer”, sino lo que podés empezar a observar en serio.
          </p>

          <a
            href="https://example.com/guia.pdf" // 📝 reemplazalo con el enlace real
            download
            target="_blank"
            rel="noopener noreferrer"
            className="boton-trd"
          >
            Descargar la guía
          </a>
        </div>
      </section>
    </main>
  );
};

export default Guia;
