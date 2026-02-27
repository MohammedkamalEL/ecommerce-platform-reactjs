import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
      
      toastOptions={{
        className: "border border-gray-100 shadow-lg font-sans",
        duration: 2000,
        position:"top-right"
      }}
    />
    <App />
  </StrictMode>,
);
