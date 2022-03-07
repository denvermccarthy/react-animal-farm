import React from 'react';
import Animal from '../Animal/Animal';
import { animals } from '../../data.js';
import './Main.css';
import background from '../../background.png';
export default function Main() {
  return (<main style={{ backgroundImage: `url(${background})` }}>
    {animals.map((animal) => (
      <Animal key={animal.id} type={animal.type} name={animal.name} says={animal.says} top={animal.top} left={animal.left} />
    ))}
  </main>);
}
