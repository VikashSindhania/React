import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      //this state variable is a big object which contains all the state variables you create in the component
      count: 0,
      count1: 1,
    };

    console.log(this.props.name + "child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    //Api calls this method
  }
  render() {
    console.log(this.props.name + "child render");
    const { count, count1 } = this.state;
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Name : classAkshay</h2>
        <h3>Location : Dehradun</h3>
        <h4>Contact: @akshaymarch7</h4>
        <h5>Passing Props in Class: {this.props.name}</h5>
        <h5>Passing Props in Class location: {this.props.location}</h5>
        <h5>Passing Props in Class: {name}</h5>
        <h5>Passing Props in Class location: {location}</h5>
        <h2>Count in Class : {this.state.count}</h2>
        <h2>Count in Class : {count}</h2>
        <h3>Count in Class : {count1}</h3>
        <button
          onClick={() => {
            this.state.count = this.state.count + 1; // NEVER UPDATE STATE VARIABLES DIRECTLY
          }}
        >
          Count Increase
        </button>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 2,
            });
          }}
        >
          Count Increase Working
        </button>
      </div>
    );
  }
}

export default UserClass;

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
