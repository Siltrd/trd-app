import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../data/results_direccion.js';
import results from '../../data/results_direccion.js';
import '/src/assets/styles/home.css';

const Result = () => {
  const location = useLocation();
  const [resultKey, setResultKey] = useState(null);

  useEffect(() => {
    if (location.state?.result) {
      console.log('🔍 Resultado test dirección:', location.state.result);
      setResultKey(location.state.result);
    } else {
      console.warn('⚠️ No se recibió resultado desde test de dirección');
    }
  }, [location]);

  if (!resultKey || !results[resultKey]) {
    return (
      <div className="home-wrapper">
        <p style={{ padding: '2rem', fontSize: '1.2rem' }}>Cargando resultado...</p>
      </div>
    );
  }

  const resultado = results[resultKey];
  const mensaje = `Hola, hice el test de dirección. Mi resultado fue: "${resultado.title}". Me interesa avanzar con la guía que me corresponde. ¿Cómo seguimos?`;

  return (
    <main className="home-wrapper">
      <section className="home-section resultado">
        <div className="home-inner">
          <h1 className="titulo-principal">{resultado.title}</h1>

          <p><strong>Diagnóstico:</strong> {resultado.diagnostico}</p>
          <p><strong>Imagen simbólica:</strong> {resultado.imagen}</p>
          <p><strong>Coste de no actuar:</strong> {resultado.coste}</p>

          <hr className="separador" />

          <h3 className="subtitulo-trd">{resultado.cta.titulo}</h3>
          <p>{resultado.cta.descripcion}</p>

          {resultado.cta.frase && (
            <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
              {resultado.cta.frase}
            </p>
          )}

          <p><strong>Precio:</strong> {resultado.cta.precio}</p>
          <p><strong>Incluye:</strong> {resultado.cta.acceso}</p>

          <a
            href={`https://wa.me/5491157041750?text=${encodeURIComponent(mensaje)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-trd"
            style={{ marginTop: '2rem', display: 'inline-block' }}
          >
            Quiero acceder a esta guía
          </a>
        </div>
      </section>
    </main>
  );
};

export default Result;
