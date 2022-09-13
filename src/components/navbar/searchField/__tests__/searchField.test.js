import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchField from "../SearchField.js";

jest.mock("../../../../assets/icons/SearchIcon");
jest.mock("../../../../assets/icons/XIcon");

let query = "";
const setQuery = jest.fn();

describe("searchField", () => {
  it("calls setQuery on change", () => {
    render(<SearchField query={query} setQuery={setQuery} />);
    const input = screen.getByPlaceholderText("Search");
    userEvent.type(input, "hello");
    expect(setQuery).toBeCalled();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should show clear searchField button if query is true", () => {
    query = "hello";
    render(<SearchField query={query} setQuery={setQuery} />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    userEvent.click(screen.getByRole("button"));
    expect(setQuery).toBeCalledTimes(1);
  });
});
