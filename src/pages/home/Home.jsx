// src/pages/home/Home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/assets/styles/home.css';
import MarqueeTRD from '/src/components/MarqueeTRD';
import HeroTRD from '/src/components/HeroTRD';
import SeccionFinal from '/src/components/SeccionFinal';
import ManifiestoTRD from '/src/components/ManifiestoTRD';
import ProductosTRD from '/src/components/ProductosTRD';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main id="inicio">
      {/* CINTA TRD */}
      <MarqueeTRD />

      {/* HERO INICIAL */}
      <HeroTRD />

      {/* MANIFIESTO DESTACADO */}
      <ManifiestoTRD />

      {/* PRODUCTOS DESTACADOS */}
      <ProductosTRD />

      {/* CTA FINAL – NUEVO BLOQUE EDITORIAL */}
      <section className="home-section seccion-destacada cta-final">
        <div className="home-inner">
          <h2 className="seccion-titulo">Hay una diferencia entre mostrarte y exponerte.</h2>
          <p className="texto-ancho">
            <em>Túnica de Realidad</em> no es un disfraz. <br />
            Es una estructura que permite expresarte sin máscaras. <br />
            Lo que hacés. Lo que mostrás. Lo que sos. <br />
            Cuando hay coherencia interna, lo externo toma dirección. <br />
            <strong>Y desde ahí, empieza lo real.</strong>
          </p>
          <button className="boton-trd" onClick={() => navigate('/test')}>
            Descubrir mi resultado
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
