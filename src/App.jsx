import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TestLayout from './components/TestLayout';

import Home from './pages/Home';
import Landing from './pages/Landing';
import Guia from './pages/Guia';
import TPA from './pages/TPA';
import Coaching from './pages/Coaching';
import Productos from './pages/Productos';
import OtrosTests from './pages/OtrosTests';
import Manifiesto from './pages/Manifiesto';
import Contacto from './pages/Contacto';

import Start from './pages/Start'; // test de discurso
import StartDireccion from './pages/StartDireccion'; // test de dirección

import QuizDiscurso from './components/Quiz_discurso'; // test discurso
import QuizDireccion from './pages/Quiz_direccion'; // test dirección

import Result from './components/Result';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/guia" element={<Guia />} />
          <Route path="/servicio-tpa" element={<TPA />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/otros-tests" element={<OtrosTests />} />
          <Route path="/manifiesto" element={<Manifiesto />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* TEST DE DISCURSO */}
          <Route path="/test-discurso" element={<TestLayout />}>
            <Route index element={<Start />} />
            <Route path="quiz" element={<QuizDiscurso />} />
            <Route path="result" element={<Result />} />
          </Route>

          {/* TEST DE DIRECCIÓN */}
          <Route path="/test-direccion" element={<TestLayout />}>
            <Route index element={<StartDireccion />} />
            <Route path="quiz" element={<QuizDireccion />} />
            <Route path="result" element={<Result />} />
          </Route>

          {/* REDIRECCIÓN AL ÍNDICE DE TESTS */}
          <Route path="/test" element={<OtrosTests />} />
        </Routes>

        <ScrollToTop />
      </Layout>
    </Router>
  );
};

export default App;
