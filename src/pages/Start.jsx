import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Start = () => {
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
        <h1 style={{ marginBottom: '1.5rem', color: '#1e364d' }}>
          ¿Querés saber qué dice tu discurso cuando hablás de lo que hacés?
        </h1>
        <button onClick={() => navigate('/test/quiz')} className="boton-trd">
          Iniciar test
        </button>
      </div>
    </div>
  );
};

export default Start;
