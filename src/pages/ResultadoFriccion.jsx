import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';

const ResultadoFriccion = () => {
  const resultado = resultados['friccion'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoFriccion;
