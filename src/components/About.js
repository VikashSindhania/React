// What is a Functional component ? --> As simple as a function that returns some piece of JSX.
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  //React.component  --> component
  //class About extends React.Component {                        // this how you also integrate
  constructor(props) {
    super(props);

    console.log("Parent Constructor"); //-----1 Parent
  }

  componentDidMount() {
    //ComponentDidMount is Used to make API calls , Reason-- I want to Quickly Render the component and then called the API to fill the data and then it reRender the component.
    //---6  see UseClass.js
    // Is Used to make API Calls
    console.log("Parent Component Did Mount");
  }

  render() {
    // ----2 Parent
    // render methos will return some piece of JSX
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {/* {(data) => console.log(data)} */}
            {({ loggedInUser }) => <h1 className="text-xl">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namastei React Web Series</h2>
        <UserClass //UserClass is a Component
          name={"Akshay Saini (classes)"}
          location={"Dehradun Class"}
        />
        {/* <UserClass //UserClass is a Component
          name={"Elon Musk (classes)"}
          location={"USA"}
        /> */}
      </div>
    );
  }
}

export default About;

// render() {
//   // ----2 Parent
//   // render methos will return some piece of JSX
//   console.log("Parent Render");
//   return (
//     <div>
//       <h1>About Class Component</h1>
//       <h2>This is Namastei React Web Series</h2>
//       <UserClass //UserClass is a Component
//         name={"Akshay Saini (classes)"}
//         location={"Dehradun Class"}
//       />
//       <UserClass //UserClass is a Component
//         name={"Elon Musk (classes)"}
//         location={"USA"}
//       />
//         <UserClass //UserClass is a Component
//           name={"Elon Musk (classes)"}
//           location={"USA"}
//         />
//     </div>
//   );
// }
// }

// export default About;

//When there are Parent to single  child are there this how the render method is called
/* -Parent Constructor        First constructor then render method is called then  ComponentDidMount is called.
    -Parent render
    - Akshay Constructor
    - Akshay Render
    - Akshay ComponentDidMount

    -Parent ComponentDidMount

     

*/
//class Life Cycle hooks
//When there are multiple children are there this how the render method is called
/* -Parent Constructor        First constructor then render method is called then  ComponentDidMount is called.
    -Parent render
    - Akshay Saini (class) child Constructor
    - Akshay Saini (class) child Render

    -Elon Musk child Constructor
    -Elon Musk child Render
    
    -Akshay Saini (class) child Component Did Mount  of Akshay
    -Elon Musk child component Did mount of Elon

    -Component DidMount of Parent

    //Similarly 
    Parent Constructor
    Parent render

    First Child Constructor
    First Child REnder

    second Child Constructor
    second Child render

    <DOM UPDATED - IN SINGLE BATCH>
    FirstChild component Did Mount
    SecondChild component Did Mount

    Parent ComponentDidMount

*/

// //const About = () => {
// function About() {                                 // Functional Component
//   // As Simple as function
//   return (
//     // return   some piece of JSX
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <User name={"Akshay Saini (function)"} />
//       <UserClass name={"Akshay Saini {Classes}"} location={"Dehradun Class"} />
//     </div>
//   );
// }

// export default About;
