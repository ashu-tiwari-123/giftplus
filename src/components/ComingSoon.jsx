import { FaCalendarAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6 text-center">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">Coming Soon</h1>
      <div className="w-24 h-1 bg-[#C09F63] mx-auto mb-8"></div>
      
      {/* Content */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 max-w-2xl mb-12">
        <FaCalendarAlt className="text-5xl text-[#C09F63] mx-auto mb-6" />
        <p className="text-xl text-[#1F2937] mb-6">
          We're working hard to bring you an amazing new experience. 
          This page will be available shortly.
        </p>
        <p className="text-lg text-[#6B7280]">
          Stay tuned for updates!
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-6 text-[#1F2937]">
        <a href="tel:+919876543210" className="flex items-center hover:text-[#C09F63] transition-colors">
          <FaPhone className="mr-2 text-[#C09F63]" />
          +91 8920310249
        </a>
        <a href="mailto:info@corpgifts.com" className="flex items-center hover:text-[#C09F63] transition-colors">
          <FaEnvelope className="mr-2 text-[#C09F63]" />
          giftplus0024@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;