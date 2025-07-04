import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import TestLayout from './components/TestLayout';
import ScrollToTop from './components/ScrollToTop';
import AutoScroll from './components/AutoScroll'; // ✅ NUEVO IMPORT

// HOME Y PÁGINAS GENERALES
import Home from './pages/home/Home.jsx';
import Landing from './pages/Landing';
import Guia from './pages/Guia';
import TPA from './pages/TPA';
import Coaching from './pages/coaching/Coaching';
import Contacto from './pages/contacto/Contacto';
import Manifiesto from './pages/Manifiesto';

// PRODUCTOS
import Productos from './pages/productos/Productos';
import Friccion from './pages/productos/Friccion';

// TESTS
import OtrosTests from './pages/OtrosTests';
import StartDiscurso from './pages/tests/StartDiscurso';
import QuizDiscurso from './pages/tests/Quiz_discurso';
import ResultDiscurso from './pages/tests/ResultDiscurso';

import StartDireccion from './pages/tests/StartDireccion';
import QuizDireccion from './pages/tests/Quiz_direccion';
import ResultDireccion from './pages/tests/ResultDireccion';

// LANDINGS DE RESULTADO (TRD)
import ResultadoPausa from './pages/ResultadoPausa';
import ResultadoFuga from './pages/ResultadoFuga';
import ResultadoFriccion from './pages/ResultadoFriccion';
import ResultadoCamuflaje from './pages/ResultadoCamuflaje';
import ResultadoBucle from './pages/ResultadoBucle';
import ResultadoImpulso from './pages/ResultadoImpulso';
import ResultadoMiedo from './pages/ResultadoMiedo';
import ResultadoFreno from './pages/ResultadoFreno';
import ResultadoContradiccion from './pages/ResultadoContradiccion';
import ResultadoTransicion from './pages/ResultadoTransicion';
import ResultadoAccion from './pages/ResultadoAccion'; // ✅ NUEVA IMPORTACIÓN

const App = () => {
  return (
    <Router>
      <AutoScroll /> {/* ✅ Scroll automático al tope en cada navegación */}
      <Layout>
        <Routes>
          {/* PRINCIPALES */}
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/guia" element={<Guia />} />
          <Route path="/servicio-tpa" element={<TPA />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/manifiesto" element={<Manifiesto />} />

          {/* PRODUCTOS */}
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/friccion" element={<Friccion />} />

          {/* TEST DE DISCURSO */}
          <Route path="/test-discurso" element={<TestLayout />}>
            <Route index element={<StartDiscurso />} />
            <Route path="quiz" element={<QuizDiscurso />} />
            <Route path="result" element={<ResultDiscurso />} />
          </Route>

          {/* TEST DE DIRECCIÓN */}
          <Route path="/test-direccion" element={<TestLayout />}>
            <Route index element={<StartDireccion />} />
            <Route path="quiz" element={<QuizDireccion />} />
            <Route path="result" element={<ResultDireccion />} />
          </Route>

          {/* LANDINGS DE RESULTADOS */}
          <Route path="/resultado/pausa" element={<ResultadoPausa />} />
          <Route path="/resultado/fuga" element={<ResultadoFuga />} />
          <Route path="/resultado/friccion" element={<ResultadoFriccion />} />
          <Route path="/resultado/camuflaje" element={<ResultadoCamuflaje />} />
          <Route path="/resultado/bucle" element={<ResultadoBucle />} />
          <Route path="/resultado/impulso" element={<ResultadoImpulso />} />
          <Route path="/resultado/miedo" element={<ResultadoMiedo />} />
          <Route path="/resultado/freno" element={<ResultadoFreno />} />
          <Route path="/resultado/contradiccion" element={<ResultadoContradiccion />} />
          <Route path="/resultado/transicion" element={<ResultadoTransicion />} />
          <Route path="/resultado/accion" element={<ResultadoAccion />} /> {/* ✅ NUEVA RUTA */}

          {/* ÍNDICE DE TESTS */}
          <Route path="/test" element={<OtrosTests />} />
        </Routes>

        <ScrollToTop /> {/* ✅ Botón flotante para volver arriba */}
      </Layout>
    </Router>
  );
};

export default App;
