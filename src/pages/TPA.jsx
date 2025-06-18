import React from 'react';
import './home.css';

const TPA = () => {
  return (
    <main className="home-wrapper">
      <section className="home-section servicio-tpa">
        <div className="home-inner">
          <h1 className="titulo-principal">Ajuste de Discurso Real (TPA)</h1>

          <p className="subtitulo-trd">
            Si lo que decís no conecta, no importa cuánto sepas, cuánto ames tu proyecto o cuánto esfuerzo pongas.
            La mayoría no vende por una razón simple: su discurso está desalineado.
          </p>

          <h2 className="seccion-titulo">¿Para quién es esto?</h2>
          <div className="bloque-trd">
            <p>Si sentís que hablás y no llega.</p>
            <p>Si nadie entiende bien lo que hacés.</p>
            <p>Si estás vendiendo menos de lo que sabés que podrías.</p>
            <p>Si tenés una web o perfil que suena... como todos.</p>
          </div>

          <h2 className="seccion-titulo">¿Qué incluye el servicio?</h2>
          <div className="bloque-trd">
            <p>Análisis real de tu discurso actual (audio, video o texto).</p>
            <p>Devolución grabada + PDF con ajustes y propuestas reales.</p>
            <p>Opcional: 15 minutos de llamada para aclaraciones finales.</p>
          </div>

          <h2 className="seccion-titulo">¿Cómo lo pedís?</h2>
          <p className="subtitulo-trd">
            Tocá el botón, escribime por WhatsApp y te paso todo. Sin formulario, sin embudo eterno.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <a
              href="https://wa.me/5491157041750?text=Hola%2C%20quiero%20revisar%20mi%20discurso%20con%20TPA%20de%20TRD"
              target="_blank"
              rel="noopener noreferrer"
              className="boton-trd"
            >
              Quiero revisar mi discurso
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TPA;
