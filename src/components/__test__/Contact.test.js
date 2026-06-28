import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Testcases for Contact page", () => {
  it("Checking whether the Contact component is loading or not", () => {
    render(<Contact />);
    //Querying
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Checking whether the button in the Contact is loading or not", () => {
    render(<Contact />);
    const inputText = screen.getByPlaceholderText("name");
    expect(inputText).toBeInTheDocument();
  });

  it("Checking whether the button in the Contact is loading or not", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Checking submit text", () => {
    render(<Contact />);
    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
  });
});
