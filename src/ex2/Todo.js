import React from 'react';

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span>{todo.text}</span>
      </div>

      <button onClick={() => deleteTodo(todo.id)}>Apagar</button>

    </li>
  );
}

export default Todo;