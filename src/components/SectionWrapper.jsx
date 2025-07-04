import React from 'react';

const SectionWrapper = ({ children, style = {} }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '4rem 3.5rem',
        borderRadius: '16px',
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
        maxWidth: '1280px',
        margin: '5rem auto',
        width: '100%',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
