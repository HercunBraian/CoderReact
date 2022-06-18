import "./Item.css";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../../App";

const Item = ({ id, nombre, precio, img }) => {
  return (
      
    <div className="itemCard">
      <img className="itemImg" src={img} alt={nombre} />
      <p>{nombre}</p>
      <p><span>$</span>{precio}</p>
      <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
    </div>
  );
};

export default Item;
