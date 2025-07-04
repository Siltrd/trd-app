import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';

const ResultadoImpulso = () => {
  const resultado = resultados['impulso'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoImpulso;
