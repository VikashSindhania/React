import React from "react";
import ReactDOM from "react-dom/client";

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
 
 *
 */

// Functional Component ==. At the end of the day is a Normal Javascript  Function
// Component is like a Function.

const styleCard = {
  // style Card is an object Here
  backgroundColor: "#f0f0f0",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/b0/1e/69/b01e69dfd04399324803c453b0fb9029.jpg"
          alt="foodLogo"
        ></img>
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

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      {"All Javascript code inside in these Curly Braces. "}
      {/* Inline Style ,   we can also write like this style = {{  backgroundColor: "#f0f0f0",}} first Curly Braces there is a Some piece of Javasscript inside it & second curly braces refers an javascript object */}
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"
        alt="res-logo"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian , Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

// Props Are just argument to our function
const Body = () => {
  return (
    // return a Piece of JSX code
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* The Componment which will be always be in Reuse its better to define that functional Component Independently*/}
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

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
