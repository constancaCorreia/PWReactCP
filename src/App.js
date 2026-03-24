import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import TodoApp from './ex1/TodoApp'; 
import TodoAppEx2 from './ex2/TodoApp';
import TodoAppEx3 from './ex3/TodoApp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex1" element={<TodoApp />} />
        <Route path="/ex2" element={<TodoAppEx2 />} />
        <Route path="/ex3" element={<TodoAppEx3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;