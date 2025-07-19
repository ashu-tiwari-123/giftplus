import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import AdminProvider from "./context/AdminContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      {/* <AdminProvider> */}
      <HelmetProvider>
        <App />
      </HelmetProvider>
      {/* </AdminProvider> */}
    </StrictMode>
  </BrowserRouter>
);
