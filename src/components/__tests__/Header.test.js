import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appstore";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should Load Header Component with a Login Button", () => {
  render(
    // Similarly jsdom also didn't understand the link so it's included from different library

    <BrowserRouter>
      <Provider store={appStore}>
        {/* Our js dom read JSX code, React Code,js code but to read redux react
      code we need to define the store. */}
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByRole("button");
  //const loginButton = screen.getByText("button");

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();

  const cartItems = screen.getByText("Cart-(0 items)");
  expect(cartItems).toBeInTheDocument();
});

test("Should Load Header Component With a Cart", () => {
  render(
    // Similarly jsdom also didn't understand the link so it's included from different library

    <BrowserRouter>
      <Provider store={appStore}>
        {/* Our js dom read JSX code, React Code,js code but to read redux react
        code we need to define the store. */}
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const cartItems = screen.getByText("Cart-(0 items)");
  const cartItems = screen.getByText(/Cart/); // We can pass Regex here also so it will behave like dynamic
  expect(cartItems).toBeInTheDocument();
});

it("Should Change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(logInButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
