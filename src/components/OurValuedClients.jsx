import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clientData from '../data/clientData.js';

const ClientCarousel = () => {
  const clients = clientData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1F2937] text-center mb-4">
          Our Valued Clients
        </h2>
        <div className="w-24 h-1 bg-[#C09F63] mx-auto mt-2 mb-6"></div>

        {/* Slider container needs overflow hidden and width constraints */}
        <div className="overflow-hidden w-full">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="px-2">
                <div className="flex items-center justify-center h-24 p-4 hover:grayscale transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 w-full max-w-[120px] object-contain"
                  />
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
