import React from 'react';

const SectionWrapper = ({ children, style = {} }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '3rem 2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        maxWidth: '900px',
        margin: '4rem auto',
        width: '100%',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
