import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AppContextProvider } from "./contexts/AppContext";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AppContextProvider>
  </BrowserRouter>
);
