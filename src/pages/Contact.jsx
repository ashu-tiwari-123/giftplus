import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <section className="bg-[#F9FAFB]">
      {/* Hero Section */}
      <div className="bg-[#1F2937] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our corporate gifting experts
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-8">Our Office</h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-[#C09F63] p-3 rounded-full text-white mr-6">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Phone</h3>
                  <p className="text-[#1F2937]">+91 98765 43210</p>
                  <p className="text-[#1F2937]">+91 11 2345 6789 (Landline)</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-[#C09F63] p-3 rounded-full text-white mr-6">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Email</h3>
                  <p className="text-[#1F2937]">sales@corpgifts.com</p>
                  <p className="text-[#1F2937]">support@corpgifts.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="bg-[#C09F63] p-3 rounded-full text-white mr-6">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Corporate Office</h3>
                  <p className="text-[#1F2937]">
                    123 Business Tower, Sector 15<br />
                    Gurugram, Haryana 122001<br />
                    India
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#C09F63]/20">
                <h3 className="text-lg font-semibold text-[#1F2937] mb-3">Business Hours</h3>
                <ul className="space-y-2 text-[#1F2937]">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-[#C09F63]/30">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1F2937] mb-1">
                  Full Name <span className="text-[#C09F63]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1F2937] mb-1">
                  Email <span className="text-[#C09F63]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1F2937] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1F2937] mb-1">
                  Message <span className="text-[#C09F63]">*</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium px-6 py-3 rounded-lg flex items-center transition-colors duration-300"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white p-1 rounded-xl shadow-md border border-[#C09F63]/30 overflow-hidden">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.223269104462!2d77.1023713150799!3d28.50244498247032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1925b5e5c3e1%3A0x3b9587e5a1a0e68b!2sSector%2015%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;