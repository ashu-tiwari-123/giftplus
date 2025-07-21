import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiFilter, FiX, FiZoomIn, FiChevronDown } from "react-icons/fi";
import Loader from "../components/GiftLoader";
import productsData from "../data/productsCollectionData";

const ProductCollections = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loadedCount, setLoadedCount] = useState(20);
  const [zoomImage, setZoomImage] = useState(null);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filterRef = useRef(null);

  // Close filter dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get all unique tags from products for filters
  const allTags = ["All", ...new Set(productsData.flatMap(product => product.tags))];
  
  // Filter and search functionality
  useEffect(() => {
    const filterProducts = async () => {
      setIsLoading(true);
      
      // Small delay to show loader
      await new Promise(resolve => setTimeout(resolve, 800));
      
      let filtered = [...productsData];
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      // Apply tag filter
      if (activeFilter !== "All") {
        filtered = filtered.filter(product => 
          product.tags.includes(activeFilter)
        );
      }
      
      // Save filtered products to check length
      setFilteredProducts(filtered);
      
      // Shuffle and limit to current loaded count
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      setDisplayedProducts(shuffled.slice(0, loadedCount));
      
      setIsLoading(false);
    };

    filterProducts();
  }, [searchQuery, activeFilter, loadedCount]);

  const openQuotePopup = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  const loadMoreProducts = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    setLoadedCount(prev => prev + 20);
    setIsLoading(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Truncate description to 100 characters
  const truncateDescription = (text) => {
    if (text.length > 100) {
      return text.substring(0, 100) + '...';
    }
    return text;
  };

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
    setSearchQuery("");
    setLoadedCount(20); // Reset loaded count when filter changes
    setShowFilterDropdown(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setLoadedCount(20); // Reset loaded count when search changes
    if (e.target.value) {
      setActiveFilter("All");
    }
  };

  const openImageZoom = (imageUrl) => {
    setZoomImage(imageUrl);
  };

  const closeImageZoom = () => {
    setZoomImage(null);
  };

  // Check if we should show load more button
  const shouldShowLoadMore = !isLoading && 
                            displayedProducts.length > 0 && 
                            filteredProducts.length > displayedProducts.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1F2937] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Collections</h1>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Premium corporate gifts designed to impress and strengthen relationships
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C09F63] focus:border-transparent"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            {searchQuery && (
              <button 
                onClick={clearSearch}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                <FiX size={18} />
              </button>
            )}
          </div>
          
          <div className="relative w-full md:w-96" ref={filterRef}>
            <button 
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-[#1F2937] rounded-lg hover:bg-gray-200 transition-colors w-full justify-between"
            >
              <div className="flex items-center gap-2">
                <FiFilter />
                <span className="truncate">{activeFilter}</span>
              </div>
              <FiChevronDown className={`transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showFilterDropdown && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto"
              >
                {allTags.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleFilterSelect(filter)}
                    className={`w-full text-left px-4 py-2 hover:bg-[#1F2937] hover:text-white transition-colors ${activeFilter === filter ? 'bg-[#C09F63] bg-opacity-10  text-[white]' : 'text-[#1F2937]'}`}
                  >
                    <span className="truncate block">{filter}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <Loader />
          </div>
        )}

        {/* Product Grid */}
        {!isLoading && (
          <>
            {displayedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-xl">No products found matching your criteria</p>
              </div>
            ) : (
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {displayedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5
                        }
                      }
                    }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <div className="relative pt-[100%] overflow-hidden group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button 
                        onClick={() => openImageZoom(product.image)}
                        className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                      >
                        <FiZoomIn size={20} />
                      </button>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className={`px-3 py-1 rounded-full text-[10px] font-medium ${
                              tag === "Custom Branding" 
                                ? "bg-gray-200 bg-opacity-10 text-[#1F2937]" 
                                : "bg-gray-100 text-[#1F2937]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-6 flex-grow">{truncateDescription(product.description)}</p>
                      <button 
                        onClick={() => openQuotePopup(product)}
                        className="mt-auto w-full py-3 bg-[#1F2937] text-white rounded-lg hover:bg-[#C09F63] transition-colors duration-300 font-medium"
                      >
                        Get a Quote
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </>
        )}

        {/* Load More Button */}
        {shouldShowLoadMore && (
          <div className="mt-16 text-center">
            <button 
              onClick={loadMoreProducts}
              className="px-8 py-3 bg-[#1F2937] text-white rounded-full hover:bg-[#C09F63] transition-colors duration-300 font-medium flex items-center justify-center mx-auto"
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : "Load More Products"}
            </button>
          </div>
        )}
      </div>

      {/* Quote Popup */}
      {showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-xl max-w-2xl w-full p-6 relative"
    >
      <button 
        onClick={closePopup}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <FiX size={24} />
      </button>
      
      <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Get a Quote</h3>
      <p className="text-gray-600 mb-6">Request pricing for: <span className="font-semibold">{selectedProduct?.name}</span></p>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C09F63]"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C09F63]"
                placeholder="you@company.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Company Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C09F63]"
                placeholder="Your Company"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Product ID</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C09F63] bg-gray-100"
                value="0"
                readOnly
              />
              {/* <p className="text-xs text-gray-500 mt-1">Please specify the product ID if available</p> */}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Quantity Needed <span className="text-red-500">*</span></label>
              <input
                type="number"
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C09F63]"
                placeholder="Enter quantity"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Additional Notes</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C09F63]"
                rows="3"
                placeholder="Any specific requirements or customization needs..."
              ></textarea>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <button 
            type="submit"
            className="w-full py-3 bg-[#1F2937] text-white rounded-lg hover:bg-[#C09F63] transition-colors duration-300 font-medium"
          >
            Submit Request
          </button>
        </div>
      </form>
    </motion.div>
  </div>
)}

      {/* Image Zoom Modal */}
      {zoomImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <button 
            onClick={closeImageZoom}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <FiX size={32} />
          </button>
          <div className="max-w-6xl w-full h-full flex items-center justify-center">
            <img 
              src={zoomImage} 
              alt="Zoomed product" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCollections;