import React from "react";
import { FcShop } from "react-icons/fc";
import "./nav.css";
import Logo from "./navlogo.webp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {

  const {totalCantidad} = useContext(CartContext)

  return (
    <div>
      <>
        <div className="Nav">
          <div className="NavbarContainer">
            <div className="NavLogo">
              <Link to='/' ><img src={Logo} /></Link>
            </div>
            <div className="NavMenu">
              <ul className="NavItem">
                <Link to='/category/PERIFERICOS' className="NavLinks">PERIFERICOS</Link>
                <Link to='/category/GABINETES'  className="NavLinks">GABINETES</Link>
                <Link to='/category/CONSOLAS'  className="NavLinks">CONSOLAS</Link>
                <Link to='/category/PCGAMER' className="NavLinks">PC GAMERS</Link>
              </ul>
            </div>
            <div className="CartShop">
            <Link to="cart" className={totalCantidad !== 0 ? 'buttonShop visible' : 'invisible' } >
        <span className="spanCounter"><FaShoppingCart className="iconShop" />Cart ({ totalCantidad }) </span>
        </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default NavBar;
