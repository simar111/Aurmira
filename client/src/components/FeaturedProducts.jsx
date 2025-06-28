import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Silk Blend Tailored Blazer",
      category: "Women's Apparel",
      price: "$349",
      image: "/images/Women.webp",
      colors: ["#C4A28F", "#2E3247", "#6B9E7A"]
    },
    {
      id: 2,
      title: "Cashmere Wool Overcoat",
      category: "Men's Outerwear",
      price: "$599",
      image: "/images/Silk.jpg",
      colors: ["#2E3247", "#D8A7B1", "#F8F1E9"]
    },
    {
      id: 3,
      title: "Organic Linen Shirt Dress",
      category: "Women's Dresses",
      price: "$279",
      image: "/images/products/dress.jpg",
      colors: ["#6B9E7A", "#F8F1E9", "#A8D4AE"]
    },
    {
      id: 4,
      title: "Italian Leather Belt",
      category: "Accessories",
      price: "$189",
      image: "/images/products/belt.jpg",
      colors: ["#2E3247", "#C4A28F", "#6B9E7A"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F1E9]/10">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center mb-4"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#2E3247] uppercase">
              CURATED SELECTION
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3247] mb-4 font-playfair"
          >
            Our Signature Pieces
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`w-16 h-px bg-gradient-to-r from-transparent via-[#2E3247]/80 to-transparent mx-auto mb-6`}
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-[#2E3247]/90 max-w-2xl mx-auto font-medium font-inter"
          >
            Discover our collection of meticulously crafted essentials that redefine modern elegance
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-[#F8F1E9]/20 relative">
                {/* Product image */}
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}>
                </div>
                
                {/* Color swatches */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {item.colors.map((color, i) => (
                    <div 
                      key={i}
                      className="w-4 h-4 rounded-full border border-[#F8F1E9]/50"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-[#2E3247]/0 group-hover:bg-[#2E3247]/10 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-[#F8F1E9] text-sm font-medium bg-[#2E3247]/90 hover:bg-[#2E3247] px-4 py-2 rounded-full">
                    Quick View
                  </button>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-medium text-[#2E3247] group-hover:text-[#6B9E7A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2E3247]/70">{item.category}</p>
                <p className="text-[#2E3247] font-medium mt-1">{item.price}</p>
              </div>
              
              {/* Floating favorite button */}
              <button className="absolute top-4 right-4 p-2 bg-[#F8F1E9]/80 hover:bg-[#F8F1E9] rounded-full transition-all opacity-0 group-hover:opacity-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z" 
                    fill="none" 
                    stroke="#2E3247" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 8px 32px -4px rgba(46, 50, 71, 0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-[#2E3247] hover:bg-[#2E3247]/90 text-[#F8F1E9] font-medium rounded-full transition-all inline-flex items-center group"
          >
            <span>View Full Collection</span>
            <motion.span
              animate={{
                x: [0, 4, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="ml-2"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;