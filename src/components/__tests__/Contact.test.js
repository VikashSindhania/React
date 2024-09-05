//  for To test any component First you have to render that component in jsdom then can proceed
// test ("Mention the description", () => {})

import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should Load contact us component", () => {
  render(<Contact />); // First We are Rendering the Contact Component
  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

//Testing For Button Side
test("Should Load button  inside Contact component", () => {
  render(<Contact />); // First We are Rendering the Contact Component
  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument();
});

//Testing For Button Side
test("Should Load button  inside Contact component", () => {
  render(<Contact />); // First We are Rendering the Contact Component
  //const button = screen.getByRole("Submit");    ---> This Will Throw an Error and the test cases will fail
  //const button = screen.getByText("submit");  // this will throw an error and the test cases will fail
  const button = screen.getByText("Submit");

  //Assertion
  expect(button).toBeInTheDocument();
});

//Testing For Input  Side
test("Should Load Input Name inside Contact component", () => {
  render(<Contact />); // First We are Rendering the Contact Component

  const inputName = screen.getByPlaceholderText("name");

  //Assertion
  expect(inputName).toBeInTheDocument();
});

//Now if Need to Test for multiple Input then this how i can perform the test

test("Should Load 2 input boxes on the Contact Component", () => {
  render(<Contact />); // First we are Rendering the Contact Component
  //Quering
  const inputBoxes = screen.getAllByRole("textbox"); // When there will  be multiple Items you can access with "All"

  //console.log(inputBoxes);

  //Assertion
  expect(inputBoxes.length).toBe(2);
});
