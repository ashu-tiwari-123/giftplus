import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../assets/product_image/one.jpg";
import pen from "../assets/product_image/pen.jpg";
import cooker from "../assets/product_image/cooker.jpg";
import CollectionData from "../data/collectionData";
import { useNavigate } from "react-router-dom";

const ProductsCarousel = () => {
  //  const { collections, addCollection, loading } = useAdmin();
  //  console.log(collections);

  const products = CollectionData
  const navigate = useNavigate();
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#F9FAFB] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
            Our Premium Collection
          </h2>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto mt-4"></div>
        </div>

        {/* Products Carousel */}
        <div className="slider-container px-4">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-3 focus:outline-none">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#C09F63] hover:shadow-lg transition-all duration-300">
                  {/* Product Image */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Name */}
                  <div className="p-4 text-center">
                    <button
                      className="text-lg font-medium text-[#1F2937] hover:text-[#C09F63] underline"
                      onClick={() => {
                        const filename = product.pdfPath.split("/").pop();
                        navigate(`/pdf/${encodeURIComponent(filename)}`);
                      }}
                    >
                      {product.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
