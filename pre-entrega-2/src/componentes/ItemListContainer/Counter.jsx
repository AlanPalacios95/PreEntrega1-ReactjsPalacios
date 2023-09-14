import { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState (0);

  const sumar = ( ) => {
    setNumber(number + 1 );
  }

  const restar = () => {
   setNumber(number -1 );
  }

  return (
    <div>
      <button onClick={sumar}>+</button>
      <span>{number}</span>
      <button onClick={restar}>-</button>

    </div>
  )
}

export default Counter;