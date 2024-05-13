import React from "react";
import ReactDOM from "react-dom/client";
import Home from "@/pages/Home/index.jsx";
import App from "@/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App Component={Home} />
  </React.StrictMode>,
);
