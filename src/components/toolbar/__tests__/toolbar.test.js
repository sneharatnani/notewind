import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toolbar from "../Toolbar.js";

describe("Toolbar", () => {
  it("Shows ColorPalette, pin, archived, label and bin if deleted and archived is false", () => {
    const { container } = render(<Toolbar deleted={false} archived={false} />);
    expect(container).toMatchSnapshot();
  });

  it("Shows delete forever and restore if deleted is true and archived is false", () => {
    render(<Toolbar deleted={true} archived={false} />);
    expect(screen.getByTitle("Delete Forever")).toBeInTheDocument();
    expect(screen.getByTitle("Restore")).toBeInTheDocument();
  });

  it("Shows unarchive if deleted is false and archived is true", () => {
    render(<Toolbar deleted={false} archived={true} />);
    expect(screen.getByTitle("Unarchive")).toBeInTheDocument();
  });

  it("calls closeModal", () => {
    const closeModal = jest.fn();
    render(<Toolbar deleted={false} archived={true} closeModal={closeModal} />);
    userEvent.click(screen.getByTestId("save-note"));
    expect(closeModal).toBeCalled();
  });
});
