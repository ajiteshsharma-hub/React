import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/mockRestaurantData.json";
import "@testing-library/jest-dom";

it("Should render restaurant card with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Manohar Dairy");
  expect(name).toBeInTheDocument();
});
