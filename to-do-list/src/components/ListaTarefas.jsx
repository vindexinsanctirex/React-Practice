import React from 'react';
import Tarefa from './Tarefa';

export default function ListaTarefas({ tarefas, onConcluir, onRemover }) {
  if (tarefas.length === 0) {
    return <p className="mensagem-vazia">Nenhuma tarefa adicionada ainda</p>;
  }

  return (
    <ul className="lista-tarefas">
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          onConcluir={onConcluir}
          onRemover={onRemover}
        />
      ))}
    </ul>
  );
}