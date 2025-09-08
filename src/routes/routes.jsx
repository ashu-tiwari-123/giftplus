import { Route, Routes } from "react-router-dom";

// Public Layout & Pages
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home";
import AboutPage from "../pages/About";
import ServicesPage from "../pages/Services";
import ContactPage from "../pages/Contact";
import Error404 from "../components/Error";
import ComingSoon from "../components/ComingSoon";
import PdfViewer from "../pages/PdfViewer";
import AdminLogin from "../admin/pages/AdminLogin";
import AdminRoute from "../admin/components/AdminRoute";
import Dashboard from "../admin/components/Dashboard";
import Partners from "../admin/pages/Partners";
import Gallery from "../admin/pages/Gallery";
import Collections from "../admin/pages/Collections";
import Clients from "../admin/pages/Clients";
import ProductCollections from "../pages/Gallery";

// Admin Pages

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="collection" element={<ProductCollections />} />
        <Route path="pdf/:file" element={<PdfViewer />} />
        <Route path="coming-soon" element={<ComingSoon />} />
      </Route>

      {/* Admin Login
      <Route path="/admin" element={<AdminLogin />} />

      Admin Protected Routes
      <Route path="/admin/dashboard" element={<AdminRoute />}>
        <Route element={<Dashboard/>}>
          <Route path="clients" element={<Clients />} />
          <Route path="partners" element={<Partners />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="collections" element={<Collections />} />
        </Route>
      </Route> */}

      {/* 404 Route */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
