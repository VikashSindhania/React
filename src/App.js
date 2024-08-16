import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // RouterProvider will provide our routing configuration "appRouter" to our app
import RestaurantMenu from "./components/RestaurantMenu";

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

{
  /* <Header />                   // Before Routing Integration I am going like this...
      <Body /> */
}
{
  /* if path = / */
}
{
  /* <Body /> */
}

{
  /* if path = /about */
}
{
  /* <About />     Then Load the About Component*/
}

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* Routes component will be replaced by this outlet */}
      <Outlet />
    </>
  );
};

//We are creating our router configuration inside our App Router.
//routerCongiguration means --> an information that will tell browser Router what will happen on specific paths.

const appRouter = createBrowserRouter([
  // createBrowserRouter -->  it takes a list of path.path is an object ...
  {
    path: "/",
    element: <AppLayout />, //Every Page is a component.
    children: [
      // Adding children key  like this will not loose your Header Component.It will render below Header

      {
        path: "/", // when my path is / then its load the Body component
        element: <Body />,
      },

      {
        path: "/about", // if my path is /about
        element: <About />, // then load my About component
      },
      {
        path: "/contact", // if my path is /contact
        element: <Contact />, // then load my About component
      },
      {
        path: "/restaurants/:resId", // resId is dynamic here. We use like this for dynamic Routings
        element: <RestaurantMenu />,
      },
    ], //
    errorElement: <Error />, // if There is an error then load the error Component. if it not find the "/" path then this Error component will rendered.
  },
  // {
  //   path: "/about", // if my path is /about
  //   element: <About />, // then load my About component
  // },
  // {
  //   path: "/contact", // if my path is /about
  //   element: <Contact />, // then load my About component
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />); // When we are not defined Routing configuration then this is how it is rendering the App.

root.render(<RouterProvider router={appRouter} />); //This is how We Define different routes in React

{
  /* */
}

// App.js is our root component of our Project. its Standard Way of Writing code in Industry Era.
