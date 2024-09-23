import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App.jsx";
import "./index.css"; // Make sure this line is present
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
