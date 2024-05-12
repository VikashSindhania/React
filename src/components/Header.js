import { LOGO_URL } from "../utils/constant"; //logo_url is a Javascript Constant Variable;

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {/* <img className="logo" src="http://www.google.com" alt="foodLogo"></img> */}
        <img className="logo" src={LOGO_URL} alt="foodLogo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Header;
