import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo pic" />
        <h1 className="header__title">bornxbred</h1>
        <div>
          <FontAwesomeIcon className="header__cart" icon={faShoppingCart} />
          <FontAwesomeIcon className="header__user" icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default Header;
