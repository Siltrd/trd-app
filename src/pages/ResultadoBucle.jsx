import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';

const ResultadoBucle = () => {
  const resultado = resultados['bucle'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoBucle;
