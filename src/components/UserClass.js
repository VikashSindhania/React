import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "user",
        location: "defaultLocation",
        avatar_url: "https://dummy.com",
      },
    };
  }

  // Once the render phase is completed and DOM is updated, then API Phase will be called with the help of Lifecycle componentDidMount...
  async componentDidMount() {
    const fetchData = await fetch("https://api.github.com/users/vikash");
    const json = await fetchData.json();
    console.log("jsonData", json); // Changed from jsonData to json

    this.setState({ userInfo: json }); // Updating Cycle started before its Mounting phase
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // The render method should be inside the class
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>

        <h4>Contact: 9430047564</h4>
      </div>
    );
  }
}

export default UserClass; // Don't forget to export your component

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log(props);
//     this.state = {
//       //this state variable is a big object which contains all the state variables you create in the component
//       count: 0,
//       count1: 1,
//     };

//     console.log(this.props.name + "child Constructor"); // -----3 child called by Parent About.js
//   }

//   componentDidMount() {
//     console.log(this.props.name + "Child Component Did Mount"); //---5  see About.js vb
//     //Api calls this method
//   }
//   render() {
//     // -----4 child Render called
//     console.log(this.props.name + "child render");
//     const { count, count1 } = this.state;
//     const { name, location } = this.props;
//     return (
//       <div className="user-card">
//         <h2>Name : classAkshay</h2>
//         <h3>Location : Dehradun</h3>
//         <h4>Contact: @akshaymarch7</h4>
//         <h5>Passing Props in Class: {this.props.name}</h5>
//         <h5>Passing Props in Class location: {this.props.location}</h5>
//         <h5>Passing Props in Class: {name}</h5>
//         <h5>Passing Props in Class location: {location}</h5>
//         <h2>Count in Class : {this.state.count}</h2>
//         <h2>Count in Class : {count}</h2>
//         <h3>Count in Class : {count1}</h3>
//         <button
//           onClick={() => {
//             this.state.count = this.state.count + 1; // NEVER UPDATE STATE VARIABLES DIRECTLY
//           }}
//         >
//           Count Increase
//         </button>

//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//               count1: this.state.count1 + 2,
//             });
//           }}
//         >
//           Count Increase Working
//         </button>
//       </div>
//     );
//   }
// }

//export default UserClass;

{
  /* <button>
  Click=
  {() => {
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count1: this.state.count1 + 1, // NOT LIKE THIS
    });
  }}
</button>; */
}
