import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserContextProvider from "./context/UserContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
