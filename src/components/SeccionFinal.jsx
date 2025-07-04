import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/home.css';

const SeccionFinal = () => {
  const navigate = useNavigate();

  return (
    <section className="seccion-final">
      <div className="contenedor-final">
        <h3 className="titulo-final">
          ¿Sentís que hay una brecha entre lo que hacés y lo que la gente entiende?
        </h3>
        <p className="texto-final">
          El test simbólico de TRD te muestra si estás comunicando desde tu núcleo…
          o desde la confusión. Es hora de saber dónde estás parado.
        </p>
        <button
          className="boton-cta-final"
          onClick={() => navigate('/test-discurso/result')}
        >
          Descubrir mi resultado
        </button>
      </div>
    </section>
  );
};

export default SeccionFinal;
