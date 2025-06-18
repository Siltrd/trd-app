// src/components/TestLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const TestLayout = () => {
  return (
    <div
      style={{
        padding: '3rem 2rem',
        fontFamily: 'Inter, sans-serif',
        backgroundColor: '#f6f5f2',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1.5rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default TestLayout;
