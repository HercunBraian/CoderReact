import { useState, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)){
        setCart([...cart, productToAdd])
      }
    }

    const removeItem = (id) => {
        const eliminarProducto = cart.filter (prod => prod.id !== id)
        setCart(eliminarProducto)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const prodCantidad = () => {
        let totalCantidad = 0

        cart.forEach(prod => {
            totalCantidad += prod.quantity
        })

        return totalCantidad;
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.precio
        })
        
        return total
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
          accu += prod.quantity
        })
    
        return accu
    }

    return (
        <CartContext.Provider value={{
            cart, 
            addItem,
            removeItem,
            isInCart,
            prodCantidad,
            clearCart,
            getTotal,
            getQuantity
            }}>
            {children}
      </CartContext.Provider>
    )
}

export default CartContext;