// What is a Functional component ? --> As simple as a function that returns some piece of JSX.
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  //class About extends React.Component {                        // this how you also integrate
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    // Is Used to make API Calls
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namastei React Web Series</h2>
        <UserClass //UserClass is a Component
          name={"Akshay Saini (classes)"}
          location={"Dehradun Class"}
        />
        <UserClass //UserClass is a Component
          name={"Elon Musk (classes)"}
          location={"USA"}
        />
      </div>
    );
  }
}

export default About;
/* -Parent Constructor
    -Parent render
    - Akshay Constructor
    - Akshay Render

    -Elon Constructor
    -Elon Render
    
    -Component Did Mount  of Akshay
    -component Did Unmount of Elon

    -Component DidMount of Parent

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
