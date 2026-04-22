import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Floating animation variants
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatAnimationSlow = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatAnimationReverse = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Gift Box SVG Component
  const GiftBoxIcon = ({ className, color = "#C09F63" }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="18" width="24" height="16" rx="2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 26H32" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 18V34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 18L18 10L22 14L20 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 18L22 10L18 14L20 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10H26" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="30" r="1.5" fill={color} />
      <circle cx="12" cy="30" r="1.5" fill={color} />
    </svg>
  );

  // Ribbon/Star SVG Component
  const StarIcon = ({ className, color = "#D4AF37" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 5L12 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );

  // Circle Dots Pattern
  const CircleIcon = ({ className, color = "#E5B769" }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="6" stroke={color} strokeWidth="1.5" />
      <circle cx="10" cy="10" r="2" fill={color} opacity="0.4" />
    </svg>
  );

  // Heart Icon
  const HeartIcon = ({ className, color = "#D4A5A5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 4 8.5 4C10.5 4 12 6 12 8C12 6 13.5 4 15.5 4C17.5 4 20 5.5 20 8.5C20 14 12 21 12 21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FAF9F6] via-[#F9FAFB] to-white py-16 md:py-24 overflow-hidden">
      {/* Decorative SVG Icons - Positioned Absolutely */}
      
      {/* Top left area */}
      <motion.div 
        className="absolute left-5 top-10 md:left-10 md:top-20 opacity-30"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
      >
        <GiftBoxIcon className="w-10 h-10 md:w-12 md:h-12" color="#C09F63" />
      </motion.div>

      <motion.div 
        className="absolute left-16 top-32 md:left-24 md:top-40 opacity-20"
        variants={rotateAnimation}
        initial="initial"
        animate="animate"
      >
        <StarIcon className="w-6 h-6 md:w-8 md:h-8" color="#D4AF37" />
      </motion.div>

      {/* Top right area */}
      <motion.div 
        className="absolute right-5 top-16 md:right-12 md:top-24 opacity-30"
        variants={floatAnimationReverse}
        initial="initial"
        animate="animate"
      >
        <GiftBoxIcon className="w-12 h-12 md:w-16 md:h-16" color="#C09F63" />
      </motion.div>

      <motion.div 
        className="absolute right-20 top-8 md:right-28 md:top-12 opacity-20"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
      >
        <HeartIcon className="w-7 h-7 md:w-9 md:h-9" color="#E5B769" />
      </motion.div>

      <motion.div 
        className="absolute right-8 top-40 md:right-16 md:top-48 opacity-25"
        variants={rotateAnimation}
        initial="initial"
        animate="animate"
      >
        <CircleIcon className="w-6 h-6 md:w-8 md:h-8" color="#D4AF37" />
      </motion.div>

      {/* Bottom left area */}
      <motion.div 
        className="absolute left-8 bottom-16 md:left-16 md:bottom-20 opacity-25"
        variants={floatAnimationSlow}
        initial="initial"
        animate="animate"
      >
        <StarIcon className="w-8 h-8 md:w-10 md:h-10" color="#C09F63" />
      </motion.div>

      <motion.div 
        className="absolute left-20 bottom-8 md:left-32 md:bottom-12 opacity-20"
        variants={rotateAnimation}
        initial="initial"
        animate="animate"
      >
        <GiftBoxIcon className="w-6 h-6 md:w-8 md:h-8" color="#D4A5A5" />
      </motion.div>

      {/* Bottom right area */}
      <motion.div 
        className="absolute right-12 bottom-10 md:right-20 md:bottom-16 opacity-30"
        variants={floatAnimationReverse}
        initial="initial"
        animate="animate"
      >
        <HeartIcon className="w-8 h-8 md:w-10 md:h-10" color="#C09F63" />
      </motion.div>

      <motion.div 
        className="absolute right-4 bottom-24 md:right-8 md:bottom-32 opacity-20"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
      >
        <CircleIcon className="w-5 h-5 md:w-7 md:h-7" color="#E5B769" />
      </motion.div>

      {/* Center scattered elements */}
      <motion.div 
        className="absolute left-1/3 top-1/2 transform -translate-y-1/2 opacity-15 hidden md:block"
        variants={floatAnimationSlow}
        initial="initial"
        animate="animate"
      >
        <StarIcon className="w-8 h-8" color="#D4AF37" />
      </motion.div>

      <motion.div 
        className="absolute right-1/3 bottom-1/4 opacity-15 hidden md:block"
        variants={rotateAnimation}
        initial="initial"
        animate="animate"
      >
        <GiftBoxIcon className="w-8 h-8" color="#C09F63" />
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate Your Corporate Gifting Experience
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-[#1F2937] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Thoughtfully curated gifts designed to strengthen relationships,
            build brand loyalty, and leave a lasting impression. Trusted by
            pharma leaders and growing businesses across India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/contact">
              <button className="bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                Get in Touch
              </button>
            </Link>
            <Link to="/collection">
              <button className="border border-[#1F2937] hover:bg-[#1F2937] hover:text-white text-[#1F2937] font-medium px-8 py-3 rounded-full transition-all duration-300">
                Explore Gift Collections
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;