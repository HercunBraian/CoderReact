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
    return (
        <CartContext.Provider value={{
            cart, 
            addItem,
            removeItem,
            isInCart,
            prodCantidad
            }}>
            {children}
      </CartContext.Provider>
    )
}

export default CartContext;