import React from 'react';

const Destacado = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem 2rem',
        borderRadius: '10px',
        margin: '2.5rem 0',
        borderLeft: '3px solid #1e364d',
        fontSize: '1rem',
        lineHeight: 1.6,
        color: '#2f2f2f'
      }}
    >
      {children}
    </div>
  );
};

export default Destacado;
