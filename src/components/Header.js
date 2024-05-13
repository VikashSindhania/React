import { LOGO_URL } from "../utils/constant"; //logo_url is a Javascript Constant Variable;
import { useState } from "react";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");

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
          <li>Card</li>
          {/* <button className="login">Login</button> */}
          <button
            className="login"
            // onClick={() => {
            //   btnName = "Logout";
            //   console.log(btnName);
            // }}
            // onClick={() => {
            //   setBtnNameReact("Logout"); // setBtnNameReact --> It will refreshed , render the component. it keeps track of useState local state Variable.
            //   // as u know const will not let you assifn anything once defined then how it is updating Again? Reason -> its render the header component from
            //   //start and its creates a new state variable = "btnNameReact" as compared to the old state variable. this is how the "setBtnNameReact" method is playing its Mechanism.
            //   //here only button htnl Ui code is getting Modified not any other UI . here its using Recocillation Concept and diff algorithm concept.
            // }}

            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Header;
