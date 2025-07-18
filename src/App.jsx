import { useState } from "react";
import AppRoutes from "./routes/routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/scrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
