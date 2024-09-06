import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

test("Should Render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resListData={MOCK_DATA} />); //check with the prop data
  //console.log("MOCK_DATA", MOCK_DATA),

  const name = screen.getByText("Paratha Wala");
  expect(name).toBeInTheDocument();
});

// test("Should Render RestaurantCard component with Promoted Label", () => {
//   // HOMEWORK -test HOC : withPromotedLabel()
//   render(<withPromotedLabel RestaurantCard />); //check with the prop data
//   //console.log("MOCK_DATA", MOCK_DATA),

//   const name = screen.getByText("Promoted");
//   expect(name).toBeInTheDocument();
// });
