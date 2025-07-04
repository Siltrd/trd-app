import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';

const ResultadoPausa = () => {
  const resultado = resultados['pausa'];
  return <ResultadoLanding resultado={resultado} />;
};

export default ResultadoPausa;
