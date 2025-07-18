import {
  FaGift,
  FaUsers,
  FaShieldAlt,
  FaTags,
  FaPenFancy,
  FaLeaf,
  FaTshirt,
  FaLaptop,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <section className="bg-[#F9FAFB]">
      {/* Hero Section */}
      <div className="bg-[#1F2937] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive corporate gifting solutions tailored to your brand
          </p>
        </div>
      </div>

      {/* Core Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all">
            <div className="text-[#C09F63] text-4xl mb-4">
              <FaGift />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
              End-to-End Gifting Solutions
            </h3>
            <ul className="space-y-2 text-[#1F2937]">
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Complete corporate gifting packages
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Seasonal and occasion-specific collections
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Bulk order management
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all">
            <div className="text-[#C09F63] text-4xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
              B2B Customization
            </h3>
            <ul className="space-y-2 text-[#1F2937]">
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Custom branding at manufacturing stage
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Logo engraving/embossing
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Exclusive designs for corporate clients
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all">
            <div className="text-[#C09F63] text-4xl mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
              Quality Assurance
            </h3>
            <ul className="space-y-2 text-[#1F2937]">
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Rigorous quality checks
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Premium materials only
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Quality certifications
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all">
            <div className="text-[#C09F63] text-4xl mb-4">
              <FaTags />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
              Bulk Order Benefits
            </h3>
            <ul className="space-y-2 text-[#1F2937]">
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Significant volume discounts
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Streamlined logistics
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Consolidated billing
              </li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all">
            <div className="text-[#C09F63] text-4xl mb-4">
              <FaPenFancy />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
              Premium Branding
            </h3>
            <ul className="space-y-2 text-[#1F2937]">
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Luxury packaging options
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Custom gift messaging
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Brand consistency across all items
              </li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C09F63]/20 hover:shadow-md transition-all">
            <div className="text-[#C09F63] text-4xl mb-4">
              <FaLeaf />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
              Eco-Friendly Options
            </h3>
            <ul className="space-y-2 text-[#1F2937]">
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Sustainable materials
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Recycled paper products
              </li>
              <li className="flex items-start">
                <span className="text-[#C09F63] mr-2">•</span>
                Jute and organic fabric items
              </li>
            </ul>
          </div>
        </div>

        {/* Product Categories */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
            Our Product Categories
          </h2>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: <FaPenFancy />,
              name: "Eco Stationery",
              items: ["Paper pens", "Seed notebooks", "Recycled diaries"],
            },
            {
              icon: <FaTshirt />,
              name: "Corporate Wear",
              items: ["Apparel", "Bags", "Accessories"],
            },
            {
              icon: <FaLaptop />,
              name: "Tech Gadgets",
              items: ["Power banks", "Speakers", "Headphones"],
            },
            {
              icon: <FaGift />,
              name: "Luxury Sets",
              items: ["Executive boxes", "Desk sets", "Gift hampers"],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#C09F63]/20"
            >
              <div className="text-[#C09F63] text-3xl mb-3">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-3">
                {category.name}
              </h3>
              <ul className="space-y-1 text-[#1F2937] text-sm">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#C09F63] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#1F2937] rounded-xl p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Elevate Your Corporate Gifting?
          </h2>
          <p className="text-[#F9FAFB] mb-8 max-w-2xl mx-auto">
            Our team is ready to help you create memorable branded gifts that
            strengthen relationships.
          </p>
          <button className="bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium px-8 py-3 rounded-full transition-colors duration-300">
            <Link to="/coming-soon">
              Connect With Our Team
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
