import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionData from "../data/collectionData";
import { useNavigate } from "react-router-dom";

const ProductsCarousel = () => {
  const products = CollectionData;
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="relative bg-gradient-to-b from-[#FAF9F6] via-white to-white py-16 overflow-hidden">
      {/* New Year accent elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C09F63] to-transparent opacity-40" />
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#C09F63]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#C09F63]/5 rounded-full blur-3xl" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#C09F63]/40" />
            <span className="text-sm font-medium tracking-wider text-[#C09F63] uppercase">
              ✦ Curated Excellence ✦
            </span>
            <span className="h-px w-8 bg-[#C09F63]/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] tracking-tight">
            Our Premium Collection
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C09F63] to-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Discover timeless pieces crafted for the new era
          </p>
        </div>

        {/* Products Carousel */}
        <div className="slider-container px-2 md:px-6">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-3 py-2">
                {/* Product Card */}
                <div className="group relative flex flex-col h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-md hover:shadow-xl hover:border-[#C09F63]/30 transition-all duration-500 overflow-hidden">
                  {/* Shine overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#C09F63]/0 via-white/0 to-[#C09F63]/0 group-hover:via-white/20 group-hover:to-[#C09F63]/5 transition-all duration-700 pointer-events-none" />

                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden border-b border-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* New badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-[#C09F63] border border-[#C09F63]/30 shadow-sm">
                        ✦ 2026 ✦
                      </span>
                    </div>
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Product Name with magical reveal */}
                  <div className="p-5 flex flex-col items-center text-center">
                    <button
                      onClick={() => {
                        const filename = product.pdfPath.split("/").pop();
                        navigate(`/pdf/${encodeURIComponent(filename)}`);
                      }}
                      className="relative text-lg font-semibold text-[#1F2937] transition-colors duration-300"
                    >
                      {/* Magical character reveal on hover */}
                      <span className="magical-product-name inline-block">
                        {product.name.split('').map((char, i) => (
                          <span
                            key={i}
                            className="magical-char inline-block"
                            style={{ animationDelay: `${i * 0.02}s` }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                      {/* Underline reveal */}
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C09F63] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                    </button>
                    {/* Sparkle on hover */}
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#C09F63] text-lg">✨</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        /* Slick dots and arrows */
        :global(.slick-dots li button:before) {
          color: #C09F63 !important;
          opacity: 0.3;
          font-size: 10px;
        }
        :global(.slick-dots li.slick-active button:before) {
          color: #C09F63 !important;
          opacity: 1;
        }
        :global(.slick-prev:before, .slick-next:before) {
          color: #C09F63 !important;
          opacity: 0.7;
        }
        :global(.slick-prev:hover:before, .slick-next:hover:before) {
          opacity: 1;
        }

        /* Magical character animation */
        .magical-char {
          opacity: 0;
          display: inline-block;
          animation: magicalReveal 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .group:hover .magical-char {
          animation: magicalReveal 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @keyframes magicalReveal {
          0% {
            opacity: 0;
            transform: translateY(6px) scale(0.95);
            filter: blur(1.5px);
          }
          60% {
            opacity: 0.9;
            transform: translateY(-1px) scale(1.01);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsCarousel;