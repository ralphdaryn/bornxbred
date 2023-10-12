import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">bornxbred</h1>
      <img className="header__logo" src={logo} alt="logo pic" />
    </div>
  );
};

export default Header;
