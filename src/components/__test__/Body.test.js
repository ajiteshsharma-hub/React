import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestaurantBody.json";
import { act } from "react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render search component in the body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );
  const searchBtn = screen.getByText("Search");
  expect(searchBtn).toBeInTheDocument();
});

it("Should check the functionality of search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const searchInput = screen.getByTestId("searchInput");
  const searchBtn = screen.getByText("Search");

  fireEvent.change(searchInput, { target: { value: "Manohar" } });
  fireEvent.click(searchBtn);

  const cardAfterSearch = screen.getAllByTestId("resCard");
  console.log(cardAfterSearch.length);

  expect(cardAfterSearch.length).toBe(2);
});

it("Should check the functionality of search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const cardBeforeSearch = screen.getAllByTestId("resCard");
  console.log(cardBeforeSearch.length);

  expect(cardBeforeSearch.length).toBe(8);
});

it("Should check the functionality of search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  console.log(cardsAfterFilter.length);

  expect(cardsAfterFilter.length).toBe(8);
});
