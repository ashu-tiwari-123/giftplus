import borosil from "../assets/partner_loog/borosil.png";
import at from "../assets/partner_loog/at.png";
import cross from "../assets/partner_loog/cross.png";
import  partnersData from "../data/partnersData";

const PartnersSection = () => {
  // const {partners} = useAdmin()
  // const partners = [
  //   { name: "Borosil", logo: borosil },
  //   { name: "American Tourister", logo: at },
  //   { name: "Cross", logo: cross },
  //   { name: "Borosil", logo: borosil },
  //   { name: "American Tourister", logo: at },
  //   { name: "Cross", logo: cross },
  //   { name: "Borosil", logo: borosil },
  //   { name: "American Tourister", logo: at },
  // ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4">
            Our Manufacturing Partners
          </h2>
          <div className="w-20 h-0.5 bg-[#C09F63] mx-auto"></div>
        </div>

        {/* Partner Logos - Full width */}
        <div className="w-full flex flex-wrap justify-evenly items-center gap-8 md:gap-12 mb-12">
          {partnersData.map((partner, index) => (
            <div key={index} className="flex flex-col items-center px-2">
              <div className="h-20 w-40 md:h-24 md:w-48 flex items-center justify-center mb-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              {/* <span className="text-sm md:text-base text-[#1F2937] font-medium">
                {partner.name}
              </span> */}
            </div>
          ))}
        </div>

        {/* Highlight Text */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#F9FAFB] border-l-4 border-[#C09F63] px-4 py-3 rounded">
            <p className="text-sm md:text-base text-[#1F2937] italic">
              <span className="font-semibold">Key highlights:</span> Customized
              branding solutions for bulk requirements, directly from
              manufacturers.<br/> 
              Parker & Senator B2B exclusive facilities in South
              India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
