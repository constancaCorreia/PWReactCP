import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#333', marginBottom: '20px' }}>
      <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
      <Link to="/ex1" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Exercício 1</Link>
      <Link to="/ex2" style={{ color: 'white', textDecoration: 'none' }}>Exercício 2 (Efeitos)</Link>
      <Link to="/ex3" style={{ color: 'white', textDecoration: 'none' }}>Exercício 3 (Storage)</Link>
    </nav>
  );
}

export default Navbar;