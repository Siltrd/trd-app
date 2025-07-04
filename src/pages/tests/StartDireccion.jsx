import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/assets/styles/home.css';

const StartDireccion = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        borderRadius: '1rem',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.06)',
        textAlign: 'center',
        maxWidth: '680px',
        width: '100%'
      }}>
        <h1 style={{ marginBottom: '1.5rem', color: '#1e364d', fontSize: '1.8rem' }}>
          ¿Qué parte de tu energía está bloqueando tu avance?
        </h1>
        <p style={{ marginBottom: '2.5rem', color: '#3c5a46' }}>
          Este test simbólico revela si estás en pausa, dispersión o contradicción interna. Sin juicio. Solo claridad.
        </p>
        <button onClick={() => navigate('/test-direccion/quiz')} className="boton-trd">
          Empezar ahora
        </button>
      </div>
    </div>
  );
};

export default StartDireccion;
