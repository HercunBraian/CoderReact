import React, { useState, useContext } from "react";
import Count from "../Counter/Counter";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import NotificacionContext from "../notification/Notificacion";
import "../Item/Item.css";



const ItemDetail = ({ id, nombre, precio, img, desc, categoria }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)

  const setNotification = useContext(NotificacionContext)

  const handeOnAdd = (quantity) =>{
    setNotification('error',`Se agregron ${quantity} ${nombre}`, 3)
    addItem({id, nombre, precio, img, quantity})
    setQuantityAdded(quantity)
  }

  return (
    <div className="container dark-grey-text mt-5"> 
    <div className="row wow fadeIn">
    <div className="col-md-6 mb-4 d-flex justify-content-center ">
    <img className="imgCard" src={img} alt={nombre} />
    </div>
    <div className="col-md-6 mb-4">
    <div className="p-4">
    <div className="mb-3">
                  <a href="">
                    <span className="badge purple mr-1">{categoria}</span>
                  </a>
                      </div>

                <h2>{nombre}</h2>
                <p>{desc}</p>
                <p className="lead">
                  <span className="fw-bold">Precio: ${precio}</span>
                </p>
      </div>
      
                <div className="d-flex justify-content-left">

                { quantityAdded === 0 ? <Count onAdd={handeOnAdd}/> : <Link className="badge purple comprar" to='/cart'>Terminar  Compra</Link>
      }
                 
                </div>
      
      </div>
      </div>
      </div>
      
      
        
  );
};

export default ItemDetail;