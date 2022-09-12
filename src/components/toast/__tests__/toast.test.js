import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toast from "../Toast.js";

const message = "Note deleted";
let show;
let setShow;

describe("Toast", () => {
  beforeEach(() => {
    show = true;
    setShow = jest.fn(() => (show = !show));
  });

  it("Calls setShow correctly", () => {
    render(<Toast show={show} setShow={setShow} message={message} />);
    userEvent.click(screen.getByRole("button"));
    expect(setShow).toBeCalled();
  });

  it("changes show value to false", () => {
    render(<Toast show={show} setShow={setShow} message={message} />);
    userEvent.click(screen.getByRole("button"));
    expect(show).toBeFalsy();
  });

  it("shows message correctly", () => {
    render(<Toast show={show} setShow={setShow} message={message} />);
    expect(screen.getByText("Note deleted")).toBeInTheDocument();
  });
});
