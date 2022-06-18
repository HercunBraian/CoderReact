import React from "react";
import { FcShop } from "react-icons/fc";
import "./nav.css";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const NavBar = () => {

  const {prodCantidad} = useContext(CartContext)

  const totalCantidad = prodCantidad()
  return (
    <div>
      <>
        <div className="Nav">
          <div className="NavbarContainer">
            <div className="NavLogo">
              <img src={Logo} />
              <Link to='/' ><p>House Food</p></Link>
            </div>
            <div className="NavMenu">
              <ul className="NavItem">
                <Link to='/category/hamburguesas' className="NavLinks">HAMBURGUESAS</Link>
                <Link to='/category/pezcado'  className="NavLinks">PEZCADO</Link>
                <Link to='/category/frutas'  className="NavLinks">FRUTAS</Link>
                <Link to='/category/helado' className="NavLinks">HELADOS</Link>
              </ul>
            </div>
            <div className="IconShop">
              <FcShop /> {totalCantidad}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default NavBar;
