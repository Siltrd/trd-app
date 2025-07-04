import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';

const ResultadoMiedo = () => {
  const resultado = resultados['miedo'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoMiedo;
