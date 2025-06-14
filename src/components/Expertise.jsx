import { FaCheckCircle, FaTools, FaMedal, FaShippingFast, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto"></div>
          <p className="text-lg text-[#1F2937] mt-6 max-w-3xl mx-auto">
            We combine premium quality with exceptional service to deliver corporate gifting solutions that make an impact.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quality Assurance */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all text-center">
            <div className="text-[#C09F63] text-4xl mb-4 flex justify-center">
              <FaMedal />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Quality Assurance</h3>
            <p className="text-[#1F2937]">
              Rigorous quality checks ensure only premium products bear your brand.
            </p>
          </div>

          {/* Custom Solutions */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all text-center">
            <div className="text-[#C09F63] text-4xl mb-4 flex justify-center">
              <FaTools />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Custom Solutions</h3>
            <p className="text-[#1F2937]">
              Tailored products designed to perfectly represent your brand identity.
            </p>
          </div>

          {/* Competitive Pricing */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all text-center">
            <div className="text-[#C09F63] text-4xl mb-4 flex justify-center">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Competitive Pricing</h3>
            <p className="text-[#1F2937]">
              Premium quality at bulk pricing - no compromise on excellence.
            </p>
          </div>

          {/* Reliable Service */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all text-center">
            <div className="text-[#C09F63] text-4xl mb-4 flex justify-center">
              <FaShippingFast />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Reliable Service</h3>
            <p className="text-[#1F2937]">
              Dedicated team ensuring timely delivery and ongoing support.
            </p>
          </div>
        </div>

        {/* Testimonial/CTA
        <div className="mt-16 text-center bg-[#FFFFFF] p-8 rounded-xl border border-[#C09F63]/30">
          <div className="text-[#C09F63] text-4xl mb-4 flex justify-center">
            <FaHeadset />
          </div>
          <h3 className="text-xl font-medium text-[#1F2937] mb-4">
            Ready to elevate your corporate gifting?
          </h3>
          <button className="bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium px-8 py-3 rounded-full transition-colors duration-300">
            Connect With Our Team
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;