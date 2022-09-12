import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pencil from "../Pencil.js";

const setOpen = jest.fn();

test("calls setOpen correctly", () => {
  render(<Pencil setOpen={setOpen} />);
  userEvent.click(screen.getByRole("button"));
  expect(setOpen).toBeCalled();
});
