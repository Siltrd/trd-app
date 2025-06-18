import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home-wrapper">
      {/* SECCIÓN 1: PROMESA + CTA */}
      <section className="home-section hero">
        <div className="home-inner">
          <h1 className="titulo-principal">¿Tu discurso vende lo que realmente hacés?</h1>
          <p className="subtitulo-trd">
            Descubrilo con nuestro test simbólico gratuito y obtené claridad para ajustar lo que mostrás al mundo.
          </p>
          <button className="boton-trd" onClick={() => navigate('/test')}>Hacer el test</button>
        </div>
      </section>

      {/* SECCIÓN 2: MANIFIESTO TRD */}
      <section className="home-section manifesto">
        <div className="home-inner">
          <h2 className="seccion-titulo">Manifiesto TRD</h2>
          <p>
            No naciste para encajar. Naciste para expresar.<br />
            Túnica de Realidad es un espacio para alinear lo que hacés con lo que mostrás.
          </p>
          <button className="boton-trd" onClick={() => navigate('/manifiesto')}>Leer completo</button>
        </div>
      </section>

      {/* SECCIÓN 3: PRODUCTOS PRINCIPALES */}
      <section className="home-section productos">
        <div className="home-inner">
          <h2 className="seccion-titulo">¿Qué podés hacer acá?</h2>
          <div className="productos-grid">
            <div className="card">
              <h3>TPA: Ajuste de discurso</h3>
              <p>Te ayudo a revisar cómo estás comunicando lo que hacés. Sin promesas vacías. Sin vueltas.</p>
              <button className="boton-trd" onClick={() => navigate('/servicio-tpa')}>Conocé el servicio</button>
            </div>
            <div className="card">
              <h3>REAL: La guía</h3>
              <p>Un mapa descargable en 4 pasos para realinear tu mensaje con lo que de verdad hacés.</p>
              <button className="boton-trd" onClick={() => navigate('/guia')}>Ver la guía</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: TESTIMONIOS / EXPERIENCIAS */}
      <section className="home-section testimonios">
        <div className="home-inner">
          <h2 className="seccion-titulo">Personas que ajustaron su discurso</h2>
          <p className="testimonio">“Después de TRD, entendí por qué nadie me entendía. Ahora vendo sin explicar tanto.”</p>
        </div>
      </section>

      {/* SECCIÓN 5: CTA FINAL DIFERENCIADA */}
      <section className="home-section cta-final">
        <div className="home-inner">
          <h2 className="seccion-titulo">¿Sentís que hay una brecha entre lo que hacés y lo que la gente entiende?</h2>
          <p>El test simbólico de TRD te muestra si estás comunicando desde tu núcleo... o desde la confusión.</p>
          <button className="boton-trd" onClick={() => navigate('/test')}>Descubrir mi resultado</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
