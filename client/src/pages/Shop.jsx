import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ChevronDown, 
  Star, 
  Heart, 
  ShoppingCart, 
  Eye, 
  X, 
  SlidersHorizontal,
  ArrowUpDown
} from 'lucide-react';
import EnhancedHero from '../components/ShopHero';

const AurmiraShop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const itemsPerPage = 12;

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Ethereal Rose Gold Necklace",
      category: "necklaces",
      price: 2899,
      originalPrice: 3499,
      rating: 4.8,
      reviews: 127,
      image: "/api/placeholder/300/300",
      images: ["/api/placeholder/300/300", "/api/placeholder/300/300"],
      badge: "Best Seller",
      description: "Elegant rose gold plated necklace with intricate floral design"
    },
    {
      id: 2,
      name: "Vintage Pearl Earrings",
      category: "earrings",
      price: 1899,
      originalPrice: 2299,
      rating: 4.9,
      reviews: 89,
      image: "/api/placeholder/300/300",
      images: ["/api/placeholder/300/300"],
      badge: "New Arrival",
      description: "Timeless pearl earrings with vintage-inspired gold accents"
    },
    {
      id: 3,
      name: "Royal Emerald Ring",
      category: "rings",
      price: 3299,
      originalPrice: 3999,
      rating: 4.7,
      reviews: 203,
      image: "/api/placeholder/300/300",
      images: ["/api/placeholder/300/300"],
      badge: "Limited Edition",
      description: "Luxurious emerald-inspired ring with gold-plated band"
    },
    {
      id: 4,
      name: "Diamond Charm Bracelet",
      category: "bracelets",
      price: 2199,
      originalPrice: 2699,
      rating: 4.6,
      reviews: 156,
      image: "/api/placeholder/300/300",
      images: ["/api/placeholder/300/300"],
      badge: "",
      description: "Delicate bracelet adorned with sparkling crystal charms"
    },
    {
      id: 5,
      name: "Celestial Moon Pendant",
      category: "necklaces",
      price: 1699,
      originalPrice: 2099,
      rating: 4.8,
      reviews: 91,
      image: "/api/placeholder/300/300",
      images: ["/api/placeholder/300/300"],
      badge: "Trending",
      description: "Mystical moon-shaped pendant with celestial details"
    },
    {
      id: 6,
      name: "Infinity Love Ring",
      category: "rings",
      price: 1399,
      originalPrice: 1799,
      rating: 4.9,
      reviews: 234,
      image: "/api/placeholder/300/300",
      images: ["/api/placeholder/300/300"],
      badge: "Best Seller",
      description: "Symbol of eternal love with infinity design"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'necklaces', name: 'Necklaces', count: products.filter(p => p.category === 'necklaces').length },
    { id: 'earrings', name: 'Earrings', count: products.filter(p => p.category === 'earrings').length },
    { id: 'rings', name: 'Rings', count: products.filter(p => p.category === 'rings').length },
    { id: 'bracelets', name: 'Bracelets', count: products.filter(p => p.category === 'bracelets').length },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'under-1500', name: 'Under ₹1,500', min: 0, max: 1500 },
    { id: '1500-2500', name: '₹1,500 - ₹2,500', min: 1500, max: 2500 },
    { id: '2500-3500', name: '₹2,500 - ₹3,500', min: 2500, max: 3500 },
    { id: 'above-3500', name: 'Above ₹3,500', min: 3500, max: Infinity },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Customer Rating' },
    { id: 'newest', name: 'Newest First' },
  ];

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const selectedRange = priceRanges.find(range => range.id === selectedPriceRange);
    const matchesPrice = product.price >= selectedRange.min && product.price <= selectedRange.max;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = selectedRating === 'all' || product.rating >= parseFloat(selectedRating);
    
    return matchesCategory && matchesPrice && matchesSearch && matchesRating;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'newest': return b.id - a.id;
      default: return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const ProductCard = ({ product, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative bg-[#F8F1E9] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
        viewMode === 'list' ? 'flex' : ''
      }`}
    >
      {/* Product Image */}
      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-[#6B9E7A] text-[#F8F1E9] text-xs font-semibold rounded-full">
            {product.badge}
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleWishlist(product.id)}
            className={`p-2 rounded-full backdrop-blur-md transition-colors ${
              wishlist.includes(product.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-[#2E3247] hover:bg-[#6B9E7A] hover:text-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-white/80 backdrop-blur-md rounded-full text-[#2E3247] hover:bg-[#6B9E7A] hover:text-white transition-colors"
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Discount Badge */}
        {product.originalPrice > product.price && (
          <div className="absolute bottom-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[#6B9E7A] font-medium">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <h3 className="text-[#2E3247] font-semibold text-lg mb-2 line-clamp-2 group-hover:text-[#6B9E7A] transition-colors">
          {product.name}
        </h3>

        {viewMode === 'list' && (
          <p className="text-[#2E3247]/70 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#2E3247]">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => addToCart(product)}
          className="w-full bg-[#6B9E7A] hover:bg-[#5A8B69] text-[#F8F1E9] font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F1E9] to-[#E8E0D5]">
      {/* Hero Section */}
      <EnhancedHero />
     

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B9E7A] w-5 h-5" />
              <input
                type="text"
                placeholder="Search for jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-[#6B9E7A]/20 rounded-xl focus:ring-2 focus:ring-[#6B9E7A] focus:border-transparent transition-all"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-[#6B9E7A]/20 rounded-xl focus:ring-2 focus:ring-[#6B9E7A] bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 border border-[#6B9E7A]/20 rounded-xl focus:ring-2 focus:ring-[#6B9E7A] bg-white"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 bg-[#6B9E7A] text-white rounded-xl hover:bg-[#5A8B69] transition-colors flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-[#6B9E7A]/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#2E3247] mb-2">
                      Minimum Rating
                    </label>
                    <select
                      value={selectedRating}
                      onChange={(e) => setSelectedRating(e.target.value)}
                      className="w-full px-4 py-2 border border-[#6B9E7A]/20 rounded-lg"
                    >
                      <option value="all">All Ratings</option>
                      <option value="4.5">4.5+ Stars</option>
                      <option value="4.0">4.0+ Stars</option>
                      <option value="3.5">3.5+ Stars</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#2E3247] mb-2">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-2 border border-[#6B9E7A]/20 rounded-lg"
                    >
                      {sortOptions.map(option => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#2E3247] mb-2">
                      View Mode
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                          viewMode === 'grid' 
                            ? 'bg-[#6B9E7A] text-white' 
                            : 'bg-gray-100 text-[#2E3247]'
                        }`}
                      >
                        <Grid className="w-4 h-4 mx-auto" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                          viewMode === 'list' 
                            ? 'bg-[#6B9E7A] text-white' 
                            : 'bg-gray-100 text-[#2E3247]'
                        }`}
                      >
                        <List className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-[#2E3247] text-lg">
            Showing <span className="font-semibold">{paginatedProducts.length}</span> of{' '}
            <span className="font-semibold">{filteredProducts.length}</span> products
          </p>
          
          <div className="flex items-center gap-2 text-sm text-[#6B9E7A]">
            <ArrowUpDown className="w-4 h-4" />
            {sortOptions.find(option => option.id === sortBy)?.name}
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 mb-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {paginatedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 bg-[#6B9E7A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-16 h-16 text-[#6B9E7A]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#2E3247] mb-2">No products found</h3>
            <p className="text-[#2E3247]/70 mb-6">Try adjusting your search criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
                setSelectedRating('all');
              }}
              className="px-6 py-3 bg-[#6B9E7A] text-white rounded-xl hover:bg-[#5A8B69] transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-[#6B9E7A]/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#6B9E7A] hover:text-white transition-colors"
            >
              Previous
            </button>
            
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-lg transition-colors ${
                    currentPage === pageNum
                      ? 'bg-[#6B9E7A] text-white'
                      : 'border border-[#6B9E7A]/20 hover:bg-[#6B9E7A] hover:text-white'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-[#6B9E7A]/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#6B9E7A] hover:text-white transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Cart Floating Button */}
      {cart.length > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button className="relative bg-[#6B9E7A] hover:bg-[#5A8B69] text-white p-4 rounded-full shadow-2xl transition-colors">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-[#D4A574] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default AurmiraShop;
