import React from "react";
import { FcShop } from "react-icons/fc";
import "./nav.css";
import Logo from "./logo.png";

const NavBar = () => {
  return (
    <div>
      <>
        <div className="Nav">
          <div className="NavbarContainer">
            <div className="NavLogo">
              <img src={Logo} />
              <p>Home Food</p>
            </div>
            <div className="NavMenu">
              <ul className="NavItem">
                <li className="NavLinks">HAMBURGUESAS</li>
                <li className="NavLinks">PIZZAS</li>
                <li className="NavLinks">PEZCADO</li>
                <li className="NavLinks">FRUTAS</li>
                <li className="NavLinks">HELADOS</li>
              </ul>
            </div>
            <div className="IconShop">
              <FcShop />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default NavBar;
