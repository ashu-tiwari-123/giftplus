import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
              <button className="bg-[#C09F63] hover:bg-[#E5B769] text-[#1F2937] font-medium px-8 py-3 rounded-full transition-colors duration-300">
                Get in Touch
              </button>
            </Link>
            <Link to="/coming-soon">
              <button className="border border-[#1F2937] hover:bg-[#1F2937] hover:text-[#F9FAFB] text-[#1F2937] font-medium px-8 py-3 rounded-full transition-colors duration-300">
                Explore Gift Collections
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
