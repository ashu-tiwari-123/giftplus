import { motion } from 'framer-motion';

const WhatWeOffer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
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

  return (
    <motion.section
      className="bg-[#F9FAFB] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            What We Offer For You
          </h2>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto"></div>
          <p className="text-lg text-[#1F2937] mt-6 max-w-3xl mx-auto">
            We have wide range of eco-friendly corporate gifting ideas and our promotional gifting products which you can use for building your eco-friendly image.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
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
          ].map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-[#C09F63]/20 hover:border-[#C09F63]/50 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-4 flex items-center">
                  <span className="w-6 h-6 bg-[#C09F63] rounded-full mr-3 flex items-center justify-center text-white text-sm">{index + 1}</span>
                  {category.title}
                </h3>
                <ul className="space-y-2 text-[#1F2937]">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#C09F63] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatWeOffer;
