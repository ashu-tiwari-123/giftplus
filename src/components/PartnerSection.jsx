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
    <section className="relative bg-gradient-to-b from-[#FAF9F6] via-white to-white py-16 md:py-20 overflow-hidden">
      {/* New Year decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C09F63] to-transparent opacity-40" />
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C09F63]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#C09F63]/5 rounded-full blur-3xl" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#C09F63]/40" />
            <span className="text-sm font-medium tracking-wider text-[#C09F63] uppercase">
              ✦ Trusted Alliances ✦
            </span>
            <span className="h-px w-8 bg-[#C09F63]/40" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#1F2937] tracking-tight"
          >
            Our Manufacturing Partners
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-[#C09F63] to-[#D4AF37] mx-auto mt-4 rounded-full"
          ></motion.div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Collaborating with industry leaders to deliver excellence
          </p>
        </div>

        {/* Partner Logos Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mb-16"
        >
          {partnersData.map((partner, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col items-center"
            >
              {/* Logo Card */}
              <div className="relative h-32 w-32 md:h-40 md:w-40 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-[#C09F63]/30 transition-all duration-500 flex items-center justify-center p-4 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C09F63]/0 to-[#C09F63]/0 group-hover:from-[#C09F63]/5 group-hover:to-transparent transition-all duration-500" />
                
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="relative max-h-full max-w-full object-contain filter group-hover:grayscale-0 transition-all duration-500 ease-out"
                />
                
                {/* Sparkle on hover */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#C09F63] text-lg">✨</span>
                </div>
              </div>

              {/* Magical Name Reveal */}
              <div className="mt-3 h-6 flex items-center justify-center overflow-hidden">
                <span className="magical-partner-name text-sm md:text-base font-medium text-[#1F2937] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {partner.name.split('').map((char, i) => (
                    <span
                      key={i}
                      className="magical-char inline-block"
                      style={{ animationDelay: `${i * 0.02}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-white to-[#FAF9F6] p-6 md:p-8 rounded-2xl shadow-lg border border-[#C09F63]/20 backdrop-blur-sm overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C09F63] to-[#D4AF37]" />
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#C09F63] opacity-5 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-[#D4AF37] opacity-5 blur-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#C09F63] to-[#D4AF37] rounded-full text-white text-sm shadow-md">✦</span>
                Partnership Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#C09F63] text-lg leading-tight">•</span>
                  <span className="text-[#1F2937]">Customized branding solutions for bulk requirements, directly from manufacturers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C09F63] text-lg leading-tight">•</span>
                  <span className="text-[#1F2937]">Parker & Senator B2B exclusive facilities in South India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C09F63] text-lg leading-tight">•</span>
                  <span className="text-[#1F2937]">Premium quality assurance with competitive pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
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
    </section>
  );
};

export default PartnersSection;