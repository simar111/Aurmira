import { motion } from 'framer-motion';
import { ArrowRight, Heart, Eye, ShoppingBag } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Silk Charmeuse Evening Gown",
      category: "Women's Couture",
      price: "$899",
      originalPrice: "$1299",
      image: "/images/Gown.webp",
      colors: ["#A8C3B2", "#2E3247", "#D8C4B6"],
      badge: "BESTSELLER"
    },
    {
      id: 2,
      title: "24K Gold Plated Pendant",
      category: "Fine Jewelry",
      price: "$459",
      image: "/images/Gold.webp",
      colors: ["#D4AF37", "#E8EDE9", "#2E3247"],
      badge: "NEW ARRIVAL"
    },
    {
      id: 3,
      title: "Handcrafted Pearl Jhumnka",
      category: "Bridal Jewelry",
      price: "$329",
      originalPrice: "$399",
      image: "/images/jhumka.webp",
      colors: ["#E8EDE9", "#D8C4B6", "#A8C3B2"],
      badge: "LIMITED EDITION"
    },
    {
      id: 4,
      title: "Cashmere Wool Tailored Suit",
      category: "Men's Formalwear",
      price: "$1299",
      image: "/images/suit.jpg",
      colors: ["#2E3247", "#A8C3B2", "#D8C4B6"],
      badge: "SIGNATURE"
    },
    {
      id: 5,
      title: "Emerald Cut Diamond Necklace",
      category: "Luxury Jewelry",
      price: "$3599",
      image: "/images/Diamond.jpg",
      colors: ["#A8C3B2", "#2E3247", "#D4AF37"],
      badge: "EXCLUSIVE"
    },
    {
      id: 6,
      title: "Mist Green Velvet Blazer",
      category: "Women's Tailoring",
      price: "$649",
      image: "/images/Velvet.webp",
      colors: ["#A8C3B2", "#2E3247", "#E8EDE9"],
      badge: "SEASONAL"
    },
    {
      id: 7,
      title: "Platinum Diamond Band",
      category: "Fine Jewelry",
      price: "$2899",
      image: "/images/Band.webp",
      colors: ["#E8EDE9", "#2E3247", "#A8C3B2"],
      badge: "ICONIC"
    },
    {
      id: 8,
      title: "Cashmere Mist Green Wrap",
      category: "Women's Outerwear",
      price: "$799",
      image: "/images/Wrap.webp",
      colors: ["#A8C3B2", "#D8C4B6", "#2E3247"],
      badge: "ARTISANAL"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F9F7]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center mb-4"
          >
            <span className="text-xs md:text-sm font-medium tracking-[0.3em] text-[#6B8E7A] uppercase">
              AURMIRA CURATED
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2E3247] mb-6 font-playfair tracking-tight"
          >
            Mist Green Elegance
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-[#A8C3B2] to-transparent mx-auto mb-8`}
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-[#5D5F6B] max-w-3xl mx-auto font-light font-sans"
          >
            Where contemporary luxury meets the serenity of mist green
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-[#E8EDE9] relative">
                {/* Product image */}
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${item.image})` }}>
                </div>
                
                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium tracking-wide text-[#F5F9F7] bg-[#6B8E7A]">
                      {item.badge}
                    </span>
                  </div>
                )}
                
                {/* Color swatches */}
                <div className="absolute bottom-20 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.colors.map((color, i) => (
                    <div 
                      key={i}
                      className="w-4 h-4 rounded-full border border-[#F5F9F7]/50 hover:scale-125 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                {/* Quick actions overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E3247]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-[#F5F9F7] text-[#2E3247] hover:bg-[#E0E8E3] px-4 py-3 rounded-sm text-sm font-medium">
                      <ShoppingBag className="h-4 w-4" />
                      Add to Bag
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-[#F5F9F7]/80 text-[#F5F9F7] hover:bg-[#F5F9F7]/10 px-4 py-3 rounded-sm text-sm font-medium">
                      <Eye className="h-4 w-4" />
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-5">
                <h3 className="text-lg font-normal text-[#2E3247] group-hover:text-[#6B8E7A] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B8E7A] font-light mt-1">{item.category}</p>
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-[#2E3247] font-medium">{item.price}</p>
                  {item.originalPrice && (
                    <p className="text-sm text-[#6B8E7A]/70 line-through">{item.originalPrice}</p>
                  )}
                </div>
              </div>
              
              {/* Floating favorite button */}
              <button className="absolute top-4 right-4 p-2 bg-[#F5F9F7]/90 hover:bg-[#F5F9F7] rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-sm">
                <Heart className="h-4 w-4 text-[#6B8E7A]" />
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.03,
              backgroundColor: "#6B8E7A",
              boxShadow: '0 10px 40px -6px rgba(107, 142, 122, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-[#2E3247] hover:bg-[#2E3247]/90 text-[#F5F9F7] font-normal rounded-sm transition-all inline-flex items-center group tracking-wider"
          >
            <span>DISCOVER MORE</span>
            <motion.span
              animate={{
                x: [0, 4, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="ml-3"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;