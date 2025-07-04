import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from '../../components/Start';
import Quiz from '../../components/Quiz';
import Result from './ResultDireccion';

const TestADR = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="result" element={<Result />} />
    </Routes>
  );
};

export default TestADR;
