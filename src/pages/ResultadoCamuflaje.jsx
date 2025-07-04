import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';

const ResultadoCamuflaje = () => {
  const resultado = resultados['camuflaje'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoCamuflaje;
