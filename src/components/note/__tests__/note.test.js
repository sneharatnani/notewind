import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Note from "../Note.js";

jest.mock("../../NotePreview.js");
jest.mock("./../NoteLabel.js", () => ({ label }) => {
  return <span>{label}</span>;
});

describe("Note", () => {
  it("should show props correctly", () => {
    const { container } = render(
      <Note title="title" body="note body" label={["label"]} bg="bg-white" />
    );

    expect(container).toMatchSnapshot();
  });

  it("calls setIsOpen", () => {
    const setState = jest.fn();
    const useStateMock = (initState) => [initState, setState];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    render(
      <Note title="title" body="note body" label={["label"]} bg="bg-white" />
    );
    userEvent.click(screen.getByTestId("note"));

    expect(setState).toHaveBeenCalledTimes(1);
  });
});
