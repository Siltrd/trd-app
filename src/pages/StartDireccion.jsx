import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartDireccion = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
        textAlign: 'center',
        maxWidth: '680px',
        width: '100%'
      }}>
        <h1 style={{ marginBottom: '1rem', color: '#1e364d' }}>
          ¿Estás lista para ver qué dirección interna está bloqueando tu avance?
        </h1>
        <p style={{ marginBottom: '2rem' }}>
          Este test revela qué parte de tu energía está sin foco, en pausa o en contradicción.
        </p>
        <button onClick={() => navigate('/test/quiz')} className="boton-trd">
          Iniciar test ahora
        </button>
      </div>
    </div>
  );
};

export default StartDireccion;
