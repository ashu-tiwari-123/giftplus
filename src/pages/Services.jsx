import {
  FaGift,
  FaUsers,
  FaShieldAlt,
  FaTags,
  FaPenFancy,
  FaLeaf,
  FaTshirt,
  FaLaptop,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const services = [
    {
      icon: <FaGift />,
      title: "End-to-End Gifting Solutions",
      items: [
        "Complete corporate gifting packages",
        "Seasonal and occasion-specific collections",
        "Bulk order management",
      ],
    },
    {
      icon: <FaUsers />,
      title: "B2B Customization",
      items: [
        "Custom branding at manufacturing stage",
        "Logo engraving/embossing",
        "Exclusive designs for corporate clients",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assurance",
      items: [
        "Rigorous quality checks",
        "Premium materials only",
        "Quality certifications",
      ],
    },
    {
      icon: <FaTags />,
      title: "Bulk Order Benefits",
      items: [
        "Significant volume discounts",
        "Streamlined logistics",
        "Consolidated billing",
      ],
    },
    {
      icon: <FaPenFancy />,
      title: "Premium Branding",
      items: [
        "Luxury packaging options",
        "Custom gift messaging",
        "Brand consistency across all items",
      ],
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly Options",
      items: [
        "Sustainable materials",
        "Recycled paper products",
        "Jute and organic fabric items",
      ],
    },
  ];

  const categories = [
    {
      icon: <FaPenFancy />,
      name: "Eco Stationery",
      items: ["Paper pens", "Seed notebooks", "Recycled diaries"],
    },
    {
      icon: <FaTshirt />,
      name: "Corporate Wear",
      items: ["Apparel", "Bags", "Accessories"],
    },
    {
      icon: <FaLaptop />,
      name: "Tech Gadgets",
      items: ["Power banks", "Speakers", "Headphones"],
    },
    {
      icon: <FaGift />,
      name: "Luxury Sets",
      items: ["Executive boxes", "Desk sets", "Gift hampers"],
    },
  ];

  return (
    <section className="bg-[#F9FAFB] overflow-hidden">
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
            Our Services
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
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive corporate gifting solutions tailored to your brand
          </motion.p>
        </div>
      </motion.div>

      {/* Core Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6
        }}
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-16 md:py-24"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all group"
            >
              <div className="text-[#C09F63] text-4xl mb-4 group-hover:text-[#E5B769] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
                {service.title}
              </h3>
              <ul className="space-y-2 text-[#1F2937]">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#C09F63] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Categories */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            Our Product Categories
          </h2>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all"
            >
              <div className="text-[#C09F63] text-3xl mb-3">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-3">
                {category.name}
              </h3>
              <ul className="space-y-1 text-[#1F2937] text-sm">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#C09F63] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          className="bg-[#1F2937] rounded-xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937]/90 to-[#C09F63]/20 opacity-90"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Elevate Your Corporate Gifting?
            </h2>
            <p className="text-[#F9FAFB] mb-8 max-w-2xl mx-auto">
              Our team is ready to help you create memorable branded gifts that
              strengthen relationships.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 inline-flex items-center"
            >
              <Link to="/coming-soon" className="flex items-center">
                Connect With Our Team
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesPage;