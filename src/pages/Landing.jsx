import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-container">
        <h1 className="landing-title">Túnica de Realidad</h1>
        <p className="landing-subtitle">
          Esto no es coaching. Es un ajuste de enfoque, palabra y presencia.
        </p>

        <div className="landing-buttons">
          <Link to="/test" className="boton-trd">Hacer el test simbólico</Link>
          <Link to="/guia" className="boton-trd">Descargar guía REAL</Link>
          <Link to="/servicio-tpa" className="boton-trd">Revisar mi discurso (TPA)</Link>
          <Link to="/coaching" className="boton-trd">Sesión de Reconfiguración</Link>
          <Link to="/productos" className="boton-trd">Ver recursos descargables</Link>
          <Link to="/manifiesto" className="boton-trd">Conocer TRD</Link>
          <Link to="/contacto" className="boton-trd">Contactar por WhatsApp</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
