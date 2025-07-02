import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Fashion Enthusiast",
      text: "Aurmira’s designs are breathtaking! The quality and elegance are unmatched.",
      rating: 5,
      image: "/images/testimonial1.jpg", // Placeholder for a high-quality image
    },
    {
      name: "Rahul Mehta",
      role: "Luxury Buyer",
      text: "Exceptional support and exclusive styles—truly a premium experience.",
      rating: 4.5,
      image: "/images/testimonial2.jpg", // Placeholder for a high-quality image
    },
    {
      name: "Anjali Kapoor",
      role: "Jewelry Collector",
      text: "Sustainable fashion with stunning pieces—I’m in love with Aurmira!",
      rating: 5,
      image: "/images/testimonial3.jpg", // Placeholder for a high-quality image
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-mint/30 via-pale-mint/50 to-transparent overflow-hidden">
      {/* Subtle luxury background with flowing gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-25"
            style={{
              width: Math.random() * 20 + 15,
              height: Math.random() * 20 + 15,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 2 ? '#D8A7B1/40' : '#C4A28F/40'} 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 1.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center font-playfair mb-12 md:mb-16 text-charcoal drop-shadow-[0_0_12px_rgba(74,78,105,0.3)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          What Our <span className="text-rose-gold">Clients Say</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative w-full md:w-1/3 bg-ivory/95 rounded-2xl p-6 md:p-8 shadow-md border-l-4 border-mint hover:border-rose-gold transition-all duration-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, rotateZ: 1, boxShadow: '0 15px 50px rgba(196,162,143,0.2)' }}
              onClick={() => setActiveIndex(index)}
              style={{ cursor: 'pointer' }}
              animate={activeIndex === index ? { zIndex: 10, scale: 1.1 } : { zIndex: 1 }}
            >
              <div className="flex items-center mb-4">
                <motion.img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-rose-gold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                />
                <div className="ml-4">
                  <h3 className="text-lg md:text-xl font-semibold text-charcoal drop-shadow-[0_0_5px_rgba(74,78,105,0.2)]">{testimonial.name}</h3>
                  <p className="text-sm text-ivory/80">{testimonial.role}</p>
                </div>
              </div>
              <motion.div
                className="relative text-sm md:text-base text-charcoal/90 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Quote className="absolute -top-6 -left-4 text-rose-gold/50 w-8 h-8" />
                <p>{testimonial.text}</p>
              </motion.div>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(testimonial.rating) ? '#C4A28F' : 'none'}
                    stroke={i < Math.ceil(testimonial.rating) && testimonial.rating % 1 !== 0 && i >= Math.floor(testimonial.rating) ? '#C4A28F' : '#F8F1E9'}
                    strokeWidth={1.5}
                    className="mr-1"
                  />
                ))}
              </div>
              {activeIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-mint/20 via-dusty-pink/10 to-pale-mint/20 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;