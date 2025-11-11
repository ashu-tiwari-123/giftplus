import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-[#F9FAFB] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#C09F63]">GiftPlus</h3>
            <p className="mb-6">
              Premium corporate gifting solutions that strengthen business relationships through thoughtful, eco-friendly products.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#C09F63] hover:text-[#E5B769] transition-colors duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#C09F63] hover:text-[#E5B769] transition-colors duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/giftplus/" target="_blank" rel="noopener noreferrer" className="text-[#C09F63] hover:text-[#E5B769] transition-colors duration-300">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://www.instagram.com/thegiftplus?igsh=MTZ2dXJjd2pnOGM0" target="_blank" rel="noopener noreferrer" className="text-[#C09F63] hover:text-[#E5B769] transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#C09F63] border-b border-[#C09F63] pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-[#C09F63] transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#C09F63] transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#C09F63] transition-colors duration-300">Services</Link></li>
              <li><Link to="/collection" className="hover:text-[#C09F63] transition-colors duration-300">Collection</Link></li>
              <li><Link to="/contact" className="hover:text-[#C09F63] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Our Products (Premium Collection) */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#C09F63] border-b border-[#C09F63] pb-2">Our Products</h4>
            <ul className="space-y-3">
              <li><span className="hover:text-[#C09F63] transition-colors duration-300">Luxury Office Essentials <span className="text-xs text-[#E5B769]">(Coming Soon)</span></span></li>
              <li><span className="hover:text-[#C09F63] transition-colors duration-300">Eco-Friendly Hampers <span className="text-xs text-[#E5B769]">(Coming Soon)</span></span></li>
              <li><span className="hover:text-[#C09F63] transition-colors duration-300">Festival Gift Packs <span className="text-xs text-[#E5B769]">(Coming Soon)</span></span></li>
              <li><span className="hover:text-[#C09F63] transition-colors duration-300">Executive Desk Sets <span className="text-xs text-[#E5B769]">(Coming Soon)</span></span></li>
              <li><span className="hover:text-[#C09F63] transition-colors duration-300">Tech Accessories <span className="text-xs text-[#E5B769]">(Coming Soon)</span></span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#C09F63] border-b border-[#C09F63] pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="text-[#C09F63] mt-1 mr-3" />
                <span>+91 89203 10249</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-[#C09F63] mt-1 mr-3" />
                <span>giftplus0024@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#C09F63] mt-1 mr-3" />
                <span>No-98 Ground Floor, 9th Main Dwarkanagar, Chikkabanavara, Bengaluru, India - 560090</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#374151] my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#9CA3AF] mb-4 md:mb-0">
            © {new Date().getFullYear()} Gift Plus. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-[#9CA3AF] hover:text-[#C09F63] transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-[#9CA3AF] hover:text-[#C09F63] transition-colors duration-300">Terms of Service</Link>
            <Link to="/sitemap" className="text-sm text-[#9CA3AF] hover:text-[#C09F63] transition-colors duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
