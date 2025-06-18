import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import results from '../data/results_direccion'; // Asegúrate de importar el correcto según el test

const Result = () => {
  const location = useLocation();
  const [resultKey, setResultKey] = useState(null);

  useEffect(() => {
    if (location.state?.result) {
      setResultKey(location.state.result);
    }
  }, [location]);

  if (!resultKey || !results[resultKey]) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Cargando resultado...</p>
      </div>
    );
  }

  const resultado = results[resultKey];
  const mensaje = `Hola, quiero acceder al producto TRD asociado a mi resultado: "${resultado.title}".`;

  return (
    <main style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '3rem 2rem',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
          maxWidth: '720px',
          width: '100%',
          color: '#2f2f2f',
          fontFamily: 'Manrope, sans-serif',
        }}
      >
        <h2 style={{ fontSize: '1.75rem', color: '#1e364d', marginBottom: '1.5rem' }}>
          {resultado.title}
        </h2>

        <div style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
          <p><strong>Diagnóstico:</strong> {resultado.diagnostico}</p>
          <p><strong>Imagen simbólica:</strong> {resultado.imagen}</p>
          <p><strong>Coste de no actuar:</strong> {resultado.coste}</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '2rem 0' }} />

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#3c5a46', marginBottom: '0.5rem' }}>
            {resultado.cta.titulo}
          </h3>
          <p>{resultado.cta.descripcion}</p>
          {resultado.cta.frase && (
            <p style={{ fontStyle: 'italic', color: '#3c5a46', marginTop: '1rem' }}>
              {resultado.cta.frase}
            </p>
          )}
          <p style={{ marginTop: '1rem' }}><strong>Precio:</strong> {resultado.cta.precio}</p>
          <p><strong>Incluye:</strong> {resultado.cta.acceso}</p>
        </div>

        <a
          href={`https://wa.me/5491157041750?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-trd"
        >
          Quiero acceder a esta guía
        </a>
      </section>
    </main>
  );
};

export default Result;
