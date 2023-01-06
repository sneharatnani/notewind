import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pin from "../Pin.js";

let pinned = true;
let pinNote;

describe("pin", () => {
  beforeEach(() => {
    pinNote = jest.fn(() => (pinned = !pinned));
  });

  it("shows 'unpin note' title if pinned is true", () => {
    render(<Pin pinned={pinned} pinNote={pinNote} />);
    expect(screen.getByTitle(/unpin note/i)).toBeInTheDocument();
  });

  it("changes pinned value onClick", () => {
    render(<Pin pinned={pinned} pinNote={pinNote} />);
    userEvent.click(screen.getByRole("button"));
    expect(pinned).toBeFalsy();
  });

  it("shows 'pin note' title if pinned is false", () => {
    render(<Pin pinned={pinned} pinNote={pinNote} />);
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByTitle(/pin note/i)).toBeInTheDocument();
  });
});
