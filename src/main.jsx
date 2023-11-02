import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Gallery from "./pages/Gallery";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main>
      <Gallery />
      <Toaster />
    </main>
  </React.StrictMode>
);
