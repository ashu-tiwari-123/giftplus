import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaPaperPlane } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaPhone, FaFileAlt, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ContactPopup = ({ onClose }) => {
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
          onClose(); // Close popup
        })
        .catch((err) => {
          console.error("❌ Error sending confirmation email", err);
          toast.error("⚠️ Failed to send confirmation email.");
        });
    })
    .catch((err) => {
      console.error("❌ Error sending admin email", err);
      toast.error("❌ Something went wrong. Try again later.");
    });
};


  return (
   <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#1F2937] text-white p-4 rounded-t-xl flex justify-between items-center">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-[#C09F63] transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="p-6 space-y-5">
          {/* Name */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#C09F63]">
              <FaUser />
            </div>
            <input
              type="text"
              name="from_name"
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg border-[#D1D5DB] focus:ring-2 focus:ring-[#C09F63] outline-none"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#C09F63]">
              <FaEnvelope />
            </div>
            <input
              type="email"
              name="reply_to"
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg border-[#D1D5DB] focus:ring-2 focus:ring-[#C09F63] outline-none"
              placeholder="Your Email"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#C09F63]">
              <FaPhone />
            </div>
            <input
              type="tel"
              name="phone"
              className="w-full pl-10 pr-4 py-2 border rounded-lg border-[#D1D5DB] focus:ring-2 focus:ring-[#C09F63] outline-none"
              placeholder="Your Phone (Optional)"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <div className="absolute top-3 left-3 text-[#C09F63]">
              <FaFileAlt />
            </div>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg border-[#D1D5DB] focus:ring-2 focus:ring-[#C09F63] outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium py-3 px-4 rounded-lg transition"
          >
            <FaPaperPlane className="inline mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
