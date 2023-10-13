import "./Header.scss";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo pic" />
        <h1 className="header__title">BORNxBRED</h1>

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

        {menuOpen && (
          <div className="header__overlay">
            {/* Close Button */}
            <FontAwesomeIcon
              className="header__close"
              icon={faTimes}
              onClick={toggleMenu}
            />

            {/* Navigation Menu */}
            <nav className="header__nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a className="nav__link" href="#home" onClick={toggleMenu}>
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#shop" onClick={toggleMenu}>
                    Shop
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#contact" onClick={toggleMenu}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
