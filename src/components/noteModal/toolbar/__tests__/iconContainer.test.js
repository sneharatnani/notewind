import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconContainer from "../IconContainer.js";

const handleClick = jest.fn();

test("calls handleClick onClick", () => {
  render(
    <IconContainer handleClick={handleClick}>child element</IconContainer>
  );
  userEvent.click(screen.getByRole("button"));
  expect(handleClick).toBeCalled();
});

test("Shows child element", () => {
  render(
    <IconContainer handleClick={handleClick}>child element</IconContainer>
  );
  expect(screen.getByText(/child element/i)).toBeInTheDocument();
});
