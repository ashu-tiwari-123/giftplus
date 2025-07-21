import { useState } from "react";
import AppRoutes from "./routes/routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import GiftLoader from "./components/GiftLoader.jsx";

function App() {

  return (
    <>
      {/* <GiftLoader /> */}
      <ScrollToTop />
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
