import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManifiestoTRD = () => {
  const navigate = useNavigate();

  return (
    <section className="home-section seccion-clara manifiesto-trd">
      <div className="home-inner">
        <h2 className="seccion-titulo">Túnica de Realidad no es un disfraz.</h2>
        <p className="texto-ancho">
          Es una estructura que permite expresarte sin máscaras.<br />
          Lo que hacés. Lo que mostrás. Lo que sos.<br />
          Cuando hay coherencia interna, lo externo toma dirección.<br />
          <strong>Y desde ahí, empieza lo real.</strong>
        </p>
        <button className="boton-trd" onClick={() => navigate('/manifiesto')}>
          Leer el manifiesto completo
        </button>
      </div>
    </section>
  );
};

export default ManifiestoTRD;
