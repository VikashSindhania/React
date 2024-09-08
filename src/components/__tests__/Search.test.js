import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react"; // whenever we are using useState & fetch code in any component so we wrap that in act function.
import { BrowserRouter } from "react-router-dom"; // This is imported to fixed this :-) The above error occurred in the <Link> component:
import "@testing-library/jest-dom"; // To use toBeInTheDocument() that why we import this

// When Getting an Error fetch is not defined . then that means "jest" is not have code related to fetch which only browser understand. so for to test it we need to define fetch function in jest.

// This one give me a MOCK Fetch Function  --> global.fetch = jest.fn()

global.fetch = jest.fn(() => {
  return Promise.resolve({
    // First this Fetch is returning a Promise then json() is a function which also returns a Promise.
    json: () => {
      return Promise.resolve(MOCK_DATA); // And in Promise it is resolving Data
    },
  });
});

//it("Should render the Body Component with Search", async () => {
it("Should Search Res List for burger text input", async () => {
  //render(<Body />);

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(12);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  //console.log(searchBtn);
  //expect(searchBtn).toBeInTheDocument();

  // Checking the Trigger Change onChange
  // getByRole is not working or label or placeholder then getByTestId will work.
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } }); // When You need to configure with Event Testing...

  fireEvent.click(searchBtn);

  //Screen should load 2 res ccards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});

test("Should Search Top Rated Restaurant", async () => {
  //render(<Body />);

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(12);

  const includeTopRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(includeTopRatedBtn);

  const includedCardAfterClickedTopRatedBtn = screen.getAllByTestId("resCard");
  expect(includedCardAfterClickedTopRatedBtn.length).toBe(12);
});
