import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div", //Element Tag Accepted
  { id: "heading" }, // attributes
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "Welcome to React"), //
      React.createElement("h1", {}, "I am an h1 tag"), //
      React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h3", {}, "I am an h3 tag"),
      React.createElement("h4", {}, "I am an h4 tag"),
    ]),
  ]
);
console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("vikash"));

root.render(heading);
