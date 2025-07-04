import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';

const ResultadoContradiccion = () => {
  const resultado = resultados['contradiccion'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoContradiccion;
