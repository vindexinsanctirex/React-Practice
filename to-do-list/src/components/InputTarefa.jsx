import React, { useState } from 'react';

export default function InputTarefa({ onAdicionar }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    onAdicionar(texto);
    setTexto('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}