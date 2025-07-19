import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userData = {
      from_name: form.current.from_name.value,
      email: form.current.reply_to.value,
      message: form.current.message.value,
    };

    toast.info("📤 Sending message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        console.log("✅ Message sent to admin");

        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER,
            userData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then(() => {
            toast.success("✅ Thanks for reaching out! We'll get back to you soon.");
            form.current.reset();
          })
          .catch((err) => {
            console.error("❌ Error sending confirmation email", err);
            toast.error("Failed to send confirmation email.");
          });
      })
      .catch((err) => {
        console.error("❌ Error sending admin email", err);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Gift Plus</title>
        <meta
          name="description"
          content="Get in touch with Gift Plus for customized corporate gifting solutions. We'd love to hear from you."
        />
        <meta name="keywords" content="contact gift plus, gift enquiry, corporate gifting support" />
        <meta property="og:title" content="Contact Us | Gift Plus" />
        <meta property="og:description" content="Connect with our team for all your corporate gifting needs." />
        <meta property="og:image" content="https://www.thegiftplus.in/preview.jpg" />
        <meta property="og:url" content="https://www.thegiftplus.in/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="bg-[#F9FAFB]">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1F2937] text-white py-20"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-24 h-1 bg-[#C09F63] mx-auto mb-8"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Get in touch with our corporate gifting experts
            </motion.p>
          </div>
        </motion.div>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#1F2937] mb-8">Our Office</h2>

              <div className="space-y-6">
                {/* Phone */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-[#C09F63]/20"
                >
                  <div className="bg-[#C09F63] p-3 rounded-full text-white mr-6">
                    <FaPhone className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Phone</h3>
                    <p className="text-[#1F2937]">+91 63619 31592</p>
                    <p className="text-[#1F2937]">+91 89203 10249</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-[#C09F63]/20"
                >
                  <div className="bg-[#C09F63] p-3 rounded-full text-white mr-6">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Email</h3>
                    <p className="text-[#1F2937]">giftplus0024@gmail.com</p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-[#C09F63]/20"
                >
                  <div className="bg-[#C09F63] p-3 rounded-full text-white mr-6">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Corporate Office</h3>
                    <p className="text-[#1F2937]">
                      No-98 Ground Floor, <br />
                      9th Main Dwarkanagar, Chikkabanavara, <br />
                      Bengaluru, India - 560090
                    </p>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-white p-5 rounded-xl shadow-sm border border-[#C09F63]/20"
                >
                  <div className="flex items-start">
                    <div className="bg-[#C09F63] p-3 rounded-full text-white mr-6">
                      <FaClock className="text-lg" />
                    </div>
                    <div>
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
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border border-[#C09F63]/30"
            >
              <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Send Us a Message</h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-[#1F2937] mb-1">
                    Full Name <span className="text-[#C09F63]">*</span>
                  </label>
                  <input
                    name="from_name"
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-[#1F2937] mb-1">
                    Email <span className="text-[#C09F63]">*</span>
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    id="email"
                    className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1F2937] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                    placeholder="+91 98765 43210"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-[#1F2937] mb-1">
                    Message <span className="text-[#C09F63]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    name="message"
                    className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;