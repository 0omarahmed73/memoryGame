import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ImgsProvider } from "./context/ImgsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ImgsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ImgsProvider>
  </React.StrictMode>
);
