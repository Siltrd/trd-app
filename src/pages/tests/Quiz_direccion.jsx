import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../../data/questions_direccion.js';
import '/src/assets/styles/home.css';

const QuizDireccion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  const handleAnswer = (tags) => {
    const updatedAnswers = [...answers, ...tags];
    setFade(false);

    setTimeout(() => {
      setAnswers(updatedAnswers);
      const next = currentQuestion + 1;

      if (next < questions.length) {
        setCurrentQuestion(next);
        setFade(true);
      } else {
        const result = calculateResult(updatedAnswers);
        navigate(`/resultado/${result}`);
      }
    }, 300);
  };

  const calculateResult = (tags) => {
    const count = { A: 0, C: 0, D: 0 };

    tags.forEach(tag => {
      if (count[tag] !== undefined) {
        count[tag]++;
      }
    });

    const max = Math.max(count.A, count.C, count.D);
    const keysWithMax = Object.keys(count).filter(k => count[k] === max);

    if (keysWithMax.length === 3) return 'transicion';
    if (keysWithMax.length === 2) return 'friccion';

    const dominante = keysWithMax[0];
    const mapaResultados = {
      A: 'fuga',
      C: 'bucle',
      D: 'pausa'
    };

    return mapaResultados[dominante] || 'contradiccion';
  };

  const current = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
          maxWidth: '680px',
          width: '100%',
          textAlign: 'center',
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0px) scale(1)' : 'translateY(5px) scale(0.98)',
          transition: 'opacity 0.35s ease-out, transform 0.35s ease-out'
        }}
      >
        {/* Progreso visual */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#1e364d' }}>
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
          <div style={{
            height: '6px',
            backgroundColor: '#eee',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#b0a58d',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        {/* Pregunta */}
        <h2 style={{ marginBottom: '2rem', fontSize: '1.35rem', color: '#1e364d' }}>
          {current.question}
        </h2>

        {/* Respuestas */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem'
        }}>
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.tags)}
              className="boton-trd"
              style={{
                width: '100%',
                maxWidth: '500px',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDireccion;
