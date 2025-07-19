import SimpleSlider from "../components/OurValuedClients";
import ProductsCarousel from "../components/ProductCarousel";
import PartnersSection from "../components/PartnerSection";
import HeroSection from "../components/HeroSection";
import WhatWeOffer from "../components/WhatweOffer";
import WhyChooseUs from "../components/Expertise";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Gift Plus – Premium Corporate Gifting</title>
        <meta
          name="description"
          content="Explore thoughtfully curated corporate gifts trusted by pharma leaders and businesses across India."
        />
        <meta
          name="keywords"
          content="corporate gifts, premium gifting, eco-friendly gifts, customized gifts India"
        />
        <meta property="og:title" content="Gift Plus – Premium Corporate Gifting" />
        <meta property="og:description" content="Discover our wide range of corporate gift collections perfect for every business occasion." />
        <meta property="og:image" content="https://www.thegiftplus.in/preview.jpg" />
        <meta property="og:url" content="https://www.thegiftplus.in/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <HeroSection />
      <SimpleSlider />
      <ProductsCarousel />
      <PartnersSection />
      <WhatWeOffer />
      <WhyChooseUs />
    </>
  );
};

export default Home;
