import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);