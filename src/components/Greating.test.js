import { render, screen } from "@testing-library/react";
import Greeting from "./Greating";
import userEvent from "@testing-library/user-event";

// group tests by describe
describe("Greeting Component", () => {
  test("Render 'Hello World' as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //...
    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Render 'good to see you' if button was not clicked", () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("Render 'Changed if button was not clicked", () => {
    //Arrange
    render(<Greeting />);

    // ACT
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("Does not Render 'good to see you' if button was clicked", () => {
    //Arrange
    render(<Greeting />);

    // ACT
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
