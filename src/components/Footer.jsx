import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-[#F9FAFB] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#C09F63]">YourLogo</h3>
            <p className="mb-6">
              Premium corporate gifting solutions that strengthen business relationships through thoughtful, eco-friendly products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#C09F63] hover:text-[#E5B769] transition-colors duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-[#C09F63] hover:text-[#E5B769] transition-colors duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-[#C09F63] hover:text-[#E5B769] transition-colors duration-300">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="text-[#C09F63] hover:text-[#E5B769] transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#C09F63] border-b border-[#C09F63] pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#C09F63] transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-[#C09F63] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-[#C09F63] transition-colors duration-300">Products</a></li>
              <li><a href="#" className="hover:text-[#C09F63] transition-colors duration-300">Services</a></li>
              <li><a href="#" className="hover:text-[#C09F63] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#C09F63] border-b border-[#C09F63] pb-2">Our Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#C09F63] transition-colors duration-300">Eco-Friendly Stationery</a></li>
              <li><a href="#" className="hover:text-[#C09F63] transition-colors duration-300">Corporate Diaries</a></li>
              <li><a href="#" className="hover:text-[#C09F63] transition-colors duration-300">Jute Products</a></li>
              <li><a href="#" className="hover:text-[#C09F63] transition-colors duration-300">Executive Gift Sets</a></li>
              <li><a href="#" className="hover:text-[#C09F63] transition-colors duration-300">Electronics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#C09F63] border-b border-[#C09F63] pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="text-[#C09F63] mt-1 mr-3" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-[#C09F63] mt-1 mr-3" />
                <span>info@yourcompany.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#C09F63] mt-1 mr-3" />
                <span>123 Business Avenue, Mumbai, India - 400001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#374151] my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#9CA3AF] mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#C09F63] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#C09F63] transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#C09F63] transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;