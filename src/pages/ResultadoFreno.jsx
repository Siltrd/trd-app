import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';

const ResultadoFreno = () => {
  const resultado = resultados['freno'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoFreno;
