import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.css";
import UserContextProvider from "./context/UserContext.js";
import NotesContextProvider from "./context/NotesContext.js";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <NotesContextProvider>
          <App />
        </NotesContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);
