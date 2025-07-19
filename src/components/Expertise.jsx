import { motion } from 'framer-motion';
import { FaCheckCircle, FaTools, FaMedal, FaShippingFast } from 'react-icons/fa';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className="bg-[#F9FAFB] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto"></div>
          <p className="text-lg text-[#1F2937] mt-6 max-w-3xl mx-auto">
            We combine premium quality with exceptional service to deliver corporate gifting solutions that make an impact.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cards */}
          {[
            {
              icon: <FaMedal />,
              title: "Quality Assurance",
              desc: "Rigorous quality checks ensure only premium products bear your brand."
            },
            {
              icon: <FaTools />,
              title: "Custom Solutions",
              desc: "Tailored products designed to perfectly represent your brand identity."
            },
            {
              icon: <FaCheckCircle />,
              title: "Competitive Pricing",
              desc: "Premium quality at bulk pricing - no compromise on excellence."
            },
            {
              icon: <FaShippingFast />,
              title: "Reliable Service",
              desc: "Dedicated team ensuring timely delivery and ongoing support."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all text-center"
              variants={itemVariants}
            >
              <div className="text-[#C09F63] text-4xl mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">{feature.title}</h3>
              <p className="text-[#1F2937]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
