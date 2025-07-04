import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';

const ResultadoFuga = () => {
  const resultado = resultados['fuga'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoFuga;
