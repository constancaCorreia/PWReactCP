import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { depositar, levantar } from './atmSlice';

function Multibanco() {
  const saldo = useSelector((state) => state.atm.saldo);
  
  const dispatch = useDispatch();

  const [valorInput, setValorInput] = useState(0);

  const handleDepositar = () => {
    dispatch(depositar(valorInput)); 
    setValorInput(0); 
  };

  const handleLevantar = () => {
    dispatch(levantar(valorInput));
    setValorInput(0);
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center', backgroundColor: '#d0e3ff', borderRadius: '10px', maxWidth: '500px', margin: '40px auto' }}>
      
      <h2>Máquina Multibanco</h2>
      <h3>Saldo Atual: {saldo} €</h3>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <input 
          type="number" 
          value={valorInput} 
          onChange={(e) => setValorInput(e.target.value)}
          style={{ padding: '8px', width: '120px' }}
        />
        <button onClick={handleDepositar} style={{ padding: '8px 15px', cursor: 'pointer' }}>Depositar</button>
        <button onClick={handleLevantar} style={{ padding: '8px 15px', cursor: 'pointer' }}>Levantar</button>
      </div>

    </div>
  );
}

export default Multibanco;