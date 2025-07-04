import React from 'react';
import LibelulaDorada from '/src/assets/logo/libelula-dorado.svg';

const Logo = ({ size = 48, color = 'default' }) => {
  const getSrc = () => {
    switch (color) {
      case 'blanco':
        return '/src/assets/logo/libelula-blanco.svg';
      case 'negro':
        return '/src/assets/logo/libelula-negro.svg';
      default:
        return LibelulaDorada;
    }
  };

  return (
    <img
      src={getSrc()}
      alt="Libélula TRD"
      width={size}
      height={size}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Logo;
