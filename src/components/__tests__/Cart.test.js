import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockMenuData.json"; // In Place of MOCK_DATA you can write any Name  . the code in this file is default exported.
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appstore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("should Load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter> //<Provider><Your Required Component/></Provider> Fix this Error: Could not find react-redux context value
    );
  });

  //You need to test Restauant Menu Accorduion Functionality Working Properly...

  // My First step to find the button "Biryani" How ?

  const accordionHeader = screen.getByText("Biryani(5)");
  fireEvent.click(accordionHeader);

  // Now testing Through JEST confirming that there are 5 items in the Biryani list or not how ?

  const accordionBiryaniItems = screen.getAllByTestId("foodItems");
  expect(accordionBiryaniItems.length).toBe(5);

  //Now Finding the Multiple Add button related to defined in each item
  const addBtns = screen.getAllByRole("button", { name: "Add +" }); // If need to find single button then you can Access by "getByRole"
  //console.log(addBtns.length);
  fireEvent.click(addBtns[0]); // We click like this on testing Library

  // Now Will Need Header Component to integrate so that I can trace the value of the CART.   so this flow need Integration testing where multiple components are included in one test.
  expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();

  //Next
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();

  //   expect(screen.getByText("Cart-(3 items)")).toBeInTheDocument();
  //   fireEvent.click(addBtns[2]);            // Will Give Error Like this

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(
    screen.getByText("Cart is empty. Add Items to the cart!")
  ).toBeInTheDocument();
});
