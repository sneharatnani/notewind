import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LabelContainer from "../label/LabelContainer.js";

jest.mock("../label/Label.js");
jest.mock("../../../../assets/icons/LabelIcon.js");
let label = ["a", "b"];
let deleteLabel = jest.fn();
let addNewLabel = jest.fn();

describe("LabelContainer", () => {
  it("should not render label options if showLabels is not called", () => {
    render(
      <LabelContainer
        label={label}
        deleteLabel={deleteLabel}
        addNewLabel={addNewLabel}
      />
    );
    expect(
      screen.queryByPlaceholderText("Enter label name")
    ).not.toBeInTheDocument();
  });

  it("calls setShowLabels correctly and renders all labels", () => {
    render(
      <LabelContainer
        label={label}
        deleteLabel={deleteLabel}
        addNewLabel={addNewLabel}
      />
    );
    userEvent.click(screen.getByTestId("show labels"));
    expect(screen.getByPlaceholderText("Enter label name")).toBeInTheDocument();
  });

  it("new label button should be disabled if input is empty", () => {
    render(
      <LabelContainer
        label={label}
        deleteLabel={deleteLabel}
        addNewLabel={addNewLabel}
      />
    );
    userEvent.click(screen.getByTestId("show labels"));
    expect(screen.getByTestId("new-label-btn")).toBeDisabled();

    userEvent.type(screen.getByRole("textbox"), "new label");
    expect(screen.getByTestId("new-label-btn")).not.toBeDisabled();
  });
});
