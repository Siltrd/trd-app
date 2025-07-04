import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_discurso.js';

const ResultadoAccion = () => {
  const resultado = resultados['accion'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoAccion;
