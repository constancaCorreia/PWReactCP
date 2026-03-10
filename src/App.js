import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import ToDoListFilter from './ToDoListFilter';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); 

  const addTodo = (textoDaTarefa) => {
    const novaTarefa = {
      id: Date.now(),
      text: textoDaTarefa,
      completed: false
    };
    setTodos([...todos, novaTarefa]);
  };

  
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  
  const tarefasFiltradas = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed; 
    if (filter === 'completed') return todo.completed; 
    return true; 
  });

  return (
    <div className="app">
      <h1>A Minha Todo List</h1>
      
      <TodoForm addTodo={addTodo} />
      
      <ToDoListFilter filter={filter} setFilter={setFilter} />

      <ul>
        {tarefasFiltradas.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
