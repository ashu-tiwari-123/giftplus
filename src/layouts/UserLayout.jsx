import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[80vh]  py-6">
        <Outlet />
      </main>
     <footer>
        <Footer/>
     </footer>
    </>
  );
};

export default UserLayout;
