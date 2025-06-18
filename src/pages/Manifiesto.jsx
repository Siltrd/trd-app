import React from 'react';
import { useNavigate } from 'react-router-dom';
import Destacado from '../components/Destacado';
import './home.css';

const Manifiesto = () => {
  const navigate = useNavigate();

  return (
    <main className="home-wrapper">
      <section className="home-section manifiesto">
        <div className="home-inner">
          <h1 className="titulo-principal">Manifiesto TRD</h1>

          <p className="subtitulo-trd">
            Túnica de Realidad no nació como un producto.
            Nació como una necesidad de poner en palabras algo que no se estaba diciendo.
          </p>

          <p>
            No es coaching tradicional.  
            No es una promesa de transformación mágica.  
            No es contenido para entretener ni para agradar.
          </p>

          <Destacado>
            <p>
              Este espacio no está diseñado para gustarte. Está diseñado para resonar o incomodarte.
            </p>
          </Destacado>

          <p>
            Es para quien quiere volver a mirar en serio lo que dice cuando habla de sí.  
            Para quien ya hizo todos los cursos, leyó todos los libros, probó todos los caminos… y aún así siente que hay algo que no encaja.
          </p>

          <p>
            No trabajamos sobre tu personaje. Trabajamos sobre tu estructura.  
            Lo hacemos con herramientas que van desde lo simbólico hasta lo pragmático, porque no nos interesa lo místico ni lo mecánico: nos interesa lo real.
          </p>

          <p>
            Lo que buscás no es motivación, es alineación.  
            No necesitás más ideas. Necesitás depurar lo que ya sabés y decirlo de una forma que te haga sentido.
          </p>

          <p className="subtitulo-trd" style={{ fontWeight: 'bold', marginTop: '2rem' }}>
            Si estás dispuesto a dejar de parecer y empezar a comunicar desde lo que realmente sostenés, TRD es para vos.
          </p>

          <button className="boton-trd" onClick={() => navigate('/')}>Volver al inicio</button>
        </div>
      </section>
    </main>
  );
};

export default Manifiesto;
