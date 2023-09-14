import { useState } from "react";
import './card.css';

const Counter = () => {
    const [number, setNumber] = useState (0);

  const sumar = ( ) => {
    setNumber(number + 1 );
  }

  const restar = () => {
   setNumber(number -1 );
  }

  return (
    <div className="counter__div">
      <button className="counter__suma" onClick={sumar}>+</button>
      <span className="counter__numer">{number}</span>
      <button className="counter__resta" onClick={restar}>-</button>
    </div>
  )
}

export default Counter;