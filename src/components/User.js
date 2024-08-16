import { useState } from "react";

const User = (props) => {
  const [count] = useState(0); // Created a Dummy State Variable
  const [count1] = useState(1);

  return (
    <div className="user-card">
      <h2>Name: Akshay</h2>
      <h3>Passing Name: {props.name} </h3>
      <h3>This is Namastei React Web Series</h3>
      <h4>Contact: @akshaymarch7</h4>
      <h2>Count = {count}</h2>
      <h3>Count = {count1}</h3>
    </div>
  );
};

export default User;
