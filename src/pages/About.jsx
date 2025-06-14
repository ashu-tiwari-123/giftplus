import { FaQuoteLeft, FaHandshake, FaTags, FaShieldAlt } from 'react-icons/fa';
import founder from "../assets/about_image/founder.jpg";
import manager from "../assets/about_image/manager.jpg";

const AboutPage = () => {
  return (
    <section className="bg-[#F9FAFB]">
      {/* Hero Section */}
      <div className="bg-[#1F2937] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Pioneering corporate gifting solutions since 2017
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Founder 1 */}
          <div className="text-center">
            <div className="h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#C09F63]">
              <img 
                src={founder} 
                alt="Mr. Prakash" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Mr. Shashi Prakash</h3>
            <p className="text-[#C09F63] font-medium">Founder</p>
          </div>

          {/* Founder 2
          <div className="text-center">
            <div className="h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#C09F63]">
              <img 
                src="/team/sanjay.jpg" 
                alt="Mr. Sanjay" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Mr. Sanjay</h3>
            <p className="text-[#C09F63] font-medium">Co-Founder</p>
          </div> */}

          {/* Manager */}
          <div className="text-center">
            <div className="h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#C09F63]">
              <img 
                src={manager} 
                alt="Ashutosh Tiwari" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Ashutosh Tiwari</h3>
            <p className="text-[#C09F63] font-medium">General Manager</p>
          </div>
        </div>

        {/* Company Description */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            <FaQuoteLeft className="text-[#C09F63] text-4xl opacity-20 absolute -top-4 -left-4" />
            <p className="text-lg text-[#1F2937] mb-6 italic relative z-10">
              Gift Plus is a professionally managed company founded in 2024 by Mr. Prakash and a team of qualified executives. We specialize in offering comprehensive Corporate Gifting Solutions tailored to meet the unique needs of businesses.
            </p>
          </div>
          <p className="text-lg text-[#1F2937]">
            Over the years, we have evolved into a trusted Total Solutions Provider, delivering value-added services with a strong focus on B2B Customization.
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20">
            <div className="text-[#C09F63] text-3xl mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Custom Branding</h3>
            <p className="text-[#1F2937]">
              Solutions at the manufacturing stage for authentic brand representation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20">
            <div className="text-[#C09F63] text-3xl mb-4">
              <FaTags />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Bulk Savings</h3>
            <p className="text-[#1F2937]">
              Competitive pricing for all corporate orders without quality compromise.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20">
            <div className="text-[#C09F63] text-3xl mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Seamless Experience</h3>
            <p className="text-[#1F2937]">
              Combining quality, transparency, and affordability at every step.
            </p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-[#1F2937] text-center rounded-xl py-12">
          <h2 className="text-3xl font-bold  text-white mb-6">Our Partners & Exclusive Services</h2>
          <p className="text-lg  text-white mb-12 max-w-3xl mx-auto">
            We are proud to be institutional distributors for leading brands
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['SHEAFFER', 'SIMTON', 'TIMEX', 'BOROSIL'].map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[#C09F63]/20">
                <h3 className="text-xl font-bold text-[#1F2937]">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;