import { render, screen } from "@testing-library/react";
import NoteLabel from "../NoteLabel.js";

test("Shows label prop correctly", () => {
  render(<NoteLabel label="new label" />);
  const labelContainer = screen.getByText("new label");
  expect(labelContainer).toBeInTheDocument();
});
