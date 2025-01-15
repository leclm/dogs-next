'use client';
import { useState } from 'react';

export default function ImcPage() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState('');

  function handleClick() {
    const heightNum = Number(height);
    const weightNum = Number(weight);
    setImc((weightNum / (heightNum * heightNum)).toFixed(2));
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          placeholder="Altura"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Peso"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Calcular
        </button>
      </form>
      <p>O IMC é: {imc}</p>
    </div>
  );
}
