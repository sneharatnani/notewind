import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ColorPalette from "../ColorPalette.js";

describe("Color Palette", () => {
  it("Shows ColorPalette title", () => {
    render(<ColorPalette />);
    expect(screen.getByTitle(/Background Options/i)).toBeInTheDocument();
  });

  it("Renders ColorPalette onClick", () => {
    render(<ColorPalette />);
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("bg-options")).toBeInTheDocument();
  });
});
