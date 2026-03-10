import React from 'react';

function TodoListFilter({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      <button 
        className={filter === 'all' ? 'active' : ''} 
        onClick={() => setFilter('all')}
      >
        Todas
      </button>
      <button 
        className={filter === 'active' ? 'active' : ''} 
        onClick={() => setFilter('active')}
      >
        Ativas
      </button>
      <button 
        className={filter === 'completed' ? 'active' : ''} 
        onClick={() => setFilter('completed')}
      >
        Concluídas
      </button>
    </div>
  );
}

export default TodoListFilter;