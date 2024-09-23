import React, { useState, useEffect } from 'react';

const Temporizador = () => {
  const [contador, setContador] = useState(0); // almacena el valor del temporizador

  useEffect(() => {
    // inicia el temporizador
    const intervalId = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000);

    // Limpia el temporizador cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Solo se ejecuta una vez cuando el componente se monta, por eso las dependencias vacías

  return (
    <div>
      <h1>Temporizador</h1>
      <p>Segundos: {contador}</p>
    </div>
  );
};

export default Temporizador;
