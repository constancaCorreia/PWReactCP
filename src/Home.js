import React, { useState } from 'react';

const dados = [
  { id: 1, botao: "Link 1", conteudo: "Conteúdo do Item 1", image: "https://placehold.co/600x400" },
  { id: 2, botao: "Link 2", conteudo: "Conteúdo do Item 2", image: "https://placehold.co/600x400" },
  { id: 3, botao: "Link 3", conteudo: "Conteúdo do Item 3", image: "https://placehold.co/600x400/000000/FFF" }
];

function Home() {
  const [itemSelecionado, setItemSelecionado] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Página Inicial - Índice de Exercícios</h1>
      <p>Bem-vinda ao Módulo 2!</p>

      <h3>Master:</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        {dados.map((item) => (
          <button 
            key={item.id} 
            onClick={() => setItemSelecionado(item)} 
            style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            {item.botao}
          </button>
        ))}
      </div>

      <hr />

      <h3>Detail:</h3>
      {itemSelecionado ? (
        <div style={{ marginTop: '20px' }}>
          <h2>{itemSelecionado.conteudo}</h2>
          <img 
            src={itemSelecionado.image} 
            alt={itemSelecionado.botao} 
            style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '10px' }} 
          />
        </div>
      ) : (
        <p style={{ color: 'gray' }}>Clica num dos botões acima para veres o detalhe!</p>
      )}

    </div>
  );
}

export default Home;