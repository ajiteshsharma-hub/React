import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockRestaurantMenu.json";
import AppStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should test the functionality of restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );

  const accordion = screen.getByText("Soup (2)");
  fireEvent.click(accordion);

  expect(screen.getAllByTestId("foodItems").length).toBe(2);

  const addBtns = screen.getAllByRole("button", { name: "add+" });
  expect(addBtns.length).toBe(2);
  fireEvent.click(addBtns[0]);

  const cart = screen.getByText("Cart(1)");
  expect(cart).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart(2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(4);

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartBtn);

  expect(screen.getAllByTestId("foodItems").length).toBe(2);
});
