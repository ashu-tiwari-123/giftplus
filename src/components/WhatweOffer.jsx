import { motion } from 'framer-motion';

const WhatWeOffer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const categories = [
    {
      title: 'Range of Eco-Friendly Gift Items',
      items: ['Paper Pen, Paper Pencils', 'Seed Paper Note Books', 'Hand Made Paper Gift Packs']
    },
    {
      title: 'Diaries & Notebooks',
      items: ['Corporate Diaries & Planners', 'Made with high quality recycled paper']
    },
    {
      title: 'Jute Products',
      items: ['Jute Daily Use Bags', 'Jute Executive Bags', 'Jute Folders & Gift Items', 'Cloth Bags, Canvas Bags']
    },
    {
      title: 'Metal Pens',
      items: ['Metal Ball Pens', 'Metal Gel Pens', 'Metal Fountain Pens', 'Pen Gift Boxes']
    },
    {
      title: 'Corporate Professional Wear',
      items: ['T-shirts, Shirts', 'Caps, Formal Trousers', 'All types of jackets', 'For Men & Women']
    },
    {
      title: 'Electronics & Home Appliances',
      items: ['Power Banks, Bluetooth Speakers', 'Car Chargers, Headphones', 'Lunch Boxes, Serving Sets', 'Copper Bottles, Bakeware']
    }
  ];

  return (
    <motion.section
      className="relative bg-gradient-to-b from-[#FAF9F6] via-white to-white py-16 md:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* New Year decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C09F63] to-transparent opacity-40" />
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#C09F63]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#C09F63]/5 rounded-full blur-3xl" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#C09F63]/40" />
            <span className="text-sm font-medium tracking-wider text-[#C09F63] uppercase">
              ✦ Sustainable Excellence ✦
            </span>
            <span className="h-px w-8 bg-[#C09F63]/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] tracking-tight">
            What We Offer For You
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C09F63] to-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            We have wide range of eco-friendly corporate gifting ideas and our promotional gifting products which you can use for building your eco-friendly image.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-[#C09F63]/30 transition-all duration-500 overflow-hidden">
                {/* Subtle hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C09F63]/0 to-[#C09F63]/0 group-hover:from-[#C09F63]/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative p-6 md:p-7">
                  {/* Title with magical hover reveal */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#C09F63] to-[#D4AF37] rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md">
                      {index + 1}
                    </span>
                    <div className="overflow-hidden">
                      <h3 className="magical-category-title text-lg font-semibold text-[#1F2937] leading-tight">
                        {category.title.split('').map((char, i) => (
                          <span
                            key={i}
                            className="magical-char inline-block"
                            style={{ animationDelay: `${i * 0.015}s` }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </h3>
                      {/* Underline reveal */}
                      <span className="block w-full h-px bg-gradient-to-r from-[#C09F63] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-1" />
                    </div>
                  </div>

                  {/* List items */}
                  <ul className="space-y-2.5">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#1F2937]">
                        <span className="flex-shrink-0 text-[#C09F63] text-lg leading-tight mt-0.5">✦</span>
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Sparkle decoration on hover */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#C09F63] text-xl">✨</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Magical character reveal animation */
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
    </motion.section>
  );
};

export default WhatWeOffer;