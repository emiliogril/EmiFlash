import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="contenedorCounter">
      <div className="counter">
      <button className="btnCounter" onClick={decrement}>-</button>
      <p>{count}</p>
      <button className="btnCounter" onClick={increment}>+</button>
      <button onClick={() => onAdd(count)} className="goCart">
        Comprar
      </button>
    </div></div>
  );
};

export default ItemCount;