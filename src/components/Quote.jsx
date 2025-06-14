import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaGift, FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';

const QuotePopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    quantity: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Quote Request:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#1F2937] text-white p-4 rounded-t-xl flex justify-between items-center">
          <h3 className="text-xl font-bold">Request a Quote</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-[#C09F63] transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#C09F63]">
              <FaUser />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
              placeholder="Full Name*"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#C09F63]">
              <FaEnvelope />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
              placeholder="Email Address*"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#C09F63]">
              <FaPhone />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
              placeholder="Phone Number*"
              required
            />
          </div>

          {/* Company */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#C09F63]">
              <FaBuilding />
            </div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
              placeholder="Company Name"
            />
          </div>

          {/* Product Interest */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#C09F63]">
              <FaGift />
            </div>
            <select
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition appearance-none"
              required
            >
              <option value="">Product of Interest*</option>
              <option value="Eco Stationery">Eco Stationery</option>
              <option value="Corporate Diaries">Corporate Diaries</option>
              <option value="Jute Products">Jute Products</option>
              <option value="Executive Gift Sets">Executive Gift Sets</option>
              <option value="Electronics">Electronics</option>
              <option value="Custom Solution">Custom Solution</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                placeholder="Approx. Quantity"
                min="1"
              />
            </div>
            <div>
              <select
                name="unit"
                className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
              >
                <option value="pieces">Pieces</option>
                <option value="sets">Sets</option>
                <option value="boxes">Boxes</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <div className="absolute top-3 left-3 text-[#C09F63]">
              <FaFileAlt />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
              placeholder="Additional Requirements"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
          >
            Get Quote
          </button>
        </form>
      </div>
    </div>
  );
};

// Example usage in a component:


export default QuotePopup;