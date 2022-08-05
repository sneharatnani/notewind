import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.css";
import UserContextProvider from "./context/userContext.js";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);
