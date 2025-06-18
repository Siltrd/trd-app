import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const Contacto = () => {
  return (
    <SectionWrapper>
      <h2>Contacto directo</h2>
      <p>Escribime directamente por WhatsApp. Te leo.</p>
      <a
        href="https://wa.me/5491157041750?text=Hola%2C%20necesito%20contactar%20con%20TRD"
        target="_blank"
        rel="noopener noreferrer"
        className="boton-trd"
        style={{ marginTop: '2rem', display: 'inline-block' }}
      >
        Canal oficial de WhatsApp
      </a>
    </SectionWrapper>
  );
};

export default Contacto;
