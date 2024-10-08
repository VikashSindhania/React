import { LOGO_URL } from "../utils/constant"; //logo_url is a Javascript Constant Variable;
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");

  //Hook Should be called Top...
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Episode- 12 concept .We are here using the Selector . At last Selector is an hook at the end of the day.  "useSelector" --> coming from react redux library.
  // Subscribing to the store using a selector.
  // useSelector give access to the store.
  //(store) --> give us access to the store
  //{store.cart.items} --. what portion of store we need to access.

  const cartItems = useSelector((store) => store.cart.items);
  console.log("CartItems", cartItems); // Whenever we are clicking add button then an action is dispatched which calls the reducer function which updates the slice of the store  and because my header is subscribed to the store using a selector everything is working seamlessly fine.
  // Behind the scene redux is doing lot of things for us. //Playing the role os selector

  // useEffect is called by passing two arguments.one is callback function  (callback) => { ...} and other one id dependency Argument.
  // It will definitely called after initial render.
  useEffect(() => {
    console.log("useEffect called in Header body"); // useEffect is called After everyrendered of that component.Every time of my header component is rendered my useEffect is called.
  }, []); // if no dependency array => useEffect is called on every render. if the dependency array is empty = [] => then useEffect is called on initial render(& just once).
  //when thepage loads.component loads & usesEffect is called.
  //[btnNameReract]. if we update the dependency array like this [btnNameReract] => then it is called everytime when btnNameReact is updated.

  return (
    <div className="flex justify-between bg-pink-400 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        {/* <img className="logo" src="http://www.google.com" alt="foodLogo"></img> */}
        <img className="w-56" src={LOGO_URL} alt="foodLogo"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "connected" : "disconnected"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          {/* <a href = "/about">About Us</a>      --> Its reload the component when navigating*/}
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* this link --> SuperPower of React will navigate to the page instead
            of Reloading the component. here Link is a componnent just changing the component */}
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>

          <li className="px-4 font-bold">{loggedInUser}</li>
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

// Below code is before Tailwind CSS concept...

// import { LOGO_URL } from "../utils/constant"; //logo_url is a Javascript Constant Variable;
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Header = () => {
//   let btnName = "Login";

//   const [btnNameReact, setBtnNameReact] = useState("Login");
//   console.log("Header Render");

//   //Hook Should be called Top...
//   const onlineStatus = useOnlineStatus();

//   // useEffect is called by passing two arguments.one is callback function  (callback) => { ...} and other one id dependency Argument.
//   // It will definitely called after initial render.
//   useEffect(() => {
//     console.log("useEffect called in Header body"); // useEffect is called After everyrendered of that component.Every time of my header component is rendered my useEffect is called.
//   }, []); // if no dependency array => useEffect is called on every render. if the dependency array is empty = [] => then useEffect is called on initial render(& just once).
//   //when thepage loads.component loads & usesEffect is called.
//   //[btnNameReract]. if we update the dependency array like this [btnNameReract] => then it is called everytime when btnNameReact is updated.

//   return (
//     <div className="header">
//       <div className="logo-container">
//         {/* <img className="logo" src="http://www.google.com" alt="foodLogo"></img> */}
//         <img className="logo" src={LOGO_URL} alt="foodLogo"></img>
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Online Status: {onlineStatus ? "connected" : "disconnected"}</li>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           {/* <a href = "/about">About Us</a>      --> Its reload the component when navigating*/}
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           {/* this link --> SuperPower of React will navigate to the page instead
//             of Reloading the component. here Link is a componnent just changing the component */}
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>

//           <li>
//             <Link to="/grocery">Grocery</Link>
//           </li>

//           <li>Card</li>
//           {/* <button className="login">Login</button> */}
//           <button
//             className="login"
//             // onClick={() => {
//             //   btnName = "Logout";
//             //   console.log(btnName);
//             // }}
//             // onClick={() => {
//             //   setBtnNameReact("Logout"); // setBtnNameReact --> It will refreshed , render the component. it keeps track of useState local state Variable.
//             //   // as u know const will not let you assifn anything once defined then how it is updating Again? Reason -> its render the header component from
//             //   //start and its creates a new state variable = "btnNameReact" as compared to the old state variable. this is how the "setBtnNameReact" method is playing its Mechanism.
//             //   //here only button htnl Ui code is getting Modified not any other UI . here its using Recocillation Concept and diff algorithm concept.
//             // }}

//             onClick={() => {
//               btnNameReact === "Login"
//                 ? setBtnNameReact("Logout")
//                 : setBtnNameReact("Login");
//             }}
//           >
//             {btnNameReact}
//           </button>
//         </ul>
//       </div>
//       <div className="footer"></div>
//     </div>
//   );
// };

// export default Header;
