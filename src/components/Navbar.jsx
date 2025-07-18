import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import QuotePopup from './Quote';
import ContactPopup from './ContactPopup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuotePopup, setShowQuotePopup] = useState(false);

// <button >Get a Quote</button>
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <nav className="bg-[#F9FAFB] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-[#1F2937] text-xl font-bold">
              GiftPlus
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-[#1F2937] hover:text-[#C09F63] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#1F2937] hover:text-[#C09F63] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-[#1F2937] hover:text-[#C09F63] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-[#1F2937] hover:text-[#C09F63] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Contact
            </Link>
            <button onClick={() => setShowQuotePopup(true)} className="bg-[#C09F63] hover:bg-[#E5B769] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1F2937] hover:text-[#C09F63] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#F9FAFB] shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
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
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-[#1F2937] hover:text-[#C09F63] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="text-[#1F2937] hover:text-[#C09F63] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={handleLinkClick}
            className="text-[#1F2937] hover:text-[#C09F63] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="text-[#1F2937] hover:text-[#C09F63] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Contact
          </Link>
          <button
            onClick={()=>{handleLinkClick(), setShowQuotePopup(true)}}
            className="bg-[#C09F63] hover:bg-[#E5B769] text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-300 mt-4"
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 z-40 md:hidden" onClick={closeMenu}></div>
      )}
      {showQuotePopup && <ContactPopup onClose={() => setShowQuotePopup(false)} />}
    </nav>
  );
};

export default Navbar;