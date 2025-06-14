import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
     <section className="w-full bg-[#F9FAFB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-tight">
            Elevate Your Corporate Gifting Experience
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-[#1F2937] max-w-3xl mx-auto">
            Thoughtfully curated gifts designed to strengthen relationships,
            build brand loyalty, and leave a lasting impression. Trusted by
            pharma leaders and growing businesses across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <button className="bg-[#C09F63] hover:bg-[#E5B769] text-[#1F2937] font-medium px-8 py-3 rounded-full transition-colors duration-300">
              <Link to="/contact">
              Get in Touch
                </Link>
            </button>
            <button className="border border-[#1F2937] hover:bg-[#1F2937] hover:text-[#F9FAFB] text-[#1F2937] font-medium px-8 py-3 rounded-full transition-colors duration-300">
              <Link to="/coming-soon">
              Explore Gift Collections
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection