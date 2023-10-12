import "./Header.scss";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo pic" />
        <h1 className="header__title">bornxbred</h1>

        {/* Menu Icon */}
        <FontAwesomeIcon
          className="header__bars"
          icon={faBars}
          onClick={toggleMenu}
        />

        {/* Cart and User Icon */}
        <div className="header__icon">
          <FontAwesomeIcon className="header__cart" icon={faShoppingCart} />
          <FontAwesomeIcon className="header__user" icon={faUser} />
        </div>

        {isMenuOpen && (
          <nav className="header__nav">
            <ul>
              <li className="header__navlink">
                <a href="#home">Home</a>
              </li>
              <li className="header__navlink">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
