import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle2, Leaf, Sparkles, HeartHandshake, Gem,ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const reasons = [
    {
      title: "Artisanal Craftsmanship",
      description: "Each piece handcrafted by master artisans with centuries-old techniques",
      icon: <Sparkles className="text-[#6B8E7A]" size={24} strokeWidth={1.5} />,
    },
    {
      title: "Sustainable Luxury",
      description: "Ethically sourced materials with eco-conscious production",
      icon: <Leaf className="text-[#6B8E7A]" size={24} strokeWidth={1.5} />,
    },
    {
      title: "Exclusive Collections",
      description: "Limited edition designs you won't find elsewhere",
      icon: <Gem className="text-[#6B8E7A]" size={24} strokeWidth={1.5} />,
    },
    {
      title: "Personalized Service",
      description: "Dedicated style consultants for your unique needs",
      icon: <HeartHandshake className="text-[#6B8E7A]" size={24} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#F5F9F7] overflow-hidden">
      {/* Floating mist elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 2 ? '#A8C3B2' : '#D8C4B6'} 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg border border-[#E8EDE9]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs md:text-sm font-medium tracking-[0.3em] text-[#6B8E7A] uppercase">
              THE AURMIRA DIFFERENCE
            </span>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2E3247] mt-4 mb-6 font-playfair tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Crafting <span className="text-[#6B8E7A]">Timeless</span> Elegance
            </motion.h2>
            
            <motion.div
              className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-[#A8C3B2] to-transparent mx-auto`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8EDE9]"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 15px 40px -10px rgba(168, 195, 178, 0.3)'
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <motion.div
                      className="p-3 rounded-full bg-[#F5F9F7] mr-4"
                      animate={hoveredCard === index ? { 
                        rotate: 360,
                        backgroundColor: '#E8EDE9'
                      } : { 
                        rotate: 0,
                        backgroundColor: '#F5F9F7'
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {reason.icon}
                    </motion.div>
                    <h3 className="text-xl font-medium text-[#2E3247] pt-1">{reason.title}</h3>
                  </div>
                  <p className="text-sm text-[#5D5F6B] mt-2 pl-16">{reason.description}</p>
                </div>

                {hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0 -z-10 bg-[#A8C3B2]/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "#6B8E7A",
                boxShadow: '0 10px 40px -6px rgba(107, 142, 122, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-[#2E3247] text-[#F5F9F7] font-medium rounded-full transition-all inline-flex items-center group"
            >
              <span>Experience Aurmira</span>
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
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;