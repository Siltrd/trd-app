import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/home.css';

const Header = () => {
  return (
    <header className="trd-header">
      <div className="brand">Túnica de Realidad</div>
      <nav className="nav-links">
        <NavLink to="/test">Test</NavLink>
        <NavLink to="/guia">Guía REAL</NavLink>
        <NavLink to="/servicio-tpa">TPA</NavLink>
        <NavLink to="/coaching">Reconfiguración</NavLink>
        <NavLink to="/productos">Recursos</NavLink>
        <NavLink to="/manifiesto">Manifiesto</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
};

export default Header;
