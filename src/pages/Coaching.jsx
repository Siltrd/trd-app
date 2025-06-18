import React from 'react';
import './home.css';

const Coaching = () => {
  return (
    <main className="home-wrapper">
      <section className="home-section coaching">
        <div className="home-inner">
          <h1 className="titulo-principal">Sesión de Reconfiguración 1:1</h1>

          <p className="subtitulo-trd">
            Esto no es una sesión de coaching más.  
            Es un espacio para revisar desde dónde estás operando cuando hablás de lo que hacés.
          </p>

          <p>
            La mayoría de la gente no necesita más estrategias.  
            Necesita dejar de sostener una narrativa que ya no encaja.
          </p>

          <p>
            En esta sesión 1:1 trabajamos con tu caso real: tu discurso, tu idea, tu contexto.  
            No hay estructura prearmada. Usamos herramientas como PNL, foco somático, visualizaciones aplicadas y simbología para detectar puntos ciegos, desbloquear y reordenar.
          </p>

          <p className="subtitulo-trd" style={{ fontWeight: 'bold' }}>
            Una hora intensa. Precisa. Y con devolución concreta para que salgas con claridad de acción.
          </p>

          <a
            href="https://wa.me/5491157041750?text=Hola%2C%20quiero%20agendar%20una%20sesión%20de%20Reconfiguración%201%3A1%20con%20TRD"
            target="_blank"
            rel="noopener noreferrer"
            className="boton-trd"
          >
            Agendar sesión por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default Coaching;
