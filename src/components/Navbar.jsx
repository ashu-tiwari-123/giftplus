import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import QuotePopup from './Quote';
import ContactPopup from './ContactPopup';
import logo from '../assets/giftplus/giftplus_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuotePopup, setShowQuotePopup] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-[#C09F63]' : 'text-[#1F2937] hover:text-[#C09F63]'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive ? 'text-[#C09F63]' : 'text-[#1F2937] hover:text-[#C09F63]'
    }`;

  return (
    <nav className="bg-[#F9FAFB] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center">
              <img
                src={logo}
                alt="Gift Plus Logo"
                className="h-22 w-auto object-contain"
              />
            </NavLink>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/collection" className={navLinkClass}>
              Product
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            {/* <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink> */}
            <button
              // onClick={() => setShowQuotePopup(true)}
              className="bg-[#C09F63] hover:bg-[#E5B769] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              <Link to="/contact" className={navLinkClass}>
                Contact
              </Link>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1F2937] hover:text-[#C09F63] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#F9FAFB] shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-[#1F2937] hover:text-[#C09F63] focus:outline-none"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col px-4 space-y-4">
          <NavLink to="/" onClick={closeMenu} className={mobileNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/collection" onClick={closeMenu} className={mobileNavLinkClass}>
            Product
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={mobileNavLinkClass}>
            About
          </NavLink>
          <NavLink to="/services" onClick={closeMenu} className={mobileNavLinkClass}>
            Services
          </NavLink>
          {/* <NavLink to="/contact" onClick={closeMenu} className={mobileNavLinkClass}>
            Contact
          </NavLink> */}
          <button
            // onClick={() => setShowQuotePopup(true)}
            className="bg-[#C09F63] hover:bg-[#E5B769] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
          >
            <Link to="/contact" className={navLinkClass}>
              Contact
            </Link>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {showQuotePopup && <ContactPopup onClose={() => setShowQuotePopup(false)} />}
    </nav>
  );
};

export default Navbar;