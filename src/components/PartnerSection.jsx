import { motion } from 'framer-motion';
import partnersData from "../data/partnersData";

const PartnersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-white py-16 md:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C09F63] to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#F9FAFB] -z-10"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4"
          >
            Our Manufacturing Partners
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#C09F63] mx-auto"
          ></motion.div>
        </div>

        {/* Partner Logos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16"
        >
          {partnersData.map((partner, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="h-32 w-32 md:h-40 md:w-40 bg-white rounded-xl shadow-md flex items-center justify-center p-4 border border-[#E5E7EB] hover:border-[#C09F63] transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain  hover:grayscale transition-all duration-500"
                />
              </div>
              <span className="mt-3 text-sm md:text-base text-[#1F2937] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-[#F9FAFB] to-white p-6 rounded-xl shadow-sm border-l-4 border-[#C09F63] relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#C09F63] opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-semibold text-[#1F2937] mb-3 flex items-center">
              <span className="w-6 h-6 bg-[#C09F63] rounded-full mr-3 flex items-center justify-center text-white text-sm">!</span>
              Partnership Highlights
            </h3>
            <ul className="space-y-2 text-[#1F2937]">
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Customized branding solutions for bulk requirements, directly from manufacturers
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Parker & Senator B2B exclusive facilities in South India
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Premium quality assurance with competitive pricing
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;