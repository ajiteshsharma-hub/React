import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header";
import AppStore from "../../utils/AppStore";

it("Should render header component with a login button", () => {
  render(
    <Provider store={AppStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render cart component with 0 items", () => {
  render(
    <Provider store={AppStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );
  const cartItems = screen.getByText("Cart(0)");
  expect(cartItems).toBeInTheDocument();
});

it("Should convert login to logout on click", () => {
  render(
    <Provider store={AppStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
