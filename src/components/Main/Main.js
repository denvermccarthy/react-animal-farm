import React from 'react';
import Animal from '../Animal/Animal';
import { animals } from '../../data.js';
import './Main.css';

export default function Main() {
  return (<main style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)` }}>
    {animals.map((animal) => (
      <Animal key={animal.id} type={animal.type} name={animal.name} says={animal.says} top={animal.top} left={animal.left} />
    ))}
  </main>);
}
