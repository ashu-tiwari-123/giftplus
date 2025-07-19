import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaQuoteLeft, FaHandshake, FaTags, FaShieldAlt } from 'react-icons/fa';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <> <Helmet>
      <title>About Us | Gift Plus</title>
      <meta
        name="description"
        content="Learn more about Gift Plus, our mission, values, and commitment to premium corporate gifting."
      />
      <meta name="keywords" content="about gift plus, corporate gifting company, premium gifting" />
      <meta property="og:title" content="About Us | Gift Plus" />
      <meta property="og:description" content="Get to know Gift Plus – India's trusted corporate gifting partner." />
      <meta property="og:image" content="https://www.thegiftplus.in/preview.jpg" />
      <meta property="og:url" content="https://www.thegiftplus.in/about" />
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
              Our Story
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
              Pioneering corporate gifting solutions since 2024
            </motion.p>
          </div>
        </motion.div>

        {/* Leadership Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            variants={containerVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6
            }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          >
            {/* Founder */}
            <motion.div
              variants={itemVariants}
              className="text-center bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20"
            >
              <div className="text-[#C09F63] text-4xl mb-4 flex justify-center">
                <FaHandshake />
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Mr. Shashi Prakash</h3>
              <p className="text-[#C09F63] font-medium">Founder</p>
              <div className="w-16 h-0.5 bg-[#C09F63] mx-auto my-4"></div>
              <p className="text-[#1F2937] mt-4">
                Visionary leader with 10+ years in corporate gifting industry
              </p>
            </motion.div>

            {/* Manager */}
            <motion.div
              variants={itemVariants}
              className="text-center bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20"
            >
              <div className="text-[#C09F63] text-4xl mb-4 flex justify-center">
                <FaShieldAlt />
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Ashutosh Tiwari</h3>
              <p className="text-[#C09F63] font-medium">General Manager</p>
              <div className="w-16 h-0.5 bg-[#C09F63] mx-auto my-4"></div>
              <p className="text-[#1F2937] mt-4">
                Operations expert ensuring seamless client experiences
              </p>
            </motion.div>
          </motion.div>

          {/* Company Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20 bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20"
          >
            <div className="relative">
              <FaQuoteLeft className="text-[#C09F63] text-4xl opacity-20 absolute -top-4 -left-4" />
              <p className="text-lg text-[#1F2937] mb-6 italic relative z-10">
                Gift Plus is a professionally managed company founded in 2024 by Mr. Prakash and a team of qualified executives. We specialize in offering comprehensive Corporate Gifting Solutions tailored to meet the unique needs of businesses.
              </p>
            </div>
            <p className="text-lg text-[#1F2937]">
              Over the years, we have evolved into a trusted Total Solutions Provider, delivering value-added services with a strong focus on B2B Customization.
            </p>
          </motion.div>

          {/* Value Propositions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all"
            >
              <div className="text-[#C09F63] text-3xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Custom Branding</h3>
              <p className="text-[#1F2937]">
                Solutions at the manufacturing stage for authentic brand representation.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all"
            >
              <div className="text-[#C09F63] text-3xl mb-4">
                <FaTags />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Bulk Savings</h3>
              <p className="text-[#1F2937]">
                Competitive pricing for all corporate orders without quality compromise.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all"
            >
              <div className="text-[#C09F63] text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Seamless Experience</h3>
              <p className="text-[#1F2937]">
                Combining quality, transparency, and affordability at every step.
              </p>
            </motion.div>
          </motion.div>

          {/* Partners Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1F2937] text-center rounded-xl py-12 px-6"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Partners & Exclusive Services</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-[#C09F63] mx-auto mb-8"
            ></motion.div>
            <p className="text-lg text-white mb-12 max-w-3xl mx-auto">
              We are proud to be institutional distributors for leading brands
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-6"
            >
              {['SHEAFFER', 'SIMTON', 'TIMEX', 'BOROSIL'].map((brand, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-[#C09F63]/20 hover:bg-[#F9FAFB] transition-all"
                >
                  <h3 className="text-xl font-bold text-[#1F2937]">{brand}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section></>
  );
};

export default AboutPage;