import SimpleSlider from "../components/OurValuedClients";
import ProductsCarousel from "../components/ProductCarousel";
import PartnersSection from "../components/PartnerSection";
import HeroSection from "../components/HeroSection";
import WhatWeOffer from "../components/WhatweOffer";
import WhyChooseUs from "../components/Expertise";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SimpleSlider />
      <ProductsCarousel />
      <PartnersSection />
      <WhatWeOffer/>
      <WhyChooseUs/>
    </>
  );
};

export default Home;
