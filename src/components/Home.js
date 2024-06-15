import React from 'react';

const Home = ({ authenticated, logout }) => {
  return (
    <div>
      <h1>Home</h1>
      {authenticated ? (
        <button onClick={logout}>Cerrar sesión</button>
      ) : (
        <p>Inicia sesión para ver contenido privado</p>
      )}
    </div>
  );
};

export default Home;
