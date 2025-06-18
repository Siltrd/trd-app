import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'; // ✅ Nuevo: importamos el footer

const Layout = ({ children }) => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f5f6f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* HEADER */}
      <header style={{
        backgroundColor: '#1e364d',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <Link to="/" style={{ color: '#f5f2eb', fontSize: '1.4rem', fontWeight: 'bold', textDecoration: 'none' }}>
          Túnica de Realidad
        </Link>
        <nav style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          <Link to="/test" style={linkStyle}>Test</Link>
          <Link to="/guia" style={linkStyle}>Guía REAL</Link>
          <Link to="/servicio-tpa" style={linkStyle}>TPA</Link>
          <Link to="/coaching" style={linkStyle}>Reconfiguración</Link>
          <Link to="/productos" style={linkStyle}>Recursos</Link>
          <Link to="/manifiesto" style={linkStyle}>Manifiesto</Link>
          <Link to="/contacto" style={linkStyle}>Contacto</Link>
        </nav>
      </header>

      {/* CONTENIDO */}
      <main style={{ padding: '3rem 2rem', flexGrow: 1 }}>
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

const linkStyle = {
  color: '#f5f2eb',
  textDecoration: 'none',
  fontSize: '1rem'
};

export default Layout;

