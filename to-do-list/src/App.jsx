import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InputTarefa from './components/InputTarefa';
import ListaTarefas from './components/ListaTarefas';
import './App.css';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas');

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    const filtroSalvo = localStorage.getItem('filtro');
    
    if (tarefasSalvas) setTarefas(JSON.parse(tarefasSalvas));
    if (filtroSalvo) setFiltro(filtroSalvo);
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    localStorage.setItem('filtro', filtro);
  }, [tarefas, filtro]);

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const concluirTarefa = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const limparConcluidas = () => {
    setTarefas(tarefas.filter(tarefa => !tarefa.concluida));
  };

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === 'ativas') return !tarefa.concluida;
    if (filtro === 'concluidas') return tarefa.concluida;
    return true;
  });

  return (
    <div className="container">
      <Header />
      <InputTarefa onAdicionar={adicionarTarefa} />
      
      <div className="filtros">
        <button 
          className={filtro === 'todas' ? 'ativo' : ''} 
          onClick={() => setFiltro('todas')}
        >
          Todas
        </button>
        <button 
          className={filtro === 'ativas' ? 'ativo' : ''} 
          onClick={() => setFiltro('ativas')}
        >
          Pendentes
        </button>
        <button 
          className={filtro === 'concluidas' ? 'ativo' : ''} 
          onClick={() => setFiltro('concluidas')}
        >
          Concluídas
        </button>
        <button onClick={limparConcluidas}>Limpar Concluídas</button>
      </div>

      <ListaTarefas
        tarefas={tarefasFiltradas}
        onConcluir={concluirTarefa}
        onRemover={removerTarefa}
      />
      
      <footer>
        <p>
          Total de tarefas: {tarefas.length} | 
          Concluídas: {tarefas.filter(t => t.concluida).length}
        </p>
      </footer>
    </div>
  );
}
