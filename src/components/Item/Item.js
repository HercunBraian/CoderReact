import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="product-item mb-4">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>

      <h6>${precio}</h6>

      <button className="buy-2">
        <Link to={`/detail/${id}`}>Ver detalle</Link>
      </button>
    </div>
  );
};

export default Item;
