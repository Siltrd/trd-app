// src/components/HeroTRD.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/assets/styles/home.css';

const HeroTRD = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-imagen">
      <div className="hero-overlay">
        <div className="hero-trd-contenido">
          <p className="frase-top">algo empieza a moverse</p>
          <h1 className="hero-titulo">
            ¿Y si el primer paso no fuera hacer más, sino entender mejor?
          </h1>
          <p className="hero-subtitulo">
            En TRD no arreglamos superficies: trabajamos desde el núcleo.  
            Tu claridad no depende del esfuerzo, sino del enfoque.
          </p>
          <div className="hero-botones">
            <button className="boton-trd" onClick={() => navigate('/test')}>
              Empezar por un test simbólico
            </button>
            <button className="boton-trd" onClick={() => navigate('/productos')}>
              Ver las herramientas disponibles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTRD;
