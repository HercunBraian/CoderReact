import React, { useState, useContext } from "react";
import Count from "../Counter/Counter";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import NotificacionContext from "../notification/Notificacion";



const ItemDetail = ({ id, nombre, precio, img }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)

  const setNotification = useContext(NotificacionContext)

  const handeOnAdd = (quantity) =>{
    setNotification('error',`Se agregron ${quantity} ${nombre}`, 3)
    addItem({id, nombre, precio, quantity})
    setQuantityAdded(quantity)
  }

  return (
    <div className="itemList">  
    <div className="itemCard">
      <img className="itemImg" src={img} alt={nombre} />
      <p>{nombre}</p>
      <p><span>$</span>{precio}</p>
      { quantityAdded === 0 ? <Count onAdd={handeOnAdd}/> : <Link to='/cart'>Terminar  Compra</Link>
      }
      
        </div>
        </div>
  );
};

export default ItemDetail;