import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductosTRD = () => {
  const navigate = useNavigate();

  return (
    <section className="home-section productos-trd full-width-block" style={{ backgroundColor: '#fcfaf6', padding: '4rem 0' }}>
      <div className="home-inner" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="seccion-titulo" style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem', color: '#2f2f2f' }}>
          No es solo un test. Es una forma de reordenarte.
        </h2>

        <div className="productos-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* BLOQUE TPA */}
          <div className="producto-bloque" style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '2rem', boxShadow: '0 6px 12px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#1e364d' }}>TPA: Ajuste de discurso</h3>
            <p style={{ marginBottom: '1rem', color: '#2f2f2f' }}>
              Si sabés lo que hacés pero sentís que nadie lo entiende o lo compra, este servicio te muestra cómo decirlo de forma real, potente y vendible.
            </p>
            <button className="boton-trd" onClick={() => navigate('/servicio-tpa')}>
              Conocé el servicio
            </button>
          </div>

          {/* BLOQUE REAL */}
          <div className="producto-bloque" style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '2rem', boxShadow: '0 6px 12px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#1e364d' }}>REAL: La guía</h3>
            <p style={{ marginBottom: '1rem', color: '#2f2f2f' }}>
              Un descargable simbólico y estratégico que te ordena en 4 pasos. Ideal si estás empezando, relanzando, o redefiniendo tu propuesta.
            </p>
            <button className="boton-trd" onClick={() => navigate('/guia')}>
              Ver la guía
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductosTRD;
