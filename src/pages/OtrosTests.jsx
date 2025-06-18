import React from 'react';
import { useNavigate } from 'react-router-dom';

const OtrosTests = () => {
  const navigate = useNavigate();

  return (
    <main style={{ textAlign: 'center', padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
        maxWidth: '680px',
        width: '100%'
      }}>
        <h1 style={{ color: '#1e364d', marginBottom: '1.5rem' }}>
          Explorá los tests simbólicos de TRD
        </h1>
        <p style={{ marginBottom: '2rem' }}>
          Elegí desde dónde querés comenzar a revisar tu realidad interna:
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <button className="boton-trd" onClick={() => navigate('/test-discurso/quiz')}>
            🗣️ Test de discurso (¿Cómo comunicás lo que hacés?)
          </button>

          <button className="boton-trd" onClick={() => navigate('/test-direccion/quiz')}>
            🧭 Test de dirección (¿Dónde está bloqueada tu energía?)
          </button>
        </div>
      </div>
    </main>
  );
};

export default OtrosTests;
