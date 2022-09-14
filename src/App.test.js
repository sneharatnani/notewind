import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import App from "./App.js";
import { UserContext } from "./context/userContext.js";

jest.mock("./components/Spinner.js", () => () => {
  return <p>Spinner</p>;
});

jest.mock("./section/UnauthenticatedApp.js", () => () => {
  return <p>UnauthenticatedApp</p>;
});

jest.mock("./section/AuthenticatedApp.js", () => () => {
  return <p>AuthenticatedApp</p>;
});

const customRender = (ui, { providerProps }) => {
  return render(
    <UserContext.Provider value={providerProps}>{ui}</UserContext.Provider>
  );
};

let providerProps = {
  user: "ria",
  setUser: jest.fn(),
};

describe("App", () => {
  beforeEach(() => {
    jest.mock("./context/toastContext.js");
    jest.mock("./firebase-config.js");
    jest.mock("firebase/auth");
  });

  it("shows Spinner on load", () => {
    customRender(<App />, { providerProps });
    expect(screen.getByText("Spinner")).toBeInTheDocument();
  });

  it("shows AuthenticatedApp if user is not null", async () => {
    customRender(<App />, { providerProps });
    await waitFor(() => {
      expect(screen.getByText("AuthenticatedApp")).toBeInTheDocument();
    });
  });

  it("shows UnauthenticatedApp if user is null", async () => {
    providerProps.user = null;
    customRender(<App />, { providerProps });
    await waitFor(() => {
      expect(screen.getByText("UnauthenticatedApp")).toBeInTheDocument();
    });
  });
});
