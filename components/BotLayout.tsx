/* eslint-disable @next/next/no-img-element */
import React from 'react';

const BotLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* Contenido principal de la app */}
      <main>{children}</main>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/541122522838"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          backgroundColor: '#25d366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          textDecoration: 'none',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: '35px', height: '35px' }}
        />
      </a>
    </>
  );
};

export default BotLayout;
