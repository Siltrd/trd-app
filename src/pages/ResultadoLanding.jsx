import React from 'react';
import '/src/assets/styles/home.css';

const ResultadoLanding = ({ resultado }) => {
  if (!resultado) {
    return (
      <div className="home-wrapper">
        <p style={{ padding: '2rem', fontSize: '1.2rem' }}>Cargando resultado...</p>
      </div>
    );
  }

  return (
    <main className="home-wrapper">
      <section className="home-section resultado">
        <div className="home-inner">
          <h1 className="titulo-principal">{resultado.title || resultado.estilo}</h1>

          <p><strong>Diagnóstico:</strong> {resultado.diagnostico}</p>
          <p><strong>Imagen simbólica:</strong> {resultado.imagen}</p>
          <p><strong>Coste de no actuar:</strong> {resultado.coste}</p>

          <hr className="separador" />

          <h3 className="subtitulo-trd">{resultado.cta.titulo}</h3>
          <p>{resultado.cta.descripcion}</p>

          {resultado.cta.frase && (
            <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
              {resultado.cta.frase}
            </p>
          )}

          <p><strong>Precio:</strong> {resultado.cta.precio}</p>
          <p><strong>Incluye:</strong> {resultado.cta.acceso}</p>

          <a
            href={resultado.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-trd"
            style={{ marginTop: '2rem', display: 'inline-block' }}
          >
            Ir al siguiente paso
          </a>
        </div>
      </section>
    </main>
  );
};

export default ResultadoLanding;
