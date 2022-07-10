import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import "../ItemListContainer/ItemListContainer.css";

const Cart = () => {
  const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext);

  if (getQuantity() === 0) {
    return       <div class="text-center mt-5 mb-5">
    <h2 class="linea">
      <span>CARRITO DE COMPRAS VACIO</span>
    </h2>
  </div>
  }

  return (
    <div>
      <div class="text-center mt-5 mb-5">
        <h2 class="linea">
          <span>CARRITO DE COMPRAS</span>
        </h2>
      </div>
      <div className="container">
        <ReactBootstrap.Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center text-uppercase">#</th>
              <th className="text-center text-uppercase">Producto</th>
              <th className="text-center text-uppercase">Cantidad</th>
              <th className="text-center text-uppercase">Precio x Unid</th>
              <th className="text-center text-uppercase colSm">Sub Total</th>
              <th className="text-center text-uppercase colSm">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((p) => (
              <CartItem key={p.id} {...p} />
            ))}
            <tr>
              <td colSpan={3}></td>
              <td className="text-center">
                <h4>TOTAL:</h4>
              </td>
              <td className="text-center">
                <h4>${getTotal()}</h4>
              </td>
            </tr>
            <tr>
              <td colSpan={4}></td>
              <td className="text-center">
                <button
                  class="btn btn-outline-danger"
                  onClick={() => clearCart()}
                >
                  Limpiar carrito
                </button>
              </td>
              <td className="text-center">
                <button class="btn btn-outline-success buttonOrder">
                  <Link
                    className="text-decoration-none buttonOrder"
                    to="/checkout"
                  >
                    Generar Orden
                  </Link>
                </button>
              </td>
            </tr>
          </tbody>
        </ReactBootstrap.Table>
      </div>
    </div>
  );
};

export default Cart;
