import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_discurso';

const QuizDiscurso = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (tags) => {
    setAnswers([...answers, ...tags]);
    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      const result = calculateResult([...answers, ...tags]);
      navigate('/test-discurso/result', {
        state: { result, origen: 'discurso' }
      });
    }
  };

  const calculateResult = (tags) => {
    const count = { A: 0, C: 0, D: 0 };
    tags.forEach((t) => {
      if (count[t] !== undefined) count[t]++;
    });

    const { A, C, D } = count;

    if (A >= 3 && C <= 2 && D <= 1) return 'accion';
    if (C >= 3 && A <= 2 && D <= 1) return 'pausa';
    if (D >= 3 && A <= 2 && C <= 2) return 'camuflaje';
    if (A >= 2 && C >= 2 && D >= 2) return 'friccion';

    return 'transicion';
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
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.tags)}
              className="boton-trd"
              style={{ width: '100%', maxWidth: '500px' }}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDiscurso;
