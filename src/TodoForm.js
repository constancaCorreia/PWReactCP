import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (texto.trim() === "") return; 
    
    addTodo(texto); 
    setTexto(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="O que tens para fazer?"
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;