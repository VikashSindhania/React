import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement creates an => object for u  => root.render takes and convert it to the html and push it to the browser.
//React.createElement ==> ReactElement ==> JS Object => HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX - HtM like or XML-like syntax; html + js
//JSX - JSX is different & React is different

//JSX (transpiled before it reaches the JS) - doing by PARCEL -->
// --> Babel(compiling the code to understand the browser Understand & our React also Understand)

// JSX Works => Uses React.createElement ==> after that converted it into React Element ==> Which is JS object ==> finally HTMLElement(render) it.
//Above JSX conversion  is done by Babel at each step Conversion
//const jsxHeadingOne = <h1 id="heading">Namaste React using JSX </h1>;
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeadingOne); //in this render we are rendering React Element like this not Functional Component We can render like this.
//root.render(<HeadingComponent />); // Functional Component render like this

//React Element
const jsxHeading = (
  <h1
    id="heading"
    className="head" // you have to follow Camel Case
    tabIndex="5"
  >
    Namaste React using JSX
  </h1>
);

const fn1 = () => true; // This means that function is returning an true;
const fn2 = () => {
  return true;
}; // This means that function is returning an true;

//React Component
//Class Based Component  -- Old Way of Writing Code
//Functional Based Component -- New Way of Writing Code

const HeadingComponent = () => {
  return <h1 className="heading">Namaste React using Functional Component</h1>;
};
const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(<HeadingComponent />);

const HeadingComponent2 = () => (
  <h1 className="heading">Namaste React using Functional Component2</h1>
);

const HeadingComponent3 = () => (
  <div id="heading">
    <h1 className="heading">Namaste React using Functional Component2</h1>
  </div>
);

//React Functional Component
//Functional Component -->  A function which is returning an piece of JSX is known as React Functional Component.
//Functional Component --> is a  normal JavaScript Function that returns React Elememt & piece of JSX Code.

//React Functional Component {
const HeadingComponent4 = () => (
  // starting letter should be Capital in case of Functional Component
  <h1
    id="heading"
    className="head" // you have to follow Camel Case
    tabIndex="5"
  >
    Namaste React using JSX
  </h1>
);
//}

//React Element
// -->
const HeadingComponent5 = (
  <h1
    id="heading"
    className="head" // you have to follow Camel Case
    tabIndex="5"
  >
    Namaste React using JSX
  </h1>
);
// // <--

//Below code is Known as Component Composition
const TitleA = () => (
  <h1 className="heads" tabIndex="5">
    Namaste React Using JSX....
  </h1>
);

const HeadingFunctionalComponent = () => (
  // Added parentheses here
  <div id="heading">
    <Title /> or <Title></Title>
    <h1 className="heading">Welcome!</h1>
  </div>
); // Added semicolon here

const roote = ReactDOM.createRoot(document.getElementById("root"));
//console.log(HeadingFunctionalComponents);

roote.render(<HeadingFunctionalComponent />);

//Now With React Element

const elem = <span>React Element :)</span>;

const Title = () => (
  // This title here is behaving as an Functional Component.
  <h1 className="heads" tabIndex="5">
    Hello Namaste React Using JSX....
  </h1>
);

const title = // This title here is behaving as an React Element.
  (
    <h1 className="head" tabIndex="5">
      {elem}
      Namaste React Using JSX....
    </h1>
  );
const number = 1000;

const HeadingFunctionalComponents = () => (
  // Added parentheses here
  <div id="container">
    {number} //Any Javascipt Code you write inside this Curly Braces! And it
    will comes down as an HTML.
    {title}
    {Title()}
    {100 + 120}
    {console.log("Javascript code you are Writing Insisde HTML")}
    <h1 className="heading">Welcome!</h1>
  </div>
); // Added semicolon here

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(HeadingFunctionalComponents);

root.render(<HeadingFunctionalComponents />);
