import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NoteModal from "../NoteModal.js";

jest.mock("../toolbar/Toolbar");
let props = {
  isOpen: true,
  closeModal: jest.fn(),
  title: "title",
  deleted: false,
  handleChange: jest.fn(),
  label: ["label"],
  body: "body",
};

describe("NoteModal", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("calls handleChange", () => {
    render(<NoteModal {...props} />);
    userEvent.type(screen.getByPlaceholderText("Title"), "a");
    userEvent.type(screen.getByPlaceholderText(/start here/i), "a");

    expect(props.handleChange).toBeCalledTimes(2);
  });

  it("shows props correctly as input value", () => {
    render(<NoteModal {...props} />);
    const title = screen.getByPlaceholderText("Title");
    const body = screen.getByPlaceholderText(/start here/i);

    expect(title).toHaveValue("title");
    expect(body).toHaveValue("body");
  });

  it("should note call handleChange when deleted is true", () => {
    props.deleted = true;
    render(<NoteModal {...props} />);
    const title = screen.getByPlaceholderText("Title");
    const body = screen.getByPlaceholderText(/start here/i);
    userEvent.type(title, "a");
    userEvent.type(body, "a");

    expect(props.handleChange).not.toBeCalled();
    expect(title).toBeDisabled();
  });
});
