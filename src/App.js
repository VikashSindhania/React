import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * Header
 *   Logo
 *     Nav Items
 * Body
 *    Search
 *      Restaurant Container
 *        Restaurant Card
 *       -Img    
 *        -Name of the Res,Star Rating ,cuisine, 
 * 
 * Footer
 *   Copyright
 *     Links
 *      Address
 *        Contact
 *
 
 *  Best Practice in the Industry to Make a  Seperate Files for Seperate Components. 
 */

// Functional Component ==. At the end of the day is a Normal Javascript  Function
// Component is like a Function.

// --> means of this Syntax here that it can be written like this Here for to understand me
// Props Are just argument to our function; Passing Properties
//<RestaurantCard  resName = "KFC"  cuisine = "Burger, Fast Food"/>   These are Props Which is Passed in the Functional Component
// React Will basically take all these properties or props and Wrap it inside as an object;
// props are an Javascript object now here  and its written  inside curly Braces {}. {} curly Braces we use for Javascript code .
// const RestaurantCard = (props) -->  can Destructure like this cool Developers --> const RestaurantCard = ({resName,cuisine}) => {block of Code}
// <h3>{props.resName}</h3> --> {resName}
//<h4>{props.cuisine}</h4> --> {cuisine}

// From Backened the Data Should be come in JSON format

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

{
  /* */
}
