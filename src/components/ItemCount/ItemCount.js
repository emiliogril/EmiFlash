import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  if (stock === 0) {
    return (
      <button className="Option" disabled>
        No hay stock
      </button>
    );
  }

  return (
    <div className="contenedorCounter">
      <div className="counter">
        <button className="btnCounter" onClick={decrement}>
          -
        </button>
        <p>{count}</p>
        <button className="btnCounter" onClick={increment}>
          +
        </button>
        <button onClick={() => onAdd(count)} className="goCart">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
