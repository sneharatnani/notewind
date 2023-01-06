import NewNote from "./NewNote.js";
import { render, screen } from "@testing-library/react";
import { ToastContext } from "../../context/toastContext.js";
import { UserContext } from "../../context/userContext.js";
import userEvent from "@testing-library/user-event";

jest.mock("../toolbar/Toolbar");

// context
const customRender = (ui) => {
  return render(
    <UserContext.Provider value={{ user: {} }}>
      <ToastContext.Provider
        value={{ setShow: jest.fn(), setMessage: jest.fn() }}
      >
        {ui}
      </ToastContext.Provider>
    </UserContext.Provider>
  );
};

describe("NewNote", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("Should not display modal if isOpen is false", () => {
    customRender(<NewNote />);
    expect(screen.queryByDisplayValue("body")).not.toBeInTheDocument();
  });

  it("Opens and closes modal correctly", () => {
    customRender(<NewNote />);
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
  });

  it("Displays input value correctly", () => {
    customRender(<NewNote />);
    userEvent.click(screen.getByRole("button"));
    const noteTitle = screen.getByPlaceholderText("Title");
    const noteBody = screen.getByPlaceholderText(/start here/i);
    userEvent.type(noteTitle, "A");
    userEvent.type(noteBody, "B");
    expect(noteTitle).toHaveValue("A");
    expect(noteBody).toHaveValue("B");
  });
});
