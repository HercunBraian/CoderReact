import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartItem = ({ id, img, nombre, quantity, precio }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }
    return (
        <>
    <tr>
      <th className="text-center text-uppercase"><img className="rounded-circle checkoutImg" src={img} alt={nombre} /></th>
      <th className="text-center text-uppercase">{nombre}</th>
      <th className="text-center">{quantity}</th>
      <th className="text-center">${precio}</th>
      <th className="text-center">${precio * quantity}</th>
      <th className='d-flex justify-content-center'><button className='ButtonCartItem' onClick={() => handleRemove(id)}>ELIMINAR</button></th>
    </tr>

</>
    )
}

export default CartItem