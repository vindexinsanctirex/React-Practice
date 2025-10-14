import React, { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const header = document.querySelector('header');
    
    const handleMouseMove = (e) => {
      const rect = header.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      header.style.setProperty('--mouse-x', `${x}px`);
      header.style.setProperty('--mouse-y', `${y}px`);
    };

    header.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      header.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header>
      <h1 style={{fontFamily: 'Fantasy, Papyrus, "Times New Roman"'}}>Lista de Tarefas</h1>
    </header>
  );
}