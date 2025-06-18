import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_direccion';

const QuizDireccion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (tags) => {
    setAnswers((prev) => [...prev, ...tags]);
    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      const result = calculateResult([...answers, ...tags]);
      navigate('/test-direccion/result', {
        state: { result, origen: 'direccion' }
      });
    }
  };

  const calculateResult = (tags) => {
    const count = { A: 0, C: 0, D: 0 };
    tags.forEach((t) => {
      if (count[t] !== undefined) count[t]++;
    });

    const { A, C, D } = count;

    if (A >= 3 && C <= 2 && D >= 2) return 'fuga';
    if (A >= 3 && C <= 2 && D <= 1) return 'friccion';
    if (A <= 1 && C >= 3 && D >= 2) return 'camuflaje';
    if (A <= 1 && C <= 2 && D >= 3) return 'pausa';
    if (A >= 3 && C >= 3 && D >= 2) return 'impulso';
    if (A <= 2 && C >= 3 && D <= 1) return 'bucle';
    if (A <= 2 && C <= 2 && D >= 3) return 'freno';
    if (A >= 2 && C >= 3 && D >= 2) return 'miedo';
    return 'contradiccion';
  };

  const current = questions[currentQuestion];

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
          maxWidth: '680px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: '#1e364d' }}>
          {current.question}
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.tags)}
              className="boton-trd"
              style={{ width: '100%', maxWidth: '500px' }}
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
