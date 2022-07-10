import { useState } from "react";
import './Counter.css';

const Count = ({ onAdd, stock = 20, initial = 1 }) => {
  const [count, setCount] = useState(initial);
    
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
    }
}

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
    }  
}         

    const onadd = () => onAdd(count);

  return (
    <div className="d-flex justify-content-left">
        <button className='resta' onClick={decrement}>-</button>
        <span className='contador'>{count}</span>
        <button className='resta' onClick={increment}>+</button>
        <button className="addCart" onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
  );
};

export default Count;
