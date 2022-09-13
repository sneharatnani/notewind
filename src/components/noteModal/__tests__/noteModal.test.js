import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NoteModal from "../NoteModal.js";

jest.mock("../toolbar/Toolbar");
let isOpen = true;
let closeModal = jest.fn();
let title = "title";
let deleted = false;
let handleChange = jest.fn();
let label = "label";
let body = "body";

describe("NoteModal", () => {
  it("calls handleChange", () => {
    render(
      <NoteModal
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}
        deleted={deleted}
        handleChange={handleChange}
        label={label}
        body={body}
      />
    );

    userEvent.type(screen.getByPlaceholderText("Label"), "a");
    expect(handleChange).toBeCalled();
  });
});
