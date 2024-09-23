import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App.jsx";
import "./index.css"; // Make sure this line is present
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./store/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
