import { FaExclamationTriangle, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // or use next/link for Next.js

const Error404 = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6 text-center">
      {/* Error Icon */}
      <div className="bg-[#FEE2E2] p-6 rounded-full mb-8">
        <FaExclamationTriangle className="text-5xl text-[#DC2626]" />
      </div>

      {/* Error Message */}
      <h1 className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-4">Page Not Found</h2>
      <p className="text-lg text-[#6B7280] max-w-2xl mb-8">
        Oops! The page you're looking for doesn't exist or has been moved. 
        Please check the URL or navigate back to our homepage.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link 
          to="/" 
          className="bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
        >
          <FaHome className="mr-2" />
          Return Home
        </Link>
        <a 
          href="/contact" 
          className="border border-[#1F2937] hover:bg-[#1F2937] hover:text-white text-[#1F2937] font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
        >
          <FaEnvelope className="mr-2" />
          Contact Support
        </a>
      </div>

      {/* Contact Info */}
      {/* <div className="bg-white p-6 rounded-xl shadow-sm border border-[#C09F63]/20 max-w-md w-full">
        <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Need immediate assistance?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="tel:+919876543210" className="flex items-center text-[#1F2937] hover:text-[#C09F63] transition-colors">
            <FaPhone className="mr-2 text-[#C09F63]" />
            +91 98765 43210
          </a>
          <a href="mailto:support@corpgifts.com" className="flex items-center text-[#1F2937] hover:text-[#C09F63] transition-colors">
            <FaEnvelope className="mr-2 text-[#C09F63]" />
            support@corpgifts.com
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Error404;