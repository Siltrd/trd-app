import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/home.css';

const Footer = () => {
  return (
    <footer className="footer-trd" style={{
      backgroundColor: '#f6f5f2',
      borderTop: '1px solid #ddd',
      padding: '2rem',
      marginTop: '4rem',
      fontSize: '0.95rem',
      color: '#2f2f2f'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
          TRD – Túnica de Realidad
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Espacio para alinear lo que hacés con lo que mostrás.<br />
          Sin fórmulas mágicas, sin performance. Solo comunicación real.
        </p>

        <nav className="footer-links" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <Link to="/">Inicio</Link>
          <Link to="/guia">Guía REAL</Link>
          <Link to="/servicio-tpa">TPA</Link>
          <Link to="/test">Test</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/manifiesto">Manifiesto</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} Túnica de Realidad — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
