import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import {Link} from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../services/firebase/index";
import swal from 'sweetalert';
import "../checkout/Checkout.css"

const Checkout = () => {
    
    const { cart, getTotal} = useContext(CartContext)  
    const total = getTotal()
    const [usuario, setUsuario] = useState('');
    const objOrder = {
        buyer: {
            nombre: usuario.nombre,
            direccion: usuario.direccion,
            email: usuario.email,
            telefono: usuario.telefono,
            fecha: new Date(),
        },
        items: cart,
        total: total,
    } 

    const capturarInput = (e) => {
        const {name, value} = e.target
        setUsuario ({...usuario, [name]: value})
    }

    const guardarDatos = (e) => {
        e.preventDefault()
        setUsuario({...objOrder})
    

        swal({
            title: "¿Estas seguro?",
            text: "¡Tu compra se realizara!",
            icon: "info",
            buttons: true,
            dangerMode: false,
          }).then((willDelete) => {
            if (willDelete) {
                const order = collection(db, "orders");
              addDoc(order, objOrder)
                .then(({ id }) => {
                    swal(`¡Tu compra se realizó con éxito!, SU NUMERO DE PEDIDO ES ${id}`, {
                        icon: "success",
                })
                .catch((err) => {
                  console.log(err);
                });
              
              });
              
            } else {
              swal("¡Tu compra se canceló!");
            }
          });
      
          e.target.reset();
        };

    return (
        <div className="container minHeight my-5">
          <div className="row">
            <div className="col-md-12">
              <h1>Completá tus datos</h1>
              <hr />
              <div className="row">
                <form onSubmit={guardarDatos}>
                  <div className="row">
                    <div className="col-6 col-md-6 col-4">
                      <div className="form-group">
                        <label>Nombre</label>
                        <input
                          onChange={capturarInput}
                          name="nombre"
                          type="text"
                          className="form-control"
                          id="nombre"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Telefono</label>
                        <input
                          onChange={capturarInput}
                          type="number"
                          name="telefono"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Direccion</label>
                        <input
                          onChange={capturarInput}
                          type="text"
                          name="direccion"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          onChange={capturarInput}
                          type="email"
                          name="email"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group my-3">
                        <button class="btn btn-outline-danger me-3 checkout"><Link className="text-decoration-none " to="/">VOLVER</Link></button>
                        <button className="btn btn-outline-success">ENVIAR</button>
                      </div>
                    </div>
                    <div className="col-6 col-md-6">
                      <ul className="list-group">
                        <label>Productos</label>
    
                        {cart.map((products, index) => (
                          <li key={products.id} className="list-group-item">
                            <div className="row">
                              <div className="col-md-2">
                                {<img className="rounded-circle checkoutImg" src={products.img} alt={products.nombre} />}
                              </div>
                              <div className="col-md-6">
                                <h5>{products.nombre}</h5>
                              </div>
                              <div className="col-md-2">
                                { <p>{products.quantity}</p>}
                              </div>
                              
                              <div className="col-md-2">
                                <p>$ {products.precio * products.quantity} </p>
                              </div>
                            </div>
                          </li>
                          
                        ))}
                      </ul>
                      <div className="d-flex justify-content-center contTotal">
                        <div className=" text-center col-md-6 mt-2"> <h3>TOTAL:</h3></div>
                        <div className=" text-center col-md-6 mt-2"> <h3>${getTotal()}</h3></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <hr />
            </div>
          </div>
        </div>
      );
    };
    export default Checkout;