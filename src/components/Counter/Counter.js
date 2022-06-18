import { useState} from 'react'


const Count = ({ onAdd, stock, initial = 1}) => {
    const [count, setCount] = useState(initial)
  
    const increment = () =>{
      setCount(count + 1)
    }
  
    const decrement = () =>  {
      if(count > 0) setCount(count -1)
  }
  
  return(
    <div>
              <h1>{count} </h1>
              <button onClick={decrement}>-</button>
              <button onClick={increment}>+</button>
              <button onClick={() => onAdd(count)}>Agregar carrito</button>
    </div>
  )
  }

  export default Count;