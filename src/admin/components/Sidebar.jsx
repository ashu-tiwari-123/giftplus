import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUsers, FaHandshake, FaImages, FaBoxes } from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/admin');
  };

  const navItems = [
    // { to: '/admin/dashboard', label: 'Dashboard', icon: <FaHome /> },
    { to: '/admin/dashboard/clients', label: 'Clients', icon: <FaUsers /> },
    { to: '/admin/dashboard/partners', label: 'Partners', icon: <FaHandshake /> },
    { to: '/admin/dashboard/gallery', label: 'Gallery', icon: <FaImages /> },
    { to: '/admin/dashboard/collections', label: 'Collections', icon: <FaBoxes /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#1F2937] text-white p-2 rounded-lg"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-[#1F2937] text-white transition-all duration-300 z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8 text-[#C09F63]">GiftPlus Admin</h1>

          <nav className="space-y-2">
            {navItems.map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  location.pathname === to
                    ? 'bg-[#C09F63] text-[#1F2937]'
                    : 'hover:bg-[#C09F63] hover:text-[#1F2937]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3">{icon}</span>
                {label}
              </Link>
            ))}
          </nav>

          <button 
            onClick={handleLogout}
            className="mt-8 w-full bg-[#C09F63] hover:bg-[#E5B769] text-[#1F2937] font-medium py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
