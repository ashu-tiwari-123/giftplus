import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiFilter, FiX, FiZoomIn, FiChevronDown } from "react-icons/fi";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaGift, FaFileAlt } from 'react-icons/fa';
import Loader from "../components/GiftLoader";
import productsData from "../data/productsCollectionData";
import { toast } from "react-toastify";

const ProductCollections = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [pendingSearchQuery, setPendingSearchQuery] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loadedCount, setLoadedCount] = useState(20);
  const [zoomImage, setZoomImage] = useState(null);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filterRef = useRef(null);

  // Quote form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    quantity: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Quote Request:', {
      ...formData,
      product: selectedProduct?.name || ''
    });
    setShowPopup(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      productInterest: selectedProduct?.name || '',
      quantity: '',
      message: ''
    });
  };

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
      await new Promise(resolve => setTimeout(resolve, 1000));

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

      // Limit to current loaded count
      setDisplayedProducts(filtered.slice(0, loadedCount));

      setIsLoading(false);
    };

    filterProducts();
  }, [searchQuery, activeFilter, loadedCount]);

  const openQuotePopup = (product) => {
    setSelectedProduct(product);
    setFormData(prev => ({
      ...prev,
      productInterest: product.name
    }));
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  const loadMoreProducts = async () => {
    setIsLoading(true);
    setLoadedCount(prev => prev + 20);
    setIsLoading(false);
  };

  const clearSearch = () => {
    setPendingSearchQuery("");
    setSearchQuery("");
  };

  const handleSearchInputChange = (e) => {
    setPendingSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(pendingSearchQuery);
    setLoadedCount(20); // Reset loaded count when search changes
    if (pendingSearchQuery) {
      setActiveFilter("All");
    }
  };

  const handleSearchInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
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
              value={pendingSearchQuery}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchInputKeyDown}
            />
            <button
              onClick={handleSearch}
              className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
              aria-label="Search"
            >
              <FiSearch size={18} />
            </button>
            {pendingSearchQuery && (
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
                            className={`px-3 py-1 rounded-full text-[10px] font-medium ${tag === "Custom Branding"
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
                        // onClick={() => openQuotePopup(product)}
                        onClick={()=>toast.info(`Currently Unavailable! Please connect through "Contact Us" Page.`)}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-[#1F2937] text-white p-4 rounded-t-xl flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-bold">Request a Quote: </h3>
                {selectedProduct?.name && (
                  <p className="text-sm text-gray-300 mt-1">
                    {selectedProduct.name}
                  </p>
                )}
              </div>
              <button
                onClick={closePopup}
                className="text-white hover:text-[#C09F63] transition-colors"
              >
                <FiX />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleQuoteSubmit} className="p-6 space-y-2">
              {/* Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#C09F63]">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  placeholder="Full Name*"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#C09F63]">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  placeholder="Email Address*"
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#C09F63]">
                  <FaPhone />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  placeholder="Phone Number*"
                  required
                />
              </div>

              {/* Company */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#C09F63]">
                  <FaBuilding />
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  placeholder="Company Name"
                />
              </div>

              {/* Product ID */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#C09F63]">
                  <FaFileAlt />
                </div>
                <input
                  type="text"
                  name="productId"
                  value={formData.productId || ''}
                  onChange={handleFormChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  placeholder="Product ID (if available)"
                />
              </div>
              <p className="text-xs ml-1 text-gray-500">
                Please enter the Product ID if available (leave blank if not sure)
              </p>


              {/* Quantity */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                    placeholder="Approx. Quantity"
                    min="1"
                  />
                </div>
                <div>
                  <select
                    name="unit"
                    className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  >
                    <option value="pieces">Pieces</option>
                    <option value="sets">Sets</option>
                    <option value="boxes">Boxes</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <div className="absolute top-3 left-3 text-[#C09F63]">
                  <FaFileAlt />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="3"
                  className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
                  placeholder="Additional Requirements"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Get Quote
              </button>
            </form>
          </div>
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