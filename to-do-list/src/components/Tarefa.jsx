import React from 'react';

export default function Tarefa({ tarefa, onConcluir, onRemover }) {
  return (
    <li className={`tarefa ${tarefa.concluida ? 'concluida' : ''}`}>
      <span onClick={() => onConcluir(tarefa.id)}>
        {tarefa.texto}
      </span>
      <div className="botoes">
        <button onClick={() => onConcluir(tarefa.id)}>
          {tarefa.concluida ? '✓' : '○'}
        </button>
        <button onClick={() => onRemover(tarefa.id)}>🗑</button>
      </div>
    </li>
  );
}