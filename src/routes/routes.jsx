import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home";
import AboutPage from "../pages/About";
import ServicesPage from "../pages/Services";
import ContactPage from "../pages/Contact";
import Error404 from "../components/Error";
import ComingSoon from "../components/ComingSoon";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="coming-soon" element={<ComingSoon />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
