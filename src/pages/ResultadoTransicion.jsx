import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';

const ResultadoTransicion = () => {
  const resultado = resultados['transicion'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoTransicion;
