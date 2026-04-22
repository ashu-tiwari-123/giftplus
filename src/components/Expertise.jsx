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

  const features = [
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
  ];

  return (
    <motion.section
      className="relative bg-gradient-to-b from-[#FAF9F6] via-white to-white py-16 md:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* New Year decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C09F63] to-transparent opacity-40" />
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C09F63]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#C09F63]/5 rounded-full blur-3xl" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-14" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#C09F63]/40" />
            <span className="text-sm font-medium tracking-wider text-[#C09F63] uppercase">
              ✦ The Difference ✦
            </span>
            <span className="h-px w-8 bg-[#C09F63]/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] tracking-tight">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C09F63] to-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            We combine premium quality with exceptional service to deliver corporate gifting solutions that make an impact.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-[#C09F63]/30 transition-all duration-500 p-7 md:p-8 text-center overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C09F63]/0 to-[#C09F63]/0 group-hover:from-[#C09F63]/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative">
                  {/* Icon with animated ring */}
                  <div className="relative inline-block mb-5">
                    <div className="absolute inset-0 bg-[#C09F63]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                    <div className="relative text-[#C09F63] text-5xl flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Magical Title Reveal */}
                  <div className="overflow-hidden mb-3">
                    <h3 className="magical-feature-title text-xl font-semibold text-[#1F2937]">
                      {feature.title.split('').map((char, i) => (
                        <span
                          key={i}
                          className="magical-char inline-block"
                          style={{ animationDelay: `${i * 0.02}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </h3>
                    <span className="block w-12 h-px bg-gradient-to-r from-[#C09F63] to-transparent mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center mt-1" />
                  </div>

                  <p className="text-[#1F2937] text-sm md:text-base leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Sparkle on hover */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#C09F63] text-xl">✨</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Magical character reveal animation */
        .magical-char {
          opacity: 0;
          display: inline-block;
          animation: magicalReveal 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .group:hover .magical-char {
          animation: magicalReveal 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @keyframes magicalReveal {
          0% {
            opacity: 0;
            transform: translateY(6px) scale(0.95);
            filter: blur(1.5px);
          }
          60% {
            opacity: 0.9;
            transform: translateY(-1px) scale(1.01);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </motion.section>
  );
};

export default WhyChooseUs;