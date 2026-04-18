import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clientData from '../data/clientData.js';
import './ClientCarousel.css'; 

const ClientCarousel = () => {
  const clients = clientData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <section className="relative bg-gradient-to-b from-[#FAF9F6] via-white to-white py-16 overflow-hidden">
      {/* Subtle new year accents */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C09F63] to-transparent opacity-40" />
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#C09F63]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#C09F63]/5 rounded-full blur-3xl" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#C09F63]/40" />
            <span className="text-sm font-medium tracking-wider text-[#C09F63] uppercase">
              ✦ Trusted Since 2024 ✦
            </span>
            <span className="h-px w-8 bg-[#C09F63]/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] tracking-tight">
            Our Valued Clients
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C09F63] to-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Driving innovation together in the new year and beyond
          </p>
        </div>

        <div className="relative px-2 md:px-6">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="px-3 py-2">
                <div className="group relative flex flex-col items-center justify-center">
                  {/* Logo Card */}
                 <div className="relative flex flex-col items-center justify-center w-full h-30 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:border-[#C09F63]/30 transition-all duration-500 ease-out overflow-hidden">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C09F63]/0 to-[#C09F63]/0 group-hover:from-[#C09F63]/5 group-hover:to-transparent transition-all duration-500" />
                    
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="relative max-h-14 w-full max-w-[140px] object-contain filter  group-hover:grayscale-0 transition-all duration-500 ease-out"
                    />
                    {/* <div className="mt-3 h-6 flex items-center justify-center overflow-hidden">
                    <span className="magical-name text-sm font-medium text-[#1F2937] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {client.name.split('').map((char, i) => (
                        <span
                          key={i}
                          className="magical-char inline-block"
                          style={{ animationDelay: `${i * 0.03}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                  </div> */}
                    
                    {/* Sparkle on hover */}
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#C09F63] text-lg">✨</span>
                    </div>
                  </div>

                  {/* Magical Name Reveal */}
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;