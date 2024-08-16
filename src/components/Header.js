import { LOGO_URL } from "../utils/constant"; //logo_url is a Javascript Constant Variable;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");

  // useEffect is called by passing two arguments.one is callback function  (callback) => { ...} and other one id dependency Argument.
  // It will definitely called after initial render.
  useEffect(() => {
    console.log("useEffect called in Header body"); // useEffect is called After everyrendered of that component.Every time of my header component is rendered my useEffect is called.
  }, []); // if no dependency array => useEffect is called on every render. if the dependency array is empty = [] => then useEffect is called on initial render(& just once).
  //when thepage loads.component loads & usesEffect is called.
  //[btnNameReract]. if we update the dependency array like this [btnNameReract] => then it is called everytime when btnNameReact is updated.

  return (
    <div className="header">
      <div className="logo-container">
        {/* <img className="logo" src="http://www.google.com" alt="foodLogo"></img> */}
        <img className="logo" src={LOGO_URL} alt="foodLogo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <a href = "/about">About Us</a>      --> Its reload the component when navigating*/}
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* this link --> SuperPower of React will navigate to the page instead
            of Reloading the component. here Link is a componnent just changing the component */}
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
